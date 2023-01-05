import React from "react";
import { useState } from "react";
import classes from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

function LoginPage() {
  const [shownForm, setShownForm] = useState(true);

  const toggleForm = () => {
    setShownForm(!shownForm);
  };

  return (
    <main className={classes["page-background"]}>
      <div className={classes["login-page"]}>
        <h1 className={classes["main-header"]}>MyBooks</h1>
        <div>
          {shownForm ? (
            <LoginForm onShow={toggleForm} />
          ) : (
            <SignupForm onShow={toggleForm} />
          )}
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
