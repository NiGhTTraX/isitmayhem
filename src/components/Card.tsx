import React from "react";

type Props = {
  heroSrc: `/${string}`;
  title: string;
};

export const Card = ({ heroSrc, title }: Props) => (
  <div className="card">
    <div className="hero">
      <img src={heroSrc} className="img" alt={title} />
    </div>
    <div className="title">
      <h1>{title}</h1>
    </div>
    <style jsx>{`
      .img {
        height: 300px;
      }
      .card {
        display: inline-block;
        border-radius: 8px;
        border: 2px solid #fff;
      }
      .hero {
        padding: 30px 100px;
        background: transparent;
      }
      .title {
        text-align: center;
        background-color: #fff;
        height: 100px;
        padding: 10px;
      }

      @media (max-width: 600px) {
        .img {
          height: 150px;
        }
        .hero {
          padding: 20px 40px;
        }
      }
    `}</style>
  </div>
);
