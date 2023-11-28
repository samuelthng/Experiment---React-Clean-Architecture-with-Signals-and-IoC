import FormModule from "../form/FormModule";

/** Implements "Scheduling: Standard" Form Module */
export default class StandardModule extends FormModule {
  public fields = {};

  get payload() {
    if (!this.validate()) return null;
    return {};
  }
}
