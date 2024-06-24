"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { notFound } from "next/navigation";
import Status from "./_components/AmuletDetailStatus";
import { useAmulet } from "./_hooks/useAmulet";
import AmuletDetailIcons from "./_components/AmuletDetailIcons";
import AmuletDetailTable from "./_components/AmuletDetailTable";

const AmuletDetail = ({ params }: { params: { id: string } }) => {
  const {
    amulet,
    rarityIconImage,
    typeIconImage,
    categoryIconImage,
    statusIncreasePerLevelValues,
    statusIncreasePerNFTValues,
    level,
    nft,
    handleChangeLevel,
    handleChangeNft,
    calclateStatus,
  } = useAmulet(params.id);

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
              className="w-[50%] max-w-[200px]"
            />
            <p dangerouslySetInnerHTML={{ __html: amulet.info }}></p>
          </div>

          <div className="flex flex-col gap-y-10">
            {statusIncreasePerLevelValues && statusIncreasePerNFTValues && (
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
