import React from "react";
import { AMULETS_DATA as data } from "../_constants/amulets";
import Image from "next/image";
import Link from "next/link";

const AmuletList = () => {
  return (
    <div className="pt-8">
      <h1 className="text-center font-bold text-xl mb-5">アミュレット一覧</h1>
      <div className="max-w-[1024px] mx-auto px-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {data.map((item, index) => (
            <Link
              key={index}
              href={`amulets/${item.id}`}
              className="col-span-1 flex flex-col items-center cursor-pointer hover:opacity-50 transition"
            >
              <Image
                src={item.thumb}
                width={180}
                height={180}
                alt={item.name}
                className="object-cover"
              />
              <p>{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmuletList;
