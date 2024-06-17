import React from "react";
import Image from "next/image";
import EmpressCard from "@/images/empress-card.png";
import colors from "@/constants/colors";

type Props = {
  answer: null | "yes" | "no";
};

const MiniLoadingSkeleton = () => (
  <div
    className="animate-pulse bg-gray-500 w-20 inline-block"
    style={{ height: "31px", borderRadius: "4px", opacity: 0.75 }}
  />
);

const SecondCardPlaceholder = ({ answer }: Props) => (
  <div className="text-center">
    <div className="mb-6">
      <h2 style={{ fontSize: "25px", fontWeight: 600, lineHeight: 1.3 }}>
        Your question:
      </h2>
      <p className="pt-2 pb-3" style={{ opacity: 0.75 }}>
        Should I come back to my ex?
      </p>
      {answer === null ? (
        <MiniLoadingSkeleton />
      ) : (
        <div
          style={{
            fontSize: "35px",
            color: colors.text.pink,
            fontWeight: "bold",
            lineHeight: 1,
          }}
        >
          {answer.toUpperCase()}
        </div>
      )}
    </div>
    <Image src={EmpressCard} alt="Empress Card" width={216} height={400} />
  </div>
);

export default SecondCardPlaceholder;
