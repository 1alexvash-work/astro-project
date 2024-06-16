import React from "react";
import UserCard from "./UserCard";
import UserAvatar from "@/images/avatar.png";
import Navigation from "./Navigation";

const Header = () => {
  const logo = (
    <div>
      <h1 style={{ fontSize: "22px", fontWeight: "bold" }}>TarotBook</h1>
      <p style={{ fontSize: "10px", fontWeight: "600" }}>
        Tarot & Astrology Readings
      </p>
    </div>
  );

  const user = {
    name: "Samanta Johnson",
    avatar: UserAvatar,
  };

  return (
    <div className="flex justify-between">
      {logo}
      <Navigation />

      <UserCard user={user} />
    </div>
  );
};

export default Header;
