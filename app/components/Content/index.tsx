"use client";

import React, { ChangeEvent, useState } from "react";

import configs from "./configs";
import CardsPlaceholder from "./CardsPlaceholder";
import QuestionSelector from "./QuestionSelector";

const Content = () => {
  // TODO: state toggling

  const [question, setQuestion] = useState("");
  const [formStage, setFormStage] = useState(0);

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
        {/* {formStage === 1 && <SecondCardPlaceholder/>} */}
        {/* {formStage === 2 && <SecondCardPlaceholder answer='yes'/>} */}
      </div>

      <div className="col-span-7 col-start-7 flex flex-col gap-8 flex-6">
        <QuestionSelector
          question={question}
          setQuestion={setQuestion}
          setFormStage={setFormStage}
          handleQuestionChange={handleQuestionChange}
        />
      </div>
    </div>
  );
};

export default Content;
