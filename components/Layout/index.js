import React from "react";
import HeaderNavBar from "../HeaderNavBar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderNavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
