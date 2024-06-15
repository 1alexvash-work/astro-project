import React from "react";

import Image from "next/image";

import PsychicAvatar0 from "@/images/avatar-psychic-0.png";
import PsychicAvatar1 from "@/images/avatar-psychic-1.png";
import PsychicAvatar2 from "@/images/avatar-psychic-2.png";
import colors from "@/constants/colors";

const people = [
  { imageURL: PsychicAvatar0, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar1, name: "Darrell S.", rate: "$12.99/min" },
  { imageURL: PsychicAvatar2, name: "Darrell S.", rate: "$12.99/min" },
];

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose }: Props) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div className="relative bg-white rounded-lg p-8 flex flex-col">
      <h1 style={{ color: colors.text.dark }}>Choose the psychic to answer:</h1>
      <div className="flex justify-between">
        {people.map((person, index) => (
          <div key={index}>
            <Image
              src={person.imageURL}
              alt={person.name}
              width="94"
              height="93"
              className="rounded-full"
            />
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

export default Modal;
