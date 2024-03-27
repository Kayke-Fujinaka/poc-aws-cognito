import { signOut } from "aws-amplify/auth";
import { useContext } from "react";

import { UserContext } from "../contexts/UserContext";

function Home() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div>
        <h1>Tela de Início</h1>
        <p>{user?.username}</p>
        <button onClick={() => signOut()}>Deslogar</button>
      </div>
    </>
  );
}

export default Home;
