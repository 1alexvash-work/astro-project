import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  user: {
    name: string;
    avatar: StaticImageData;
  };
};

const UserCard = ({ user }: Props) => (
  <div className="flex items-center justify-end" style={{ flex: 1 }}>
    <span>{user.name}</span>
    <Image
      src={user.avatar}
      alt={user.name}
      width="50"
      height="50"
      style={{ display: "inline", marginLeft: "15px", fontWeight: 600 }}
    />
  </div>
);

export default UserCard;
