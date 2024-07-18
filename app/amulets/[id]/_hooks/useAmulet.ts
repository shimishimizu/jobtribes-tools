import { useState } from "react";
import {
  anotherAdditionalStatus,
  oldLegendaryAmulets,
  statusIncreasePerLevel,
  statusIncreasePerNFT,
} from "../../_constants/status";
import { amuletsData as data } from "../../_constants/amulets";
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

  // 旧レジェの考慮
  // HP 980 - 784
  // ATK 330 - 264
  // DEF 260 - 208
  // SPD 200 - 160
  const statusIncreasePerNFTValuesWithOldLegendary = {
    hp: oldLegendaryAmulets.includes(amulet?.name!)
      ? 784
      : statusIncreasePerNFTValues?.hp!,
    atk: oldLegendaryAmulets.includes(amulet?.name!)
      ? 264
      : statusIncreasePerNFTValues?.atk!,
    def: oldLegendaryAmulets.includes(amulet?.name!)
      ? 208
      : statusIncreasePerNFTValues?.def!,
    spd: oldLegendaryAmulets.includes(amulet?.name!)
      ? 160
      : statusIncreasePerNFTValues?.spd!,
  };

  // ステータス計算
  const calclateStatus = () => {
    const initStatus: Amulet["spec"]["status"] = amulet?.spec.status!;

    const calculatedStatus = {
      hp:
        initStatus?.hp! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.hp! +
        nft * statusIncreasePerNFTValuesWithOldLegendary?.hp!,
      atk:
        initStatus?.atk! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.atk! +
        nft * statusIncreasePerNFTValuesWithOldLegendary?.atk!,
      def:
        initStatus?.def! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.def! +
        nft * statusIncreasePerNFTValuesWithOldLegendary?.def!,
      spd:
        initStatus?.spd! +
        (level - 1) * statusIncreasePerLevelValuesWithAnother.spd! +
        nft * statusIncreasePerNFTValuesWithOldLegendary?.spd!,
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
