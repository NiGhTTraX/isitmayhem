import React from "react";
import { Card } from "./Card";

export type TodayProps = { mayhem: boolean };

export const Mayhem = ({ mayhem }: TodayProps) => (
  <>
    <div className="mayhem">
      {mayhem ? (
        <Card heroSrc="/mayhem-happy.png" title="Yes" />
      ) : (
        <Card heroSrc="/mayhem-sad.png" title="No" />
      )}
    </div>
    <style jsx global>{`
      body {
        width: 100%;
        height: 100%;
        background: url(${mayhem
          ? "/mayhem-happy-bg.png"
          : "/mayhem-sad-bg.png"});
        background-repeat: no-repeat;
        background-position: 50% calc(50% - 65px);
        background-attachment: fixed;
        background-color: ${mayhem ? "#ee9a29" : "#ededed"};
      }

      @media (max-width: 600px) {
        body {
          background-position: 50% calc(50% - 60px);
          background-size: 2000px;
        }
      }
    `}</style>
    <style jsx>{`
      .mayhem {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </>
);
