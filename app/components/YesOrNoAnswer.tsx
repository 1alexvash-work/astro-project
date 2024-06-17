import React from "react";
import Image from "next/image";
import arrowToTheLeft from "@/images/arrow-to-the-left.svg";

const YesOrNoAnswerDesktop = () => (
  <div
    className="hidden lg:block"
    style={{ fontWeight: "bold", fontSize: "32px" }}
  >
    Yes or No answer
  </div>
);

const YesOrNoAnswerMobile = () => (
  <div
    className="flex gap-4 lg:hidden"
    style={{ fontWeight: 500, fontSize: "17px" }}
  >
    <Image
      src={arrowToTheLeft}
      alt={arrowToTheLeft}
      width="22"
      height="20"
      style={{ display: "inline", fontWeight: 600 }}
    />
    Yes or No answer
  </div>
);

const YesOrNoAnswer = () => (
  <>
    <YesOrNoAnswerDesktop />
    <YesOrNoAnswerMobile />
  </>
);

export default YesOrNoAnswer;
