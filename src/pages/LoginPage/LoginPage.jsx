import React from "react";
import classes from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <main className={classes["page-background"]}>
      <div className={classes["login-page"]}>
        <h1 className={classes["main-header"]}>MyBooks</h1>
        <div>
          <LoginForm />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
