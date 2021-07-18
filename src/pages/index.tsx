import { GetServerSideProps } from "next";
import Head from "next/head";
import React from "react";
import { TodayProps, Today } from "../components/Today";
import { getTodaysModes, isItMayhem } from "../services/modes";

export const getServerSideProps: GetServerSideProps<TodayProps> = async () => {
  try {
    const { modes, updatedAt } = await getTodaysModes();

    const mayhem = isItMayhem(modes);

    return {
      props: { mayhem, updatedAt },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

const IndexPage = ({ mayhem, updatedAt, error }: TodayProps) => (
  <>
    <Head>
      <title>Is it Total Mayhem now?</title>
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
    <Today mayhem={mayhem} error={error} updatedAt={updatedAt} />
  </>
);

export default IndexPage;
