import React from "react";
import AvatarIcon from "@/images/avatar-icon.png";
import bulp from "@/images/bulp.png";
import Image from "next/image";
import colors from "@/constants/colors";
import useModal from "@/hooks/useModal";
import Modal from "../UI/Modal";

type Props = {
  answer: null | "yes" | "no";
};

const MiniLoadingSkeleton = () => (
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

const DecodingText = ({ answer }: Props) => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex" style={{ marginTop: "200px" }}>
      <Image
        src={AvatarIcon}
        alt="Avatar Icon"
        width="32"
        height="33"
        className="mr-2"
        style={{
          alignSelf: "flex-start",
        }}
      />
      {answer === null ? (
        <MiniLoadingSkeleton />
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
            It can be an indication of a fear of being excluded from the
            conversation or a sign of intense worry for someone who may not be
            showing any response. <br />
            <br /> Dreams can also represent the turbulent and uncertain times
            that can be difficult to navigate. They can serve as a warning of
            the potential danger that lies ahead and can symbolize the chaos
            that often follows.
          </div>
          <div className="flex justify-between">
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
                style={{
                  alignSelf: "flex-start",
                }}
              />
              <p
                style={{
                  color: "D3BDD9",
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
