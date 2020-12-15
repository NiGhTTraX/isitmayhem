import React from "react";

export type TodayProps = { mayhem: boolean };

export const Mayhem = ({ mayhem }: TodayProps) => {
  return <span>{mayhem ? "yes" : "no"}</span>;
};
