import React from "react";
import { Mayhem } from "./Mayhem";

export default {
  title: "Mayhem",
  component: Mayhem,
};

export const Yes = () => <Mayhem mayhem />;

export const No = () => <Mayhem mayhem={false} />;

export const WithError = () => <Mayhem error={new Error("oops")} />;
