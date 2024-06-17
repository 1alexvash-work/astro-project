"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";

import Navigation from "./Navigation";
import MobileMenuTurnOn from "@/images/mobile-menu-turn-on.png";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { user } from "./configs";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logo = (
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: "22px", fontWeight: "bold" }}>TarotBook</h1>
      <p style={{ fontSize: "10px", fontWeight: "600" }}>
        Tarot & Astrology Readings
      </p>
    </div>
  );

  const desktopHeader = (
    <div className="justify-between hidden lg:flex">
      {logo}
      <Navigation />

      <UserCard user={user} />
    </div>
  );

  const mobileHeader = (
    <div className="justify-between flex lg:hidden">
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            background: "white",
            borderRadius: "4px",
            marginRight: "10px",
          }}
        />
        <span style={{ fontSize: "14px", fontWeight: "bold" }}>TarrotBook</span>
        <div />
      </div>

      <Image
        src={MobileMenuTurnOn}
        alt="mobile menu turn on"
        width="46"
        height="24"
        className="cursor-pointer"
        onClick={() => setSidebarOpen(true)}
      />

      {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
    </div>
  );

  return (
    <>
      {desktopHeader}
      {mobileHeader}
    </>
  );
};

export default Header;
