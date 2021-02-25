import React from "react";
import Head from "next/head";
import { Banner, Footer, Nav, Navbar } from "../components";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Nav />
      <div className="max-w-screen-xl mx-auto mt-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
