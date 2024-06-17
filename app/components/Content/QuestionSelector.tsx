import React, { ChangeEvent } from "react";
import configs from "./configs";
import Image from "next/image";

import RightArrow from "@/images/right-arrow.png";

import colors from "@/constants/colors";

import { Dispatch, SetStateAction } from "react";

type Props = {
  question: string;
  setQuestion: Dispatch<SetStateAction<string>>;
  setFormStage: Dispatch<SetStateAction<number>>;
  handleQuestionChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  callGPTClient: ({ question }: { question: string }) => void;
};

const QuestionSelector = ({
  question,
  setQuestion,
  setFormStage,
  handleQuestionChange,
  callGPTClient,
}: Props) => (
  <>
    <h2
      className="mt-2 lg:mt-15 text-[20px] lg:text-[25px]"
      style={{ fontWeight: "600" }}
    >
      Choose the question from below
    </h2>

    <div className="flex flex-col gap-2.5">
      {configs.defaultPrompts.map((prompt) => (
        <div
          key={prompt}
          className="flex justify-between cursor-pointer p-3 py-2 items-center text-[14px] lg:text-[20px]"
          style={{
            background: colors.secondaryViolet,
            borderRadius: "16px",
          }}
          onClick={() => {
            setQuestion(prompt);
            setFormStage((previous) => previous + 1);
            callGPTClient({ question: prompt });
          }}
        >
          <div>{prompt}</div>

          <Image src={RightArrow} alt="right-arrow" width="24" height="25" />
        </div>
      ))}
    </div>

    <div>
      <h2
        className="mt-2 text-[20px] lg:text-[25px]"
        style={{ fontWeight: "600" }}
      >
        or ask the Cards
      </h2>
      <p className="flex items-center text-[14px] lg:text-[16px]">
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

    <div className="flex relative mt-0 lg:mt-2.5">
      <textarea
        placeholder="question"
        className="w-full p-5"
        style={{
          resize: "none",
          background: colors.thirdViolet,
          borderRadius: "20px",
        }}
        rows={5}
        value={question}
        onChange={handleQuestionChange}
      />
      <div
        className="absolute bottom-3 right-3 text-gray-400 color-#D3BDD9 opacity-[0.4]"
        style={{ lineHeight: 1 }}
      >
        {configs.textAreaMaxLength - question.length} characters left
      </div>
    </div>
    <button
      className="mt-0 lg:-mt-4"
      style={{
        background: colors.pinkButtonBackground,
        borderRadius: "15px",
        width: "206px",
        height: "50px",
        fontSize: "18px",
      }}
      onClick={() => {
        if (question.trim().length === 0) {
          alert("Please enter a question");
          return;
        }

        setFormStage((previous) => previous + 1);

        callGPTClient({ question });
      }}
    >
      Get The Answer
    </button>
  </>
);

export default QuestionSelector;
