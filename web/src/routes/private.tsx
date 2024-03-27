import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

interface IPrivateRoute {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IPrivateRoute) => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) return <div>Carregando...</div>;

  return user ? <>{children}</> : <Navigate to="/login" />;
};
