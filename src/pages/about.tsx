import FakeContent from "@/components/FakeContent";
import Head from 'next/head'
import React from "react";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <FakeContent text="About Page" />
    </>
  );
};

export default About;
