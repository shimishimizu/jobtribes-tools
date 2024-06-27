import Image from "next/image";
import React from "react";
import { Amulet } from "../../_types/types";

type Props = {
  amulet: Amulet;
  rarityIconImage: { name: string; image: string } | undefined;
  typeIconImage: { name: string; image: string } | undefined;
  categoryIconImage: { name: string; image: string } | undefined;
};

const AmuletDetailIcons = ({
  amulet,
  rarityIconImage,
  typeIconImage,
  categoryIconImage,
}: Props) => {
  return (
    <div className="mb-8 flex items-center justify-center gap-4">
      {rarityIconImage ? (
        <Image
          src={rarityIconImage.image}
          alt={rarityIconImage.name}
          width={50}
          height={50}
          className="rounded-[8px]"
        />
      ) : (
        <p>{amulet.rarity}</p>
      )}

      {typeIconImage ? (
        <Image
          src={typeIconImage.image}
          alt={typeIconImage.name}
          width={50}
          height={50}
          className="rounded-[8px]"
        />
      ) : (
        <p>{amulet.type}</p>
      )}

      {categoryIconImage ? (
        <Image
          src={categoryIconImage.image}
          alt={categoryIconImage.name}
          width={50}
          height={50}
        />
      ) : (
        <p>{amulet.category}</p>
      )}
    </div>
  );
};

export default AmuletDetailIcons;
