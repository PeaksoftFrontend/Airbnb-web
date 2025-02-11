import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { store } from "./utils/constants/store.js";
// import { RegionProvider } from "./hooks/RegionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </StrictMode>
);
