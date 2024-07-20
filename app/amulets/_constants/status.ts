// 1レベルごとのステータス上昇値
export const statusIncreasePerLevel = [
  {
    rarity: "LEGENDARY",
    status: [
      { element: "FIRE", hp: 98, atk: 34, def: 26, spd: 19 },
      { element: "WATER", hp: 95, atk: 33, def: 27, spd: 20 },
      { element: "NATURE", hp: 98, atk: 32, def: 26, spd: 21 },
      { element: "EARTH", hp: 101, atk: 34, def: 25, spd: 19 },
      { element: "POISON", hp: 95, atk: 32, def: 27, spd: 21 },
      { element: "THUNDER", hp: 101, atk: 33, def: 25, spd: 20 },
    ],
  },
  {
    rarity: "EPIC",
    status: [
      { element: "FIRE", hp: 83, atk: 29, def: 22, spd: 16 },
      { element: "WATER", hp: 80, atk: 28, def: 23, spd: 17 },
      { element: "NATURE", hp: 83, atk: 27, def: 22, spd: 18 },
      { element: "EARTH", hp: 86, atk: 29, def: 21, spd: 16 },
      { element: "POISON", hp: 80, atk: 27, def: 23, spd: 18 },
      { element: "THUNDER", hp: 86, atk: 28, def: 21, spd: 17 },
    ],
  },
  {
    rarity: "RARE",
    status: [
      { element: "FIRE", hp: 68, atk: 23, def: 18, spd: 14 },
      { element: "WATER", hp: 68, atk: 23, def: 18, spd: 14 },
      { element: "NATURE", hp: 68, atk: 23, def: 18, spd: 14 },
      { element: "EARTH", hp: 68, atk: 23, def: 18, spd: 14 },
      { element: "POISON", hp: 68, atk: 23, def: 18, spd: 14 },
      { element: "THUNDER", hp: 68, atk: 23, def: 18, spd: 14 },
    ],
  },
];

// アナザーの追加ステータス（1レベルごとのステータス上昇値に加算する）
export const anotherAdditionalStatus = {
  hp: 7,
  atk: 3,
  def: 2,
  spd: 1,
};

export const statusIncreasePerNFT = [
  {
    rarity: "LEGENDARY",
    hp: 980,
    atk: 330,
    def: 260,
    spd: 200,
  },
  {
    rarity: "EPIC",
    hp: 581,
    atk: 196,
    def: 154,
    spd: 119,
  },
  {
    rarity: "RARE",
    hp: 408,
    atk: 138,
    def: 108,
    spd: 84,
  },
  {
    rarity: "COMMON",
    hp: 265,
    atk: 90,
    def: 70,
    spd: 55,
  },
];

// NFTによるステータス上昇値が通常と異なるアミュレット
export const oldLegendaryAmulets = [
  "サンタクロース（レッド）(Thunder)",
  "サンタクロース（レッド）(Fire)",
  "ゲームプロデューサー(Earth)",
  "ゲームプロデューサー(Fire)",
  "ハッピーニューイヤーマン2022(Earth)",
  "ハッピーニューイヤーマン2021(Water)",
  "拷問師(Poison)",
  "受け子(Earth)",
  "名義貸し(Nature)",
  "官僚(Fire)",
  "蛇使い(Water)",
  "銀行業界人(Poison)",
  "銀行業界人(Thunder)",
  "銀行業界人(Nature)",
  "裁判官(Earth)",
  "裁判官(Fire)",
  "眼科医(Thunder)",
  "眼科医(Nature)",
  "眼科医(Water)",
  "ブロックチェーンエンジニア(Thunder)",
  "ブロックチェーンエンジニア(Nature)",
  "ブロックチェーンエンジニア(Water)",
  "ブロックチェーンエンジニア(Fire)",
  "稲作農家(Earth)",
  "稲作農家(Poison)",
  "稲作農家(Thunder)",
  "稲作農家(Nature)",
  "稲作農家(Water)",
  "稲作農家(Fire)",
];
