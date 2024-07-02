"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import Status from "./_components/AmuletDetailStatus";
import { useAmulet } from "./_hooks/useAmulet";
import AmuletDetailIcons from "./_components/AmuletDetailIcons";
import AmuletDetailTable from "./_components/AmuletDetailTable";
// import { getAllAmulets } from "@/utils/supabaseFunctions";

const AmuletDetail = ({ params }: { params: { id: string } }) => {
  const {
    amulet,
    rarityIconImage,
    typeIconImage,
    categoryIconImage,
    statusIncreasePerLevelValuesWithAnother,
    statusIncreasePerNFTValues,
    level,
    nft,
    handleChangeLevel,
    handleChangeNft,
    calclateStatus,
  } = useAmulet(params.id);

  // // supabaseデータ取得の試し
  // const [amulets, setAmulets] = useState([]);
  // useEffect(() => {
  //   const getAmulets = async () => {
  //     const result = await getAllAmulets();
  //     setAmulets(result);
  //     console.log(result);
  //   };
  //   getAmulets();
  // }, []);

  return (
    <>
      <Header />
      {amulet ? (
        <div className="mx-auto max-w-screen-lg px-4 pb-10 pt-24">
          <h1 className="mb-8 text-center text-xl font-bold">{amulet.name}</h1>

          <AmuletDetailIcons
            amulet={amulet}
            rarityIconImage={rarityIconImage}
            typeIconImage={typeIconImage}
            categoryIconImage={categoryIconImage}
          />

          <div className="mb-8 flex items-start justify-center gap-4">
            <Image
              src={amulet.image}
              width={200}
              height={200}
              alt={amulet.name}
              priority
              className="w-[40%] max-w-[200px] shrink-0 md:w-[50%]"
              placeholder="blur"
              blurDataURL={"/images/blur.webp"}
            />
            <p dangerouslySetInnerHTML={{ __html: amulet.info }}></p>
          </div>

          <div className="flex flex-col gap-y-10">
            {statusIncreasePerLevelValuesWithAnother &&
              statusIncreasePerNFTValues && (
                <Status
                  level={level}
                  nft={nft}
                  handleChangeLevel={handleChangeLevel}
                  handleChangeNft={handleChangeNft}
                  calclateStatus={calclateStatus}
                />
              )}

            <AmuletDetailTable label="スキル" amuletSkill={amulet.spec.skill} />
            {amulet.spec.ability && (
              <AmuletDetailTable
                label="アビリティ"
                amuletAbility={amulet.spec.ability}
              />
            )}
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  );
};

export default AmuletDetail;
