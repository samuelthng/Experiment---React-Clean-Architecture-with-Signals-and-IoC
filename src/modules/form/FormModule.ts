import FormField from "./FormField";
export type FormFields = { [fieldName: string]: FormField<unknown> };

/** Base class to describe a form section (or module). */
export default abstract class FormModule {
  abstract get fields(): FormFields;
  abstract get payload(): Record<string, unknown> | null;

  validate() {
    const validate = Object.values(this.fields).map((field) =>
      field.validate(),
    );
    return validate.every(Boolean);
  }
}
