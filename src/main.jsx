import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
<<<<<<< HEAD
import { App } from "./App.jsx";
import "./index.css";
=======
import "./index.css";
import { App } from "./App";

>>>>>>> 477cc00374c42753ca40afa5f879c786cfeabfde
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
