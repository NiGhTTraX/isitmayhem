import React from "react";
import Image from "next/image";

type Props = {
  heroSrc: `/${string}`;
  title: string;
};

export const Card = ({ heroSrc, title }: Props) => (
  <div className="card">
    <div className="hero">
      <div className="img">
        <Image src={heroSrc} layout="fill" alt="Total Mayhem" />
      </div>
    </div>
    <div className="title">
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .img {
        height: 300px;
        width: 300px;
        position: relative;
      }
      .card {
        display: inline-block;
        border-radius: 8px;
        border: 4px solid #fff;
        overflow: hidden;
      }
      .hero {
        padding: 30px 100px;
        background: transparent;
      }
      .title {
        text-align: center;
        background-color: #fff;
        background-clip: border-box;
        height: 100px;
        padding: 10px;
      }

      @media (max-width: 600px) {
        .img {
          height: 150px;
          width: 150px;
        }
        .hero {
          padding: 30px 50px;
        }
      }
    `}</style>
  </div>
);
