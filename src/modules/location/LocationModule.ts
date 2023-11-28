import FormModule from "../form/FormModule";
import GenericField from "../form/GenericField";

/** Location Module */
export default class LocationModule extends FormModule {
  // Validation can be done right here, not in React.
  location = new GenericField<string>("", true, (location) => {
    if (location.length > 4)
      throw new Error(`This location code doesn't look right.`);
    return true;
  });
  cage = new GenericField<string>("", false);
  cabinet = new GenericField<string>("", false);

  // Fields can be exposed for consumption by other modules.
  public fields = {
    location: this.location,
    cage: this.cage,
    cabinet: this.cabinet,
  };

  // Data transformation can also be done on a module specific basis.
  get payload() {
    if (!this.validate()) return null;
    return {
      location: this.fields.location.value,
      ...(this.fields.cage.value && { cage: this.fields.cage.value }),
      ...(this.fields.cabinet.value && { cabinet: this.fields.cabinet.value }),
    };
  }
}
