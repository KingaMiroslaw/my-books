import React from "react";
import Header from "../../components/Header/Header/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
