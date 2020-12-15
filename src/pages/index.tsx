import Head from "next/head";
import React from "react";
import { GetStaticProps } from "next";
import { Mayhem, TodayProps } from "../components/Mayhem";

export type Mode = {
  id: number;
  name: string;
};

export type TodayModes = {
  modes: Record<string, Mode>;
};

export const getStaticProps: GetStaticProps<TodayProps> = async () => {
  const todayModes = await fetch(
    "https://overwatcharcade.today/api/overwatch/today"
  ).then((r) => (r.json() as unknown) as TodayModes);

  const mayhem = !!Object.values(todayModes.modes).find((mode) =>
    mode.name.toLowerCase().includes("mayhem")
  );

  return {
    props: {
      mayhem,
    },
    revalidate: 100,
  };
};

const IndexPage = ({ mayhem }: TodayProps) => {
  return (
    <Head>
      <title>Is it Total Mayhem today?</title>
      <Mayhem mayhem={mayhem} />
    </Head>
  );
};

export default IndexPage;
