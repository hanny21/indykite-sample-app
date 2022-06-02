import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IKUIInit } from "@indykiteone/jarvis-sdk-web";
// locals
import "./index.css";
import App from "./App";

IKUIInit({
  baseUri: process.env.REACT_APP_BASE_URI,
  applicationId: process.env.REACT_APP_APPLICATION_ID,
  tenantId: process.env.REACT_APP_TENANT_ID,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
