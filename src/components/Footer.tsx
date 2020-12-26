import React from "react";

export const Footer = () => (
  <>
    <footer className="footer">
      <p>
        Game content and materials are trademarks and copyrights of their
        respective publisher and its licensors. all rights reserved.
      </p>
      <p>
        Overwatch arcade mode tracking is provided by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://overwatcharcade.today"
        >
          OverwatchArcadeToday
        </a>
        .
      </p>
    </footer>
    <style jsx>{`
      .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        text-align: center;
      }
      p {
        margin: 0;
        font-size: 14px;
      }
      a {
        font-weight: bold;
        text-decoration: none;
      }
    `}</style>
  </>
);
