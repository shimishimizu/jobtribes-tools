import React from "react";
import { AMULETS_DATA as data } from "../_constants/amulets";
import Header from "@/components/Header";
import Image from "next/image";

const AmuletDetail = ({ params }: { params: { id: string } }) => {
  const amulet = data.find((item) => item.id === params.id);
  console.log(amulet);
  return (
    <>
      <Header />
      {amulet ? (
        <div className="pt-16">
          {amulet.name}
          <Image
            src={amulet.image}
            width={200}
            height={300}
            alt={amulet.name}
          />
        </div>
      ) : (
        <p className="flex items-center h-screen justify-center">
          urlが不正です。
        </p>
      )}
    </>
  );
};

export default AmuletDetail;
