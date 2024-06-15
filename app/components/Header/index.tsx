import React from "react";
import UserCard from "./UserCard";
import UserAvatar from "@/images/avatar.png";

const Header = () => {
  const logo = null;
  const navigation = null;

  return (
    <div>
      {logo}
      {navigation}

      <UserCard
        user={{
          name: "Samanta Johnson",
          avatar: UserAvatar,
        }}
      />
    </div>
  );
};

export default Header;
