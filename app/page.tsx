import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import TestGPTCall from "./components/TestGPTCall";
import YesOrNoAnswer from "./components/YesOrNoAnswer";
import Content from "./components/Content";

const Homepage = () => (
  <>
    <Header />
    <Breadcrumbs />
    <YesOrNoAnswer />
    <TestGPTCall />
    <Content />
  </>
);

export default Homepage;
