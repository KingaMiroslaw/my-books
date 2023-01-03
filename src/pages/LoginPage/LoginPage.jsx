import React from "react";
import { GiSpellBook } from "react-icons/gi";
import classes from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <main className={classes["login-page"]}>
      <h1 className={classes["main-header"]}>MyBooks</h1>
      <div className={classes.container}>
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
