import FormModule from "../form/FormModule";
import GenericField from "../form/GenericField";

/** Implements "Scheduling: Scheduled" Form Module */
export default class ScheduledModule extends FormModule {
  public fields = {
    startTime: new GenericField<string>("", true),
    endTime: new GenericField<string>("", true),
  };

  get payload() {
    if (!this.validate()) return null;
    return {
      startTime: this.fields.startTime.value,
      endTime: this.fields.endTime.value,
    };
  }
}
