import { Amplify } from "aws-amplify";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppContextProvider from "./contexts";
import "./index.css";
import awsExports from "./services/amazon";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
