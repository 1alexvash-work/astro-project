import React from "react";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import YesOrNoAnswer from "./components/YesOrNoAnswer";
import Content from "./components/Content";

const pageWidth = "1240px";

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => (
  <div
    className="flex flex-col gap-6 mx-auto p-5"
    style={{ width: pageWidth, maxWidth: "100%" }}
  >
    {children}
  </div>
);

const Homepage = () => (
  <PageContainer>
    <Header />
    <Breadcrumbs />
    <YesOrNoAnswer />
    <Content />
  </PageContainer>
);

export default Homepage;
