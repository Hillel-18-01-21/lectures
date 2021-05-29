import React, { useCallback, useState } from "react";

import { LoginForm } from "../components";
import { signIn } from "../core/api";

const Login = ({ history }) => {
  const [error, setError] = useState("");
  const onSubmit = useCallback((login, password) => {
    setError("");
    signIn(login, password)
      .then((e) => {
        const { token } = e;
        localStorage.setItem("auth-token", token);
        history.push("/");
      })
      .catch(() => {
        setError("Incorrect credentials");
      });
  }, []);

  return (
    <main className="container">
      <LoginForm onSubmit={onSubmit} error={error} />
    </main>
  );
};

export default Login;
