"use client";

import React from "react";

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
    className="text-white text-lg font-bold px-4 py-2"
    onClick={(event) => {
      event.preventDefault();
      alert("Navigation is not implemented yet!");
    }}
  >
    {children}
  </a>
);

const Navigation = () => (
  <nav>
    {navigationElements.map((element) => (
      <NavLink key={element}>{element}</NavLink>
    ))}
    <button onClick={() => alert("Search is not implemented yet!")}>
      🔎 search icon
    </button>
  </nav>
);

export default Navigation;
