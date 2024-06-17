import React from "react";
import Image from "next/image";
import EmpressCard from "@/images/empress-card.png";
import colors from "@/constants/colors";

type Props = {
  answer: "YES" | "NO";
  isLoading: boolean;
  question: string;
};

const MiniLoadingSkeleton = () => (
  <div
    className="animate-pulse bg-gray-500 w-20 inline-block"
    style={{ height: "31px", borderRadius: "4px", opacity: 0.75 }}
  />
);

const SecondCardPlaceholder = ({ answer, isLoading, question }: Props) => (
  <div className="text-center">
    <div className="mb-6">
      <h2
        className="text-[18px] lg:text-[25px]"
        style={{ fontWeight: 600, lineHeight: 1.3 }}
      >
        Your question:
      </h2>
      <p className="pt-2 pb-3" style={{ opacity: 0.75 }}>
        {question}
      </p>
      {isLoading ? (
        <MiniLoadingSkeleton />
      ) : (
        <div
          className="text-[20px] lg:text-[35px]"
          style={{
            color: colors.text.pink,
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          {answer}
        </div>
      )}
    </div>
    <Image
      src={EmpressCard}
      alt="Empress Card"
      width={216}
      height={400}
      className="mx-auto"
    />
  </div>
);

export default SecondCardPlaceholder;
