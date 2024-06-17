// TODO: This compoent has not got reusability, a possible future refactor

import React, { useState } from "react";

import Image from "next/image";

import PsychicAvatar0 from "@/images/avatar-psychic-0.png";
import PsychicAvatar1 from "@/images/avatar-psychic-1.png";
import PsychicAvatar2 from "@/images/avatar-psychic-2.png";
import AvatarSelected from "@/images/avatar-selected.png";
import ModalCross from "@/images/modal-cross.png";
import AvatarUnselected from "@/images/avatar-unselected.png";
import colors from "@/constants/colors";

const people = [
  { imageURL: PsychicAvatar0, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar1, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar2, name: "Darrell S.", rate: "$12.99/min" },
];

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => {
  const [selectedPerson, setSelectedPerson] = useState(0);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        className="bg-white py-4 px-5 flex flex-col"
        style={{ width: "480px", borderRadius: "20px" }}
      >
        <div className="flex justify-between items-center">
          <h1
            style={{
              color: colors.text.dark,
              fontSize: "25px",
              fontWeight: 600,
            }}
          >
            Choose The Psychic To Answer:
          </h1>
          <button onClick={onClose}>
            <Image src={ModalCross} alt="Close" width="30" height="30" />
          </button>
        </div>
        <div className="flex justify-evenly py-4 mt-2">
          {people.map((person, index) => (
            <div key={index}>
              <div
                className="relative"
                onClick={() => setSelectedPerson(index)}
              >
                <Image
                  src={person.imageURL}
                  alt={person.name}
                  width="94"
                  height="93"
                  className={`rounded-full ${selectedPerson === index ? `border-4 border-[${colors.pinkButtonBackground}]` : "cursor-pointer"}`}
                />
                <Image
                  src={
                    selectedPerson === index ? AvatarSelected : AvatarUnselected
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
          style={{
            color: colors.text.white,
            background: colors.pinkButtonBackground,
            borderRadius: "15px",
            padding: "12px 60px",
            alignSelf: "center",
            fontSize: "18px",
            fontWeight: 500,
          }}
          onClick={() => alert("Future back-end flow is not implemented yet.")}
        >
          Ask This Question Now
        </button>
        <p
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
