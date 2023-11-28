import GenericField from "../form/GenericField";
import ModuleSwitcher from "../form/ModuleSwitcher";
import StandardModule from "./StandardModule";
import ScheduledModule from "./ScheduledModule";
import form from "../form";
import LocationModule from "../location/LocationModule";
import { computed } from "@preact/signals-react";

const modules = {
  STANDARD: new StandardModule(),
  SCHEDULED: new ScheduledModule(),
};

const scheduleTypeValidator = (value: any) => {
  if (!Object.keys(modules).includes(value))
    throw new Error(
      `Unknown type. Available types: ${Object.keys(modules).join(" | ")}`,
    );
  return true;
};

const scheduleTypeField = new GenericField(
  "SCHEDULED",
  true,
  scheduleTypeValidator,
  computed(() => {
    // We can easily consume data from other modules, no more context mumbo jumbo.
    if (!form.modules.value["location"]) return true;
    const locationModule = form.modules.value["location"] as LocationModule;
    return !locationModule.location.value;
  }),
);

/** Form Module Switcher for Scheduling Section */
const SchedulingModule = new ModuleSwitcher(
  "scheduleType",
  scheduleTypeField,
  modules,
);

export default SchedulingModule;
