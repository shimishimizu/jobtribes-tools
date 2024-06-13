import Header from "@/components/Header";
import React from "react";
import SideBar from "./_componets/SideBar";
import AmuletList from "./_componets/AmuletList";

const Amulets = () => {
  return (
    <>
      <Header />
      <div className="lg:flex lg:justify-center lg:gap-5 pt-16">
        <SideBar />
        <AmuletList />
      </div>
    </>
  );
};

export default Amulets;
