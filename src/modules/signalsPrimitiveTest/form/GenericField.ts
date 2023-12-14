import { ReadonlySignal } from "@preact/signals-react";
import FormField, { FieldValidator } from "./FormField";

/** Implements a Generic FormField */
export default class GenericField<T> extends FormField<T> {
  constructor(
    defaultValue: T,
    required: boolean,
    validator?: FieldValidator<T, FormField<T>>,
    disabled?: ReadonlySignal<boolean>,
  ) {
    super(defaultValue, required, validator, disabled);
  }
}
