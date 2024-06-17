"use client";

import React, { ChangeEvent, useState } from "react";

import configs from "./configs";
import CardsPlaceholder from "./CardsPlaceholder";
import QuestionSelector from "./QuestionSelector";
import SecondCardPlaceholder from "./SecondCardPlaceholder";
import DecodingText from "./DecodingText";
import { callGPT } from "@/api/serverFunctions";

const Content = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const [question, setQuestion] = useState("");
  const [formStage, setFormStage] = useState(0);
  const [result, setResult] = useState<{
    answer: "YES" | "NO";
    explanation: string;
  }>({
    answer: "YES",
    explanation: "",
  });

  const callGPTClient = async ({ question }: { question: string }) => {
    setIsLoading(true);

    try {
      setError(null);

      const { result } = await callGPT({
        message: question,
      });

      const contentAnswer = result!.choices[0].message.content;

      try {
        const { answer, explanation } = JSON.parse(contentAnswer);

        setResult({ answer, explanation });
      } catch (error) {
        alert(
          "Something went wrong while giving the answer. It looks like GPT did not correctly returned the response. Please try again."
        );

        setQuestion("");
        setError(null);
        setFormStage(0);
      }
    } catch (error) {
      setError({ error });
    }

    setIsLoading(false);
  };

  const handleQuestionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    if (newValue.length <= configs.textAreaMaxLength) {
      setQuestion(newValue);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 items-center">
        {formStage === 0 && <CardsPlaceholder />}
        {formStage > 0 && (
          <SecondCardPlaceholder
            answer={result.answer}
            isLoading={isLoading}
            question={question}
          />
        )}
      </div>

      <div className="col-span-12 lg:col-span-7 lg:col-start-7 flex flex-col gap-4 lg:gap-8 flex-6">
        {formStage === 0 && (
          <QuestionSelector
            question={question}
            setQuestion={setQuestion}
            setFormStage={setFormStage}
            handleQuestionChange={handleQuestionChange}
            callGPTClient={callGPTClient}
          />
        )}
        {formStage > 0 && (
          <DecodingText
            explanation={result.explanation}
            isLoading={isLoading}
          />
        )}
      </div>

      {error && (
        <div style={{ color: "red", fontSize: "14px", marginTop: "50px" }}>
          Error: {JSON.stringify(error)}
        </div>
      )}
    </div>
  );
};

export default Content;
