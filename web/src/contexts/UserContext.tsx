import { AuthUser, fetchAuthSession, getCurrentUser } from "aws-amplify/auth";
import { ReactNode, createContext, useEffect, useState } from "react";

interface IUserContext {
  user: AuthUser | null;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
}

interface IUserContextProvider {
  children: ReactNode | ((args: IUserContext) => ReactNode);
}

export const UserContext = createContext({} as IUserContext);

export function UserContextProvider({ children }: IUserContextProvider) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchCurrentUser = async () => {
    setIsLoading(true);

    try {
      const session = await fetchAuthSession();
      if (!session.tokens) return;

      console.log(session)

      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error("Error fetching current user:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const contextValues = { user, isLoading, refreshUser: fetchCurrentUser };

  return (
    <UserContext.Provider value={contextValues}>
      {typeof children === "function" ? children(contextValues) : children}
    </UserContext.Provider>
  );
}
