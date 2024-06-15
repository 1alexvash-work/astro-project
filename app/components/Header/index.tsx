import React from "react";
import UserCard from "./UserCard";
import UserAvatar from "@/images/avatar.png";
import Navigation from "./Navigation";

const Header = () => {
  const logo = null;

  return (
    <div className="flex justify-between">
      {logo}
      <Navigation />

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
