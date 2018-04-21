import Navbar from "../components/Navbar";
import Head from "next/head";
import "../scss/style.scss";

const Index = () => (
  <section>
    <Head>
      <title>Hello World</title>
    </Head>
    <Navbar />
    <h1>Hello World from Next JS</h1>
  </section>
);

export default Index;
