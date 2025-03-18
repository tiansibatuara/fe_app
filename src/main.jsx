import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "../routes/App.jsx";
import StateFull from "./dasar/StateFull.jsx";
import Stateless from "./dasar/Stateless.jsx";
import LifecycleComp from "./dasar/LifecycleComp.jsx";
import Map from "./dasar/Map.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
