import React, { useState, useCallback } from "react";

const LoginForm = ({ onSubmit, error }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLoginChange = useCallback((e) => {
    setLogin(e.target.value);
  }, []);

  const onPasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onLoginClick = useCallback(() => {
    onSubmit(login, password);
  }, [login, password, onSubmit]);

  return (
    <div>
      {error ? <span class="nes-text is-error">{error}</span> : null}
      <div className="nes-field">
        <label for="login">Your login</label>
        <input
          type="text"
          id="login"
          className="nes-input"
          value={login}
          onChange={onLoginChange}
        />
      </div>
      <div className="nes-field">
        <label for="password">Your password</label>
        <input
          type="password"
          id="password"
          className="nes-input"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={onLoginClick}
      >
        Sign in
      </button>
    </div>
  );
};

export default LoginForm;
