import React from "react";

const Dash = () => (
  <div style={{ borderTop: "1px solid white", opacity: 0.4, width: "20px" }} />
);

const Breadcrumbs = () => (
  <div className="flex items-center gap-2.5" style={{ fontSize: "14px" }}>
    <span>Main</span>
    <Dash />
    <span>Tarot</span>
    <Dash />
    <span style={{ opacity: 0.4 }}>Yes or No answer</span>
  </div>
);

export default Breadcrumbs;
