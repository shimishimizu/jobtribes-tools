import Header from "@/components/Header";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import SideBar from "./componets/SideBar";

const Amulets = () => {
  return (
    <>
      <Header />
      <div className="lg:flex pt-16">
        <SideBar />

        <div className=" h-[2000px]">リスト</div>
      </div>
    </>
  );
};

export default Amulets;
