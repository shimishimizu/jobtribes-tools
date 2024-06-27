// 1レベルごとのステータス上昇値
export const statusIncreasePerLevel = [
  {
    rarity: "LEGENDARY",
    element: "FIRE",
    hp: 98,
    atk: 34,
    def: 26,
    spd: 19,
  },
  {
    rarity: "LEGENDARY",
    element: "WATER",
    hp: 95,
    atk: 33,
    def: 27,
    spd: 20,
  },
  {
    rarity: "LEGENDARY",
    element: "NATURE",
    hp: 98,
    atk: 32,
    def: 26,
    spd: 21,
  },
  {
    rarity: "LEGENDARY",
    element: "EARTH",
    hp: 101,
    atk: 34,
    def: 25,
    spd: 19,
  },
  {
    rarity: "LEGENDARY",
    element: "POISEN",
    hp: 95,
    atk: 32,
    def: 27,
    spd: 21,
  },
  {
    rarity: "LEGENDARY",
    element: "THUNDER",
    hp: 101,
    atk: 33,
    def: 25,
    spd: 20,
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
  // { @todo: 旧レジェへの対応
  //   rarity: "LEGENDARY",
  //   a: 'old',
  //   hp: 75?,
  //   atk:
  //   def:
  //   spd:
  // },
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
