import React from "react";
import classes from "./LoginPage.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignupForm from "../../components/SignupForm/SignupForm";

function LoginPage() {
  return (
    <main className={classes["page-background"]}>
      <div className={classes["login-page"]}>
        <h1 className={classes["main-header"]}>MyBooks</h1>
        <div>
          {/* <LoginForm /> */}
          <SignupForm />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
