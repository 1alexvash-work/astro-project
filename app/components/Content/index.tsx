"use client";

import React from "react";

import Cards from "@/images/cards.png";
import RightArrow from "@/images/right-arrow.png";

import Image from "next/image";
import colors from "@/constants/colors";

const defaultPrompts = [
  "Should I come back to my ex?",
  "Will I get a promotion?",
  "Do I know my soulmate already?",
];

const Content = () => {
  // TODO: state toggling

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-6 items-center">
        <h3
          className="text-center"
          style={{ fontSize: "20px", fontWeight: "600" }}
        >
          Let’s check what awaits you in career <br />
          and finances in the near future
        </h3>
        <Image src={Cards} alt="cards" width="438" height="321" />
        <p>Take a deep breath</p>
      </div>
      <div className="flex flex-col gap-8">
        <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
          Choose the question from below
        </h2>

        <div className="flex flex-col gap-2.5">
          {defaultPrompts.map((prompt) => (
            <div
              key={prompt}
              className="flex justify-between cursor-pointer p-3 items-center"
              style={{
                background: colors.secondaryViolet,
                borderRadius: "16px",
                fontSize: "20px",
              }}
              onClick={() => alert("Coming soon")}
            >
              <div>{prompt}</div>

              <Image
                src={RightArrow}
                alt="right-arrow"
                width="24"
                height="25"
              />
            </div>
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: "25px", fontWeight: "600" }}>
            or ask the Cards
          </h2>
          <p className="flex items-center">
            Submit your{" "}
            <span
              style={{
                transform: "rotate(-4deg)",
                display: "inline-block",
                background: colors.yellow,
                color: colors.text.dark,
                borderRadius: "8px",
                fontWeight: "600",
                padding: "9px 12px",
                margin: "0 8px",
                lineHeight: 1,
              }}
            >
              question
            </span>{" "}
            <span style={{ fontSize: "14px" }}>for today{"'"}s guidance:</span>
          </p>
        </div>

        <textarea
          placeholder="question"
          className="w-full py-5 px-5"
          style={{
            resize: "none",
            background: colors.thirdViolet,
            borderRadius: "20px",
          }}
          rows={5}
        />
        <button
          style={{
            background: colors.pinkButtonBackground,
            borderRadius: "15px",
            width: "206px",
            height: "50px",
            fontSize: "18px",
          }}
        >
          Get The Answer
        </button>
      </div>
    </div>
  );
};

export default Content;
