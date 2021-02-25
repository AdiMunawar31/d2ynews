import React from "react";
import {
  Banner,
  BgDetail,
  Content,
  Footer,
  Nav,
  Navbar,
  SideLeft,
  SideRight,
} from "../components";
import Layout from "../components/Layout";

const Detail = () => {
  return (
    <Layout title="News Detail">
      <div className="max-w-screen-xl mx-auto">
        <main className="mt-10">
          <BgDetail />
          <Content />
        </main>
      </div>
    </Layout>
  );
};

export default Detail;
