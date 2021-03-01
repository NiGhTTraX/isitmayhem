import React from "react";
import { Card } from "./Card";

export type TodayProps = { mayhem?: boolean; error?: Error };

const MayhemCard = ({ error, mayhem }: TodayProps) => {
  if (error) {
    return (
      <Card
        status="mayhem-error"
        title="Something went wrong :("
        subtitle="Please try again later"
      />
    );
  }

  if (mayhem) {
    return <Card status="mayhem-happy" title="It's Total Mayhem!" />;
  }

  return <Card status="mayhem-sad" title="No Total Mayhem today :(" />;
};

export const Mayhem = ({ mayhem, error }: TodayProps) => (
  <>
    <div className="mayhem">
      <MayhemCard error={error} mayhem={mayhem} />
    </div>
    <style jsx global>{`
      body {
        width: 100%;
        height: 100%;
        background-color: ${mayhem ? "#ee9a29" : "#969696"};
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
    <style jsx global>{`
      body {
        background: url(${mayhem
          ? "/mayhem-happy-bg.png"
          : "/mayhem-sad-bg.png"});
        background-repeat: no-repeat;
        background-position: 50%
          // Compensate for the height of the title below the image.
          calc(50% - 100px / 2);
        background-attachment: fixed;
      }
    `}</style>
  </>
);
