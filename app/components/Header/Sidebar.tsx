// TODO: we can possibly add click outside to close the sidebar

import React, { Dispatch, SetStateAction } from "react";
import MobileMenuTurnOff from "@/images/mobile-menu-turn-off.svg";
import Image, { StaticImageData } from "next/image";
import { navigationElements } from "./Navigation";
import { user } from "./configs";

type Props = {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const gradientStyle = {
  background: `
    linear-gradient(to bottom, #4E225D -50%, #640864 55%, #45075E 150%), 
    rgba(0, 0, 0, 0.1)
  `,
  backgroundBlendMode: "overlay",
};

const MobileUserCard = ({
  user,
}: {
  user: {
    name: string;
    avatar: StaticImageData;
  };
}) => (
  <div className="flex items-center gap-3" style={{ marginBottom: "24px" }}>
    <Image
      src={user.avatar}
      alt={user.name}
      width="50"
      height="50"
      style={{ display: "inline", width: "32px", height: "32px" }}
    />
    <span>{user.name}</span>
  </div>
);

const Sidebar = ({ setSidebarOpen }: Props) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      right: 0,
      width: "280px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "16px",
      borderLeft: "1px solid rgb(168 133 188 / 30%);",
      overflowY: "auto",
      justifyContent: "space-between",
      ...gradientStyle,
    }}
  >
    <Image
      src={MobileMenuTurnOff}
      alt="mobile menu turn off"
      width="46"
      height="24"
      className="cursor-pointer"
      onClick={() => setSidebarOpen(false)}
      style={{ alignSelf: "flex-end" }}
    />

    <div className="flex flex-col gap-10 my-20">
      {navigationElements.map((element) => (
        <p
          key={element}
          style={{
            fontSize: "18px",
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          <a href="#">{element}</a>
        </p>
      ))}
    </div>

    <MobileUserCard user={user} />
  </div>
);

export default Sidebar;
