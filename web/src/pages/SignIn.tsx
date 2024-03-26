function SignIn() {
  const handleSignIn = () => {
    console.log("oi");
  };

  return (
    <>
      <div>
        <h1>Tela de Login</h1>
        <button onClick={() => handleSignIn()}>Login</button>
      </div>
    </>
  );
}

export default SignIn;
