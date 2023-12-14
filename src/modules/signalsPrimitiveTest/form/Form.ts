import { computed, signal } from "@preact/signals-react";
import FormModule from "./FormModule";

/** Implements a controller to manage a singleton form instance. */
export default class Form {
  // Singleton for easy access across the app.
  public static instance = new Form();

  // Module registry, each FormModule is a section on a page.
  // Maybe a map will be better, to ensure all registered modules are unique.
  public modules = signal<{ [moduleName: string]: FormModule }>({});

  // Automatically evaluate payload for each module.
  // Can be used to determine form state as well.
  public payloads = computed(() =>
    Object.values(Form.instance.modules.value).map((module) => {
      try {
        return (module as FormModule).payload;
      } catch (error) {
        return null;
      }
    }),
  );

  // Register Modules based on service type.
  registerModule(moduleName: string, module: FormModule) {
    Form.instance.modules.value = {
      ...Form.instance.modules.value,
      [moduleName]: module,
    };
  }
}
