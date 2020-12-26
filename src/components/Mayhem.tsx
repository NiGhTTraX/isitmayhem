import React from "react";
import { Card } from "./Card";
import Image from "next/image";

export type TodayProps = { mayhem: boolean };

export const Mayhem = ({ mayhem }: TodayProps) => (
  <>
    <div className="mayhem">
      <div className="bg">
        <Image
          src={mayhem ? "/mayhem-happy-bg.png" : "/mayhem-sad-bg.png"}
          layout="fill"
          quality={80}
          objectFit="cover"
        />
      </div>
      {mayhem ? (
        <Card heroSrc="/mayhem-happy.png" title="It's Total Mayhem!" />
      ) : (
        <Card heroSrc="/mayhem-sad.png" title="No Total Mayhem today :(" />
      )}
    </div>
    <style jsx global>{`
      body {
        width: 100%;
        height: 100%;
        background-color: ${mayhem ? "#ee9a29" : "#ededed"};
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

      .bg {
        position: fixed;
        overflow: hidden;
        left: 0;
        right: 0;
        // Compensate for the height of the title below the image.
        top: -100px;
        bottom: 0;
        z-index: -1;
      }
    `}</style>
  </>
);
