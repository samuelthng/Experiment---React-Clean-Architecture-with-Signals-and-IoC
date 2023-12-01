import { Signal, computed } from "@preact/signals-react";
import FormField from "./FormField";
import FormModule, { FormFields } from "./FormModule";

type ModuleMap = Record<string, FormModule>;

/** Class to dynamically switch between form modules based on a field value. */
export default class ModuleSwitcher<
  S extends string,
  T extends ModuleMap,
> extends FormModule {
  public selectorName: string;
  public selector: FormFields;
  public modules: T;
  private _selectorValue: Signal<S>;
  private _fields: Signal<FormFields>;

  constructor(selectorName: string, selectorField: FormField<S>, modules: T) {
    super();
    this.selectorName = selectorName;
    this.selector = { [selectorName]: selectorField };
    this.modules = modules;
    this._selectorValue = computed(() => selectorField.value);
    this._fields = computed<FormFields>(() => {
      if (!this.modules[this._selectorValue.value]) return this.selector;
      return {
        ...this.selector,
        ...this.modules[this._selectorValue.value].fields,
      };
    });
  }

  public get fields() {
    return this._fields.value;
  }

  public set selectorValue(value: keyof T | null) {
    if (!value) return;
    if (this.modules[value] === undefined)
      throw new Error(
        `Invalid selector value of ${String(
          value,
        )}. Expected one of ${Object.keys(this.modules).join(" | ")}`,
      );
    this.selector[this.selectorName].value = value;
  }

  public get selectorValue() {
    if (this.modules[this._selectorValue.value] === undefined) return null;
    return this._selectorValue.value;
  }

  public get activeModule() {
    if (!this.selectorValue) return null;
    if (this.modules[this._selectorValue.value] === undefined) return null;
    return this.modules[this._selectorValue.value];
  }

  get payload() {
    if (!this.activeModule?.payload) return null;
    return {
      [this.selectorName]: this.selectorValue,
      ...this.activeModule.payload,
    };
  }
}
