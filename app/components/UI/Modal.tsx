// TODO: This compoent has not got reusability, a possible future refactor

import React, { useState } from "react";

import Image from "next/image";

import PsychicAvatar0 from "@/images/avatar-psychic-0.png";
import PsychicAvatar1 from "@/images/avatar-psychic-1.png";
import PsychicAvatar2 from "@/images/avatar-psychic-2.png";
import AvatarSelected from "@/images/avatar-selected.png";
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
      <div className="relative bg-white rounded-lg p-8 flex flex-col">
        <h1 style={{ color: colors.text.dark }}>
          Choose the psychic to answer:
        </h1>
        <div className="flex justify-between">
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
                {selectedPerson === index ? (
                  <Image
                    src={AvatarSelected}
                    alt="Avatar selected"
                    width="24"
                    height="25"
                    className="absolute bottom-0 right-0"
                  />
                ) : (
                  <Image
                    src={AvatarUnselected}
                    alt="Avatar unselected"
                    width="24"
                    height="25"
                    className="absolute bottom-0 right-0"
                  />
                )}
              </div>
              <p>{person.name}</p>
              <p>{person.rate}</p>
            </div>
          ))}
        </div>

        <button
          style={{
            color: colors.text.white,
            background: colors.pinkButtonBackground,
          }}
        >
          Ask this question now
        </button>
        <p style={{ color: colors.text.dark }}>
          Book a session at a convenient time
        </p>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            color: colors.text.dark,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
