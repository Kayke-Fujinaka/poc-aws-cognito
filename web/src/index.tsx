import { Amplify } from "aws-amplify";
import ReactDOM from "react-dom/client";

import App from "./App";
import awsExports from "./config/amazon";
import AppContextProvider from "./contexts";
import "./styles/index.css";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
