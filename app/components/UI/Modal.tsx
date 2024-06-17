// TODO: This compoent has not got reusability, a possible future refactor

import React, { useRef, useState } from "react";

import Image from "next/image";

import PsychicAvatar0 from "@/images/avatar-psychic-0.png";
import PsychicAvatar1 from "@/images/avatar-psychic-1.png";
import PsychicAvatar2 from "@/images/avatar-psychic-2.png";
import AvatarSelected from "@/images/avatar-selected.png";
import ModalCross from "@/images/modal-cross.png";
import AvatarUnselected from "@/images/avatar-unselected.png";
import colors from "@/constants/colors";
import useClickOutside from "@/hooks/useClickOutside";

const people = [
  { imageURL: PsychicAvatar0, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar1, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar2, name: "Darrell S.", rate: "$12.99/min" },
];

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);
  const clickRef = useRef<HTMLDivElement>(null);
  useClickOutside(clickRef, onClose);

  return (
    <div className="fixed inset-0 flex items-end lg:items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className="bg-white p-4 lg:px-5 flex flex-col  lg:rounded-[20px]"
        style={{
          width: "480px",
          maxWidth: "100%",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
        ref={clickRef}
      >
        <div className="flex justify-between items-center">
          <h1
            className="lg:text-[25px]"
            style={{
              color: colors.text.dark,
              fontWeight: 600,
            }}
          >
            Choose The Psychic To Answer:
          </h1>
          <button className="hidden lg:block" onClick={onClose}>
            <Image src={ModalCross} alt="Close" width="30" height="30" />
          </button>
          <button
            className="lg:hidden"
            style={{
              fontSize: "14px",
              color: "#651F7A",
            }}
          >
            See all
          </button>
        </div>
        <div className="inline-flex justify-evenly py-4 lg:mt-2 gap-12 lg:gap-0 overflow-auto -mr-5 lg:mr-0 pr-5 lg:pr-0">
          {people.map((person, index) => (
            <div key={index} style={{ minWidth: "94px" }}>
              <div
                className="relative inline-block"
                onClick={() => setSelectedPersonIndex(index)}
              >
                <Image
                  src={person.imageURL}
                  alt={person.name}
                  width="94"
                  height="93"
                  className={"rounded-full cursor-pointer"}
                  style={{
                    border:
                      selectedPersonIndex === index ? "4px solid #FC5F7E" : "",
                  }}
                />
                <Image
                  src={
                    selectedPersonIndex === index
                      ? AvatarSelected
                      : AvatarUnselected
                  }
                  alt="Avatar selected"
                  width="24"
                  height="25"
                  className="absolute bottom-0 right-0"
                />
              </div>
              <p
                style={{
                  color: colors.text.dark,
                  fontWeight: "600",
                  textAlign: "center",
                  marginTop: "8px",
                }}
              >
                {person.name}
              </p>
              <p
                style={{
                  color: colors.text.dark,
                  fontSize: "11px",
                  textAlign: "center",
                }}
              >
                {person.rate}
              </p>
            </div>
          ))}
        </div>

        <button
          className="lg:hidden text-[14px] w-[100%] mb-2"
          style={{
            color: colors.text.dark,
            borderRadius: "15px",
            padding: "12px 60px",
            alignSelf: "center",
            fontWeight: 600,
            background: "#ECDFEF",
          }}
          onClick={() => alert("Future back-end flow is not implemented yet.")}
        >
          Book a session
        </button>

        <button
          className="text-[14px] lg:text-[18px] w-[100%] lg:w-auto"
          style={{
            color: colors.text.white,
            background: colors.pinkButtonBackground,
            borderRadius: "15px",
            padding: "12px 60px",
            alignSelf: "center",
            fontWeight: 500,
          }}
          onClick={() => alert("Future back-end flow is not implemented yet.")}
        >
          Ask This Question Now
        </button>
        <p
          className="hidden lg:block"
          style={{
            color: colors.text.dark,
            fontSize: "14px",
            alignSelf: "center",
            marginTop: "4px",
            paddingTop: "15px",
          }}
        >
          Book a session at a convenient time
        </p>
      </div>
    </div>
  );
};

export default Modal;
