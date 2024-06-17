"use client";

import React, { ChangeEvent, useState } from "react";

import configs from "./configs";
import CardsPlaceholder from "./CardsPlaceholder";
import QuestionSelector from "./QuestionSelector";
import SecondCardPlaceholder from "./SecondCardPlaceholder";
import DecodingText from "./DecodingText";

const Content = () => {
  // TODO: add loading state

  const [question, setQuestion] = useState("");
  const [formStage, setFormStage] = useState(0);

  const [answer, setAnswer] = useState<null | "yes" | "no">(null);

  const handleQuestionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;

    if (newValue.length <= configs.textAreaMaxLength) {
      setQuestion(newValue);
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-5 flex flex-col gap-6 items-center">
        {formStage === 0 && <CardsPlaceholder />}
        {formStage > 0 && <SecondCardPlaceholder answer={answer} />}
      </div>

      <div className="col-span-7 col-start-7 flex flex-col gap-8 flex-6">
        {formStage === 0 && (
          <QuestionSelector
            question={question}
            setQuestion={setQuestion}
            setFormStage={setFormStage}
            handleQuestionChange={handleQuestionChange}
          />
        )}
        {formStage > 0 && <DecodingText answer={answer} />}
      </div>
    </div>
  );
};

export default Content;
