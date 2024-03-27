import { signInWithRedirect } from "aws-amplify/auth";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";
import { provider } from "../services/amazon";

function SignIn() {
  const { isLoading, refreshUser } = useContext(UserContext);

  const handleFederatedSignIn = async () => {
    try {
      await signInWithRedirect({ provider });
      await refreshUser();
    } catch (error) {
      console.error("Error during federated sign-in:", error);
    }
  };

  return (
    <>
      <h1>Tela de Login</h1>
      <button onClick={handleFederatedSignIn} disabled={isLoading}>
        {isLoading ? "Carregando..." : "Login com AzureAD"}
      </button>
    </>
  );
}

export default SignIn;
