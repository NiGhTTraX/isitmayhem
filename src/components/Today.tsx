import React from "react";
import { Footer } from "./Footer";
import { Mayhem } from "./Mayhem";

export type TodayProps = {
  mayhem?: boolean;
  updatedAt?: number;
  error?: Error;
};

export const Today = ({ mayhem, updatedAt, error }: TodayProps) => (
  <>
    <Mayhem mayhem={mayhem} error={error} />
    <Footer updatedAt={updatedAt} />
  </>
);
