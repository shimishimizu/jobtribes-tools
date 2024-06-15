// "use client";
import Header from "@/components/Header";
import React, { useState } from "react";
// import SideBar from "./_componets/SideBar";
// import AmuletList from "./_componets/AmuletList";

// import { Element, Rarity, Type } from "./_types/types";
import AmuletsTable from "./_componets/AmuletsTable";

const Amulets = () => {
  // const [name, setName] = useState("");
  // const [rarity, setRarity] = useState<Rarity>({
  //   legendary: false,
  //   epic: false,
  //   rare: false,
  //   common: false,
  // });
  // const [type, setType] = useState<Type>({
  //   normal: false,
  //   another: false,
  // });
  // const [element, setElement] = useState<Element>({
  //   fire: false,
  //   nature: false,
  //   water: false,
  //   earth: false,
  //   thunder: false,
  //   poisen: false,
  // });
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  return (
    <>
      <Header />
      <div className="pt-16 lg:flex lg:justify-center lg:gap-5">
        {/* <SideBar
          name={name}
          setName={setName}
          rarity={rarity}
          setRarity={setRarity}
          type={type}
          setType={setType}
          element={element}
          setElement={setElement}
        /> */}
        {/* <AmuletList
          name={name}
          setName={setName}
          rarity={rarity}
          setRarity={setRarity}
          type={type}
          setType={setType}
          element={element}
          setElement={setElement}
        /> */}
        <AmuletsTable />
      </div>
    </>
  );
};

export default Amulets;
