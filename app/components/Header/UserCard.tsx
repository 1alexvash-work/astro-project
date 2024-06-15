import React from "react";
import Image from "next/image";

type Props = {
  user: {
    name: string;
    avatar: string;
  };
};

const UserCard = ({ user }: Props) => (
  <div>
    <Image src={user.avatar} alt={user.name} />
    <span>{user.name}</span>
  </div>
);

export default UserCard;
