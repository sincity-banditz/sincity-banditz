import type { NextPage } from "next";
import Welcome from "../components/welcome/Welcome";
import Team from "../components/Team";
import Head from "next/head";
import Join from "../components/join/Join";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SinCity Banditz</title>
      </Head>
      <Welcome />
      <Team />
      <Join />
    </div>
  );
};

export default Home;
