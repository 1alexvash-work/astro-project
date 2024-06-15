import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import TestGPTCall from "./components/TestGPTCall";
import YesOrNoAnswer from "./components/YesOrNoAnswer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Breadcrumbs />
      <YesOrNoAnswer />
      <TestGPTCall />
    </div>
  );
};

export default Homepage;
