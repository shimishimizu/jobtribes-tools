import { Amulet } from "../_types/types";

export const commonAmulets: Amulet[] = [
  {
    id: "cl3efff81664844d65ba58924d",
    rarity: "COMMON",
    element: "FIRE",
    image: "/images/amulets/common/cl3efff81664844d65ba58924d.webp",
    info: "特にキャンディーやチョコレートを製造・加工するのを得意とするパティシエ。\nハロウィンの時期になるとまるで魔法のように、彼女の周りにはお菓子の雨が降ると言われている。\n「いたずらよりもたくさんのお菓子～！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ハロウィンスイーツパティシエ(Fire)",
    spec: {
      status: { hp: 1095, atk: 365, def: 288, spd: 186 },
      skill: [
        { title: "ジャックオーのスイーツボックス", desc: "バジェットを増やす" },
        { title: "カゴいっぱいのキャンディー", desc: "味方1体のHP大回復" },
        {
          title: "チョコレートレイン",
          desc: "ランダムな敵に2回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "cl1d8b4e33b9fc412387ba3f49",
    rarity: "COMMON",
    element: "EARTH",
    image: "/images/amulets/common/cl1d8b4e33b9fc412387ba3f49.webp",
    info: "夏と冬の季節に街にやって来る麺職人。\n彼は拳法のように麺を打ち、まるで絹糸を織るように\n麺を束ね上げる。\n「夏はツルっと！冬はホッコリ熱っちゃ！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "そうめん職人(Earth)",
    spec: {
      status: { hp: 1050, atk: 365, def: 308, spd: 180 },
      skill: [
        { title: "斬術：板切", desc: "敵1体に特大ダメージ" },
        {
          title: "棒術：刃獅異霊",
          desc: "味方全員のSPDを大幅に上げるが、自分は致命的なダメージを受ける。3ターン有効",
        },
        {
          title: "製麺術：古依",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
];
