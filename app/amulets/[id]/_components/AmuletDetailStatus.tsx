"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Amulet } from "../../_types/types";

type Props = {
  level: number;
  nft: number;
  handleChangeLevel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNft: (e: React.ChangeEvent<HTMLInputElement>) => void;
  calclateStatus: () => Amulet["spec"]["status"];
};

const AmuletDetailStatus = ({
  level,
  nft,
  handleChangeLevel,
  handleChangeNft,
  calclateStatus,
}: Props) => {
  const calclatedStatus = calclateStatus();

  return (
    <div className="mx-auto flex w-[80%] flex-col space-y-5">
      <div className="flex justify-center gap-6 text-center text-lg">
        <dl>
          <dt className="font-bold">HP</dt>
          <dd>{calclatedStatus.hp}</dd>
        </dl>
        <dl>
          <dt className="font-bold">ATK</dt>
          <dd>{calclatedStatus.atk}</dd>
        </dl>
        <dl>
          <dt className="font-bold">DEF</dt>
          <dd>{calclatedStatus.def}</dd>
        </dl>
        <dl>
          <dt className="font-bold">SPD</dt>
          <dd>{calclatedStatus.spd}</dd>
        </dl>
      </div>
      <div>
        <Label htmlFor="level" className="text-lg">
          Lv：{level}
        </Label>
        <Input
          id="level"
          type="range"
          value={level}
          max={70}
          min={1}
          step={1}
          onChange={handleChangeLevel}
          className="-mt-1 cursor-pointer px-0 py-5"
        />
      </div>
      <div>
        <Label htmlFor="nft" className="text-lg">
          NFT + {nft}
        </Label>
        <Input
          id="nft"
          type="range"
          value={nft}
          max={5}
          min={0}
          step={1}
          onChange={handleChangeNft}
          className="-mt-1 cursor-pointer px-0 py-5"
        />
      </div>
    </div>
  );
};

export default AmuletDetailStatus;
