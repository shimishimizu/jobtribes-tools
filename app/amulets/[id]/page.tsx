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
import Status from "./_components/Status";
import { useAmulet } from "./_hooks/useAmulet";

const AmuletDetail = ({ params }: { params: { id: string } }) => {
  const {
    amulet,
    statusIncreasePerLevelValues,
    statusIncreasePerNFTValues,
    level,
    nft,
    handleChangeLevel,
    handleChangeNft,
  } = useAmulet(params.id);

  return (
    <>
      <Header />
      {amulet ? (
        <div className="mx-auto max-w-screen-lg px-4 pb-10 pt-28">
          <h1 className="mb-10 text-center text-xl font-bold">{amulet.name}</h1>

          <div className="mb-8 flex items-start justify-center gap-4">
            <Image
              src={amulet.image}
              width={200}
              height={200}
              alt={amulet.name}
              priority
              className="w-[50%] max-w-[200px]"
            />
            <div>
              <p className="mb-2">{amulet.category}</p>
              <p dangerouslySetInnerHTML={{ __html: amulet.info }}></p>
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            {statusIncreasePerLevelValues && statusIncreasePerNFTValues && (
              <Status
                amulet={amulet}
                statusIncreasePerLevelValues={statusIncreasePerLevelValues}
                statusIncreasePerNFTValues={statusIncreasePerNFTValues}
                level={level}
                nft={nft}
                handleChangeLevel={handleChangeLevel}
                handleChangeNft={handleChangeNft}
              />
            )}

            <div>
              {/* <h2 className="mb-2 text-center font-medium text-slate-800">
                【スキル】
              </h2> */}
              <Table className="min-w-[600px] overflow-auto">
                <TableHeader className="whitespace-nowrap bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[150px]">スキル名</TableHead>
                    <TableHead>詳細</TableHead>
                    <TableHead className="text-right">消費バジェット</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {amulet.spec.skill.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">{item.title}</TableCell>
                      <TableCell>{item.desc}</TableCell>
                      <TableCell className="text-center">
                        {item.budget}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {amulet.spec.ability && (
              <div>
                {/* <h2 className="mb-2 text-center font-medium text-slate-800">
                  【アビリティ】
                </h2> */}
                <Table className="min-w-[600px] overflow-auto">
                  <TableHeader className="whitespace-nowrap bg-slate-100">
                    <TableRow>
                      <TableHead className="w-[150px]">アビリティ</TableHead>
                      <TableHead>詳細</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amulet.spec.ability.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          {item.title}
                        </TableCell>
                        <TableCell>{item.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
