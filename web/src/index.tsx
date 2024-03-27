import { Amplify } from "aws-amplify";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import awsExports from "./services/amazon";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
