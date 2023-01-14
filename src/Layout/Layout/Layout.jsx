import React from "react";
import Header from "../../components/Header/Header/Header";
import classes from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={classes.container}>{children}</main>
    </>
  );
}

export default Layout;
