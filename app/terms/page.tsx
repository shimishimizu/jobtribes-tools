import Header from "@/components/Header";
import React from "react";
import TermsContent from "./_components/TermsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
};

const Terms = () => {
  return (
    <>
      <Header />
      <TermsContent />
    </>
  );
};

export default Terms;
