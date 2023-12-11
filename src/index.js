import "reflect-metadata";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";

// This validates transpiler configuration for MobX
// eslint-disable-next-line no-prototype-builtins
if (!new class { x }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
