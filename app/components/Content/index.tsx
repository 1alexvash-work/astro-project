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
  return (
    <div className="flex justify-between">
      <div className="flex flex-col items-center">
        <h3>
          Let’s check what awaits you in career and finances in the near future
        </h3>
        <Image src={Cards} alt={"cards"} width="438" height="321" />
        <p>Take a deep breath</p>
      </div>
      <div>
        <h2>Choose the question from below</h2>

        <div className="flex flex-col gap-2.5">
          {defaultPrompts.map((prompt) => (
            <div
              key={prompt}
              className="flex justify-between cursor-pointer"
              style={{
                background: colors.secondaryViolet,
                borderRadius: "16px",
              }}
              onClick={() => alert("Coming soon")}
            >
              <div>{prompt}</div>

              <Image
                src={RightArrow}
                alt={"right-arrow"}
                width="24"
                height="25"
              />
            </div>
          ))}
        </div>

        <h2>or ask the Cards</h2>
        <p>
          Submit your{" "}
          <span
            style={{
              transform: "rotate(-4deg)",
              display: "inline-block",
              background: colors.yellow,
              color: colors.text.dark,
              borderRadius: "8px",
            }}
          >
            question
          </span>{" "}
          <span>for today{"'"}s guidance:</span>
        </p>
        <textarea
          placeholder="question"
          className="w-full"
          style={{ resize: "none" }}
        />
        <button style={{ background: colors.pinkButtonBackground }}>
          Get The Answer
        </button>
      </div>
    </div>
  );
};

export default Content;
