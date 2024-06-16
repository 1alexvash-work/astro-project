import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  user: {
    name: string;
    avatar: StaticImageData;
  };
};

const UserCard = ({ user }: Props) => (
  <div className="flex items-center">
    <span>{user.name}</span>
    <Image
      src={user.avatar}
      alt={user.name}
      width="50"
      height="50"
      style={{ display: "inline", marginLeft: "15px" }}
    />
  </div>
);

export default UserCard;
