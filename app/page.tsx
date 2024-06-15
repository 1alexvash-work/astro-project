import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import TestGPTCall from "./components/TestGPTCall";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />

      <TestGPTCall />
    </div>
  );
};

export default Homepage;
