import React from "react";
import { ILayout } from "../types/ILayout";
import Header from "../components/common/Header/Header";

const MainLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
