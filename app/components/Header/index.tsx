import React from "react";
import UserCard from "./UserCard";
import UserAvatar from "@/images/avatar.png";
import Navigation from "./Navigation";

const Header = () => {
  const logo = (
    <div style={{ flex: 1 }}>
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

  const desktopHeader = (
    <div className="justify-between hidden lg:flex">
      {logo}
      <Navigation />

      <UserCard user={user} />
    </div>
  );

  const mobileHeader = <div className="flex lg:hidden">Mobile Header</div>;

  return (
    <>
      {desktopHeader}
      {mobileHeader}
    </>
  );
};

export default Header;
