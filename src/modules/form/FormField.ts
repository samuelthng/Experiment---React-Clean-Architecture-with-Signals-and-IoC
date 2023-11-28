import {
  batch,
  computed,
  ReadonlySignal,
  signal,
  Signal,
} from "@preact/signals-react";

export type FieldValidator<T, V extends FormField<T>> = {
  (value: T, field: V): boolean | null | undefined;
};

const requiredValidator = (value, field) => {
  if (!field.required) return true;
  return !["", null, undefined, NaN].includes(value as any);
};

/** Base class to describe a form field. */
export default abstract class FormField<T> {
  private fieldValue: Signal<T>;
  private _required: Signal<boolean>;
  private _modified: Signal<boolean> = signal(false);
  private _validator: FieldValidator<T, this> = () => true;
  private _disabled: ReadonlySignal<boolean> = computed(Boolean);

  // Realtime eval of errors. - Have to think about how to deal with async validators.
  private _error: ReadonlySignal<Error | undefined> = computed(() => {
    if (!this._modified.value) return;
    try {
      this._validator(this.fieldValue.value, this);
      return;
    } catch (error) {
      return error;
    }
  });

  constructor(
    defaultValue: T,
    required: boolean,
    validator?: FieldValidator<T, FormField<T>>,
    disabled?: ReadonlySignal<boolean>,
  ) {
    this.fieldValue = signal(defaultValue);
    this._required = signal(required);
    if (validator) this._validator = validator;
    if (disabled) this._disabled = disabled;
  }

  get required() {
    return this._required.value;
  }

  get value() {
    return this.fieldValue.value;
  }

  set value(value: T) {
    batch(() => {
      if (!this._modified.value) this._modified.value = true;
      this.fieldValue.value = value;
    });
  }

  get error() {
    return this._error.value;
  }

  get disabled() {
    return this._disabled.value;
  }

  validate() {
    try {
      return (
        this._validator(this.value, this) && requiredValidator(this.value, this)
      );
    } catch (error) {
      return false;
    }
  }
}
