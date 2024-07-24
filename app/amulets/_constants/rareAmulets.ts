import { Amulet } from "../_types/types";

export const rareAmulets: Amulet[] = [
  {
    id: "cl4f3bdacef2854524872e31e7",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl4f3bdacef2854524872e31e7.webp",
    info: "ひまわりの花を育て続ける魔法使い少女。\n彼女はひまわりが大好きが故に、ひまわりがより育つことを望み魔法使いとなった。\n彼女は天気や光の魔法を扱い、夏になると一面黄色の世界を作り上げる。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "ひまわり農家(Nature)",
    spec: {
      status: { hp: 1425, atk: 475, def: 320, spd: 270 },
      skill: [
        {
          title: "集陽術：サンギャザリング",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "天操術：ブレイククラウド", desc: "敵全員に大ダメージ" },
        {
          title: "「ひまわりには晴れなんだよ！」",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
];
