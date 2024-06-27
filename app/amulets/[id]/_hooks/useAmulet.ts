import { useState } from "react";
import {
  anotherAdditionalStatus,
  statusIncreasePerLevel,
  statusIncreasePerNFT,
} from "../../_constants/status";
import { AMULETS_DATA as data } from "../../_constants/amulets";
import { Amulet } from "../../_types/types";
import { categoryIcon, rarityIcon, typeIcon } from "../../_constants/Icon";

export const useAmulet = (id: string) => {
  const [level, setLevel] = useState(70);
  const [nft, setNft] = useState(1);

  const handleChangeLevel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLevel(+e.target.value); // +演算子で数値に変換
  const handleChangeNft = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNft(+e.target.value);

  const amulet = data.find((item) => item.id === id);

  // アイコン
  const rarityIconImage = rarityIcon.find(
    (item) => item.name === amulet?.rarity,
  );
  const typeIconImage = typeIcon.find((item) => item.name === amulet?.type);
  const categoryIconImage = categoryIcon.find(
    (item) => item.name === amulet?.category,
  );

  // 1レベル毎のステータス上昇値
  const statusIncreasePerLevelValues = statusIncreasePerLevel.find(
    (item) =>
      item.rarity === amulet?.rarity && item.element === amulet?.element,
  );

  // 1レベル毎のステータス上昇値(ANOTHERを考慮)
  const statusIncreasePerLevelValuesWithAnother = {
    hp:
      statusIncreasePerLevelValues?.hp! +
      (amulet?.type === "ANOTHER" ? anotherAdditionalStatus.hp : 0),
    atk:
      statusIncreasePerLevelValues?.atk! +
      (amulet?.type === "ANOTHER" ? anotherAdditionalStatus.atk : 0),
    def:
      statusIncreasePerLevelValues?.def! +
      (amulet?.type === "ANOTHER" ? anotherAdditionalStatus.def : 0),
    spd:
      statusIncreasePerLevelValues?.spd! +
      (amulet?.type === "ANOTHER" ? anotherAdditionalStatus.spd : 0),
  };

  // NFT1枚毎のステータス上昇値
  const statusIncreasePerNFTValues = statusIncreasePerNFT.find(
    (item) => item.rarity === amulet?.rarity,
  );

  // ステータス計算
  const calclateStatus = () => {
    const initStatus: Amulet["spec"]["status"] = amulet?.spec.status!;

    const calculatedStatus = {
      hp:
        initStatus?.hp! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.hp! +
        nft * statusIncreasePerNFTValues?.hp!,
      atk:
        initStatus?.atk! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.atk! +
        nft * statusIncreasePerNFTValues?.atk!,
      def:
        initStatus?.def! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.def! +
        nft * statusIncreasePerNFTValues?.def!,
      spd:
        initStatus?.spd! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.spd! +
        nft * statusIncreasePerNFTValues?.spd!,
    };
    return calculatedStatus;
  };

  const amuletInfo = {
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
  };

  return amuletInfo;
};
