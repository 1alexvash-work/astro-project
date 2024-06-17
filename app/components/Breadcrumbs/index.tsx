"use client";

import React from "react";

const Dash = () => (
  <div style={{ borderTop: "1px solid white", opacity: 0.4, width: "20px" }} />
);

const Breadcrumbs = () => (
  <div
    className="hidden lg:flex items-center gap-2.5"
    style={{ fontSize: "14px" }}
  >
    <span
      onClick={() => {
        alert("Will redirect you to another page in the future...");
      }}
      style={{ cursor: "pointer" }}
    >
      Main
    </span>
    <Dash />
    <span
      onClick={() => {
        alert("Will redirect you to another page in the future...");
      }}
      style={{ cursor: "pointer" }}
    >
      Tarot
    </span>
    <Dash />
    <span style={{ opacity: 0.4 }}>Yes or No answer</span>
  </div>
);

export default Breadcrumbs;
