import React from "react";
import Head from "Next/head";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <div className="layout">
        <Head>
          <title>M Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
      </div>
    </div>
  );
};

export default Layout;
