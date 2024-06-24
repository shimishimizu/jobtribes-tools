"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Amulet } from "../../_types/types";

type Props = {
  amulet: Amulet;
  statusIncreasePerLevelValues: any;
  statusIncreasePerNFTValues: any;
  level: number;
  nft: number;
  handleChangeLevel: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNft: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Status = ({
  amulet,
  statusIncreasePerLevelValues,
  statusIncreasePerNFTValues,
  level,
  nft,
  handleChangeLevel,
  handleChangeNft,
}: Props) => {
  return (
    <div className="mx-auto flex w-[80%] flex-col space-y-5">
      <div>
        <Label htmlFor="level" className="text-lg">
          レベル：{level}
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
          NFT + 値：{nft}
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
      <div className="flex justify-center gap-6 text-center text-lg">
        <dl>
          <dt className="font-bold">HP</dt>
          <dd>
            {amulet.spec.status.hp +
              (level - 1) * statusIncreasePerLevelValues.hp +
              nft * statusIncreasePerNFTValues.hp}
          </dd>
        </dl>
        <dl>
          <dt className="font-bold">ATK</dt>
          <dd>
            {amulet.spec.status.atk +
              (level - 1) * statusIncreasePerLevelValues.atk +
              nft * statusIncreasePerNFTValues.atk}
          </dd>
        </dl>
        <dl>
          <dt className="font-bold">DEF</dt>
          <dd>
            {amulet.spec.status.def +
              (level - 1) * statusIncreasePerLevelValues.def +
              nft * statusIncreasePerNFTValues.def}
          </dd>
        </dl>
        <dl>
          <dt className="font-bold">SPD</dt>
          <dd>
            {amulet.spec.status.spd +
              (level - 1) * statusIncreasePerLevelValues.spd +
              nft * statusIncreasePerNFTValues.spd}
          </dd>
        </dl>
      </div>
    </div>
  );
};

export default Status;
