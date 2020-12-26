import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Mayhem } from "../components/Mayhem";
import { getTodaysModes, isItMayhem } from "../services/modes";

type Props = { mayhem: boolean; updatedAt: number; error?: Error };

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const { modes, updatedAt } = await getTodaysModes();

    const mayhem = isItMayhem(modes);

    return {
      props: { mayhem, updatedAt },
    };
  } catch (error) {
    return {
      props: {
        mayhem: false,
        updatedAt: -1,
        error,
      },
    };
  }
};

const IndexPage = ({ mayhem, updatedAt, error }: Props) => (
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
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
    <Mayhem mayhem={mayhem} error={error} />
    <Footer updatedAt={updatedAt} />
  </>
);

export default IndexPage;
