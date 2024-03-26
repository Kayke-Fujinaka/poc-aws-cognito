function SignIn() {
  const handleLogin = () => {
    window.location.href = process.env.REACT_APP_AMAZON_COGNITO_ENDPOINT!;
  };

  return (
    <button type="button" onClick={() => handleLogin()}>
      Login
    </button>
  );
}

export default SignIn;
