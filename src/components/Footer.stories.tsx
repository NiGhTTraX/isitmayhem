import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Footer",
  component: Footer,
};

export const WithPositiveBg = () => (
  <>
    <Footer updatedAt={1608940817000} />
    <style jsx global>
      {`
        body {
          background-color: #ee9a29;
        }
      `}
    </style>
  </>
);

export const WithNegativeBg = () => (
  <>
    <Footer updatedAt={1608940817000} />
    <style jsx global>
      {`
        body {
          background-color: #969696;
        }
      `}
    </style>
  </>
);
