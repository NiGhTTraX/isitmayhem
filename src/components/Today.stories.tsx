import React from "react";
import { Today } from "./Today";

export default {
  title: "Index",
  component: Today,
};

export const Yes = () => <Today mayhem updatedAt={1608940817000} />;

export const No = () => <Today mayhem={false} updatedAt={1608940817000} />;

export const Oops = () => <Today error="oops" />;
