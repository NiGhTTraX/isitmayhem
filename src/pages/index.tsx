import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Mayhem } from "../components/Mayhem";
import { getTodaysModes, isItMayhem } from "../services/modes";

type Props = { mayhem: boolean; updatedAt: number };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { modes, updatedAt } = await getTodaysModes();

  const mayhem = isItMayhem(modes);

  return {
    props: { mayhem, updatedAt },
  };
};

const IndexPage = ({ mayhem, updatedAt }: Props) => (
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
    <Footer updatedAt={updatedAt} />
  </>
);

export default IndexPage;
