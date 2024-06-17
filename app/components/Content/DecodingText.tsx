import React from "react";
import AvatarIcon from "@/images/avatar-icon.png";
import bulp from "@/images/bulp.png";
import Image from "next/image";
import colors from "@/constants/colors";
import useModal from "@/hooks/useModal";
import Modal from "../UI/Modal";

type Props = {
  explanation: string;
  isLoading: boolean;
};

const LoadingSkeleton = () => (
  <div
    className="animate-pulse bg-gray-500 w-80 inline-block"
    style={{
      height: "80px",
      borderRadius: "4px",
      borderTopLeftRadius: 0,
      opacity: 0.75,
    }}
  />
);

const DecodingText = ({ explanation, isLoading }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex mt-4 lg:mt-48 relative">
      <Image
        src={AvatarIcon}
        alt="Avatar Icon"
        width="32"
        height="33"
        className="absolute -top-11 lg:static mr-2 lg:block"
        style={{
          alignSelf: "flex-start",
        }}
      />
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <div
            style={{
              padding: "12px",
              borderRadius: "16px",
              borderTopLeftRadius: 0,
              background: "rgba(245,245,248, 0.15)",
              marginBottom: "16px",
            }}
          >
            {explanation}
          </div>

          <div className="flex-col-reverse lg:flex-row flex justify-between">
            <button
              style={{
                background: colors.pinkButtonBackground,
                borderRadius: "15px",
                width: "206px",
                height: "50px",
                fontSize: "18px",
              }}
              onClick={openModal}
            >
              Get the decoding
            </button>
            <div className="flex">
              <Image
                src={bulp}
                alt="bulp"
                width="20"
                height="21"
                className="mr-2"
                style={{ alignSelf: "flex-start" }}
              />
              <p
                className="mb-4 lg:mb-0"
                style={{
                  color: "#D3BDD9",
                  fontSize: "11px",
                  alignSelf: "flex-start",
                  opacity: 0.6,
                }}
              >
                Use this tool as a clue; for the precise answer, <br /> consult
                our tarot reader providing more data.
              </p>
            </div>
          </div>
        </div>
      )}
      {isOpen && <Modal onClose={closeModal} />}
    </div>
  );
};

export default DecodingText;
