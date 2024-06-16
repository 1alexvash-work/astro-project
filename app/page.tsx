import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import TestGPTCall from "./components/TestGPTCall";
import YesOrNoAnswer from "./components/YesOrNoAnswer";
import Content from "./components/Content";

const Homepage = () => (
  <>
    <div
      className="flex flex-col gap-6 mx-auto px-20 pt-5"
      style={{ width: "1200px" }}
    >
      <Header />
      <Breadcrumbs />
      <YesOrNoAnswer />
      <Content />
      <TestGPTCall />
    </div>
  </>
);

export default Homepage;
