import React from "react";

import { LoginForm } from "../components";

const Login = (props) => {
  const onSubmit = (login, password) => {
    console.log(login, password);
    fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        login,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
      });
  };

  return (
    <main className="container">
      <LoginForm onSubmit={onSubmit} />
    </main>
  );
};

export default Login;
