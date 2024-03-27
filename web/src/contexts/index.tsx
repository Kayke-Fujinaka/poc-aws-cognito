import { ReactNode } from "react";

import { UserContextProvider } from "./UserContext";

interface IAppContextProvider {
  children: ReactNode;
}

export default function AppContextProvider({ children }: IAppContextProvider) {
  return (
    <>
      <UserContextProvider>{children}</UserContextProvider>
    </>
  );
}
