import { ReactNode, useContext } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

interface IPublicRoute {
  children: ReactNode;
}

export const PublicRoute = ({ children }: IPublicRoute) => {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) return <div>Carregando...</div>;

  return !user ? <>{children}</> : <Navigate to="/inicio" />;
};
