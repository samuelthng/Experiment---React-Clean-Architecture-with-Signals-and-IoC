import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import NavLayout from "./layouts/NavLayout";
import SignalsWithTsyringe from "./pages/SignalsWithTsyringe";
import SignalsPlayground from "./pages/SignalsPlayground";
import SignalForm from "./pages/SignalForm";
import MobxPage from "./pages/MobxPage";
import ErrorBoundary from "./components/ErrorBoundary";

const routes = (
  <Route path="/" element={<NavLayout />} errorElement={<ErrorBoundary />}>
    <Route path="signalsWithTsyringe" element={<SignalsWithTsyringe />} />
    <Route path="signalForm" element={<SignalForm />} />
    <Route path="signalsPlayground" element={<SignalsPlayground />} />
    <Route path="mobx" element={<MobxPage />} />
  </Route>
);

export default createBrowserRouter(createRoutesFromElements(routes));
