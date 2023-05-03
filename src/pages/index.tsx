import { type NextPage } from "next";
import Head from "next/head";

import FakeContent from "@/components/FakeContent";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lineball</title>
        <meta
          name="description"
          content="Host a fundraiser for your club or organisation in a few easy steps"
        />
      </Head>
      <FakeContent text="Home Page" />
    </>
  );
};

export default Home;
