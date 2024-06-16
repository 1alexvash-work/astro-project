"use client";

import colors from "@/constants/colors";
import React from "react";
import Search from "@/images/search.png";
import Image from "next/image";

const navigationElements = [
  "Advisors",
  "Chats",
  "Articles",
  "Horoscope ",
  "Tarot",
];

const NavLink = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <a
    href="/"
    onClick={(event) => {
      event.preventDefault();
      alert("Navigation is not implemented yet!");
    }}
    style={{
      color: colors.text.dark,
      fontSize: "18px",
      fontWeight: "600",
    }}
  >
    {children}
  </a>
);

const Navigation = () => (
  <nav
    className="flex items-center gap-5 py-3.5 rounded-full"
    style={{ background: "#F5F5F8" }}
  >
    {navigationElements.map((element) => (
      <NavLink key={element}>{element}</NavLink>
    ))}
    <button
      onClick={() => alert("Search is not implemented yet!")}
      style={{
        background: "white",
        borderRadius: "50%",
      }}
    >
      <Image src={Search} alt="Search" width="45" height="44" />
    </button>
  </nav>
);

export default Navigation;
