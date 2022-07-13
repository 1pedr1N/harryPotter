import type { NextPage } from "next";
import Harry from "./harryMainPage";
import Head from "next/head";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Harry Characters</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Harry />
    </div>
  );
};

export default Home;
