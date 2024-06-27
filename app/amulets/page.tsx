// "use client";
import Header from "@/components/Header";
import React from "react";
import AmuletsTable from "./_componets/AmuletsTable";

const Amulets = () => {
  return (
    <>
      <Header />
      <div className="pt-16 lg:flex lg:justify-center lg:gap-5">
        <AmuletsTable />
      </div>
    </>
  );
};

export default Amulets;
