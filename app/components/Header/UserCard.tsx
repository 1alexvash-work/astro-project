import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  user: {
    name: string;
    avatar: StaticImageData;
  };
};

const UserCard = ({ user }: Props) => (
  <div>
    <span>{user.name}</span>
    <Image
      src={user.avatar}
      alt={user.name}
      width="50"
      height="50"
      style={{ display: "inline" }}
    />
  </div>
);

export default UserCard;
