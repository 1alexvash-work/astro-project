"use client";

import React, { useState } from "react";
import UserCard from "./UserCard";

import Navigation from "./Navigation";
import MobileMenuTurnOn from "@/images/mobile-menu-turn-on.svg";
import Image from "next/image";
import Sidebar from "./Sidebar";
import { user } from "./configs";

import polygon2 from "./polygon2";
import polygon4 from "./polygon4";
import polygon80 from "./polygon80";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const logo = (
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: "22px", fontWeight: "600" }}>TarotBook</h1>
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
    <div className="relative justify-between flex lg:hidden">
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

      <div
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "0",
          right: "0",
          filter: "blur(50px)",
        }}
      >
        {polygon2}
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "-50px",
          left: "-0px",
          filter: "blur(20px)",
        }}
      >
        {polygon4}
      </div>

      <div
        style={{
          position: "absolute",
          zIndex: "-1",
          top: "75px",
          left: "0px",
          filter: "blur(100px)",
        }}
      >
        {polygon80}
      </div>
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
