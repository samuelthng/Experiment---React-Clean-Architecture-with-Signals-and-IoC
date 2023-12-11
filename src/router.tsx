import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import NavLayout from "./layouts/NavLayout";
import TsyringeWithSignals from "./pages/TsyringeWithSignals";
import SignalsPlayground from "./pages/SignalsPlayground";
import SignalForm from "./pages/SignalForm";
import MobxPage from "./pages/MobxPage";
import ErrorBoundary from "./components/ErrorBoundary";

const routes = (
  <Route path="/" element={<NavLayout />} errorElement={<ErrorBoundary />}>
    <Route index element={<TsyringeWithSignals />} />
    <Route path="signalsWithDI" element={<TsyringeWithSignals />} />
    <Route path="signalsPlayground" element={<SignalsPlayground />} />
    <Route path="signalForm" element={<SignalForm />} />
    <Route path="mobx" element={<MobxPage />} />
  </Route>
);

export default createBrowserRouter(createRoutesFromElements(routes));
