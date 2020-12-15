import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { Mayhem, TodayProps } from "../components/Mayhem";
import { getTodaysModes, isItMayhem } from "../services/modes";

export const getStaticProps: GetStaticProps<TodayProps> = async () => {
  const todayModes = await getTodaysModes();

  const mayhem = isItMayhem(todayModes);

  return {
    props: {
      mayhem,
    },
    revalidate: 100,
  };
};

const IndexPage = ({ mayhem }: TodayProps) => {
  return (
    <>
      <Head>
        <title>Is it Total Mayhem today?</title>
      </Head>
      <Mayhem mayhem={mayhem} />
    </>
  );
};

export default IndexPage;
