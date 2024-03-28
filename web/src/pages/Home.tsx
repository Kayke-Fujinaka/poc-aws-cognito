import { signOut } from "aws-amplify/auth";
import { useContext, useState } from "react";

import { UserContext } from "../contexts/UserContext";
import { BackendRoutes } from "../services/backend";

function Home() {
  const { user } = useContext(UserContext);
  const [apiResponse, setApiResponse] = useState("");

  const handleResource = async (resource: string) => {
    try {
      const fetchFunction =
        resource === "public"
          ? BackendRoutes.fetchPublicResource
          : BackendRoutes.fetchProtectedResource;

      const data = await fetchFunction();
      setApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error(error);
      setApiResponse(`Falha ao acessar o recurso ${resource}.`);
    }
  };

  return (
    <>
      <div className="app-container">
        <h1>Tela de Início</h1>
        <p>{user?.username}</p>
        <button onClick={() => signOut()}>Deslogar</button>
        <button onClick={() => handleResource("public")}>
          Testar Recurso Público
        </button>
        <button onClick={() => handleResource("protected")}>
          Testar Recurso Protegido
        </button>
        {apiResponse && (
          <div className="api-response-container">
            <h2>Resposta da API:</h2>
            <pre>
              <code>{apiResponse}</code>
            </pre>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
