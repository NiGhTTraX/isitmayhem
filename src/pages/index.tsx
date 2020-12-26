import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Mayhem, TodayProps } from "../components/Mayhem";
import { getTodaysModes, isItMayhem } from "../services/modes";

export const getServerSideProps: GetServerSideProps<TodayProps> = async () => {
  const todayModes = await getTodaysModes();

  const mayhem = isItMayhem(todayModes);

  return {
    props: { mayhem },
  };
};

const IndexPage = ({ mayhem }: TodayProps) => (
  <>
    <Head>
      <title>Is it Total Mayhem now?</title>
      <link
        rel="preload"
        href="/overwatch.woff"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/overwatch-italic.woff"
        as="font"
        crossOrigin="anonymous"
      />
      <meta
        name="description"
        content="Tracks the Total Mayhem Arcade mode in the game Overwatch"
      />
    </Head>
    <Mayhem mayhem={mayhem} />
    <Footer />
  </>
);

export default IndexPage;
