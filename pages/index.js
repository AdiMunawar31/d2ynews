import Head from "next/head";
import {
  Banner,
  Footer,
  Nav,
  Navbar,
  SideLeft,
  SideRight,
} from "../components";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="D2YNEWS">
      <main className="mt-10">
        <Banner />
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          <SideLeft />
          <SideRight />
        </div>
      </main>
    </Layout>
  );
}
