import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import Provider from "./Provider.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
