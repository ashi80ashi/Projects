import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppContextProvider } from "./context/AppContecxt";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
