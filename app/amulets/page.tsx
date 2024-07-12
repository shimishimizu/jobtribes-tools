import Header from "@/components/Header";
import React from "react";
import AmuletsTable from "./_componets/AmuletsTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "アミュレット一覧",
};

const Amulets = () => {
  return (
    <>
      <Header />
      <AmuletsTable />
    </>
  );
};

export default Amulets;
