import { useState } from "react";
import {
  statusIncreasePerLevel,
  statusIncreasePerNFT,
} from "../../_constants/status";
import { AMULETS_DATA as data } from "../../_constants/amulets";

export const useAmulet = (id: string) => {
  const [level, setLevel] = useState(70);
  const [nft, setNft] = useState(1);

  const handleChangeLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLevel(+e.target.value); // +演算子で数値に変換
  const handleChangeNft = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNft(+e.target.value);

  const amulet = data.find((item) => item.id === id);

  // 1レベル毎のステータス上昇値
  const statusIncreasePerLevelValues = statusIncreasePerLevel.find(
    (item) =>
      item.rarity === amulet?.rarity &&
      item.element === amulet?.element &&
      item.type === amulet?.type,
  );
  // NFT1枚毎のステータス上昇値
  const statusIncreasePerNFTValues = statusIncreasePerNFT.find(
    (item) => item.rarity === amulet?.rarity,
  );

  const amuletInfo = {
    amulet,
    statusIncreasePerLevelValues,
    statusIncreasePerNFTValues,
    level,
    nft,
    handleChangeLevel,
    handleChangeNft,
  };

  return amuletInfo;
};
