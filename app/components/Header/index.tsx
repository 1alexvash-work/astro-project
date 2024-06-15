import React from "react";
import UserCard from "./UserCard";
import UserAvatar from "@/images/avatar.png";
import Navigation from "./Navigation";

const Header = () => {
  const logo = (
    <div>
      <h1>TarotBook</h1>
      <p>Tarot & Astrology Readings</p>
    </div>
  );

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
