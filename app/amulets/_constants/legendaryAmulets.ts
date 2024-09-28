import { Amulet } from "../_types/types";

export const legendaryAmulets: Amulet[] = [
  {
    id: "clec467eafaac74182b3e63abc",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clec467eafaac74182b3e63abc.webp",
    info: "JobTribesの世界で遠く東の地の文化を広めるためにやってきた。\n彼の演じる演目はまるでそこにかつて居た亡霊が命を吹き込まれたかのように見えると人々は語る。\n「某が語るはかつてこの地を滅ぼした鬼哉」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "【悪鬼の語部】能楽師(Fire)",
    spec: {
      status: { hp: 2130, atk: 690, def: 520, spd: 390 },
      skill: [
        {
          title: "シテ型「鬼」",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
        {
          title: "ワキ型「僧侶」",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        { title: "囃子型「四拍子」", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cla5b18811a5e84d45bb2ded10",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cla5b18811a5e84d45bb2ded10.webp",
    info: "JobTribesの世界で遠く東の地の文化を広めるためにやってきた。\n彼の演じる演目はまるでそこにかつて居た亡霊が命を吹き込まれたかのように見えると人々は語る。\n「某が見せるはかつてこの地に縛られた霊也」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "【霊現の言霊】能楽師(Earth)",
    spec: {
      status: { hp: 2130, atk: 690, def: 520, spd: 390 },
      skill: [
        {
          title: "シテ型「亡霊」",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "ワキ型「祈祷師」",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        { title: "狂言型「居語アイ」", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "パライズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl6b6215d1b4df40e8bc7d2921",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl6b6215d1b4df40e8bc7d2921.webp",
    info: "なんとも（彼らよりは遥かに）大きなものの作成を依頼された妖精たち。\nいつもよりリズミカルに作業を進めていく彼らは、今度も魔法を起こすに違いない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "グッズクリエイター(Poison)",
    spec: {
      status: { hp: 1905, atk: 635, def: 532, spd: 399 },
      skill: [
        {
          title: "「ちょきちょきぬいぬい…」",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "「おっきくつくるよ～」",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "「ふたをとじるね～！」",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cl48d438da079b4ca6bd62a914",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl48d438da079b4ca6bd62a914.webp",
    info: "お菓子にするための海老を獲りに来た少女。\n海老の姿に半身を変身させることで仲間意識を高めて、毎度大漁で帰っていく。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "えび漁師(Water)",
    spec: {
      status: { hp: 1950, atk: 610, def: 560, spd: 384 },
      skill: [
        {
          title: "あみいっぽんづり！",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "たいりょうとまらない！？",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "おうぎ「えびにんぎょ」",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl1d221a7a26ad43dda6cfd6b5",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl1d221a7a26ad43dda6cfd6b5.webp",
    info: "ヒット曲を世に出すためには時に休息が必要不可欠。\n彼の秘書がすっと取り出したのは異世界で長年愛され続けている短い棒状のスナック菓子だった。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "【じゃがりこ】音楽プロデューサー(Thunder)",
    spec: {
      status: { hp: 1950, atk: 620, def: 552, spd: 384 },
      skill: [
        {
          title: "減速せしチルアウト",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        { title: "「まぁ、一本」", desc: "味方全員のHP回復" },
        {
          title: "販促グッズの接触テスト",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "cl108116c2464444889d5bf78c",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl108116c2464444889d5bf78c.webp",
    info: "ひよこを愛し、見極め、共にする、そのお休みはまるで悠久。\nやめられない、とまらないスナック菓子を頬張る彼女の休日は始まったばかりだ。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "【かっぱえびせん】ひよこ鑑定士(Earth)",
    spec: {
      status: { hp: 1920, atk: 700, def: 504, spd: 378 },
      skill: [
        {
          title: "スナックラッシュ",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "特製のパジャマ",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "「君たちも食べるかい？なんてね」",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
      ],
    },
  },
  {
    id: "clc5bfe991136843aeb3280f07",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clc5bfe991136843aeb3280f07.webp",
    info: "イラスト：徳之ゆいか\n常に全力で元気いっぱいのムードメーカー。持ち前の人懐っこさと好奇心でトラブルを引き起こすこともしばしば。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Amelia (クリエーターコラボ)(Nature)",
    spec: {
      status: { hp: 1875, atk: 675, def: 500, spd: 405 },
      skill: [
        {
          title: "Ameliaの輝き",
          desc: "召喚時に100%の確率でATKを大幅に上げる。1ターン有効",
        },
        {
          title: "Eternal Promise",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "歌ってすごいパワーがあるよねっ！",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "clb0d57c2f0b124fd3a2fc8abf",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clb0d57c2f0b124fd3a2fc8abf.webp",
    info: "イラスト：MISUBARU＋ 御統リン\n歌もダンスも得意な優等生。やや人見知りなところがあるが、本当はみんなともっと仲良くなりたい。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Sophia (クリエーターコラボ)(Water)",
    spec: {
      status: { hp: 1920, atk: 610, def: 552, spd: 396 },
      skill: [
        {
          title: "Sophiaの輝き",
          desc: "召喚時に100%の確率でDEFを大幅に上げる。1ターン有効",
        },
        {
          title: "花唄",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        { title: "唄うアイドルになる！", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl7dae39d3d7634ba3b8929aa3",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl7dae39d3d7634ba3b8929aa3.webp",
    info: "イラスト：MISUBARU＋ 高司\n常にまわりを楽しませたいと考えているエンターテイナー。身体能力が高く身軽で華やかなダンスを披露する。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Youran (クリエーターコラボ)(Fire)",
    spec: {
      status: { hp: 1920, atk: 690, def: 512, spd: 378 },
      skill: [
        {
          title: "Youranの輝き",
          desc: "召喚時に100%の確率でSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "Unchained Hearts",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "楽しませることに才能なんて関係ない",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl06069d346a464b329c3a640e",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl06069d346a464b329c3a640e.webp",
    info: "イラスト：大熊まい\nいつもニコニコと仲間たちを見守るお姉さん。アイドルとしての実力も高く、一目置かれる存在。しかし…",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【B-idol】Camille (クリエーターコラボ)(Thunder)",
    spec: {
      status: { hp: 2025, atk: 685, def: 524, spd: 411 },
      skill: [
        {
          title: "Camilleの輝き",
          desc: "召喚時に100%の確率でSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "Vivid! Girly!",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        {
          title: "応援するアイドルになりたいんです",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
      ability: [
        {
          title: "ポイズンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clbfff1b5be7aa4931a3c11548",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clbfff1b5be7aa4931a3c11548.webp",
    info: "南の国の遺跡調査ついでに海を満喫する考古学者。\n傍ら後輩はいなくなった彼女を探しに迷宮へ潜ったというのに…\n「行先くらい書いてきたらよかったかしら？」",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "【常夏の探究】考古学者(Nature)",
    spec: {
      status: { hp: 1950, atk: 705, def: 520, spd: 417 },
      skill: [
        {
          title: "夏・海・発見！",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "砂の城創作ツール",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "「できたわ、砂の迷宮」",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clec11e985a7154be4a11b79af",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clec11e985a7154be4a11b79af.webp",
    info: "船の上でのブライダル体験をすることになった航海士。\nベールボーイは海のカモメたちに任せることに。\n「いつか私も海の上で結婚できたらなぁ…なんてね」",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "【蒼海の花嫁】航海士(Poison)",
    spec: {
      status: { hp: 1950, atk: 650, def: 560, spd: 420 },
      skill: [
        {
          title: "海上のブルードレス",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "操舵輪にかけた誓いの言葉",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "式場への海図",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "ダークネスレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl34060d4f9a5548f0bcb121d4",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl34060d4f9a5548f0bcb121d4.webp",
    info: "仕事が成功し、遠い異世界の文化を取り入れた衣装の依頼が来るようになった彼女。\nやはり彼女の織る衣服は上物であり、世界中の貴族がそれを欲しがるように。\n「人間のお祝いの服になるなら、私も着てみたいですね」",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "【紡ぐ赤糸】網職人(Fire)",
    spec: {
      status: { hp: 1980, atk: 720, def: 528, spd: 396 },
      skill: [
        {
          title: "運命の硬い糸",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        {
          title: "アラクネイドの白無垢",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "レッドネット＝プレッジ",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl15ee43a6012a4ab98bc8a298",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl15ee43a6012a4ab98bc8a298.webp",
    info: "うつくしき月よ、そなたはこれからおこることを見ないほうがよい。みにくい血でそまりたくないならば。",
    category: "アンノウン",
    type: "ANOTHER",
    name: "シレーヌ(Fire)",
    spec: {
      status: { hp: 1920, atk: 675, def: 528, spd: 435 },
      skill: [
        {
          title: "高速飛行",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "悪魔のかぎ爪",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        { title: "妖鳥のはばたき", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl1d1260a6e75b4ff6b75982a4",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl1d1260a6e75b4ff6b75982a4.webp",
    info: "JobTribesの案内役を務める少女。\n前回の戦いからさらに自分の魔力に向き合い、より繊細かつ煌びやかな自分の魔力特製を伸ばした。\n「今回も迎え撃つだけ、余裕っしょ」",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【白零の案内人】キリ(Water)",
    spec: {
      status: { hp: 1950, atk: 650, def: 580, spd: 405 },
      skill: [
        {
          title: "刹那＝陰ルル凍星",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
        {
          title: "曇天＝連ナル氷柱",
          desc: "敵1体に特大ダメージを与え、確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        {
          title: "「負けるはず、ない…！」",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
      ],
      ability: [
        {
          title: "バーンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl01611aac7da846aea2c22c4a",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl01611aac7da846aea2c22c4a.webp",
    info: "JobTribesの案内役を務める少女。\n前回キリに負けたのをきっかけに、もう一つの自分の力に目覚め、覚醒を果たした。\n「この力で今度こそキリちゃんに勝ぁつ！」",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【焔雷の案内人】リカ(Thunder)",
    spec: {
      status: { hp: 1950, atk: 650, def: 540, spd: 435 },
      skill: [
        {
          title: "第弐魔力：スパークフレア",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        {
          title: "ライトニング＝ボルケーノ",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        {
          title: "「キリに負けてたまるかぁ！」",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
      ],
      ability: [
        {
          title: "ポイズンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clff59abc8967d4ac6aee0fcea",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clff59abc8967d4ac6aee0fcea.webp",
    info: "自らAMPを結成した署長でAMPの対外交渉をすべてこなしている。妖魔と人間の混血であり、前線に立つ事は少ないが自身も強大な魔力を誇る。",
    category: "アンノウン",
    type: "NORMAL",
    name: "ラリー・シャイアン(Thunder)",
    spec: {
      status: { hp: 2100, atk: 625, def: 520, spd: 375 },
      skill: [
        { title: "エネルギー波", desc: "敵全員のSPDを下げる。3ターン有効" },
        {
          title: "障壁",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "鬼幻星ネメシス",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "clfe9412fa475e4a649ebbd19e",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clfe9412fa475e4a649ebbd19e.webp",
    info: "日本の祭礼を古代から取りしきる名家の侍女。常に巫女装束を纏い、その上にAMPのマントを羽織るだけのスタイルはラリーを悩ませている。",
    category: "アンノウン",
    type: "NORMAL",
    name: "闇雲那魅(Poison)",
    spec: {
      status: { hp: 1950, atk: 650, def: 480, spd: 420 },
      skill: [
        {
          title: "神道",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "天之四霊",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "聖獣麒麟", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cled5bf227def84c2a9727a9b8",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cled5bf227def84c2a9727a9b8.webp",
    info: "特α級のヴィジョネイルと呼ばれるハッカーで、電脳世界では無敵を誇る。三種の神器と呼ばれる人工知能とビーム攻撃が可能な人工衛星が武器。",
    category: "アンノウン",
    type: "NORMAL",
    name: "レビア・マーベリック(Earth)",
    spec: {
      status: { hp: 1800, atk: 700, def: 520, spd: 390 },
      skill: [
        {
          title: "特α級ヴィジョネイル",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "三種の神器",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        {
          title: "人工衛星「ドナルド」",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clb1a87d9253c24e4c81788124",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clb1a87d9253c24e4c81788124.webp",
    info: "大魔導士ギゲルフを父に持ち、13の惑星霊を操る事ができる人類最強の魔導士。人間界と妖魔が棲む邪界を繋ぐ役割を持つといわれている。",
    category: "アンノウン",
    type: "ANOTHER",
    name: "香津美・リキュール(Fire)",
    spec: {
      status: { hp: 1950, atk: 725, def: 520, spd: 405 },
      skill: [
        {
          title: "精霊魔法",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "惑星霊魔法",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        {
          title: "剣皇グロスポリナー",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl824e425bbb23485a9f99a437",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl824e425bbb23485a9f99a437.webp",
    info: "大魔導士ギゲルフを父に持ち、13の惑星霊を操る事ができる人類最強の魔導士。人間界と妖魔が棲む邪界を繋ぐ役割を持つといわれている。",
    category: "アンノウン",
    type: "NORMAL",
    name: "香津美・リキュール(Water)",
    spec: {
      status: { hp: 1950, atk: 625, def: 560, spd: 375 },
      skill: [
        { title: "精霊魔法", desc: "召喚時にDEFを大幅にあげる。1ターン有効" },
        {
          title: "惑星霊魔法",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        { title: "剣皇グロスポリナー", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl6b61979e2c9a43c896a24e69",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl6b61979e2c9a43c896a24e69.webp",
    info: "殺人メガダイン「ワイヤー」との戦いで重症を負い、身体の70%をアーマーコートした戦闘用サイボーグ。物理的な戦いではAMP最強と名高い。",
    category: "アンノウン",
    type: "NORMAL",
    name: "キディ・フェニル(Nature)",
    spec: {
      status: { hp: 1875, atk: 650, def: 500, spd: 420 },
      skill: [
        {
          title: "アーマーコート",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "仮死化", desc: "敵1体に特大ダメージ" },
        {
          title: "グラビトン",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl05a5691a066041b1946e1667",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl05a5691a066041b1946e1667.webp",
    info: "AMP最年少の人工超能力者。普段は喫茶店で働いているが、人間兵器YLPER WEAPON開発計画の生き残りで、様々な超能力を駆使して戦う。",
    category: "アンノウン",
    type: "NORMAL",
    name: "彩弧由貴(Fire)",
    spec: {
      status: { hp: 1875, atk: 700, def: 500, spd: 390 },
      skill: [
        { title: "YLPER", desc: "召喚時にSPDをあげる。3ターン有効" },
        { title: "サイコキネシス", desc: "敵全員に大ダメージ" },
        { title: "予知", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl3b763d68068d48ebba7a65d2",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl3b763d68068d48ebba7a65d2.webp",
    info: "世にも珍しいスパイスを自在に操る魔法を扱う魔法使い。\n彼女の扱うスパイスで作るカレーは「七色のカレー」と言われており、\n文字通りあらゆる色のカレーを作り出すことができる。\n付け合わせる主食は彼女の自作である。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "インドカレー屋(Earth)",
    spec: {
      status: { hp: 1875, atk: 650, def: 500, spd: 420 },
      skill: [
        {
          title: "華麗曼荼羅",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "香辛術：ホットドラゴン",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "魔具：ガネーシャの窯",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl19d29f7023bf4e4d9ffff5dc",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl19d29f7023bf4e4d9ffff5dc.webp",
    info: "遥か遠い国の「ワビサビ」を心火に和菓子を作り続ける少女。\n彼女の残術は極めて細かく、やわらかい餡を瞬時に綺麗な花形に仕上げてしまう。\nまた彼女は思い描いた季節を水球の中に具現化する魔術の達人でもある。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "和菓子職人(Water)",
    spec: {
      status: { hp: 1995, atk: 625, def: 500, spd: 411 },
      skill: [
        {
          title: "四季術：雛花創菓",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        {
          title: "練切小斬",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        { title: "形成：はさみ菊", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cle93afdb0ed53400aa949c732",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cle93afdb0ed53400aa949c732.webp",
    info: "「我が一座で1番不思議なピエロのご登場！こいつの早業を見逃さずに\n玉の在り処を当てられた方にはなんと賞金を差し上げます！\nもちろん、当てられた方はですが…さて！銀のボールはどこに！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "ジャグラー(Poison)",
    spec: {
      status: { hp: 2010, atk: 665, def: 536, spd: 417 },
      skill: [
        {
          title: "空間魔法：ディバイドポケット",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "分身魔法：ツーバイスリー",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "魔具：ペテンの手袋",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
      ability: [
        {
          title: "ダークネスレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clce0a3f1bc2d84edbb2be90c3",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clce0a3f1bc2d84edbb2be90c3.webp",
    info: "「危険危険だこいつは危険！気性の荒さ故\n人間には懐かないと名高いエメラルドビースト！こいつを手なずけるは\n我が一座自慢の猛獣遣い！勝つのは獣か人間か！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "猛獣使い(Nature)",
    spec: {
      status: { hp: 2100, atk: 650, def: 560, spd: 390 },
      skill: [
        {
          title: "召喚術：エメラルドビースト",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        { title: "魔具：猛る獅子の飾り", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "魔具：テイマーのサーベル",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clb1b4630b0ae44e8e91d9f1df",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clb1b4630b0ae44e8e91d9f1df.webp",
    info: "「お待たせいたしました！世界最大の最高のショーの開幕でございます！」\nそう言い放った彼がハットを被ると団員たちの目つきが変わる。\n「今宵皆様には見たこともないような驚きと感動を！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "サーカス支配人(Thunder)",
    spec: {
      status: { hp: 1980, atk: 700, def: 516, spd: 417 },
      skill: [
        {
          title: "「紳士淑女の皆々様！」",
          desc: "召喚時に確率でSPDを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、SPDの上昇量が上がる。3ターン有効 対象アミュレット：Fire Breather,Tightrope Walker,Beast Tamer,Juggler,Trapeze Artist",
        },
        { title: "封鎖＝ビーストバインド", desc: "敵1体に特大ダメージ" },
        {
          title: "魔具：支配のハット",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
      ],
      ability: [
        {
          title: "ポイズンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl78cf02c62e1649c1b4150d61",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl78cf02c62e1649c1b4150d61.webp",
    info: "「こいつは世にも珍しい火吹き男！\n生まれはドラゴンの谷！なんと火の龍に育てられたドラゴンの子供なのです！\n火を吹くだけでなく火を操る様を\nとくとご覧ください！！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "火吹き(Fire)",
    spec: {
      status: { hp: 1890, atk: 705, def: 552, spd: 405 },
      skill: [
        {
          title: "火耐性：ドラゴンスケイル",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "サラマンダーブレス",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "火操術：フレアサークル", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl725185abf62a40ba9e8194cb",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl725185abf62a40ba9e8194cb.webp",
    info: "「続いて綱を渡るは氷の魔導士！\nただの綱渡りと侮ることなかれ！得意な氷の魔法で\n1歩ずつ重りを大きくして綱を渡ってご覧にいれます！\nさぁお立合い！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "つな渡り(Water)",
    spec: {
      status: { hp: 2040, atk: 650, def: 520, spd: 432 },
      skill: [
        {
          title: "神がかったバランス感覚",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "氷魔法：ピンポイントフリーズ",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        {
          title: "空魔法：スカイウォーク",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "バーンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cl218d1cc0d6f041aa98128b1b",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl218d1cc0d6f041aa98128b1b.webp",
    info: "「おやおや空中ブランコで準備をしているのは我が一座の最高のパフォーマーにございます！\n麗しきその姿で今宵も皆さまの空を自由に！華麗に！飛び回ってくれるでしょう！\n大きな拍手でお迎えください！」",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "空中ブランコ(Earth)",
    spec: {
      status: { hp: 2025, atk: 680, def: 536, spd: 405 },
      skill: [
        {
          title: "変身魔法：バタフライウイング",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "召喚術：レインモルフォ",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        { title: "紙一重のキャッチ術", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "パライズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clf4afba7a4d2441e0b7bec260",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clf4afba7a4d2441e0b7bec260.webp",
    info: "世界中のギルドであらゆる人材を紹介することのできる魔導士。\n彼女の魔具は人間以外にも、亜人、魔族、はたまた獣族まで\nどのような人材が必要かを瞬時に判断し紹介することが可能なのである。",
    category: "サービス",
    type: "NORMAL",
    name: "人材紹介エージェント(Thunder)",
    spec: {
      status: { hp: 2010, atk: 610, def: 544, spd: 384 },
      skill: [
        {
          title: "解析術：チームアナライズ",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "「じゃあ、この子はいかがかしら？」",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "魔具：アカシックの知恵",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cleaa2f9a246724dbf935a3598",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cleaa2f9a246724dbf935a3598.webp",
    info: "人間界とデジタル世界の両方を繋ぐことができるエンジニア。\n片方は界を走りデータの在り処を調査し、もう片方は\n3Dアバターであらゆるコードを走らせる。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "デジタルツインエンジニア(Water)",
    spec: {
      status: { hp: 1980, atk: 635, def: 500, spd: 408 },
      skill: [
        {
          title: "リバース＝コード",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        {
          title: "リアルxデジタルコンバート",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "バース＝レコード",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clb553d9f8a9dc49638e0b63d1",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clb553d9f8a9dc49638e0b63d1.webp",
    info: "アパレルアイテムをNFT化し売り歩いていた人間。\nとある日にJobTribesの世界と人間の世界を繋ぐ境界の存在に気付いてしまい、\n面白そうという理由で迷い込んだ。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "バーチャルアパレルNFTショップ店員(Fire)",
    spec: {
      status: { hp: 1905, atk: 675, def: 512, spd: 390 },
      skill: [
        {
          title: "付加価値のエンチャント",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "唯一性のデザイン権利",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "「これ？全部私のもの」",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
      ],
    },
  },
  {
    id: "clab3f5148fe4540bb99659927",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clab3f5148fe4540bb99659927.webp",
    info: "JobTribesの世界で様々なギルドの相談役を生業としている者。\n彼女の持つ魔具はあらゆる事象計算を行い、ロードマップの1点を変えるだけで何通りもの未来を計算する。",
    category: "サービス",
    type: "NORMAL",
    name: "ファイナンシャルプランナー(Nature)",
    spec: {
      status: { hp: 2025, atk: 600, def: 540, spd: 390 },
      skill: [
        {
          title: "魔具：神々のロードマップ",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "分析術：ウィークアナライズ",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        {
          title: "「このままじゃ破産しますよ？」",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl7492c88b62204c6fa01c8240",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl7492c88b62204c6fa01c8240.webp",
    info: "様々な霊を召喚し、使役する門者。\nどんな霊であろうと仲間にすることができるが、\n霊を自由自在に操るには霊との対話技術が必要である。\n彼女は霊と「話せる」「声を聞ける」ため召霊師となった。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "召霊師(Poison)",
    spec: {
      status: { hp: 1980, atk: 630, def: 528, spd: 390 },
      skill: [
        {
          title: "使役術：ゴーストタッチ",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        {
          title: "二重召霊：デュアルキャスパー",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "傍聴術：ヒアリングウィスパー",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl74073fa8d6ed45cdbe4e9285",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl74073fa8d6ed45cdbe4e9285.webp",
    info: "人間の世界から転移してきたメンタルに対してのスペシャリスト。\nJobTribesの世界では人間界で培ったその技術をギルド内で行ったことで\nそれを各国から賞賛されている。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "メンタルトレーナー(Earth)",
    spec: {
      status: { hp: 1980, atk: 620, def: 552, spd: 378 },
      skill: [
        {
          title: "心のダンベル：マッスルハート",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        {
          title: "「あなたならきっとできるわ！」",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        {
          title: "精神の矯正ギプス",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cld7375cbb6a854326a1bc1f69",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cld7375cbb6a854326a1bc1f69.webp",
    info: "人界のバレンタインを盛り上げるために天の技術を使う堕天使。\n元々は天界の遣いであったが、バレンタインに人間の感情をコントロールしすぎたがために\n堕天してしまった。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "チョコレート専門店(Poison)",
    spec: {
      status: { hp: 1890, atk: 670, def: 536, spd: 378 },
      skill: [
        {
          title: "相手を惑わす甘い選択",
          desc: "召喚時に確率でDEFを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、DEFの上昇量が上がる。3ターン有効 対象アミュレット：Cookie Shop Owner,Chocolate Artisan",
        },
        { title: "ビターデコレーションソード", desc: "敵1体に特大ダメージ" },
        {
          title: "「これを食べたらイチコロね」",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl8066842b635246efae172fb1",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl8066842b635246efae172fb1.webp",
    info: "バレンタインを別の角度から盛り上げるクッキー屋さん。\n自前のクッキーバズーカをバレンタイン用に改造し、撃ったクッキーを\n瞬時にチョコクッキーに変化させるアタッチメントの開発に成功した。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "クッキー屋(Earth)",
    spec: {
      status: { hp: 1830, atk: 660, def: 540, spd: 393 },
      skill: [
        {
          title: "相手が喜ぶ甘い弾丸",
          desc: "召喚時に確率でSPDを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、SPDの上昇量が上がる。3ターン有効 対象アミュレット：Chocolate Shop Owner,Chocolate Artisan",
        },
        {
          title: "チョコクッキーバズーカ",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "「伝えたいなら撃っちまいな！」", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "clafeca6a79ba94969b41dc1a8",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clafeca6a79ba94969b41dc1a8.webp",
    info: "わたしはゆるせなかった！　わたしが命をかけてまもった地球をよごした人間を！",
    category: "アンノウン",
    type: "NORMAL",
    name: "大魔神サタン(Thunder)",
    spec: {
      status: { hp: 1890, atk: 630, def: 504, spd: 426 },
      skill: [
        { title: "天使の知略", desc: "召喚時に確率でSPDをあげる。3ターン有効" },
        {
          title: "光の柱",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "アーマゲドン",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cl827641f817e4460e8724bb96",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl827641f817e4460e8724bb96.webp",
    info: "悪魔のからだを手にいれたぞ！　おれは！　おれは！　悪魔人間だ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【阿修羅地獄】不動明(Earth)",
    spec: {
      status: { hp: 2070, atk: 650, def: 528, spd: 360 },
      skill: [
        {
          title: "了との友情",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "悪魔の力",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        { title: "勇者アモン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl6cd3b88ebfe1442b818beab2",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl6cd3b88ebfe1442b818beab2.webp",
    info: "これが！　これが！　おれが身をすててまもろうとした人間の正体か！　きさまらこそ悪魔だ！　地獄へおちろ人間ども！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【怒りの炎】デビルマン(Fire)",
    spec: {
      status: { hp: 1905, atk: 700, def: 516, spd: 372 },
      skill: [
        {
          title: "地獄の野獣",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "火焔放射",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "デビルマン軍団", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl063afc72b51744c298447665",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl063afc72b51744c298447665.webp",
    info: "おまえたちデーモン族をひとりのこらず地上からけすために生まれた悪魔、デビルマンだ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "デビルマン(Poison)",
    spec: {
      status: { hp: 2010, atk: 670, def: 536, spd: 354 },
      skill: [
        {
          title: "戦いのゴング",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "触覚攻撃", desc: "敵1体に特大ダメージ" },
        {
          title: "デビルビーム",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cld3ea46cdc128402a9c61d2c8",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cld3ea46cdc128402a9c61d2c8.webp",
    info: "独楽職人は表の顔、彼女は悪を打つため今日も人知れず夜を駆けるのだ。\n彼女お手製の仕込み独楽は様々な武器になり、高速で回るそれは突風を起こし悪を吹き飛ばすのである。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "【遊戯の義賊】独楽職人(Water)",
    spec: {
      status: { hp: 1920, atk: 670, def: 536, spd: 372 },
      skill: [
        {
          title: "火遁術：火煉独楽",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "鞭術：蛇々鬼独楽", desc: "敵全員に大ダメージ" },
        {
          title: "極芸術：凪解独楽",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "clcbffc30bd8b344ea80ad6314",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clcbffc30bd8b344ea80ad6314.webp",
    info: "独楽作りにおいて右に出るものはいないと言われる職人の少女。\n彼女の作る独楽を回すと、不思議な生物が見えると言われている。\nお手製の独楽には秘密があるらしい。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "独楽職人(Water)",
    spec: {
      status: { hp: 1920, atk: 670, def: 536, spd: 372 },
      skill: [
        {
          title: "指術：ひねり独楽",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "楽術：たたき独楽", desc: "敵全員に大ダメージ" },
        {
          title: "芸術：投げ独楽",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl7d9f046f66c54ea2878597e1",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl7d9f046f66c54ea2878597e1.webp",
    info: "遥か遠くの国から「正月」と言われる伝統を届けるためにはせ参じた旅の男。\n今は龍の仮面をつけているが去年は鼠の仮面だったとか。\n仮面は竹でできているお手製のもの。",
    category: "クラフター",
    type: "NORMAL",
    name: "門松職人(Nature)",
    spec: {
      status: { hp: 1935, atk: 630, def: 512, spd: 411 },
      skill: [
        {
          title: "千歳を契る竹",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        { title: "万歳を契る松", desc: "味方全員のSPDを上げる。3ターン有効" },
        {
          title: "神が宿る古木の鞘",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "cl59c9c815e45a49b2b63d6922",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl59c9c815e45a49b2b63d6922.webp",
    info: "降雪量の多い地域に夜な夜な姿を現す天の遣い。\n神具のスコップは見た目の約40倍ほどの雪を一度に下せる優れもの。\nそれらの地域では「雪下ろしの妖精」として噂が広がっている。",
    category: "サービス",
    type: "NORMAL",
    name: "屋根の雪下ろし(Fire)",
    spec: {
      status: { hp: 1920, atk: 625, def: 536, spd: 399 },
      skill: [
        {
          title: "ユミル神のスコップ",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        {
          title: "サラマンダーの雪落とし",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "「一晩でできるわけないだろー！！」",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
      ],
    },
  },
  {
    id: "cl1f8a549f7c444a08a70524e4",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl1f8a549f7c444a08a70524e4.webp",
    info: "クリスマスの季節になると自家製のリースを売りに人里にやってくる亜人の女性。\n彼女の住む森の木には、人の願いや祈りが込められていると言われており、\nそれを彩り、形作るのが彼女の一族の生業である。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "クリスマスリース屋(Nature)",
    spec: {
      status: { hp: 1995, atk: 655, def: 532, spd: 369 },
      skill: [
        {
          title: "祈りを鳴らすベル",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "厄を退ける柊",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        { title: "樹創術：リースメイカー", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl175ddc06bacd4c87aa7219fd",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl175ddc06bacd4c87aa7219fd.webp",
    info: "寒い季節になると天界から降りてワイン屋と手を組む遣い。\n彼女の淹れるワインを１口飲めば、たちまち体の内から温まり、寒さをもろともしないとか。\n相棒のカラスは実は専門のソムリエである。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "グリューワイン屋(Poison)",
    spec: {
      status: { hp: 1920, atk: 655, def: 504, spd: 405 },
      skill: [
        {
          title: "辛式：スターアニス",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "白式：アプフェルツィムト", desc: "敵1体に特大ダメージ" },
        {
          title: "「あら、顔が赤いわよ？」",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clb4255742c85e45a099f35d03",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clb4255742c85e45a099f35d03.webp",
    info: "人界の留守番事情を解決するために天より派遣された神。\n彼の手にかかれば悲惨だったリビングも、汚れたままの風呂も\n家を建てた時まで戻ると言われている。",
    category: "サービス",
    type: "NORMAL",
    name: "ハウスキーパー(Water)",
    spec: {
      status: { hp: 2010, atk: 630, def: 532, spd: 381 },
      skill: [
        {
          title: "十二門陣：水地千焚",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "天秤座を改造したモップ", desc: "敵1体に特大ダメージ" },
        {
          title: "枯れない水瓶座のバケツ",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl97f500eb2df4468fadc719b7",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl97f500eb2df4468fadc719b7.webp",
    info: "JobTribesの世界に古くから住む民族の娘。\n彼女の一族は鳥と共に寝食をともにし、心とつながると言われている。\n「鳥を愛すれば、世界のすべてを見渡せる」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "鳥使い(Nature)",
    spec: {
      status: { hp: 1980, atk: 660, def: 496, spd: 396 },
      skill: [
        {
          title: "鳥操術：バードハーツ",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        { title: "冠羽毛の衣", desc: "敵全員に大ダメージ" },
        {
          title: "風を眺める羽団扇",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cla28a7abc901a430ebe47c140",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cla28a7abc901a430ebe47c140.webp",
    info: "星座の導きで占いを行う魔法使いの女性。\n彼女はあらゆる星座の加護を受けており、\n「星の声」を聞くことができる。",
    category: "サービス",
    type: "NORMAL",
    name: "占星術師(Thunder)",
    spec: {
      status: { hp: 1920, atk: 670, def: 536, spd: 372 },
      skill: [
        {
          title: "天星式：黄道の導き",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "ホロスコープ：12サイン", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "守星術：スタールーラー",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl495f791a6353446aa6c604c6",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl495f791a6353446aa6c604c6.webp",
    info: "JobTribesの案内役を務める少女。\n火の魔法を扱うことに長けているが、うっかりキリを燃やしたことが何度もある。\n「3.5周年も燃えてきたー！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【熱血な案内人】リカ(Fire)",
    spec: {
      status: { hp: 1995, atk: 665, def: 508, spd: 381 },
      skill: [
        {
          title: "「3.5周年！おめでとう！」",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "火焔魔法：ファイヤーボール",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "炎熱一帯：フレイムロア", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl32a68fc6761e44cc9e6d14ec",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl32a68fc6761e44cc9e6d14ec.webp",
    info: "あらゆる形のランプをいとも簡単に造形できる職人。\nとある物語の影響で特定の形のランプをよく注文されるが、\n本当は明るくてきれいに灯るランプが作りたいと思っている。",
    category: "クラフター",
    type: "NORMAL",
    name: "ランプ職人(Poison)",
    spec: {
      status: { hp: 1980, atk: 625, def: 544, spd: 381 },
      skill: [
        {
          title: "千夜の灯り",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        { title: "一夜の燈火", desc: "敵1体に特大ダメージ" },
        { title: "「こすっても何も出ませんよ？」", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl312ad8cd2e4345cca3340655",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl312ad8cd2e4345cca3340655.webp",
    info: "JobTribesの案内役を務める少女。\n氷の魔法を扱うことを得意とするが、リカが凍った事故が多発している。\n「なんかリカ燃えてる、熱い」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【冷静な案内人】キリ(Water)",
    spec: {
      status: { hp: 1905, atk: 635, def: 532, spd: 399 },
      skill: [
        {
          title: "「3.5周年…とりあえずおめ」",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        {
          title: "凍結魔法：アイスメイカー",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        {
          title: "氷結一迅：フローズンレイ",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "clb27c1fc65ec14a3d86478fd7",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clb27c1fc65ec14a3d86478fd7.webp",
    info: "幼い頃から人里を離れ網を作り続けている異形の少女。\n彼女の編む網は世間からは”剣をも凌ぐ糸”と言われ、\n近々鎧の素材に転用されるとかなんとか。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "網職人(Fire)",
    spec: {
      status: { hp: 1845, atk: 670, def: 524, spd: 396 },
      skill: [
        { title: "召喚獣：アラクネイド", desc: "ランダムな敵に3回ダメージ" },
        { title: "鉄剛糸", desc: "味方全員のATKとDEFを上げる。3ターン有効" },
        {
          title: "レッドネット＝ドレッド",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cl88569fd6d18c4919a208509e",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl88569fd6d18c4919a208509e.webp",
    info: "JobTribesの世界にある日迷い込んだ元エッセイブロガー。\nこの世界でも何か残せないかと思考した結果、この世界を巡った自伝を書くことを決意した。\nいつか帰ったその日に、夢じゃなかったと思えるように。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "エッセイスト(Nature)",
    spec: {
      status: { hp: 1980, atk: 660, def: 528, spd: 372 },
      skill: [
        {
          title: "記憶術：久遠と彼方",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "考想術：いつかの黄昏",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        {
          title: "自伝：日が落ちる前に",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
      ],
    },
  },
  {
    id: "cl7da4420588e54c23835385f3",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl7da4420588e54c23835385f3.webp",
    info: "物語の世界の”歪み”を修正することを生業としている魔術師兄妹。\n「兄貴！見つけた、世界の誤字！」\n「またもや歪みか…美しい世界を汚すんじゃない」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "校正・校閲者(Thunder)",
    spec: {
      status: { hp: 1860, atk: 645, def: 528, spd: 405 },
      skill: [
        {
          title: "魔眼：エラーファインド",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        { title: "聖遺物：億年筆", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "世界編纂：ワールドレイアウト", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cl5cb64e39ac514ec7a8a798a9",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl5cb64e39ac514ec7a8a798a9.webp",
    info: "ハロウィンを盛り上げるためにかぼちゃの造形魔法を扱う魔導士。\n毎年作り出す彩り豊かなランタンはハロウィンの雰囲気の格を1つ引き上げるという。\n相棒のパンダの名前はパンプン。",
    category: "クラフター",
    type: "NORMAL",
    name: "ジャックオーランタン職人(Thunder)",
    spec: {
      status: { hp: 1890, atk: 675, def: 508, spd: 396 },
      skill: [
        { title: "南瓜魔法：ランタンメイク", desc: "敵全員に大ダメージ" },
        {
          title: "魔道具：ハロウィンキングの冠",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "宵闇魔法：パンプキンタウン",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl20a1f3ad53b94b56be66b562",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl20a1f3ad53b94b56be66b562.webp",
    info: "人間の血を集めるのが好きなちょっと変わった吸血鬼。\n彼女はその美貌で年間何千人と献血に協力してもらっており、\n時折人界の医療に貢献しているという噂。",
    category: "医療",
    type: "NORMAL",
    name: "献血看護師(Poison)",
    spec: {
      status: { hp: 1950, atk: 630, def: 512, spd: 408 },
      skill: [
        {
          title: "ノーペインニードル",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "千を超える血液コレクション",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "「チクっとするから」",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clba6da0e3f70741159c5f93c8",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clba6da0e3f70741159c5f93c8.webp",
    info: "天より人界の赤子を守るためにはせ参じた遣い。\nミルクを両手で扱い、最大4人までの赤ちゃんをおんぶにだっこできる。\n「羽は引っ張らないでね？」",
    category: "サービス",
    type: "NORMAL",
    name: "ベビーシッター(Nature)",
    spec: {
      status: { hp: 1980, atk: 630, def: 548, spd: 375 },
      skill: [
        { title: "飛翔術：高位多界", desc: "敵1体に特大ダメージ" },
        {
          title: "守護術：音舞抱子",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        { title: "二刀流：ミルクシェイカー", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "clb5d4d64148704865b1eafccf",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clb5d4d64148704865b1eafccf.webp",
    info: "世界中のライブやクラブで映像を駆使してフロアを盛り上げる天才少女。\nリアルタイムな映像変化は正に視界をジャックされる。\n「あたしじゃなくて、映像にご注目～！」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "VJ(Poison)",
    spec: {
      status: { hp: 1995, atk: 650, def: 536, spd: 369 },
      skill: [
        { title: "縦揺れフロアの横振りワイプ", desc: "敵全員に大ダメージ" },
        {
          title: "じわじわフェードアウト",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        {
          title: "視界ジャックなジョッキー少女",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "claf5f1b911b314234b37c1d6a",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/claf5f1b911b314234b37c1d6a.webp",
    info: "50年後の未来からやってきた少女。\n彼女は自立思考を行う未来のAIを搭載しており、\n終わる世界の未来を自己創造したAIで是正することを目的としている。\n「命は簡単、心は難しい…」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "AIクリエイター(Thunder)",
    spec: {
      status: { hp: 1950, atk: 650, def: 520, spd: 390 },
      skill: [
        {
          title: "START：始まりの術",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "VOID：空っぽの命",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "END IF：もしもの世界を", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl8468b7c5599d4717819f3a65",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl8468b7c5599d4717819f3a65.webp",
    info: "AIで医療現場を支援するスペシャリスト。\n様々な生物を解析し、性質を理解し、あらゆる可能性と\n組み合わせで未知の医薬品を想像する。\nAIと医療双方の知識を要するため、この職業に就くにはあらゆる知識が必要になる。",
    category: "医療",
    type: "NORMAL",
    name: "AI支援医療技師(Water)",
    spec: {
      status: { hp: 1860, atk: 660, def: 528, spd: 396 },
      skill: [
        {
          title: "手術：ファーストチェック",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "解析：ゲノム因子",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "創造：アンノウンドラッグ",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clc8a205bdfac2424fb1733fc8",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clc8a205bdfac2424fb1733fc8.webp",
    info: "インフルエンサー「水川美南」が職業神となった世界線。\n海の生物たちと心を通わせ、すぐ仲良しになる少女。\n実は人魚に育てられた経験があり、幼少期の大半を海で過ごしていた。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インフルエンサー総選挙】水川美南(Water)",
    spec: {
      status: { hp: 1995, atk: 655, def: 536, spd: 366 },
      skill: [
        {
          title: "ツインドルフィンリング",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "エコー＝エコー",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "マリンスプラッシュ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clc7716ca10cf943c1b0b36b47",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clc7716ca10cf943c1b0b36b47.webp",
    info: "インフルエンサー「しぴたん」が職業神となった世界線。\n砂漠の国に住んでいる獣人の剣闘士。\nその脚は砂の上を駆け回り、重い剣に速度を乗せ、\n凄まじい力の斬撃を放つ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インフルエンサー総選挙】しぴたん(Thunder)",
    spec: {
      status: { hp: 1890, atk: 665, def: 508, spd: 402 },
      skill: [
        { title: "スピーディ＝ジャガー", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "砂刃：デズァートアラビア",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "モードチェンジ：リボルヴ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl8fcb3c544dd6422c8752de30",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl8fcb3c544dd6422c8752de30.webp",
    info: "インフルエンサー「ゆうめろ」が職業神となった世界線。\n異国の地からやってきた剣士の少女。\n刀になにやら怪しい妖気をまとい刀を振るうが、\nその一太刀はまるで春の桜が散るごとく、見惚れたものの命を奪うという。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インフルエンサー総選挙】ゆうめろ(Nature)",
    spec: {
      status: { hp: 1905, atk: 675, def: 512, spd: 390 },
      skill: [
        {
          title: "抜刀術：散桜",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "刀纏い：桃幻",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "一閃：妖桜",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clef63f489ecad4af6a14588d5",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clef63f489ecad4af6a14588d5.webp",
    info: "流麗のオーバーザタイム\n彼女はまさにクールビューティ。\n美しい彼女は車と同じ速度で走ることができ、スピードと一つになってカーレースでのトップを独走している。彼女に愛を告白するためには時速300kmを超える速度で走る必要があるでしょう。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "カーレーサー(Poison)",
    spec: {
      status: { hp: 1980, atk: 655, def: 540, spd: 366 },
      skill: [
        {
          title: "美しきアサンブレ",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "高貴なアンクロワ",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        { title: "エレガントキック", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clbeac75b5a72d4947b025cb75",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clbeac75b5a72d4947b025cb75.webp",
    info: "雷刃のスーパーシャングリア\n笑顔で気楽に常にナンバーワン！ボートレースの覇者オブ覇者！\n彼はまさに100年に一人の天才レーシングスキルを持つ。波は常に彼のためにさざめいていると言っても過言ではない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ボートレーサー(Thunder)",
    spec: {
      status: { hp: 1980, atk: 670, def: 488, spd: 396 },
      skill: [
        { title: "才能の塊", desc: "召喚時に確率でATKをあげる。3ターン有効" },
        {
          title: "ウイングオブボート",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "スプラッシュウェーブ",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cla34e6ffdd01141a4a4aec1f0",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cla34e6ffdd01141a4a4aec1f0.webp",
    info: "乱舞のダンシングアルティスト\n彼女のノリとステップはこの世の争いを全て鎮める。力強く美しい踊りは戦いを治めるための平和の踊り子。アンタも一緒に踊らないかい？",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ヒップホップダンサー(Earth)",
    spec: {
      status: { hp: 2010, atk: 645, def: 540, spd: 366 },
      skill: [
        { title: "ファイヤーBPM", desc: "敵全員に大ダメージ" },
        { title: "マックスdope", desc: "味方全員のHP回復" },
        {
          title: "notoriousヘブン",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl65eabf19d28b41edaec5e827",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl65eabf19d28b41edaec5e827.webp",
    info: "煌光のトレジャーコンプリーター\n世界中に眠るお宝を集める逞しき冒険者。\nこの世のどんな場所にも一人で果敢に捜索しに行く。あなたがどこに宝物を隠しても、彼はすぐに見つけ出すだろう。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "エクスプローラー(Water)",
    spec: {
      status: { hp: 1980, atk: 640, def: 544, spd: 372 },
      skill: [
        {
          title: "ブルースカイディスティニー",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        { title: "サイクロンガトリング", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "ウイングスラッシャー",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl65320855d1c549c79f304159",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl65320855d1c549c79f304159.webp",
    info: "剛腕のイートザミート\nお食事に感謝しつつ美味しくたくさんお食事する夢幻の胃袋を持つお嬢様。\n彼女は決して料理を残す事はない。\n美味しく食べられる胃袋の範囲が圧倒的にデカいだけなのである！",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "フードファイター(Nature)",
    spec: {
      status: { hp: 1860, atk: 670, def: 520, spd: 396 },
      skill: [
        {
          title: "ワイルドモグモグ",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        { title: "全部食べたい！", desc: "敵全員に大ダメージ" },
        {
          title: "guts guts guts",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl5664301c7c094322af79ebf4",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl5664301c7c094322af79ebf4.webp",
    info: "爆熱のガーディアンフォース\n熱い心で地球を救う！みんなの命は俺が守る！\nどんな危険や災害にも顧みず、あふれる勇気と闘志で、人々の命を救うために率先して行動する熱き戦士！",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "レスキュー(Fire)",
    spec: {
      status: { hp: 1980, atk: 620, def: 528, spd: 396 },
      skill: [
        {
          title: "ヘルプダッシュ",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        { title: "レスキューハンマー", desc: "敵1体に特大ダメージ" },
        {
          title: "ビッグウォール",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl243d9b993fdd472f8223bb2b",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl243d9b993fdd472f8223bb2b.webp",
    info: "負けん気が強くて誤解されがちな彼女は、本当は絵を描くことが大好きでちょっと内気な女の子。\n「はぁ？似顔絵？いいけどあんまり期待しないでよっ！(ちゃんとかっこよく描いてあげなきゃ…！)」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【コインムスメ】DEPちゃん(Earth)",
    spec: {
      status: { hp: 1980, atk: 640, def: 544, spd: 372 },
      skill: [
        {
          title: "負けん気MAX",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        {
          title: "似顔絵プレゼント",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "まだ途中だから見るなあ！！",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cla9a65f0586f64af693a2ec0f",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cla9a65f0586f64af693a2ec0f.webp",
    info: "ものすごく引っ込み思案で人形を介さないとお話できない女の子。\nただし人形を介せばまるで人格がいくつもあるような話し方をすることができ、ついには一人で何役も演じ分ける人形劇までできるようになったスペシャリスト。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "腹話術師(Thunder)",
    spec: {
      status: { hp: 1905, atk: 685, def: 496, spd: 396 },
      skill: [
        { title: "千変万化の声帯", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "ドールリンク：ソウルスレッド",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "「これは人形たちの御伽話！」",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl93f47f93827c4075872e79f3",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl93f47f93827c4075872e79f3.webp",
    info: "代々橋をかけることを生業としてきた狐の獣人の末裔。\nコンコン！と心地良い作業音とともに出来上がった橋は見るもの全てを魅了し、その後落ちることがないと言われている。",
    category: "クラフター",
    type: "NORMAL",
    name: "橋造り職人(Earth)",
    spec: {
      status: { hp: 2010, atk: 640, def: 536, spd: 372 },
      skill: [
        { title: "赤い紅い都の小橋", desc: "味方1体のHP大回復" },
        {
          title: "青い蒼い港の桟橋",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "橋化かし：魂々頓勝",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl77a0c20fd41a4a13a34ea489",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl77a0c20fd41a4a13a34ea489.webp",
    info: "人型万能からくり\nジョブトロイド001：メイド長\n圧倒的な指示系統の持ち主であり、多くの支持者？を募る\nメイドたちのリーダー的存在。\n「ほらそこ！手を動かすの！」",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【ジョブトロイド】メイド長(Earth)",
    spec: {
      status: { hp: 1995, atk: 690, def: 564, spd: 384 },
      skill: [
        {
          title: "メイド長としての誇り",
          desc: "召喚時に確率でDEFを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、DEFの上昇量が上がる。3ターン有効 対象アミュレット：【Jobtroid】Cleaning Maid,【Jobtroid】Cooking Maid",
        },
        {
          title: "威厳ある？メイド指示力",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "「遊んでないで仕事しなさーい！」",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
      ],
      ability: [
        {
          title: "パライズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cllk7o374104208mfijfhtwme",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cllk7o374104208mfijfhtwme.webp",
    info: "退屈な日常に飽いていた少女はやがて、夢のようで、奇妙で、理不尽な冒険へと誘われる。",
    category: "アンノウン",
    type: "NORMAL",
    name: "アリス(Poison)",
    spec: {
      status: { hp: 1950, atk: 690, def: 488, spd: 390 },
      skill: [
        {
          title: "非日常に墜ちて",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        { title: "狂気との出会い", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "壊しちゃってもいいよね？",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cllk7kdxp170608mm27ut363c",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cllk7kdxp170608mm27ut363c.webp",
    info: "自然界の生物にあらざる異形でありながら、しかし、確かに現実に存在するものとして、彼の被造物はあなたの前に姿を現す。",
    category: "アンノウン",
    type: "NORMAL",
    name: "デーモンクリエイター(Fire)",
    spec: {
      status: { hp: 1980, atk: 660, def: 532, spd: 369 },
      skill: [
        {
          title: "着目、知識、そして発見",
          desc: "敵全員のATKとDEFを下げる。3ターン有効",
        },
        {
          title: "着想、閃き、そして結実",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        {
          title: "着手、創造、そして顕現",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cllk7bjd0051608mfm4qdozz1",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cllk7bjd0051608mfm4qdozz1.webp",
    info: "自然界の生物にあらざる異形でありながら、しかし、確かに現実に存在するものとして、彼の被造物はあなたの前に姿を現す。",
    category: "アンノウン",
    type: "NORMAL",
    name: "デーモンクリエイター(Fire)",
    spec: {
      status: { hp: 1980, atk: 660, def: 532, spd: 369 },
      skill: [
        {
          title: "着目、知識、そして発見",
          desc: "敵全員のATKとDEFを下げる。3ターン有効",
        },
        {
          title: "着想、閃き、そして結実",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        {
          title: "着手、創造、そして顕現",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
      ],
    },
  },
  {
    id: "cll4ditq2005008mny6lqs622",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cll4ditq2005008mny6lqs622.webp",
    info: "森羅万象、旅をしてきた案内人。幼くして自分の世界地図を書き記した天才である。",
    category: "サービス",
    type: "NORMAL",
    name: "ネイチャーガイド(Nature)",
    spec: {
      status: { hp: 1905, atk: 660, def: 512, spd: 399 },
      skill: [
        {
          title: "「あっちにいこー！」",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "守護獣：トレジャーウルフ",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "著書：せかいのあるきかた",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cll4dedqs028608mikp8phxk5",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cll4dedqs028608mikp8phxk5.webp",
    info: "真夏のプールの安全を守る監視員。彼女の持つメガホンは確実に人の足を止める優れもの。「ちょっとそこ！走ったら危ないよー！」",
    category: "サービス",
    type: "NORMAL",
    name: "プール監視員(Water)",
    spec: {
      status: { hp: 1980, atk: 635, def: 544, spd: 375 },
      skill: [
        {
          title: "特級注意：ギガメガホン",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "「飛び込み禁止！」", desc: "敵1体に特大ダメージ" },
        { title: "救命輪：セーフリング", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cll0i3aov055108la4wgwrbmu",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cll0i3aov055108la4wgwrbmu.webp",
    info: "第1回PlayMiningオリンピアングランドチャンピオン\n【IGG】のファウンダー＆インフルエンサーのいわぽよがJobTribesに参戦!!!圧倒的な財力・知力・スピードを兼ね備えたいわぽよがアナタ達の力になる。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【IGG】いわぽよ(Poison)",
    spec: {
      status: { hp: 2025, atk: 640, def: 540, spd: 366 },
      skill: [
        {
          title: "日本の未来が心配だ",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "アンチは好きだよ僕を強くしてくれるから",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "金を使って金稼ぐ",
          desc: "自分のATKを上げ、敵1体に特大ダメージを与える。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cljs2uv2a107108l904dq5o18",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cljs2uv2a107108l904dq5o18.webp",
    info: "人界から緊急の要請ではせ参じた4つの腕を持つ神。\n自慢の腕で繰り出される熱波は世界中のサウナ愛好家を虜にしている。",
    category: "サービス",
    type: "NORMAL",
    name: "アウフギーサー(Fire)",
    spec: {
      status: { hp: 1860, atk: 665, def: 512, spd: 405 },
      skill: [
        {
          title: "魅了のアロマオイル",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "全力ロウリュ", desc: "ランダムな敵に3回ダメージ" },
        { title: "うちわ4刀流熱波", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cljs2r0sq017908l3fv5mivrh",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cljs2r0sq017908l3fv5mivrh.webp",
    info: "人界の航空会社をサポートするために天より派遣された使者。乱気流もなんのその、乗客の不安を取り除いて回るのが彼女の仕事である。",
    category: "サービス",
    type: "NORMAL",
    name: "キャビンアテンダント(Water)",
    spec: {
      status: { hp: 2010, atk: 645, def: 536, spd: 369 },
      skill: [
        {
          title: "ふわふわ羽の安心サポート",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "ウィスパーアナウンス",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "ヘヴンorチキン?",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cljm91k1i2086408l3nvgwp74q",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cljm91k1i2086408l3nvgwp74q.webp",
    info: "迷宮クエストの管理者。ありとあらゆる職業神の力をコピーし、迷宮クエストの番人として使役する。",
    category: "アンノウン",
    type: "ANOTHER",
    name: "迷宮の支配者(Thunder)",
    spec: {
      status: { hp: 1905, atk: 685, def: 540, spd: 423 },
      skill: [
        {
          title: "ラビリンスウォール",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "支配者の覇気",
          desc: "敵1体を麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        { title: "「あなた失格、出てって」", desc: "敵1体に特大ダメージ" },
      ],
      ability: [
        {
          title: "ポイズンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clijz9iyh247608jr5emgcsfs",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clijz9iyh247608jr5emgcsfs.webp",
    info: "見た目とは裏腹にあっと驚く天ぷらを揚げる職人。\nその技術は先代とは違い、少々奇抜にはなっているが腕は確かなもの。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "天ぷら職人(Thunder)",
    spec: {
      status: { hp: 1920, atk: 690, def: 512, spd: 378 },
      skill: [
        {
          title: "しいたけしいるど",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        {
          title: "えびてんあたっく",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        { title: "おうぎ「はなさかせ」", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clijz5i022185308lblmpvmomw",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clijz5i022185308lblmpvmomw.webp",
    info: "飴で様々なものを表現するのに長けた職人。\n「鉄と一緒だ、熱いうちにやるんだよ」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "飴細工職人(Earth)",
    spec: {
      status: { hp: 1995, atk: 630, def: 540, spd: 378 },
      skill: [
        {
          title: "龍ノ髭",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "飴武将「異徒輝魔裏」",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        { title: "秘術「魂者」", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "clijz24812138208lb9pg7woga",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clijz24812138208lb9pg7woga.webp",
    info: "芸妓になるため修業中の女の子。\n対男性相手には無類の強さを誇る遊びのスペシャリストである。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "舞妓(Fire)",
    spec: {
      status: { hp: 1965, atk: 660, def: 536, spd: 369 },
      skill: [
        {
          title: "番傘幻術：桜花散残",
          desc: "敵全員のATKとDEFを下げる。3ターン有効",
        },
        { title: "金比羅船々", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "投扇興", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clijy18b12403508l8azs7mmw9",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clijy18b12403508l8azs7mmw9.webp",
    info: '"電子の世界から音を成業するプログラマー。\n「結局全部0と1で表現できちゃうんだよねー」"',
    category: "スペシャリスト",
    type: "NORMAL",
    name: "サウンドプログラマー(Water)",
    spec: {
      status: { hp: 1890, atk: 690, def: 512, spd: 384 },
      skill: [
        {
          title: "イベントフェードイン",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "フィールド中のＳＥ",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        { title: "サウンドファイルマージ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clijxvxlv647408lb8yyen4s6",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clijxvxlv647408lb8yyen4s6.webp",
    info: "後世のために化学を伝授する教師。\n博士級の頭脳をもつため生徒がたまについていけなくなることもしばしば。",
    category: "教育",
    type: "NORMAL",
    name: "化学教師(Poison)",
    spec: {
      status: { hp: 1890, atk: 670, def: 536, spd: 378 },
      skill: [
        {
          title: "教科書通りの原子論",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "雲の流れの天候化学",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        { title: "逸脱した実験授業", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cli1286ec096108l7jkeh6am3",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cli1286ec096108l7jkeh6am3.webp",
    info: 'JobTribes3周年を記念した"祭り"\n「3年間いろんなことがあったね！！」\n「うん、とりあえず給料日改修はよ」',
    category: "アンノウン",
    type: "NORMAL",
    name: "【3rd Anniv】リカ＆キリ(Fire)",
    spec: {
      status: { hp: 1950, atk: 650, def: 520, spd: 390 },
      skill: [
        {
          title: "「3周年！おめでとー！！」",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "「これからもよろしくね！！」",
          desc: "召喚時に確率でATKとSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "「ふふ、私たちはまだ変身を残している…」",
          desc: "味方全員のHP回復",
        },
      ],
    },
  },
  {
    id: "clhybxsu8670808mgxg6xb5vf",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clhybxsu8670808mgxg6xb5vf.webp",
    info: "歯科医師の右腕とも呼べる助手。\nある程度のツールをプロ級に使えるため、医師と遜色ない実力を発揮することもある。",
    category: "医療",
    type: "NORMAL",
    name: "歯科助手(Water)",
    spec: {
      status: { hp: 2010, atk: 625, def: 544, spd: 375 },
      skill: [
        {
          title: "技巧：デンティストレース",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "裏側ミラーチェック",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        {
          title: "「うがいをどうぞ～」",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "clhybtudr652908mgzcdui2rq",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clhybtudr652908mgzcdui2rq.webp",
    info: "人界の産婦人科を助けるべく遣わされた天界の遣い。\n異世界では勇者や賢者をとりあげている凄腕。",
    category: "医療",
    type: "NORMAL",
    name: "助産師(Thunder)",
    spec: {
      status: { hp: 1875, atk: 660, def: 552, spd: 375 },
      skill: [
        {
          title: "24時間受け入れ体制",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "守護術：ベイビーキャッチ",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "神速お包み",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clhyboqqf033208mnky70cwg1",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clhyboqqf033208mnky70cwg1.webp",
    info: "動物や魔物と心を通わせることができる治癒魔法使い。\n変人の類に思われがちだが、紛うことなく天才である。",
    category: "医療",
    type: "NORMAL",
    name: "獣医(Nature)",
    spec: {
      status: { hp: 1830, atk: 640, def: 536, spd: 408 },
      skill: [
        {
          title: "話術：ビーストーク",
          desc: "召喚時に低確率で味方全員のDEFを上げる。1ターン有効",
        },
        {
          title: "「グリフォンのグリフ～！」",
          desc: "ランダムな敵に3回ダメージ",
        },
        { title: "治癒術：ペタヒール", desc: "味方1体のHPを大回復。" },
      ],
    },
  },
  {
    id: "clh4e7j6m797208l0i678nwbd",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clh4e7j6m797208l0i678nwbd.webp",
    info: '警察の中でも秀でた才能を持つ者にしかなれない特殊な役職。\n「あら？あなたは私を"目で追えた"のね」',
    category: "パブリックサービス",
    type: "NORMAL",
    name: "警察特殊部隊員(Poison)",
    spec: {
      status: { hp: 1905, atk: 655, def: 500, spd: 411 },
      skill: [
        { title: "命令：抹殺", desc: "敵1体に特大ダメージ" },
        { title: "奈落のダガー", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "暗殺ステップ",
          desc: "召喚時に確率でATKとSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clh4e10wx876208mh08itotw6",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clh4e10wx876208mh08itotw6.webp",
    info: "子供たちが眠った後にこっそりぬいぐるみたちを治す妖精たち。\n子供たちはみな一様にそれらを「魔法」と呼称する。",
    category: "クラフター",
    type: "NORMAL",
    name: "ハンドメイド作家(Thunder)",
    spec: {
      status: { hp: 1875, atk: 645, def: 520, spd: 408 },
      skill: [
        {
          title: "「ちくちくぬいぬい…」",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "「きのみぐちゃぐちゃ…」", desc: "味方全員のHP回復" },
        {
          title: "「か～んせ～！！」",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clh4drtzv11441408l5xk1gw61h",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clh4drtzv11441408l5xk1gw61h.webp",
    info: "姫の護衛を生業としている巨竜。\n生意気な彼女が眠りについても、城の見回りや砦のメンテナンスと、彼の仕事はまだまだ終わらない。",
    category: "サービス",
    type: "NORMAL",
    name: "ボディーガード(Nature)",
    spec: {
      status: { hp: 2055, atk: 650, def: 532, spd: 360 },
      skill: [
        {
          title: "「ちゃんと守りなさいよね！」",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        {
          title: "「困った姫様だ…」",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "この方を護る誇り",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "clh4dl2fg249708l6hia5ogyf",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clh4dl2fg249708l6hia5ogyf.webp",
    info: "精霊が作った熊の木彫りが命を得た職人。\n大きな体躯からは想像できないほど精巧な木彫りを作ることができる。",
    category: "クラフター",
    type: "NORMAL",
    name: "木彫り職人(Earth)",
    spec: {
      status: { hp: 1935, atk: 680, def: 532, spd: 366 },
      skill: [
        {
          title: "情熱山の如し",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "お手伝い鮭「噛助」",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "木彫剣クマノアギト", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clh4dcws9028608l6o71carvr",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clh4dcws9028608l6o71carvr.webp",
    info: "ガラス細工とあらばどんなものでも形にできるマエストロ。\n自分の作品は納得のいくまで作らないと落ち着かないが、壊すことができずにいる。",
    category: "クラフター",
    type: "NORMAL",
    name: "ガラス職人(Water)",
    spec: {
      status: { hp: 1920, atk: 670, def: 524, spd: 381 },
      skill: [
        {
          title: "彩りは透明に",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "軽業師の妙技", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "創造魔法：千本の花", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "clh4d71gi11038408l5wmgk3c7r",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clh4d71gi11038408l5wmgk3c7r.webp",
    info: "古の時代から諜報活動を続けている魔人。\n仮面を付け替えることで人格や技術、性格まで入れ替えることができる。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "諜報員(Fire)",
    spec: {
      status: { hp: 1935, atk: 655, def: 516, spd: 393 },
      skill: [
        {
          title: "隠密ノ面「化狐」",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "道化ノ面「七福」",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "戦ノ面「鬼神」",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clh4cxr784109208l6irg4nke4",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clh4cxr784109208l6irg4nke4.webp",
    info: "真夜中にのみ開かれる人形劇があるという。\nその手さばきはまるで魔術のようであり、人形たちは生きているかのように動き、観客を異次元の世界に誘い込むと言われている。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "人形師(Earth)",
    spec: {
      status: { hp: 1920, atk: 680, def: 504, spd: 390 },
      skill: [
        {
          title: "闇夜の幕開け",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "八腕の舞踏", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "魂の誘い",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "clgvskvl5272908mrg83tbx1m",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clgvskvl5272908mrg83tbx1m.webp",
    info: 'ムシカ「な、な、なんやのん？ここどこやねん？」\n綿職人「ここがJobTribesの世界よ」\nユリィ「どうやらここも"無秩序"の世界のようじゃのォ」\nニャンニャン「にしし…どんないたずらしてやろうかのぉ～？」',
    category: "アンノウン",
    type: "NORMAL",
    name: "ふわふわんだーらんど(Thunder)",
    spec: {
      status: { hp: 2025, atk: 675, def: 500, spd: 375 },
      skill: [
        {
          title: "混沌のコットン",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "ビリビリ帯電綿ボール",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "耳の綿毛みたいやん…",
          desc: "召喚時に100％の確率で発動し、バジェットを3ターンの間増やし続ける。このアミュレットが破壊されると効果は消える。",
        },
      ],
    },
  },
  {
    id: "clgvk18q5017208jszzmi2het",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clgvk18q5017208jszzmi2het.webp",
    info: "魔界からやってきた敏腕交渉術者。\nあらゆるスキルを使って数多の取引の現場を裏からコントロールしている。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "交渉人(Poison)",
    spec: {
      status: { hp: 1875, atk: 680, def: 500, spd: 402 },
      skill: [
        {
          title: "視察術：キャンディアイズ",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
        {
          title: "口渉術：デザイアウィスパー",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "隷鞭：月陽様", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "clgvjrrcp984108l8udbznhpw",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clgvjrrcp984108l8udbznhpw.webp",
    info: "命を人間の道具に変える職人。\n「人に技を明かすほど、自分は器用じゃないんで...」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "革職人(Earth)",
    spec: {
      status: { hp: 1935, atk: 660, def: 552, spd: 363 },
      skill: [
        {
          title: "角圧ディアプレッシャー",
          desc: "召喚時に確率で味方全員のATKを上げる。1ターン有効",
        },
        { title: "硬突アリゲータックル", desc: "敵1体に特大ダメージ" },
        { title: "命獣レザーラッシュ", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "clgvjjjzt919508l87wrgonz0",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clgvjjjzt919508l87wrgonz0.webp",
    info: "消防現場に登場した対火災現場の新型装甲。\n右左背中に救命用の装備が積まれており、今まで不可能と言われた\n消防車の小型化に成功した。",
    category: "医療",
    type: "NORMAL",
    name: "消防士(Fire)",
    spec: {
      status: { hp: 1920, atk: 680, def: 536, spd: 366 },
      skill: [
        { title: "緊急破壊斧：アックスライト", desc: "敵1体に特大ダメージ" },
        { title: "激流水砲：スプラッシュレフト", desc: "敵全員に大ダメージ" },
        {
          title: "超距離救命：デラックスリフト",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clgna5qod1823408l75op2mprz",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clgna5qod1823408l75op2mprz.webp",
    info: "自分の思いを歌詞に込めて今日も彼女は歌う\n彼女にとって音楽は世界なのである。",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "シンガーソングライター(Nature)",
    spec: {
      status: { hp: 2070, atk: 690, def: 528, spd: 396 },
      skill: [
        {
          title: "聞き惚れる即興曲",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "心揺さぶる熱唱",
          desc: "敵1体に特大ダメージを与え、高確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "安らぎのトレモロ",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clgna1cma1385709ldd31elpsd",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clgna1cma1385709ldd31elpsd.webp",
    info: "図書館のすべての本は彼女によって管理されている。\n彼女の知りえない蔵書はあってはならないのである。",
    category: "パブリックサービス",
    type: "ANOTHER",
    name: "図書館司書(Water)",
    spec: {
      status: { hp: 2085, atk: 655, def: 560, spd: 390 },
      skill: [
        {
          title: "そびえる本棚",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "静寂による支配",
          desc: "敵1体に特大ダメージを与え、高確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        { title: "禁帯出制限魔法「黒烏」", desc: "ランダムな敵に3回ダメージ" },
      ],
      ability: [
        {
          title: "バーンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clgn9vzl41624808l7hu9ma60v",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clgn9vzl41624808l7hu9ma60v.webp",
    info: "町のあらゆる箇所に存在する点字を読み取る能力を持つ。\n「なぞるだけで全部わかっちまうんだよ、感謝も命令も「全部」な」",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "点字通訳者(Fire)",
    spec: {
      status: { hp: 1965, atk: 695, def: 528, spd: 414 },
      skill: [
        {
          title: "速射エンボスバレット",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "燃える通訳への情熱",
          desc: "敵1体に特大ダメージを与え、高確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "インターポイントバレット", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "コンフューズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cleqlk4y2502308l9mrdcx8ik",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cleqlk4y2502308l9mrdcx8ik.webp",
    info: "土地、建物に歴史あり。物件の新たな担い手に伝えるべき知恵を、彼女は知っている。",
    category: "金融・不動産",
    type: "ANOTHER",
    name: "宅地建物取引士(Earth)",
    spec: {
      status: { hp: 2025, atk: 680, def: 540, spd: 402 },
      skill: [
        {
          title: "ハザードマップの備え",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "説明ラッシュ",
          desc: "敵1体に特大ダメージを与え、高確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
        {
          title: "円満な不動産契約",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "パライズレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cleql9tvd171308jwmxqpeala",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cleql9tvd171308jwmxqpeala.webp",
    info: "画家とは異なる形で、彼女もまた見る者の心の動きを自在に操る。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "ゲームグラフィッカー(Thunder)",
    spec: {
      status: { hp: 2040, atk: 675, def: 536, spd: 405 },
      skill: [
        {
          title: "低負荷のバリアエフェクト",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "視線を誘導するインターフェイス",
          desc: "敵1体に特大ダメージを与え、高確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        {
          title: "動き出すモンスターグラフィック",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
      ability: [
        {
          title: "ポイズンレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "cleqep2uy068608ml05nn4oe0",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cleqep2uy068608ml05nn4oe0.webp",
    info: "ヒット曲を世に出すためには一切の妥協は許されず、それは命をかけた戦いに似ている。",
    category: "情報・運輸",
    type: "ANOTHER",
    name: "音楽プロデューサー(Poison)",
    spec: {
      status: { hp: 2025, atk: 680, def: 540, spd: 402 },
      skill: [
        {
          title: "音速のトレンドリサーチ",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "容赦なきリテイク",
          desc: "敵1体に特大ダメージを与え、高確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        {
          title: "苛烈なプロモーション",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
      ],
      ability: [
        {
          title: "ダークネスレジストLv3",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。フィールドの持続は長め",
        },
      ],
    },
  },
  {
    id: "clefevvn7191008l5o25l1lqq",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clefevvn7191008l5o25l1lqq.webp",
    info: "世界を創造する神々、その頂点に君臨する者。\n「そんな風には見えないだって？\n　お転婆な彼女だからこそ、子供の気持ちを真に理解できるってものさ」ゲーム音楽作曲家談",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ゲームプロデューサー(Earth)",
    spec: {
      status: { hp: 2003, atk: 638, def: 514, spd: 392 },
      skill: [
        {
          title: "創造世界の支配者",
          desc: "召喚時に高確率でSPDを少しあげる。3ターン有効",
        },
        {
          title: "インジェニュイティ・スケジューリング",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        {
          title: "これでマスターアップよ！",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "clef2y19n11405108mhcgx52991",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/clef2y19n11405108mhcgx52991.webp",
    info: "優勝だけが球団の目的ではない。応援してくれる人々に喜びと興奮をもたらす事が彼の使命である。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "球団オーナー(Earth)",
    spec: {
      status: { hp: 1905, atk: 690, def: 508, spd: 384 },
      skill: [
        { title: "連戦連勝！", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "地元ファンの声援",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "ドラフト一位獲得！",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clef2txsu3747508la4envz551",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clef2txsu3747508la4envz551.webp",
    info: "様々な取引が通信だけで可能となり、店舗が実世界から姿を消していく中、銀行も例外ではなかった。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "ネット銀行員(Poison)",
    spec: {
      status: { hp: 2010, atk: 650, def: 512, spd: 384 },
      skill: [
        {
          title: "コンビニATM提携",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "定期預金",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "スマホで決済",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "clef2cbsu372608lav5wumtlv",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/clef2cbsu372608lav5wumtlv.webp",
    info: "選手と強い絆で結ばれたリーダー。責任と重圧をものともしない精神力の持ち主にしか務まらない。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "野球監督(Thunder)",
    spec: {
      status: { hp: 1845, atk: 640, def: 544, spd: 399 },
      skill: [
        { title: "ヒット連発の打線", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "先発投手への信頼",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        {
          title: "選手交代！",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "clef27etj033808mhj686aly7",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/clef27etj033808mhj686aly7.webp",
    info: "旅に出たいなら、彼女に相談するといいだろう。切符も宿も、漏れなく手配してくれる筈だ。そもそも目的地すら任せてもいい。",
    category: "サービス",
    type: "NORMAL",
    name: "旅行代理店社員(Nature)",
    spec: {
      status: { hp: 2055, atk: 610, def: 544, spd: 375 },
      skill: [
        {
          title: "指定席の予約ですね",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "帰りの座席も予約します",
          desc: "味方1体をカウンター状態にする。2ターンの間、受けたダメージの一部を攻撃した敵に与える。",
        },
        { title: "たくさんの旅の思い出を", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "clef22s1p329408laqgmwkssg",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clef22s1p329408laqgmwkssg.webp",
    info: "家に居ながら、彼はどんな映像でも届けてくれる。コンサートも、ドラマも、映画も。熱く激しい戦場の様子も。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "映像配信事業者(Water)",
    spec: {
      status: { hp: 2055, atk: 635, def: 544, spd: 360 },
      skill: [
        {
          title: "見逃し配信",
          desc: "敵全員に大ダメージを与え、味方全体のSPDを少し上げる。3ターン有効",
        },
        {
          title: "定額見放題",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "ストリーミング再生",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "clef1evbs148208muuf7ewwrj",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/clef1evbs148208muuf7ewwrj.webp",
    info: "入店、退店、開店、閉店、全て彼女には縁がない。\n年中無休。それは戦場においても同じだった。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "ネットショップ店員(Fire)",
    spec: {
      status: { hp: 1860, atk: 665, def: 520, spd: 399 },
      skill: [
        {
          title: "買い物カゴに入れる",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "ポイントバックキャンペーン",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "あなたも出店しませんか？",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cldi62mo1781308mmgjzxrrk8",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cldi62mo1781308mmgjzxrrk8.webp",
    info: "日本の漫画家あさみ青子による描き下ろしイラスト。\n\n「今日はどんな靴をご所望だい？空を飛べるようになる靴？ 魔法のガラスの靴？それとも…死ぬまで踊り続ける靴かな？」",
    category: "サービス",
    type: "NORMAL",
    name: "靴職人(Water)",
    spec: {
      status: { hp: 1935, atk: 615, def: 540, spd: 399 },
      skill: [
        {
          title: "アサルト・ピンサーペンチ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "魔法：12時のガラスの靴",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "戒め：永久舞踏の靴", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cldi5tz2v103908mm8atbs330",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cldi5tz2v103908mm8atbs330.webp",
    info: "日本のアニメとアメリカンコミックの影響を受けた作風を特徴とし、2020年夏にフランスでのコミック発売が予定されているフランス在住のキャラクターデザイナー、イラストレーター及びコミック作家Ntochaによる描き下ろし作品。\n\n彼らは猛き魂を以ってハンマーを振るい、あらゆる武器を灼熱の焔から生み出す。\n——聖剣でも、魔槍でも。必要とする者がいるならば。",
    category: "クラフター",
    type: "NORMAL",
    name: "鍛冶職人(Earth)",
    spec: {
      status: { hp: 1920, atk: 630, def: 544, spd: 390 },
      skill: [
        { title: "ヴァルカン・ハンマー", desc: "ランダムな敵に3回ダメージ" },
        { title: "鍛造：鉄壁の大楯", desc: "敵全員のATKを下げる。3ターン有効" },
        { title: "業火のトランスファープレス", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cldi5kosn153308lav2y6spwz",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cldi5kosn153308lav2y6spwz.webp",
    info: "大人気アニメ「ジョジョの奇妙な冒険 ダイヤモンドは砕けない」のキャラクターデザインを手掛けた西位輝実による描き下ろし作品。\n\n「神は土をこね、竈で焼くことで人間を造り出したという。我らがのはその神の技よ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "陶芸家(Poison)",
    spec: {
      status: { hp: 1950, atk: 650, def: 508, spd: 399 },
      skill: [
        { title: "透かし彫りの舞", desc: "敵1体に特大ダメージ" },
        { title: "満開：桜花文様", desc: "味方全員のDEFを上げる。3ターン有効" },
        {
          title: "浄化：高速ろくろストリーム",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cldi5dwpf018108lah8isvnyp",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cldi5dwpf018108lah8isvnyp.webp",
    info: "日本のイラストレーター ミユキルリアによる描き下ろし作品。\n\n人々の祈りを舞へと変えて神に伝え、神の声を託宣として人々に伝える。\nそんな彼女は時として、ジョブ・ロードとジョブ・トライブスの喧嘩を仲裁することもあるという。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "巫女(Fire)",
    spec: {
      status: { hp: 1958, atk: 618, def: 546, spd: 389 },
      skill: [
        { title: "平定の神託", desc: "敵全員のATKとDEFを下げる。3ターン有効" },
        {
          title: "浄化の神酒",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "鎮魂の神楽",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cldi56iue950308l0wy0jqawi",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cldi56iue950308l0wy0jqawi.webp",
    info: "日本のイラストレーター・漫画家小梅けいとによる描き下ろし作品。\n\n読者に最も近い存在は、等身大が最大のアピールポイント。\n幅広い交友関係による口コミ拡散力は侮れない。\nただ、この職業で居続けるのはかなり難しい。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "読者モデル(Nature)",
    spec: {
      status: { hp: 1958, atk: 632, def: 534, spd: 389 },
      skill: [
        {
          title: "映え写真UP",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "着回しコーデ", desc: "味方全員のHPを3ターン回復し続ける。" },
        {
          title: "インフルエンス・ウェーブ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cldi510vs894508l091sgfvmc",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cldi510vs894508l091sgfvmc.webp",
    info: "彼女の務めは訪れる者に楽しいひと時を与えるだけではない。ある時は悩みを聞き、美酒と共にアドバイスや深い言葉をおくる。それが夜を統べる女王の使命なのだ。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ホステス(Poison)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        { title: "夜の女王の話術", desc: "敵1体に特大ダメージ" },
        {
          title: "魅惑のウィスキー（水割り）",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "常夜の楽園", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cld8c5qg9153708la2egi99bz",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cld8c5qg9153708la2egi99bz.webp",
    info: "温かみのあるレトロSFタッチで大人気のイラストレーター・イトウケイイチロウによる描き下ろし作品。\n\n千里眼は、あらゆるものを見通す力。\n距離も時間も関係なく、隠れているものさえ暴き出す。\n「我が眼より逃れられるものなし」",
    category: "サービス",
    type: "NORMAL",
    name: "千里眼師(Earth)",
    spec: {
      status: { hp: 1958, atk: 633, def: 518, spd: 400 },
      skill: [
        { title: "ヴィルーパークシャ", desc: "2回攻撃する。" },
        { title: "プロビデンスの目", desc: "バジェットを増やす" },
        {
          title: "秘されし悪事の暴露",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8c0qn8087408laouzwdknt",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cld8c0qn8087408laouzwdknt.webp",
    info: "インドネシアのイラストレーターDcrossboneによる描き下ろし作品。\n\n渇きにあえぐ民の声を受けて、\n天空を舞う水神をその身に降ろし、\n自ら龍となりて恵みの雨を齎せしもの。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "レインシャーマン(Nature)",
    spec: {
      status: { hp: 1928, atk: 628, def: 534, spd: 397 },
      skill: [
        { title: "干天の慈雨", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "風雨乱舞",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "水神の咆哮：豪雨招来", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cld8bvpzy023908lakx2yf6ig",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cld8bvpzy023908lakx2yf6ig.webp",
    info: "人気の女性サンタ。年末には世界中を飛び回っている。実はそろそろ100歳になるが、その話をすると危険である。\n「私が100歳？ あなたもプレゼントの材料にしちゃいますよ？」\nイラスト：SAA",
    category: "アンノウン",
    type: "NORMAL",
    name: "サンタクロース（レッド）(Thunder)",
    spec: {
      status: { hp: 1965, atk: 615, def: 552, spd: 384 },
      skill: [
        {
          title: "ウィンターローズの祈り",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        { title: "シャイニングもみの木ランス", desc: "敵1体に特大ダメージ" },
        {
          title: "癒しのイルミネーションシャワー",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
      ],
    },
  },
  {
    id: "cld8br0mk643708l51b0iz0j0",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cld8br0mk643708l51b0iz0j0.webp",
    info: "西尾維新の〈物語〉シリーズ、忘却探偵シリーズのカバーイラストで人気を博す、台湾のイラストレーターVOFANによる描き下ろし作品。\n\n薄皮に包まれた魅惑の肉汁。その誘惑に負けて火傷する者は、太古の昔から後を絶たない。\n「蓮華に乗せて、皮を破るといいんだゾ！」",
    category: "クラフター",
    type: "NORMAL",
    name: "小籠包職人(Earth)",
    spec: {
      status: { hp: 1973, atk: 632, def: 522, spd: 395 },
      skill: [
        { title: "ムチムチ包子ガトリング", desc: "敵全員に大ダメージ" },
        {
          title: "防御的蒸籠カッター",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        {
          title: "みなぎる熱々スープ",
          desc: "自分のATKとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8bn3fh577608l54mh7eiye",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cld8bn3fh577608l54mh7eiye.webp",
    info: "日本のイラストレーターふーみによる描き下ろし作品。\n\n「未来をお知りになりたいのですか？ それとも、意中の相手の胸の内？ いずれにせよ、星の導きとカードが紡ぐ言葉は、悩めるあなたの道しるべとなるでしょう」",
    category: "クラフター",
    type: "NORMAL",
    name: "占い師(Poison)",
    spec: {
      status: { hp: 1875, atk: 635, def: 540, spd: 399 },
      skill: [
        {
          title: "星詠みのヴェーダ",
          desc: "味方全員のHPを3ターン回復し、さらにDEFを上げる。",
        },
        {
          title: "大アルカナXXI：世界",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "小アルカナ：剣のナイト",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8biuru527608l599ymaity",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cld8biuru527608l599ymaity.webp",
    info: "日本のイラストレーターiximaによる描き下ろし作品。\n\n「商品を買ってもらって満足するようでは甘いわ。\n完璧な接客でお客様にリピーターになって頂く事……\nそれが私の使命であり喜びなのよ」",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "衣料品販売員(Fire)",
    spec: {
      status: { hp: 1958, atk: 618, def: 526, spd: 403 },
      skill: [
        {
          title: "リピーター・メイカー",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "察知：季節を先取る者",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "優しき声かけの極意",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cld8bdz77464108l5obabzgao",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cld8bdz77464108l5obabzgao.webp",
    info: "漫画『マリーグレイブ』、『アトランティド』などで知られる山地ひでのりによる書き下ろし作品。\n\n「よく言うだろ？　タネがわからない手品は魔法と変わらないってことさ」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "マジシャン(Fire)",
    spec: {
      status: { hp: 1935, atk: 660, def: 524, spd: 384 },
      skill: [
        { title: "幻惑の乱舞トランプマジック", desc: "敵全員に大ダメージ" },
        {
          title: "華麗なるイリュージョンマジック",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "透視魔術：マインドハック",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clbomev0o000108ledvd7m9c2",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clbomev0o000108ledvd7m9c2.webp",
    info: "点検・整備・修理。\n彼女の持つ完全無欠な知識と賢明な管理能力により、運航の安全は保たれている。\n彼女の手にかかることは飛行機にとっても幸せなことだろう。\nイラスト：猪熊しのぶ",
    category: "サービス",
    type: "NORMAL",
    name: "航空整備士(Water)",
    spec: {
      status: { hp: 1905, atk: 625, def: 532, spd: 405 },
      skill: [
        {
          title: "万全の措置",
          desc: "敵全員に大ダメージを与え、味方全体のATKを少し上げる。3ターン有効",
        },
        {
          title: "スピーディーかつ丁寧に",
          desc: "召喚時に確率でSPDを上げる。3ターン有効",
        },
        {
          title: "完璧な整備",
          desc: "味方1体をカウンター状態にする。2ターンの間、受けたダメージの一部を攻撃した敵に与える。",
        },
      ],
    },
  },
  {
    id: "clajcdsj7138708l1yrxl4bkq",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/clajcdsj7138708l1yrxl4bkq.webp",
    info: "日本のイラストレーター藤ちょこによる描き下ろし作品。\n化粧品と化粧道具の扱いを極めたプロフェッショナルにして\n美しくありたい者の守護者であり、美に至る道を説く者。\n彼女の繰り出す無限の色彩が、誰をも美しく変貌させる。",
    category: "サービス",
    type: "NORMAL",
    name: "美容部員(Poison)",
    spec: {
      status: { hp: 1912, atk: 632, def: 538, spd: 395 },
      skill: [
        {
          title: "ラッシュエキスパンション",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "攻防一体：ヒアルロンアタック",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "魔爪結界：紅蓮のペデュキュア",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clajbro76000108l7ntfl6fch",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/clajbro76000108l7ntfl6fch.webp",
    info: "日本のイラストレーター田中健一による描き下ろし作品。\n\n国家の門番。偽造書類も変装も、彼女の天眼は欺けない。\nこのアミュレットを持つジョブ・トライブスは、常にダークワーカトライブたちの恐怖の的である。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "入国警備官(Water)",
    spec: {
      status: { hp: 1897, atk: 637, def: 542, spd: 392 },
      skill: [
        {
          title: "許可なき者は誰も通さん！",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "パスポートとビザを見せろ",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "私を欺けると思うな！！",
          desc: "敵1体のATKとDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "claicfvq1010708mhr9u1ggj0",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/claicfvq1010708mhr9u1ggj0.webp",
    info: "NFT Market Place\nそこは未来の資産が取引される夢の市場\n彼女は今日もNFTを創造しデジタルの未来を動かしていく。\n「いらっしゃいませ！ 当店自慢のNFT、沢山見て行ってくださいね！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "NFTマーケットプレイス店長(Fire)",
    spec: {
      status: { hp: 1860, atk: 635, def: 532, spd: 408 },
      skill: [
        {
          title: "マーケットリサーチ",
          desc: "味方1体をカウンター状態にする。2ターンの間、受けたダメージの一部を攻撃した敵に与える。",
        },
        {
          title: "スペシャルセール開催！",
          desc: "召喚時に高確率でSPDを少しあげる。3ターン有効",
        },
        {
          title: "限定NFT販売",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9z75cjh010809l304q5f8bo",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9z75cjh010809l304q5f8bo.webp",
    info: "そこは美容を世に送る最前線\n全ての人が自分に自信を持てる世界を創るため\n彼女が打ち出すはあらゆる美に関する情報の集積体\nその一射は既存の概念を覆し、トレンドを創り出す\nイラスト：緒方剛志",
    category: "サービス",
    type: "NORMAL",
    name: "化粧品広報(Earth)",
    spec: {
      status: { hp: 1890, atk: 670, def: 508, spd: 402 },
      skill: [
        {
          title: "恋色伝道師",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "ブランドマニピュレーションガン",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "プレスリリースディフューザー",
          desc: "敵全員に大ダメージを与え、敵全体のSPDを少し下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofn0c0jnc1umj8rnd5phf",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofn0c0jnc1umj8rnd5phf.webp",
    info: "罪を犯した者を厳しく見張り、社会に復帰できるよう指導を行う監督者。\n多少の事では動じない、強靭な肉体と精神力を持つ。\n一方で、悩める受刑者の相談に乗る優しい面もある。\nイラスト：鈴木マサカズ",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "刑務官(Fire)",
    spec: {
      status: { hp: 1995, atk: 635, def: 544, spd: 372 },
      skill: [
        {
          title: "闇夜の監視者",
          desc: "召喚時に高確率でDEFを少し上げる。3ターン有効",
        },
        {
          title: "一斉捜索：持ち物検査",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "懲罰房送り",
          desc: "自分のATKを上げ、敵1体に特大ダメージを与える。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofldz0jea1umjhk7k074k",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofldz0jea1umjhk7k074k.webp",
    info: "何千もの設定から生み出される幻想世界の新しい命。\n彼こそがその姿を形作る神である。\n勇者や魔王、村人……全てが彼の走らせる筆によって\n生み出されるのだ。\nイラスト：緒方雄一",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "キャラクターデザイナー(Nature)",
    spec: {
      status: { hp: 1905, atk: 625, def: 536, spd: 402 },
      skill: [
        {
          title: "生命の創造主",
          desc: "味方1体をカウンター状態にする。2ターンの間、受けたダメージの一部を攻撃した敵に与える。",
        },
        {
          title: "新規案件発生中",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "1000 コンセプトの軍勢",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl9coep090eam1umjczwxenhd",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coep090eam1umjczwxenhd.webp",
    info: "篠原重工が開発した次期MPL計画用１号機。野明はアルフォンスの愛称で呼んでいる。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【機動警察パトレイバー】98式AV イングラム１号機(Water)",
    spec: {
      status: { hp: 2040, atk: 625, def: 508, spd: 396 },
      skill: [
        {
          title: "スタンスティック",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "捕獲用ワイヤー",
          desc: "敵全員のATKとSPDを下げる。3ターン有効",
        },
        { title: "リボルバーカノン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coexsc0fof1umj0s287q8y",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coexsc0fof1umj0s287q8y.webp",
    info: "スポンサーのロゴを背負い、周囲への気配りも抜かりなく。\n笑顔を絶やさない勝利のシンボルは、選び抜かれた花である。\nillust：信長アキラ",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "レースクイーン(Thunder)",
    spec: {
      status: { hp: 2025, atk: 655, def: 512, spd: 378 },
      skill: [
        {
          title: "鮮烈のサーキットパラソル",
          desc: "味方1体をカウンター状態にする。2ターンの間、受けたダメージの一部を攻撃した敵に与える。",
        },
        {
          title: "パドックキャンペーン",
          desc: "召喚時に確率でSPDを上げる。3ターン有効",
        },
        {
          title: "勝利を祝うファンサービス",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl9cof2lb0gfm1umjaoj62sak",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof2lb0gfm1umjaoj62sak.webp",
    info: "罪人の罪を立証し正当な罰へと導く行政の執行人。\n「己が心に正義のある限り、悪が花開く事なぞ許しておかぬ！」\nillust：東風孝広",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "検察官(Poison)",
    spec: {
      status: { hp: 2025, atk: 655, def: 512, spd: 378 },
      skill: [
        {
          title: "勧善懲悪の証人尋問",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "異議を禁ずる証拠品",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "訴追の芭蕉扇", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofq3k0k4p1umj77ac6x1a",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofq3k0k4p1umj77ac6x1a.webp",
    info: "事件のある所に必ず現れる存在。\nどんなに複雑な状況でも鮮やかに推理し、犯人を追いつめる。\n彼が訪れた舞台は、全て解決へ導かれるのだ。\nillust：森田崇",
    category: "アンノウン",
    type: "NORMAL",
    name: "名探偵(Earth)",
    spec: {
      status: { hp: 1950, atk: 655, def: 540, spd: 372 },
      skill: [
        {
          title: "推理：真相解明への論理的考察",
          desc: "召喚時に100％の確率で発動し、敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える。",
        },
        {
          title: "観察：探偵の眼",
          desc: "味方全員のDEFを上げる。3ターン有効。さらに敵のバジェットを減らす。",
        },
        { title: "Q.E.D", desc: "敵1体にダメージを与え、自分のHPを回復する" },
      ],
    },
  },
  {
    id: "cl9cofzkl0lmh1umj2qk0fc6h",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofzkl0lmh1umj2qk0fc6h.webp",
    info: "稲妻のごとく投資家のストップ狩りを繰り出す、ストップハンターひろぴー。その手には爆益の蕾が握られている。\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】ストップハンター ひろぴー(Thunder)",
    spec: {
      status: { hp: 1935, atk: 667, def: 500, spd: 397 },
      skill: [
        { title: "ストップハント", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "フラッシュクラッシュ！",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "ハイレバレッジ",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "cl9cofz3f0ljq1umj9l2o8hql",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofz3f0ljq1umj9l2o8hql.webp",
    info: "クリプト業界の先駆者！威風堂々と攻める経営スタイルに定評あり。\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】社長トレーダー ひろぴー(Nature)",
    spec: {
      status: { hp: 1860, atk: 680, def: 508, spd: 399 },
      skill: [
        {
          title: "ゴールデンクロス",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "Let'sバブル",
          desc: "敵1体にダメージを与え、味方全員のHPを回復する",
        },
        {
          title: "ListingRush",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeuum0f7s1umj89dudvfp",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coeuum0f7s1umj89dudvfp.webp",
    info: "釣りでも投資でもチャンスがきたら逃さない！華麗なる手捌きで大物を仕留める！\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】釣りトレーダー ひろぴー(Earth)",
    spec: {
      status: { hp: 1897, atk: 672, def: 506, spd: 397 },
      skill: [
        {
          title: "ランカーハンティング",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "バックラッシュ",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "ノーフィッシュ",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "cl9cofuxr0kw21umj3z591vfg",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofuxr0kw21umj3z591vfg.webp",
    info: "チャートの波動を先冷静に分析し投資家心理を味方につける波乗りトレーダーひろぴー参上！「波動を感じろ！」\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】波乗りＦＸトレーダー ひろぴー(Water)",
    spec: {
      status: { hp: 1965, atk: 645, def: 504, spd: 402 },
      skill: [
        { title: "エリオットウェーブ", desc: "敵のバジェットを減らす" },
        {
          title: "バンドウォーク",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        { title: "第3波", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeyme0ft71umj352n1f5e",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coeyme0ft71umj352n1f5e.webp",
    info: "精鋭部隊を引き連れ華麗にオタ芸でお祈り！「俺の買いポジ上がれ〜！」\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】お祈りトレーダー ひろぴー(Poison)",
    spec: {
      status: { hp: 1875, atk: 650, def: 532, spd: 396 },
      skill: [
        { title: "アルトドレイン", desc: "ランダムな敵に3回ダメージ" },
        { title: "To the Moon", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "Goxx",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "cl9coetp90f1a1umj1els4hjh",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coetp90f1a1umj1els4hjh.webp",
    info: "債権回収に奔走する取り立て屋ひろぴー。どんな獲物も見逃さない、徹底的に追いつめる。\nイラスト：小池田マヤ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ひろぴーコラボ】取り立て屋 ひろぴー(Fire)",
    spec: {
      status: { hp: 1905, atk: 670, def: 512, spd: 393 },
      skill: [
        {
          title: "マージンコール",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        { title: "損切りアタック", desc: "敵1体に特大ダメージ" },
        {
          title: "追加入金",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofsvg0kkf1umjcmvh9bkm",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofsvg0kkf1umjcmvh9bkm.webp",
    info: "混沌を極めるデジタル空間。\nたった一人で秩序を守り続けるホワイトハッカーの一撃は、あらゆる悪を消滅させる。\nイラスト：渡辺けんじ",
    category: "アンノウン",
    type: "NORMAL",
    name: "ホワイトハッカー(Water)",
    spec: {
      status: { hp: 1860, atk: 645, def: 508, spd: 420 },
      skill: [
        {
          title: "アンチウィルスショット",
          desc: "敵全員に大ダメージを与え、味方全体のSPDを少し上げる。3ターン有効",
        },
        {
          title: "パーフェクトセキュリティ",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "デリート",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "cl9cof4fl0gq41umjfdiv6ehf",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cof4fl0gq41umjfdiv6ehf.webp",
    info: "9999990じゃ満足できないんだろ。答えは出てるじゃないか",
    category: "アンノウン",
    type: "NORMAL",
    name: "【大東京トイボックス】天川太陽(影)(Earth)",
    spec: {
      status: { hp: 1890, atk: 675, def: 532, spd: 378 },
      skill: [
        { title: "ソードクロニクルIV", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "ドン・キホーテ",
          desc: "自分のATKを大幅に上げる。3ターン有効",
        },
        {
          title: "ネジ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coex140fk31umj8jynfqjq",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coex140fk31umj8jynfqjq.webp",
    info: "世界を創造する神々、その頂点に君臨する者。\n「そんな風には見えないだって？\n　お転婆な彼女だからこそ、子供の気持ちを真に理解できるってものさ」ゲーム音楽作曲家談",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ゲームプロデューサー(Fire)",
    spec: {
      status: { hp: 2003, atk: 638, def: 514, spd: 392 },
      skill: [
        {
          title: "創造世界の支配者",
          desc: "召喚時に高確率でSPDを少しあげる。3ターン有効",
        },
        {
          title: "インジェニュイティ・スケジューリング",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        {
          title: "これでマスターアップよ！",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cofrs90ke81umjchrucz4s",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofrs90ke81umjchrucz4s.webp",
    info: "この星にだっていろんな夢を持ってる奴がたくさんいる…\nその夢を全部奪うつもりなら\nオレたちは命を懸けて貴様を止める！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ジバクくん】爆＆ジバクくん(Fire)",
    spec: {
      status: { hp: 1935, atk: 670, def: 512, spd: 387 },
      skill: [
        {
          title: "俺の夢は世界制覇だ！",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "夢に命を懸けられる奴は本物だ！",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: '"大"バクシンハ!!!', desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeze30fxi1umj3c5t7w3r",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coeze30fxi1umj3c5t7w3r.webp",
    info: "誰が小僧だ！パプワというれっきとした名前があるわい\n礼儀を知らん奴は困るよナ　チャッピー！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【南国少年パプワくん】パプワ＆チャッピー(Nature)",
    spec: {
      status: { hp: 1988, atk: 638, def: 508, spd: 399 },
      skill: [
        {
          title: "今日からおまえも友達だ！",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        {
          title: "チャッピー、エサ！",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "シットロト踊り",
          desc: "自分のATKとDEFとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coej340dd41umjhoybgy2k",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coej340dd41umjhoybgy2k.webp",
    info: "2022年3月 第2回 JobTribes PvP チャンピオンシップ、グランドチャンピオン、ajihurai。\n大いなる覇者はまたしてもJobtribesの伝説となった。”分析・戦略・運”の全てを力に変え、猛者達を圧倒。前人未到のチャンピオンシップ2連覇を成し遂げた。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【2代目PvPグランドチャンピオン】アジフライ(ajihurai)(Nature)",
    spec: {
      status: { hp: 1890, atk: 645, def: 524, spd: 405 },
      skill: [
        {
          title: "ファイナル・ディスティニー",
          desc: "敵1体にダメージを与え、バジェットを増やす。",
        },
        { title: "ラストエリクシア", desc: "バジェットを増やす" },
        { title: "流麗：美獣の姿焼き", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofnmy0jqu1umj6jcb1i73",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofnmy0jqu1umj6jcb1i73.webp",
    info: "美味しい茶を届けるために、陰に日なたに飛び回る妖精。\n一番活発になるのは初夏の朝早くだ、という噂がある。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "茶畑経営者(Nature)",
    spec: {
      status: { hp: 2003, atk: 638, def: 514, spd: 392 },
      skill: [
        {
          title: "茶葉摘みバサミ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "淹れたての新茶",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "早朝の茶摘み",
          desc: "味方全員のHPを3ターン回復し、さらにSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coevfw0fb21umj1bvhfos8",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coevfw0fb21umj1bvhfos8.webp",
    info: "要人の傍ら、工事現場の片隅、公共施設の入り口出口。あらゆる所に彼女達の眼は存在する。\n「怪しい動きはしない方が、身の為です！」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "警備員(Thunder)",
    spec: {
      status: { hp: 1913, atk: 648, def: 536, spd: 387 },
      skill: [
        {
          title: "警戒スタンバトン",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        {
          title: "不動のシールド",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "立哨警備", desc: "味方全員のDEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofj360j141umj3vr7bxwc",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofj360j141umj3vr7bxwc.webp",
    info: "やるからには勝ちたい！　絶対に負けたくない！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インベスターZ】財前孝史(Water)",
    spec: {
      status: { hp: 1950, atk: 650, def: 504, spd: 402 },
      skill: [
        {
          title: "ビギナーズラック",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "負けず嫌い",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        {
          title: "投資の神様",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
      ],
    },
  },
  {
    id: "cl9cof7hc0h7d1umj4h7z99qj",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cof7hc0h7d1umj4h7z99qj.webp",
    info: "だまされたくなかったら……損して負けたくなかったらお前ら……勉強しろ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ドラゴン桜2】桜木建二(Earth)",
    spec: {
      status: { hp: 1995, atk: 635, def: 524, spd: 387 },
      skill: [
        {
          title: "東大合格100人",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "プラチナチケット",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        {
          title: "型にはまれ！",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeyf50fs21umj6flb38x6",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coeyf50fs21umj6flb38x6.webp",
    info: "胸を張れっ・・・・！\n手痛く負けたときこそ・・・・胸をっ・・・・！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【カイジ】伊藤開司(Nature)",
    spec: {
      status: { hp: 1973, atk: 650, def: 508, spd: 395 },
      skill: [
        {
          title: "沼・攻略",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        {
          title: "鉄骨渡り",
          desc: "この能力は召喚時に100％の確率で発動し、バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "圧倒的 閃きっ‥‥‥‥!!",
          desc: "自分のATKとSPDを上げるが、DEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof9sp0hkh1umje1kvglnt",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof9sp0hkh1umje1kvglnt.webp",
    info: "文字を書く、ただそれだけなのに、その所作が人を魅了する。\nそして魂が込められた書もまた、見るものの魂を揺さぶるのだ。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "書道家(Poison)",
    spec: {
      status: { hp: 1958, atk: 648, def: 524, spd: 387 },
      skill: [
        { title: "墨汁炸裂弾", desc: "2回攻撃する。" },
        { title: "逆入平出", desc: "召喚時に確率でDEFをあげる。3ターン有効" },
        { title: "永字八法", desc: "召喚時に確率でATKをあげる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofuix0ktq1umj9zrkgj7a",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofuix0ktq1umj9zrkgj7a.webp",
    info: "大学という組織の縁の下の力持ち。\n学生の様々な生活を支援し、研究者の事務作業を受け持つ。\n派手さはないが、その存在なしには大学の運営はままならない。",
    category: "教育",
    type: "NORMAL",
    name: "大学職員(Thunder)",
    spec: {
      status: { hp: 1942, atk: 662, def: 522, spd: 383 },
      skill: [
        {
          title: "産学官連携",
          desc: "敵1体にダメージを与え、味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "オープンキャンパス開催",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "大学入試キャノン", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coff0m0ie51umj9wyv4qs5",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coff0m0ie51umj9wyv4qs5.webp",
    info: "「2022年は、大きく世界が変わる年だ！ さぁ、世界を変えるために皆で叫べ！ HAPPY NEW YEAR！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "ハッピーニューイヤーマン2022(Earth)",
    spec: {
      status: { hp: 1973, atk: 640, def: 528, spd: 386 },
      skill: [
        {
          title: "ハッピーオーラ2022",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "ニューイヤー爆竹",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "金運招来！ ゴールデンフラッシュ！",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coforv0jx71umj1khz4jz1",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coforv0jx71umj1khz4jz1.webp",
    info: "「今年もお仕事の日がやってきましたね。はい、準備万端です。1年たーっぷりお休みしましたから」",
    category: "アンノウン",
    type: "NORMAL",
    name: "トナカイ(Earth)",
    spec: {
      status: { hp: 1935, atk: 652, def: 518, spd: 393 },
      skill: [
        { title: "プレゼント投下", desc: "敵1体に特大ダメージ" },
        {
          title: "空駆けるソリ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        { title: "聖夜の奇跡", desc: "味方全員のSPDを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coeop60e8v1umj47dmf8yu",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coeop60e8v1umj47dmf8yu.webp",
    info: "2021年8月 第1回 JobTribes PvP チャンピオンシップ、グランドチャンピオン、アジフライ。\nアナリティカル・デーモンは、大いなる覇者となった。\n息をもつかせぬ速さで繰り出された数々の攻撃はまさに圧巻。JobTribes史の伝説となり後世まで語り継がれるであろう。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【初代PvPグランドチャンピオン】アジフライ(ajihurai)(Fire)",
    spec: {
      status: { hp: 1912, atk: 650, def: 520, spd: 398 },
      skill: [
        {
          title: "伝説の英雄：ajihurai",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        { title: "平和の鐘", desc: "召喚時に確率でSPDをあげる。3ターン有効" },
        {
          title: "深紅の絆：エンシェントフレイム",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cofe6x0i9i1umj5lzs7mmg",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofe6x0i9i1umj5lzs7mmg.webp",
    info: "医者は……自らが医者でありたいと願うから医者なんです……",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】泌尿器科研修医斉藤(Earth)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        {
          title: "先進医療",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のATKを上げる。3ターン有効。",
        },
        { title: "生体間移植", desc: "2回攻撃する。" },
        { title: "クロスマッチ", desc: "味方全員のDEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coejvc0dhh1umj0cg64vsp",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coejvc0dhh1umj0cg64vsp.webp",
    info: "クラゲは透明だから、そこにいることを許されているのではないでしょうか……？",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】心療内科研修医斉藤(Fire)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        {
          title: "オーベン",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "退院手続き", desc: "味方全員のHPを3ターン回復し続ける。" },
        {
          title: "医師学会",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coep2n0eb01umjfsewbuqj",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coep2n0eb01umjfsewbuqj.webp",
    info: "僕は……医者が好きなんだ！！",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】外科研修医斉藤(Poison)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        { title: "未承認薬", desc: "味方全員のHP回復" },
        { title: "セデーション", desc: "2回攻撃する。" },
        { title: "集中治療室", desc: "味方全員のSPDを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofgct0ilq1umj2xwi2w96",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofgct0ilq1umj2xwi2w96.webp",
    info: "この子達は生きようとしてる……。それはだれにも止められないんだ……！",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】小児科研修医斉藤(Thunder)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        { title: "新薬治験", desc: "味方全員のHPを3ターン回復し続ける。" },
        {
          title: "NICU",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のATKを上げる。3ターン有効。",
        },
        {
          title: "高濃度酸素投与",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cof48i0goz1umj8e8efzve",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cof48i0goz1umj8e8efzve.webp",
    info: "僕は、医者だ……！！",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】内科研修医斉藤(Nature)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        { title: "酸素投与", desc: "味方全員のATKとDEFを上げる。3ターン有効" },
        {
          title: "点滴投与",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "救急医療",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl9cofn9z0jou1umjcmmqhq09",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofn9z0jou1umjcmmqhq09.webp",
    info: "医師免許を取った瞬間からお前は普通の人間ではない。医者なんだ。",
    category: "医療",
    type: "NORMAL",
    name: "【BJによろしく】研修医斉藤(Water)",
    spec: {
      status: { hp: 2018, atk: 635, def: 524, spd: 383 },
      skill: [
        {
          title: "ゴッドハンド",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "救命医療",
          desc: "味方全員を大幅に回復するが、自分はダメージを受ける。",
        },
        {
          title: "緊急手術",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cof3qm0gm51umj0z7w5e53",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cof3qm0gm51umj0z7w5e53.webp",
    info: "さすがだよボヤッキー、頭良いね～秀才だね～天才だね～！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ドロンジョ(Fire)",
    spec: {
      status: { hp: 1875, atk: 658, def: 514, spd: 405 },
      skill: [
        {
          title: "ドクロキセル",
          desc: "味方全員のSPDを上げる。3ターン有効。さらに自分のバジェットを増やす。",
        },
        { title: "ドロンボーメカ", desc: "敵1体に特大ダメージ" },
        {
          title: "やっておしまい！",
          desc: "敵全員にダメージをあたえ、さらに自分のATKを上げる。",
        },
      ],
    },
  },
  {
    id: "cl9coff6k0if31umj0qgx3uvf",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coff6k0if31umj0qgx3uvf.webp",
    info: "この世界でも稀有な職業神姉弟の姉。果実酒や料理、旅、文化、そして人間をこよなく愛し、施しを授けたという。",
    category: "アンノウン",
    type: "NORMAL",
    name: "伝説の語り部ユウコ・キバヤシ(Water)",
    spec: {
      status: { hp: 1920, atk: 633, def: 534, spd: 396 },
      skill: [
        {
          title: "クラッシング",
          desc: "敵1体にダメージを与え、味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "インシピッド",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        { title: "フランク", desc: "召喚時に確率でATKをあげる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofrnq0kdi1umj9y44cmdx",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofrnq0kdi1umj9y44cmdx.webp",
    info: "稀有な存在である職業神姉弟の弟。シンは姉と同様に様々な文化全般に、多くの英雄を生み出して、人々を救ったという。",
    category: "アンノウン",
    type: "NORMAL",
    name: "神話の語り部シン・キバヤシ(Thunder)",
    spec: {
      status: { hp: 1920, atk: 660, def: 534, spd: 380 },
      skill: [
        {
          title: "アシッド",
          desc: "敵1体にダメージを与え、味方全員のATKを上げる。3ターン有効",
        },
        {
          title: "ハーベスト",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        { title: "エステル", desc: "召喚時に確率でSPDをあげる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cog0d60lqz1umj4qsgfxgy",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cog0d60lqz1umj4qsgfxgy.webp",
    info: "日本のイラストレーター天野喜孝による描き下ろし作品。\n\n「かつて存在したグリウスという帝国は、王がルティヤーを狩ろうとした事の報復を受け、一夜にして大陸から消滅したと伝えられている」",
    category: "アンノウン",
    type: "NORMAL",
    name: "火山の守り手ルティヤー(Earth)",
    spec: {
      status: { hp: 2025, atk: 663, def: 526, spd: 387 },
      skill: [
        { title: "マグマの奔流", desc: "敵全員に大ダメージ" },
        { title: "火山の怒り", desc: "自分のATKを上げる。3ターン有効" },
        { title: "火山榴弾", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof52h0gts1umj4lzl3zdx",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof52h0gts1umj4lzl3zdx.webp",
    info: "日本のイラストレーター天野喜孝による描き下ろし作品。\n\n「アルマダはその鬼神のごとき外見と苛烈な武勇から恐れられることが多かったが、その実、優しく花や蝶を愛でる男であったという」",
    category: "アンノウン",
    type: "NORMAL",
    name: "黒翼の僧兵アルマダ(Poison)",
    spec: {
      status: { hp: 1958, atk: 658, def: 530, spd: 401 },
      skill: [
        {
          title: "金触斬",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        { title: "神剣凱法", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "剣流鎧消",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coekc20dk31umj4ef8e6qa",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coekc20dk31umj4ef8e6qa.webp",
    info: "日本のイラストレーター天野喜孝による描き下ろし作品。\n\n「ディアナは高いところを好んだ。丘や塔の上に立ち、その祝福の槍を携え、遥か彼方を見据える。自分がかつて生きた世界を」",
    category: "アンノウン",
    type: "NORMAL",
    name: "祝福の槍騎兵ディアナ(Nature)",
    spec: {
      status: { hp: 1973, atk: 635, def: 532, spd: 410 },
      skill: [
        {
          title: "ルバリア",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "ケアスティング",
          desc: "敵1体にダメージを与え、味方全員のHPを回復する",
        },
        {
          title: "プロスピード",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof9mx0hjk1umj649rggnz",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof9mx0hjk1umj649rggnz.webp",
    info: "温かみのあるレトロSFタッチで大人気のイラストレーター・イトウケイイチロウによる描き下ろし作品。\n\n千里眼は、あらゆるものを見通す力。\n距離も時間も関係なく、隠れているものさえ暴き出す。\n「我が眼より逃れられるものなし」",
    category: "サービス",
    type: "NORMAL",
    name: "千里眼師(Water)",
    spec: {
      status: { hp: 1958, atk: 633, def: 518, spd: 400 },
      skill: [
        { title: "ヴィルーパークシャ", desc: "2回攻撃する。" },
        { title: "プロビデンスの目", desc: "バジェットを増やす" },
        {
          title: "秘されし悪事の暴露",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coew5r0ff41umjdtbh459i",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coew5r0ff41umjdtbh459i.webp",
    info: "日本のイラストレーター・漫画家、高畑雪による描き下ろし作品。\n\n「まずは、池に飛び込むことが目標よ」\n彼女はそう言って、シーズンを開始した。\n今年のメジャーも楽しみだね。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "女性プロゴルファー(Nature)",
    spec: {
      status: { hp: 1950, atk: 660, def: 512, spd: 390 },
      skill: [
        {
          title: "パワフルショット",
          desc: "敵全員にダメージをあたえ、さらに自分のATKを上げる。",
        },
        {
          title: "スロープレイ・ペナルティ",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "イーグルアタック", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeui30f5u1umj85wr3xu0",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coeui30f5u1umj85wr3xu0.webp",
    info: '『カードファイト!! ヴァンガード』に登場するユニット。\n"ロイヤルパラディン"と袂を分かった影の騎士団“シャドウパラディン”の戦士。\n「ブラスター・ブレード」への憎しみの感情により闇に堕ちた。',
    category: "アンノウン",
    type: "NORMAL",
    name: "【Vanguard】ブラスター・ダーク(Poison)",
    spec: {
      status: { hp: 1942, atk: 633, def: 534, spd: 391 },
      skill: [
        { title: "薙ぎ払う漆黒の剣", desc: "敵全員に大ダメージ" },
        {
          title: "常闇より現れし漆黒の亡霊",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "覚悟の剣 ブラスター・ダーク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofbnl0hv31umj2set5mgl",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofbnl0hv31umj2set5mgl.webp",
    info: '『カードファイト!! ヴァンガード』に登場するユニット。\n軍事国家の航空攻撃部隊・"かげろう"の指揮官。\n地獄の業火「エターナル・フレイム」が放たれた時、すべての者は絶望に恐れおののく。',
    category: "アンノウン",
    type: "NORMAL",
    name: "【Vanguard】ドラゴニック・オーバーロード(Fire)",
    spec: {
      status: { hp: 1958, atk: 667, def: 518, spd: 380 },
      skill: [
        {
          title: "黙示録の剣",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        { title: "黙示録の風", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "黙示録の炎", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof4wo0gsv1umjbl3p164f",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cof4wo0gsv1umjbl3p164f.webp",
    info: '『カードファイト!! ヴァンガード』に登場するユニット。\n神聖国家の正規軍・"ロイヤルパラディン"の精鋭騎士。\n「勇気」を力に変える「ブラスター・ブレード」の力を発揮し、その名を受け継ぐ英雄。',
    category: "アンノウン",
    type: "NORMAL",
    name: "【Vanguard】ブラスター・ブレード(Thunder)",
    spec: {
      status: { hp: 1897, atk: 648, def: 522, spd: 400 },
      skill: [
        { title: "バースト・ブレード", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "決して挫けぬ勇気",
          desc: "味方1体のATK&DEFを上げる。3ターン有効",
        },
        { title: "光の剣 ブラスター・ブレード", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coepj00edm1umj3coadhwy",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coepj00edm1umj3coadhwy.webp",
    info: "日本のイラストレーター・漫画家七六による描き下ろし作品。\n\n人は「傭兵」と呼ぶが、我々はあくまでも「警備会社」だ。\n依頼されれば、後方支援だけでなく前線での各種サービスも提供しているにすぎない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "民間軍事会社警備員(Poison)",
    spec: {
      status: { hp: 1912, atk: 662, def: 522, spd: 389 },
      skill: [
        {
          title: "前線輸送任務",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "人質奪還作戦", desc: "敵全員に大ダメージ" },
        {
          title: "策源地構築",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cofkde0j8g1umj5e0dbm7s",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofkde0j8g1umj5e0dbm7s.webp",
    info: "スペインのバンド・デシネ作家ケニールイスにより描き下ろし作品。\n\n一期一会で歌われるカンテと奏でられるギターに合わせ、時には炎ように陽気に、時には熾火のように苦し気に踊る。\n彼女はバイラオーラ。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "フラメンコダンサー(Fire)",
    spec: {
      status: { hp: 1927, atk: 657, def: 514, spd: 394 },
      skill: [
        {
          title: "サパテアード",
          desc: "敵全員にダメージをあたえ、さらに自分のSPDを上げる。",
        },
        { title: "ブラッソ", desc: "敵1体に特大ダメージ" },
        { title: "パリージョ", desc: "召喚時に確率でSPDをあげる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofwl80l5i1umj6hfydbap",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofwl80l5i1umj6hfydbap.webp",
    info: "漫画「燁姫」、「緋の稜線」などで知られる佐伯かよのによる描き下ろし作品。\n\n四季折々の樹々や草花を花器に生けるアーティスト。\n命を吹き込み完成させた作品は、場を支配しその空気を一変させる。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "華道家(Earth)",
    spec: {
      status: { hp: 1973, atk: 643, def: 514, spd: 394 },
      skill: [
        {
          title: "花命昇華",
          desc: "味方全員を大幅に回復するが、自分はダメージを受ける。",
        },
        { title: "静謐なる一花一葉", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "WABISABI",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coev1s0f8u1umj43vjfbn9",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coev1s0f8u1umj43vjfbn9.webp",
    info: "自らよりも巨大な蟹籠と呼ばれる罠を次々に海に放り込みカニを狩る。\n極寒の嵐と逆巻く波に翻弄される過酷な船上の日々の果てに待つのは金か、それとも……。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "超・カニ漁師(Poison)",
    spec: {
      status: { hp: 1980, atk: 660, def: 528, spd: 396 },
      skill: [
        { title: "蟹籠嵐", desc: "ランダムな敵に3回ダメージ" },
        { title: "蟹々の深淵", desc: "敵全員のSPDを下げる。3ターン有効" },
        {
          title: "水底の鋏地獄",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coetcw0ezb1umjap4kapwi",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coetcw0ezb1umjap4kapwi.webp",
    info: "漫画「エリア88」で知られる新谷かおるによる描き下ろし作品。\n\n「空の旅の安全はワタクシにお任せください。\n完璧なフライトプランの作成、航路の監視にサポート。\n例えワイバーンに遭遇しても最適解にて誘導しますよ」",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ディスパッチャー(Thunder)",
    spec: {
      status: { hp: 1897, atk: 652, def: 534, spd: 389 },
      skill: [
        {
          title: "最適解のフライトプラン",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "完璧なるロードコントロール",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "航路誘導：地上のキャプテン",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
      ],
    },
  },
  {
    id: "cl9cofkz40jbx1umjh22b97ep",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofkz40jbx1umjh22b97ep.webp",
    info: "漫画「地獄先生ぬ～べ～」「霊媒師いずな」で知られる岡野剛による描き下ろし作品。\n\n 読み書き計算、そして社会とのかかわり方、子供の成長に必要な教育を行うもの。\n今日も子どもたちを教え、諭し、守り、導く。",
    category: "教育",
    type: "NORMAL",
    name: "小学校教師(Fire)",
    spec: {
      status: { hp: 1980, atk: 640, def: 528, spd: 384 },
      skill: [
        {
          title: "算術結界：四則演算",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "三角定規ブーメラン", desc: "敵全員に大ダメージ" },
        {
          title: "熱血：子供たちへのエール",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofrfn0kc81umj1i4n4zbm",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofrfn0kc81umj1i4n4zbm.webp",
    info: "日本でも刊行され、アニメ化もされた人気漫画「ラディアン」で知られるフランスのバンド・デシネ作家トニー・ヴァレントによる書き下ろし作品。\n\n「我々の住む地球は、植物が満ち溢れる奇跡の星なの」\n数多の生物の揺り籠たる森から、道端の草木まで、\n彼女の目は等しく理解しようという光をたたえている。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "植物学者(Nature)",
    spec: {
      status: { hp: 1935, atk: 635, def: 524, spd: 399 },
      skill: [
        { title: "茨薔薇の鞭", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "緑の息吹",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "バンブーファランクス",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofvoh0l0b1umjhapzfrpg",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofvoh0l0b1umjhapzfrpg.webp",
    info: "日本のイラストレーター藤ちょこによる描き下ろし作品。\n\n化粧品と化粧道具の扱いを極めたプロフェッショナルにして\n美しくありたい者の守護者であり、美に至る道を説く者。\n彼女の繰り出す無限の色彩が、誰をも美しく変貌させる。",
    category: "サービス",
    type: "NORMAL",
    name: "美容部員(Water)",
    spec: {
      status: { hp: 1912, atk: 632, def: 538, spd: 395 },
      skill: [
        {
          title: "ラッシュエキスパンション",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "攻防一体：ヒアルロンアタック",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "魔爪結界：紅蓮のペデュキュア",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofffk0igi1umj8c9mfouv",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofffk0igi1umj8c9mfouv.webp",
    info: "漫画「ドーベルマン刑事」「ブラック・エンジェルズ」で知られる平松伸二による描き下ろし作品。\n\n「言葉、感情、理由、事実。私の全てが偽りであり、虚無。\nでも、君たちはいつも騙される。\n”私”なんて何処にも存在しないモノなのにね？」",
    category: "アンノウン",
    type: "NORMAL",
    name: "詐欺師(Poison)",
    spec: {
      status: { hp: 1867, atk: 628, def: 550, spd: 397 },
      skill: [
        {
          title: "ワンクリック・インフェルノ",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        {
          title: "偽装：理想の花嫁",
          desc: "敵1体のDEFを下げ、敵1体に特大ダメージを与える。3ターン有効",
        },
        { title: "虚言：横領の息子", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cl9cof8370hat1umjdrhuh91o",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cof8370hat1umjdrhuh91o.webp",
    info: "寺沢武一の漫画「コブラ」より宇宙海賊コブラが登場。\n\nやつの名はコブラ。不死身の宇宙海賊。\n武器は左腕に仕込まれたサイコガン。\nアーマロイド・レディと共に愛機タートル号で 銀河を駆け巡る。",
    category: "アンノウン",
    type: "NORMAL",
    name: "宇宙海賊コブラ(Thunder)",
    spec: {
      status: { hp: 2010, atk: 660, def: 528, spd: 393 },
      skill: [
        { title: "サイコガン", desc: "敵全員に大ダメージ" },
        {
          title: "海賊の葉巻",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        { title: "最終兵器", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coefi90ct61umj4wrva78y",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coefi90ct61umj4wrva78y.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n麻薬、使い方によっては、人の体と精神を蝕む悪魔となる。\n彼の仕事は、麻薬を流通させる悪人ども相手の狩人だ。\n今日も彼は相棒と共に闇を駆け抜け、密売人どもを狩る。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "麻薬取締捜査官(Thunder)",
    spec: {
      status: { hp: 1912, atk: 647, def: 538, spd: 386 },
      skill: [
        {
          title: "ドラッグ・ディテクション",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "潜入：スティング・オペレーション",
          desc: "敵全員に大ダメージ",
        },
        {
          title: "強制捜査の捕縛",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coewvb0fj61umjgqbx71tj",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coewvb0fj61umjgqbx71tj.webp",
    info: "VRアーティスト・せきぐちあいみのライブペインティング作品。\n\nVRアーティスト、それはバーチャルのキャンバスに果てしない創造の世界を描き出すデジタルの魔法使い。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "VRアーティスト(Water)",
    spec: {
      status: { hp: 1912, atk: 618, def: 546, spd: 397 },
      skill: [
        {
          title: "結界：壺中之天",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        { title: "画龍飛翔斬", desc: "敵全員に大ダメージ" },
        {
          title: "空虚空の主",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof5ht0gw81umj0fwt3jhf",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof5ht0gw81umj0fwt3jhf.webp",
    info: "日本のイラストレーター・漫画家小梅けいとによる描き下ろし作品。\n\n読者に最も近い存在は、等身大が最大のアピールポイント。\n幅広い交友関係による口コミ拡散力は侮れない。\nただ、この職業で居続けるのはかなり難しい。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "読者モデル(Poison)",
    spec: {
      status: { hp: 1958, atk: 632, def: 534, spd: 389 },
      skill: [
        {
          title: "映え写真UP",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "着回しコーデ", desc: "味方全員のHPを3ターン回復し続ける。" },
        {
          title: "インフルエンス・ウェーブ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cog0nv0lso1umj6vey69hr",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cog0nv0lso1umj6vey69hr.webp",
    info: "日本のイラストレーターiximaによる描き下ろし作品。\n\n「商品を買ってもらって満足するようでは甘いわ。\n完璧な接客でお客様にリピーターになって頂く事……\nそれが私の使命であり喜びなのよ」",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "衣料品販売員(Earth)",
    spec: {
      status: { hp: 1958, atk: 618, def: 526, spd: 403 },
      skill: [
        {
          title: "リピーター・メイカー",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "察知：季節を先取る者",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "優しき声かけの極意",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coeoiw0e7u1umj4tmbdnf7",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coeoiw0e7u1umj4tmbdnf7.webp",
    info: "インドネシアのイラストレーターDcrossboneによる描き下ろし作品。\n\n渇きにあえぐ民の声を受けて、\n天空を舞う水神をその身に降ろし、\n自ら龍となりて恵みの雨を齎せしもの。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "レインシャーマン(Water)",
    spec: {
      status: { hp: 1928, atk: 628, def: 534, spd: 397 },
      skill: [
        { title: "干天の慈雨", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "風雨乱舞",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "水神の咆哮：豪雨招来", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof5r50gxo1umjbbadepp5",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cof5r50gxo1umjbbadepp5.webp",
    info: "世界的大ヒットゲームのスピンオフ作品「ドラゴンクエスト列伝」で知られる人気マンガ家、藤原カムイによる描き下ろし作品。\n\n「誰も抗えない、魅惑のふわっふわオーガニックコットン。ここまで育てるの、大変だったんですよ。ね、気持ちいいでしょう？」",
    category: "クラフター",
    type: "NORMAL",
    name: "綿職人(Earth)",
    spec: {
      status: { hp: 1950, atk: 642, def: 526, spd: 390 },
      skill: [
        {
          title: "衝撃吸収コットンボール",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "陣地遮断コットンカーテン",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "綿摘みの約束",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coeyzb0fv61umj0dgphpje",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coeyzb0fv61umj0dgphpje.webp",
    info: "多くのゲームキャラクターデザインを手がける日本のイラストレーター萩谷薫による描き下ろし作品。\n\n刀剣の鞘、食器、人形などなど…。\n歴戦の剣士から子供まで、実は何かとお世話になっているのが塗師である。",
    category: "クラフター",
    type: "NORMAL",
    name: "塗師(Nature)",
    spec: {
      status: { hp: 1928, atk: 647, def: 534, spd: 386 },
      skill: [
        {
          title: "朱塗りの一閃",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "妙技・武具修繕",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
        { title: "鮮烈！漆スプラッシュ", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coex3d0fkg1umjal0kcptw",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coex3d0fkg1umjal0kcptw.webp",
    info: "フランスのバンドデシネ作家ルノー・ルメールによる描き下ろし作品。\n\n炎をまとう剛速球。\nその言葉が比喩ではないのが、彼の恐ろしいところだ。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロ野球選手(Fire)",
    spec: {
      status: { hp: 1973, atk: 628, def: 522, spd: 397 },
      skill: [
        {
          title: "挑発的盗塁",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "剛脚スライディング",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "不退転のホームラン宣言！",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof02r0g1h1umj5w9q30hi",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof02r0g1h1umj5w9q30hi.webp",
    info: "温かみのあるレトロSFタッチで大人気のイラストレーター・イトウケイイチロウによる描き下ろし作品。\n\nこのジョブ・ロードが一柱いるだけで、その国のQOLが格段に高まるという。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "カフェ・バリスタ(Water)",
    spec: {
      status: { hp: 1958, atk: 632, def: 534, spd: 389 },
      skill: [
        {
          title: "目覚めのカプチーノ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "陽炎のカフェ・ロワイヤル",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "休息のエスプレッソ",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
      ],
    },
  },
  {
    id: "cl9cofd5w0i3q1umjhcashro2",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofd5w0i3q1umjhcashro2.webp",
    info: "フィリピンのグラフィックデザイナーPajapolによる描き下ろし作品。\n\n「どんなに混んだ道も、華麗にすり抜けて最速で届けてやるよ。ただし1tオーバーの超重量級ジョブ・ロードはお断りだ。タイヤが潰れちまうからな。」",
    category: "サービス",
    type: "NORMAL",
    name: "バイクタクシー運転手(Thunder)",
    spec: {
      status: { hp: 1943, atk: 637, def: 530, spd: 392 },
      skill: [
        { title: "ヘルメットボンバー", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "渋滞すり抜けドライブ",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        {
          title: "飛ばすぜ！しがみつきな！",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeq340egu1umjht4598tm",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coeq340egu1umjht4598tm.webp",
    info: "日本のイラストレーターけーしんによる描き下ろし作品。\n\n「見てください！1万2千年前のワークドッグの化石です。こっちは画家のジョブ・ロードの始祖が描いたと言われる風景画…。どれも素晴らしいでしょう？全部解説しますね！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "学芸員(Earth)",
    spec: {
      status: { hp: 1882, atk: 642, def: 546, spd: 389 },
      skill: [
        { title: "特大展示パネルプレス", desc: "敵全員に大ダメージ" },
        {
          title: "学びのアジテーション",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "心身消耗・長談義",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofg9a0il61umjfx47aqq0",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofg9a0il61umjfx47aqq0.webp",
    info: "フランスの巨匠コミック作家Olivier Vatineによる描き下ろし作品\n\n「戦になれば、他のジョブ・ロードが呼び出した動物を何百匹も見ることになるからな」",
    category: "医療",
    type: "NORMAL",
    name: "動物看護師(Fire)",
    spec: {
      status: { hp: 1867, atk: 628, def: 538, spd: 406 },
      skill: [
        {
          title: "捨て身のノーガード看護",
          desc: "味方全員を大幅に回復するが、自分はダメージを受ける。",
        },
        {
          title: "毛玉ボールシュート",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "鋼鉄のエリザベスカラー",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof49q0gp61umjf1hh0shl",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cof49q0gp61umjf1hh0shl.webp",
    info: "日本のイラストレーターもっつん*による描き下ろし作品。\n\nおもてなしの心が具現化した存在。\n音もなく寝具を整え、呼ばれれば瞬時に姿を現す所作からは、柔和な笑顔の裏にある厳しい鍛錬の蓄積が窺える。",
    category: "サービス",
    type: "NORMAL",
    name: "仲居(Nature)",
    spec: {
      status: { hp: 1912, atk: 632, def: 550, spd: 386 },
      skill: [
        {
          title: "おもてなしマインド",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "箒ハリケーン", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "宗和膳シールドバッシュ",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofreg0kc11umj06rjhojp",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofreg0kc11umj06rjhojp.webp",
    info: "漫画「ドーベルマン刑事」「ブラック・エンジェルズ」で知られる平松伸二による描き下ろし作品。\n\n「俺が社会の屑だって？本当の屑は、一時の快楽のために金も愛も人生も、全て投げ出したコイツらの方さ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "麻薬密売人(Poison)",
    spec: {
      status: { hp: 1897, atk: 623, def: 542, spd: 400 },
      skill: [
        {
          title: "疲れが消える薬",
          desc: "味方1体のATKを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        {
          title: "ジャンキーマニピュレート",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "破滅のインジェクション",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coejb60dec1umj8d0665q7",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coejb60dec1umj8d0665q7.webp",
    info: "日本のイラストレーター・漫画家咲良ゆきによる描き下ろし作品。\n\nバーという閉鎖空間の支配神。\nその中で語られた秘密は決して漏れることなく、その中で狼藉をはたらいた者の行方は、その後知られることはない。",
    category: "サービス",
    type: "NORMAL",
    name: "バーテンダー(Poison)",
    spec: {
      status: { hp: 1928, atk: 647, def: 522, spd: 395 },
      skill: [
        { title: "轟沈グリーン・アラスカ", desc: "敵全員に大ダメージ" },
        {
          title: "酩酊スレッジハンマー",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "開幕ショットガン！",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coenq90e3c1umj5abv02ln",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coenq90e3c1umj5abv02ln.webp",
    info: "日本のイラストレーター字消による描き下ろし作品。\n\n「仕事のストレスも怪我の痛みも、みんな忘れてお眠りなさい。あなたが目覚める頃までに、私が全て癒して差し上げますから。」",
    category: "サービス",
    type: "NORMAL",
    name: "快眠セラピスト(Nature)",
    spec: {
      status: { hp: 1958, atk: 618, def: 546, spd: 389 },
      skill: [
        {
          title: "眠り羊の突進",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        { title: "低反発枕スイング", desc: "敵1体に特大ダメージ" },
        {
          title: "爽快覚醒：エナジーMAX",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coew1a0fef1umjhq2q4jgh",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coew1a0fef1umjhq2q4jgh.webp",
    info: "アニメ化もされた人気漫画「電波教師」で知られる東毅による書き下ろし作品。\n\n才色兼備の代名詞ともいわれる女神。\n「勉学に美容に社交、全て絶対に妥協しないわ。そして自分自身の言葉と声で、世の中に真実を伝えるの！」",
    category: "情報・運輸",
    type: "NORMAL",
    name: "女性アナウンサー(Thunder)",
    spec: {
      status: { hp: 1950, atk: 620, def: 528, spd: 402 },
      skill: [
        {
          title: "熱情の突撃レポート",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "爽快！論破ウェーブ",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        { title: "直撃マイクラッシュ！", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeonz0e8o1umj5vid7hix",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coeonz0e8o1umj5vid7hix.webp",
    info: "日本のイラストレーター田中健一による描き下ろし作品。\n\n国家の門番。偽造書類も変装も、彼女の天眼は欺けない。\nこのアミュレットを持つジョブ・トライブスは、常にダークワーカトライブたちの恐怖の的である。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "入国警備官(Earth)",
    spec: {
      status: { hp: 1897, atk: 637, def: 542, spd: 392 },
      skill: [
        {
          title: "許可なき者は誰も通さん！",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "パスポートとビザを見せろ",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "私を欺けると思うな！！",
          desc: "敵1体のATKとDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coegen0cy31umj33ofcwtv",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coegen0cy31umj33ofcwtv.webp",
    info: "日本のイラストレーター ミユキルリアによる描き下ろし作品。\n\n人々の祈りを舞へと変えて神に伝え、神の声を託宣として人々に伝える。\nそんな彼女は時として、ジョブ・ロードとジョブ・トライブスの喧嘩を仲裁することもあるという。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "巫女(Water)",
    spec: {
      status: { hp: 1958, atk: 618, def: 546, spd: 389 },
      skill: [
        { title: "平定の神託", desc: "敵全員のATKとDEFを下げる。3ターン有効" },
        {
          title: "浄化の神酒",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "鎮魂の神楽",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofhfq0iru1umjht8a863x",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofhfq0iru1umjht8a863x.webp",
    info: "「2021年は記念すべきJobTribes正式リリースの年だ！新たなる伝説の幕開けを皆で祝おう。叫べ！HAPPY NEW YEAR！」\nイラスト：DEAartist",
    category: "アンノウン",
    type: "NORMAL",
    name: "ハッピーニューイヤーマン2021(Water)",
    spec: {
      status: { hp: 1882, atk: 618, def: 546, spd: 403 },
      skill: [
        {
          title: "ハッピーオーラ2021",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "輝くニューイヤー光線！",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        { title: "招福！サンライズフラッシュ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofxt60lce1umjceu82zm0",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofxt60lce1umjceu82zm0.webp",
    info: "日本のイラストレーターむらいっちによる描き下ろし作品。\n\n「あらゆる種族の可愛い子供たち。\n可能性の塊のようなこの子たちのをお世話していると、私も未来に希望を抱けるんです。」",
    category: "教育",
    type: "NORMAL",
    name: "ナニー(Fire)",
    spec: {
      status: { hp: 1973, atk: 613, def: 534, spd: 397 },
      skill: [
        {
          title: "EQ向上：情操教育",
          desc: "味方全員のATKとDEFを上げる。3ターン有効",
        },
        { title: "守護者の鉄槌", desc: "敵1体に特大ダメージ" },
        {
          title: "増強：育児の千手",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofmxv0jmy1umj9q9ugqct",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofmxv0jmy1umj9q9ugqct.webp",
    info: "漫画「サイレントメビウス」「真・快傑蒸気探偵団」「彼女のカレラ」「太陽系SF冒険大全スペオペ! 」などで知られる麻宮騎亜による書き下ろし作品。\n\nより快適なインテリア、よりスタイリッシュなエクステリア。今より速く、今より強く…！\n彼女の瞳はいつでも、未来を見つめている。",
    category: "クラフター",
    type: "NORMAL",
    name: "カーデザイナー(Thunder)",
    spec: {
      status: { hp: 1882, atk: 642, def: 526, spd: 403 },
      skill: [
        {
          title: "タフネスオーバーフェンダー",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "流線形エクステリア",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        { title: "神速具現化3Dモデルアタック", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coegkk0cz11umj8w3d1g0k",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coegkk0cz11umj8w3d1g0k.webp",
    info: "人気の女性サンタ。年末には世界中を飛び回っている。実はそろそろ100歳になるが、その話をすると危険である。\n「私が100歳？ あなたもプレゼントの材料にしちゃいますよ？」\nイラスト：SAA",
    category: "アンノウン",
    type: "NORMAL",
    name: "サンタクロース（レッド）(Fire)",
    spec: {
      status: { hp: 1965, atk: 615, def: 552, spd: 384 },
      skill: [
        {
          title: "ウィンターローズの祈り",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        { title: "シャイニングもみの木ランス", desc: "敵1体に特大ダメージ" },
        {
          title: "癒しのイルミネーションシャワー",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
      ],
    },
  },
  {
    id: "cl9cofljl0jf61umjcuqjh4ky",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofljl0jf61umjcuqjh4ky.webp",
    info: "漫画『まりあ†ほりっく』『破天荒遊戯』などで知られる遠藤海成による書き下ろし作品。\n\n研修中といえども医者である。\n若さゆえの情熱と探求心、そして体力を武器に、今日も彼は医学の道を突き進む。",
    category: "医療",
    type: "NORMAL",
    name: "臨床研修医師(Poison)",
    spec: {
      status: { hp: 1950, atk: 620, def: 528, spd: 402 },
      skill: [
        {
          title: "恐れ知らずのキュリオシティ",
          desc: "敵全員のATKとSPDを下げる。3ターン有効",
        },
        {
          title: "自力更生ストレスマネジメント",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "オーベンの神撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeq1w0egn1umj5a2o9gdu",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coeq1w0egn1umj5a2o9gdu.webp",
    info: "西尾維新の〈物語〉シリーズ、忘却探偵シリーズのカバーイラストで人気を博す、台湾のイラストレーターVOFANによる描き下ろし作品。\n\n薄皮に包まれた魅惑の肉汁。その誘惑に負けて火傷する者は、太古の昔から後を絶たない。\n「蓮華に乗せて、皮を破るといいんだゾ！」",
    category: "クラフター",
    type: "NORMAL",
    name: "小籠包職人(Nature)",
    spec: {
      status: { hp: 1973, atk: 632, def: 522, spd: 395 },
      skill: [
        { title: "ムチムチ包子ガトリング", desc: "敵全員に大ダメージ" },
        {
          title: "防御的蒸籠カッター",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        {
          title: "みなぎる熱々スープ",
          desc: "自分のATKとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coetri0f1n1umj34ikcted",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coetri0f1n1umj34ikcted.webp",
    info: "漫画『ホールインワン』、『ばぁじんロード』、『ロンリーロード』などで知られる金井たつおによる書き下ろし作品。\n\nボウラーの中でもプロの称号を与えられし戦士たち。華麗なスイングから放たれる１６ポンドの剛速球で、立ちはだかるピンの軍勢を薙ぎ倒す。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロボウラー(Fire)",
    spec: {
      status: { hp: 1875, atk: 650, def: 520, spd: 405 },
      skill: [
        { title: "奇跡のオールウェイ", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "美麗なフォロースルー",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "剛速球パンチアウト",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof01j0g1a1umj7rqv6ipa",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cof01j0g1a1umj7rqv6ipa.webp",
    info: "ファンタジー要素を含んだ描写で強い感情を表現することを得意とするフィリピンのイラストレーターwickedalucardによる描き下ろし作品。\n\n「離れていても時間が無くても、No problem! 言語と物理の壁を越えてワタシと学びましょ！何事もenjoyする事が大切よ。Let's try♪」",
    category: "サービス",
    type: "NORMAL",
    name: "オンライン英会話教師(Thunder)",
    spec: {
      status: { hp: 1980, atk: 610, def: 548, spd: 387 },
      skill: [
        {
          title: "コネクト・ユアマインド",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        { title: "輝きの鼓舞：Go for it!", desc: "敵1体に特大ダメージ" },
        {
          title: "絶対支配：ブレイクアウトルーム",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofy3j0le21umjcw1sbbky",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofy3j0le21umjcw1sbbky.webp",
    info: "「清閑なる癒しの茶室へようこそ。美味しいお抹茶や和菓子をご用意いたしました。ふふ、お加減はいかがでございますか？」",
    category: "クラフター",
    type: "NORMAL",
    name: "茶道家(Water)",
    spec: {
      status: { hp: 1950, atk: 620, def: 536, spd: 396 },
      skill: [
        { title: "極上：棗に香る薄茶", desc: "敵全員に大ダメージ" },
        {
          title: "練りきり：懐紙に咲く蓮の花",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "聖なる献上茶事結界",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofyxk0lis1umjgj14g7a6",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofyxk0lis1umjgj14g7a6.webp",
    info: "日本の漫画家あさみ青子による描き下ろしイラスト。\n\n「今日はどんな靴をご所望だい？空を飛べるようになる靴？ 魔法のガラスの靴？それとも…死ぬまで踊り続ける靴かな？」",
    category: "サービス",
    type: "NORMAL",
    name: "靴職人(Earth)",
    spec: {
      status: { hp: 1935, atk: 615, def: 540, spd: 399 },
      skill: [
        {
          title: "アサルト・ピンサーペンチ",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "魔法：12時のガラスの靴",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "戒め：永久舞踏の靴", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofcpt0i151umjbuoh343s",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofcpt0i151umjbuoh343s.webp",
    info: "日本のイラストレーターふーみによる描き下ろし作品。\n\n「未来をお知りになりたいのですか？ それとも、意中の相手の胸の内？ いずれにせよ、星の導きとカードが紡ぐ言葉は、悩めるあなたの道しるべとなるでしょう」",
    category: "クラフター",
    type: "NORMAL",
    name: "占い師(Water)",
    spec: {
      status: { hp: 1875, atk: 635, def: 540, spd: 399 },
      skill: [
        {
          title: "星詠みのヴェーダ",
          desc: "味方全員のHPを3ターン回復し、さらにDEFを上げる。",
        },
        {
          title: "大アルカナXXI：世界",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "小アルカナ：剣のナイト",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofu330kr81umj3ks0fwq1",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofu330kr81umj3ks0fwq1.webp",
    info: "漫画『マリーグレイブ』、『アトランティド』などで知られる山地ひでのりによる書き下ろし作品。\n\n行政を司る精鋭部隊「内閣」を束ねる最高指揮官。他国との交渉の他、鉄壁の覇王として国と国民を守る武神でもある。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "総理大臣(Poison)",
    spec: {
      status: { hp: 1920, atk: 660, def: 528, spd: 384 },
      skill: [
        {
          title: "任命権型レーザーブレード",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "内閣改造アーム・クラッシュ",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        {
          title: "臨時閣議の号令",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl9cofl7c0jd81umjaatlgpwe",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofl7c0jd81umjaatlgpwe.webp",
    info: "『大東京トイボックス』『南国トムソーヤ』などで知られる二人組漫画家うめによる描き下ろし作品。\n\n多くのレストランで経験を積み、技術を学んだフランス料理の魔術師たち。料理長の称号を得た者は精鋭部隊ブリガード・ド・キュイジーヌの長となる。",
    category: "サービス",
    type: "NORMAL",
    name: "フレンチシェフ(Nature)",
    spec: {
      status: { hp: 1920, atk: 650, def: 520, spd: 396 },
      skill: [
        {
          title: "華麗：ポワソン＆ヴィアンド",
          desc: "敵1体のDEFを下げ、敵1体に特大ダメージを与える。3ターン有効",
        },
        { title: "ショコラの四重奏", desc: "敵全員に大ダメージ" },
        {
          title: "鮮やかなるオードヴル",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
      ],
    },
  },
  {
    id: "cl9coerfw0eod1umje2k123iq",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coerfw0eod1umje2k123iq.webp",
    info: "漫画『怪盗ルパン伝アバンチュリエ』『ガンダムUC星月の欠片』などで知られる森田崇による描き下ろし作品。\n\n予告状を送り、闇夜に紛れて絵画や宝石を華麗に盗み出す者たち。紳士的、義賊的な行動をポリシーとする彼らをダークヒーローと呼ぶ人々もいる。",
    category: "アンノウン",
    type: "NORMAL",
    name: "怪盗(Fire)",
    spec: {
      status: { hp: 1890, atk: 665, def: 508, spd: 402 },
      skill: [
        { title: "完璧なるディスガイズ", desc: "敵全員に大ダメージ" },
        {
          title: "ファンタスティック・スティール",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "機転：脱出ルート発見",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coel7a0doz1umj2ig4dei5",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coel7a0doz1umj2ig4dei5.webp",
    info: "バルセロナFicomicで最優秀国際漫画賞を受賞した『Himawari』、『Millenium Saga』、手塚治虫作『ばるぼら』の翻案作品『ドッペルゲンガー』などで知られるベレン・オルティガによる描き下ろし作品。\n\n「私のカメラは真実を映し、ペンはあらゆる言葉を綴り、情報を発信するの。だから取材のためならこの翼で何処へでも行くわ。戦場でも地獄でも——何処へでも、ね」",
    category: "情報・運輸",
    type: "NORMAL",
    name: "新聞記者(Poison)",
    spec: {
      status: { hp: 1965, atk: 630, def: 524, spd: 396 },
      skill: [
        {
          title: "号外型：スクープ・ランス",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "トランスミット・フリューゲル",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
        {
          title: "奇襲：夜討ち朝駆けの天つ風",
          desc: "自分のSPDをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofo9x0juf1umj5d2a9urv",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofo9x0juf1umj5d2a9urv.webp",
    info: "巨大な生き物を主とするイラストや風景画を得意とし、アニメ『魔法少女☆俺』全話のエンドカードを担当するなどで知られるイラストレーターもの久保による描き下ろし作品。\n\n獲物を狩る。それは生きていくために必要な事だ。\nだから今日も弾丸を放ち、手にした刃を深紅に染める。\n——尊き命に感謝をしながら。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "猟師(Earth)",
    spec: {
      status: { hp: 1935, atk: 635, def: 540, spd: 387 },
      skill: [
        { title: "ライフル・テンペスタ", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "ジビエ：シュヴルイユ・ヒール",
          desc: "自分のATKとDEFを上げる。3ターン有効",
        },
        { title: "鮮血のハンティングナイフ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofoxo0jy31umj8yi4baxp",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofoxo0jy31umj8yi4baxp.webp",
    info: "アニメ化や実写化もされた『まいっちんぐマチコ先生』で知られる漫画家えびはら武司による描き下ろし作品。\n\n声を媒介に衝撃波を放つ歌姫。\nその声は人々の心を震わせ感動を与える激励にもなり、あらゆる物質や魔獣を粉砕する武器にもなる。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "演歌歌手(Water)",
    spec: {
      status: { hp: 1950, atk: 620, def: 520, spd: 408 },
      skill: [
        {
          title: "情熱の古謡「レッド・サンシャイン」",
          desc: "敵1体のDEFを下げ、敵1体に特大ダメージを与える。3ターン有効",
        },
        {
          title: "悲恋の古謡「津軽ウィンター」",
          desc: "敵1体のATKを下げ、敵1体に特大ダメージを与える。3ターン有効",
        },
        { title: "コブシ・テクニック", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9coet0g0exc1umj00r21xeu",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coet0g0exc1umj00r21xeu.webp",
    info: "ゲーム『桃太郎電鉄シリーズ』のキャラクターデザイン、作画などで知られる漫画家、イラストレーターの土居孝幸による描き下ろし作品。\n\n旅の出発点、途中、終着点。お客様の旅路を見守り、案内する「駅員」を束ねる彼は、今日もホームから旅人たちが乗る電車を見送る。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "駅長(Thunder)",
    spec: {
      status: { hp: 1950, atk: 640, def: 528, spd: 390 },
      skill: [
        { title: "ステーション・ルーラー", desc: "敵全員に大ダメージ" },
        {
          title: "現場指示：乗客トラブル",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        {
          title: "非情の案内「終電」",
          desc: "敵1体のATKとSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coff460iep1umj63t6963y",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coff460iep1umj63t6963y.webp",
    info: "世界的大ヒットゲームのスピンオフ作品「ドラゴンクエスト列伝」で知られる人気マンガ家藤原カムイによる描き下ろし作品。\n\n「人々の手が色とりどりの実を摘む。それは戦士を奮い立たせる黒き雫や菓子となるのだ」",
    category: "ギャザラー",
    type: "NORMAL",
    name: "カカオ農園主(Nature)",
    spec: {
      status: { hp: 1920, atk: 630, def: 544, spd: 390 },
      skill: [
        {
          title: "黒のカカオ・キャノン",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "精製：至高のチョコレート",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "カラフル・カカオマシンガン",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9coeu7t0f481umj48k23jrg",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coeu7t0f481umj48k23jrg.webp",
    info: "『キャンディ・キャンディ』（原作・水木杏子）『ジョージイ！』（原作・井沢満）『メイミーエンジェル』などで知られるいがらしゆみこによる描き下ろし作品。\n\nいかなる怪我人にも病人にも加護を与えましょう。\nさあ、癒しを求める者はコチラへおいでなさい。",
    category: "医療",
    type: "NORMAL",
    name: "看護師(Earth)",
    spec: {
      status: { hp: 1950, atk: 620, def: 520, spd: 408 },
      skill: [
        {
          title: "感知：バイタルサインチェック",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
        { title: "春霞のレリーヴ・ペイン", desc: "敵1体に特大ダメージ" },
        {
          title: "インジェクション・リュミエール",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9coeq5g0eh71umjcdb918ly",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coeq5g0eh71umjcdb918ly.webp",
    info: "日本のアニメとアメリカンコミックの影響を受けた作風を特徴とし、2020年夏にフランスでのコミック発売が予定されているフランス在住のキャラクターデザイナー、イラストレーター及びコミック作家Ntochaによる描き下ろし作品。\n\n彼らは猛き魂を以ってハンマーを振るい、あらゆる武器を灼熱の焔から生み出す。\n——聖剣でも、魔槍でも。必要とする者がいるならば。",
    category: "クラフター",
    type: "NORMAL",
    name: "鍛冶職人(Fire)",
    spec: {
      status: { hp: 1920, atk: 630, def: 544, spd: 390 },
      skill: [
        { title: "ヴァルカン・ハンマー", desc: "ランダムな敵に3回ダメージ" },
        { title: "鍛造：鉄壁の大楯", desc: "敵全員のATKを下げる。3ターン有効" },
        { title: "業火のトランスファープレス", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofzjd0lma1umja6rzhagc",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofzjd0lma1umja6rzhagc.webp",
    info: "「俺の空」「硬派銀次郎」「サラリーマン金太郎」など多くのヒット作を生み出したレジェンド作家・本宮ひろ志による描き下ろし作品。\n\n暴動の鎮圧などに特化した戦士たる彼らは、高い防御力と戦闘力、機動力を誇る。敵地への突入と防戦においても右に出る者はいない。－ジョブ・ロードと戦争史より－",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "機動隊員(Thunder)",
    spec: {
      status: { hp: 1980, atk: 660, def: 512, spd: 384 },
      skill: [
        { title: "スパークル・レスキュー", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "攻守の大盾・ライオットシールド",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "突撃の装甲車", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofa6m0hmo1umj3g06hpvm",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofa6m0hmo1umj3g06hpvm.webp",
    info: "温かみのあるレトロSFタッチで大人気のイラストレーター・イトウケイイチロウによる描き下ろし作品。\n\n不思議な噂があった。必ず当たりくじを売ってくれるという女性の話だ。今も探し続けているが、出会えたことはない。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "宝くじ販売員(Nature)",
    spec: {
      status: { hp: 1995, atk: 650, def: 508, spd: 390 },
      skill: [
        { title: "年末の夢", desc: "敵全員に大ダメージ" },
        { title: "接客の達人", desc: "敵1体に特大ダメージ" },
        {
          title: "ビッグキャリーオーバー",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coem6n0duj1umj8hg13kxo",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coem6n0duj1umj8hg13kxo.webp",
    info: "「ウルトラマン」「ゴジラ」「ガンダム」の画集やプラモデルのパッケージアートで著名なイラストレーター開田裕治による描き下ろし作品。\n\n「彼らがここに来た時は何ができるのか誰もわからなかった。だが、穴を穿つ能力なら都市でも戦場でも引く手数多だ」（エレナ・ルース／アグリールの司祭）",
    category: "クラフター",
    type: "NORMAL",
    name: "シールドマシンオペレーター(Earth)",
    spec: {
      status: { hp: 1965, atk: 645, def: 524, spd: 387 },
      skill: [
        { title: "進撃のカッターヘッド", desc: "敵全員に大ダメージ" },
        {
          title: "ナイン・セグメント",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        {
          title: "精密モニターチェック",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coetx90f2k1umjg23pethp",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coetx90f2k1umjg23pethp.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\n殺しは苦手だが、殺さない程度に心と体を壊す方法なら、いくらでも。",
    category: "アンノウン",
    type: "NORMAL",
    name: "拷問師(Poison)",
    spec: {
      status: { hp: 1980, atk: 645, def: 512, spd: 393 },
      skill: [
        {
          title: "感覚剥奪：ホワイトトーチャー",
          desc: "敵1体のSPDを下げる。3ターン有効",
        },
        { title: "慄然の水責め", desc: "敵1体に特大ダメージ" },
        {
          title: "ラフテイクダウン",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofpty0k351umjcg287grm",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofpty0k351umjcg287grm.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\n強固な防壁も巧妙な電子迷路も、彼の好奇心を満たす玩具に過ぎない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "ハッカー(Thunder)",
    spec: {
      status: { hp: 1965, atk: 645, def: 516, spd: 393 },
      skill: [
        { title: "クラック：標的型攻撃", desc: "敵1体に特大ダメージ" },
        {
          title: "電脳遊戯：トロイの木馬",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
        {
          title: "ペネトレーションテスト",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl9cof1do0g8s1umj1vppblly",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof1do0g8s1umj1vppblly.webp",
    info: "漫画「ドーベルマン刑事」「ブラック・エンジェルズ」で知られる平松伸二による描き下ろし作品。\n\n「ダークワーカトライブスで最も恐れられてるのが奴らだ。元々人を殺すのが仕事なのに、ジョブ・ロードになって強化されてやがる」（チ・ルガール／ドクトールの大臣）\n\n＜中西プロデューサーのオススメ＞\n初期スキルは使いやすい『全体攻撃』\nそれ以外に敵のバジェットを継続的に減らしたり、敵全員のATKを下げる、妨害が得意なジョブ・ロード。\n手持ちのジョブ・ロードやシチュエーションにあわせて『殺し屋』を使いましょう。",
    category: "アンノウン",
    type: "NORMAL",
    name: "殺し屋(Poison)",
    spec: {
      status: { hp: 1935, atk: 655, def: 516, spd: 393 },
      skill: [
        { title: "孤高のヒットマン", desc: "敵全員に大ダメージ" },
        {
          title: "深紅：猛毒の美酒",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "沈黙：漆黒の拳銃", desc: "敵全員のATKを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofbpw0hvg1umj7m6e86q8",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofbpw0hvg1umj7m6e86q8.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\n人好きされる顔、真実味ある演技力、素早い逃げ足。それがこの仕事の3種の神”技”だ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "受け子(Earth)",
    spec: {
      status: { hp: 1905, atk: 650, def: 532, spd: 390 },
      skill: [
        { title: "リクルーターの誘い", desc: "敵1体に特大ダメージ" },
        { title: "テレフォントリック", desc: "敵全員に大ダメージ" },
        {
          title: "虚構演技：孫",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coexr30fo81umj7mwqfwan",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coexr30fo81umj7mwqfwan.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\nちょっとあんたの名義を貸してくれないか？心配ない。あんたも儲かる話だよ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "名義貸し(Nature)",
    spec: {
      status: { hp: 1935, atk: 655, def: 524, spd: 387 },
      skill: [
        { title: "偽りの温情", desc: "敵のバジェットを減らす" },
        { title: "リスクギフト", desc: "敵1体に特大ダメージ" },
        {
          title: "虚偽：ホロウネーム",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofghd0img1umj7rlbgyz0",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofghd0img1umj7rlbgyz0.webp",
    info: "大ヒットしアニメ化もされたサッカー漫画『エリアの騎士』（原作 伊賀大晃）や『神様の恋人』などで知られる月山可也による書き下ろし作品。\n\n言うまでもなく火薬は兵器として使われるが、彼ら花火師だけは頑としてそれを人々を楽しませるためにだけ使ったという。－ジョブ・ワールド戦史－",
    category: "クラフター",
    type: "NORMAL",
    name: "花火師(Fire)",
    spec: {
      status: { hp: 1920, atk: 630, def: 536, spd: 396 },
      skill: [
        {
          title: "開花：八重芯変化菊",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "４尺玉の大花・錦冠菊", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "百花園：万華鏡の舞",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coej7o0ddt1umj8pzk0jgk",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coej7o0ddt1umj8pzk0jgk.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\n国家は優れた者が道を示してこそ機能する。私が民を幸福へと導こう。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "官僚(Fire)",
    spec: {
      status: { hp: 1950, atk: 635, def: 532, spd: 390 },
      skill: [
        { title: "リジェクトバレット", desc: "敵1体に特大ダメージ" },
        { title: "ドミネーションヘイル", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "レギュレーションスペル",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coep8d0ebx1umj92x66ju8",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coep8d0ebx1umj92x66ju8.webp",
    info: "「JobTribes」のゲーム内コミックを手がける新鋭・石島志朗による描き下ろし作品。\n\n蛇使いと蛇は聖なる絆で結ばれ、彼の笛は今日も蛇を称えるメロディを紡ぐ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "蛇使い(Water)",
    spec: {
      status: { hp: 1995, atk: 655, def: 520, spd: 378 },
      skill: [
        { title: "葬送曲：毒蛇", desc: "ランダムな敵に3回ダメージ" },
        { title: "大蛇のヴァルナム", desc: "敵1体に特大ダメージ" },
        {
          title: "サーペントアイズ",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofd9a0i491umj24bd32qz",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofd9a0i491umj24bd32qz.webp",
    info: "『私立極道高校』で一躍名前をとどろかせ、その後も『激!!極虎一家』『嗚呼!!毘沙門高校』『ボギーTHE GREAT』『魁!!男塾』など多数の人気作で知られる宮下あきらによる書き下ろし作品。\n\n「我々は科学者なのだ。人の体を研究して、最も効率よく力を取り出し、最も効率よく破壊する方法をいつも研究している」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "中国拳法道場主(Thunder)",
    spec: {
      status: { hp: 1920, atk: 670, def: 528, spd: 378 },
      skill: [
        { title: "苛烈なる双頭槍演舞", desc: "敵全員に大ダメージ" },
        { title: "攻防一体：推手の構え", desc: "敵1体に特大ダメージ" },
        { title: "五行の加護：形意拳の一撃", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cl9cofs3q0kg11umj0x293z11",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofs3q0kg11umj0x293z11.webp",
    info: "彼女の務めは訪れる者に楽しいひと時を与えるだけではない。ある時は悩みを聞き、美酒と共にアドバイスや深い言葉をおくる。それが夜を統べる女王の使命なのだ。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ホステス(Nature)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        { title: "夜の女王の話術", desc: "敵1体に特大ダメージ" },
        {
          title: "魅惑のウィスキー（水割り）",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "常夜の楽園", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof4i30gqj1umj9r0rg3wx",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof4i30gqj1umj9r0rg3wx.webp",
    info: "「BEE FREE!」「まじかる☆タルるートくん」「GOLDEN BOY」「東京大学物語」など数多くのヒット漫画で知られる江川達也による書き下ろし作品。\n\nすべての動物は生まれつき泳げる。泳げないのは人間だけ。－ダークワーカトライブのことわざ－",
    category: "教育",
    type: "NORMAL",
    name: "水泳インストラクター(Water)",
    spec: {
      status: { hp: 1905, atk: 650, def: 520, spd: 399 },
      skill: [
        { title: "女神の高速ストローク", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "危険回避の監視術",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "美しいクロールフォーム",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof2wb0ghc1umj1nrtc1po",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cof2wb0ghc1umj1nrtc1po.webp",
    info: "日本でも刊行され、アニメ化もされた人気漫画「ラディアン」で知られるフランスのバンド・デシネ作家トニー・ヴァレントによる書き下ろし作品。\n\n「生命を創造し、彼らの環境、運命すらも決める。元の世界で何をしてたか知らないが、恐ろしい奴らだよ」（名も無き兵士）",
    category: "クラフター",
    type: "NORMAL",
    name: "漫画家(Nature)",
    spec: {
      status: { hp: 1890, atk: 670, def: 528, spd: 384 },
      skill: [
        {
          title: "魔法双槍：Gペン＆丸ペンランス",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "オノマトペ・カプリティオ",
          desc: "敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える",
        },
        { title: "カットバック・ハリケーン", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof4ed0gpx1umjh6tves5u",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cof4ed0gpx1umjh6tves5u.webp",
    info: "画集《Bunny Bunny Bang!》で知られ、美少女イラストに定評のある台湾在住イラストレーター蚩尤による描き下ろし作品。\n\n「手早いカロリーとカフェイン補給。ブームが去っても彼女達が戦場からいなくなることはないだろう」（ライト・マイルズ／オートの軍師）",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "タピオカミルクティーショップ店員(Thunder)",
    spec: {
      status: { hp: 1980, atk: 655, def: 516, spd: 384 },
      skill: [
        {
          title: "魅惑の呪文「タピる」",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "タピオカ・ガトリング砲", desc: "敵全員に大ダメージ" },
        { title: "スマイル・トッピング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof2v30gh51umj64f63hi6",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cof2v30gh51umj64f63hi6.webp",
    info: "テレビアニメ化もされた世界的大ヒット作品「FAIRY TAIL」で知られる真島ヒロによる書き下ろし作品。\n\n当初彼ら人々の治療に役立った。だが、戦乱の世になると軍医になり、そしていつか兵器となった。－ジョブ・ワールド戦史－",
    category: "医療",
    type: "NORMAL",
    name: "外科医(Earth)",
    spec: {
      status: { hp: 1950, atk: 635, def: 520, spd: 399 },
      skill: [
        {
          title: "神速のオペラチオンソード",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "紅の執刀：ブラッディ・セリオン",
          desc: "ランダムな敵に3回ダメージ",
        },
        { title: "ベハンドルング・ブリーズ", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl9cof8x60hfk1umj4r2uf4fe",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof8x60hfk1umj4r2uf4fe.webp",
    info: "漫画『マリーグレイブ』、『アトランティド』などで知られる山地ひでのりによる書き下ろし作品。\n\n「よく言うだろ？　タネがわからない手品は魔法と変わらないってことさ」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "マジシャン(Water)",
    spec: {
      status: { hp: 1935, atk: 660, def: 524, spd: 384 },
      skill: [
        { title: "幻惑の乱舞トランプマジック", desc: "敵全員に大ダメージ" },
        {
          title: "華麗なるイリュージョンマジック",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "透視魔術：マインドハック",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofk560j751umj1bm51ynx",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofk560j751umj1bm51ynx.webp",
    info: "大人気アニメ「ジョジョの奇妙な冒険 ダイヤモンドは砕けない」のキャラクターデザインを手掛けた西位輝実による描き下ろし作品。\n\n「神は土をこね、竈で焼くことで人間を造り出したという。我らがのはその神の技よ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "陶芸家(Fire)",
    spec: {
      status: { hp: 1950, atk: 650, def: 508, spd: 399 },
      skill: [
        { title: "透かし彫りの舞", desc: "敵1体に特大ダメージ" },
        { title: "満開：桜花文様", desc: "味方全員のDEFを上げる。3ターン有効" },
        {
          title: "浄化：高速ろくろストリーム",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cog0sc0ltd1umj7cas21u1",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cog0sc0ltd1umj7cas21u1.webp",
    info: "金融世界の中心でもあり、多くの人が初めて触れ合う金融業者だ。\nイラスト：ab",
    category: "金融・不動産",
    type: "NORMAL",
    name: "銀行業界人(Poison)",
    spec: {
      status: { hp: 1950, atk: 665, def: 508, spd: 390 },
      skill: [
        { title: "嘘も真実も言わない", desc: "敵のバジェットを減らす" },
        { title: "ボリンジャーバンド", desc: "敵全員に大ダメージ" },
        {
          title: "アセットスワップ",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof3ky0gl91umj4s7r1zjn",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cof3ky0gl91umj4s7r1zjn.webp",
    info: "金融世界の中心でもあり、多くの人が初めて触れ合う金融業者だ。\nイラスト：ab",
    category: "金融・不動産",
    type: "NORMAL",
    name: "銀行業界人(Thunder)",
    spec: {
      status: { hp: 1950, atk: 665, def: 508, spd: 390 },
      skill: [
        { title: "嘘も真実も言わない", desc: "敵のバジェットを減らす" },
        { title: "ボリンジャーバンド", desc: "敵全員に大ダメージ" },
        {
          title: "アセットスワップ",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coftbe0kmx1umjcokjfxhx",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coftbe0kmx1umjcokjfxhx.webp",
    info: "金融世界の中心でもあり、多くの人が初めて触れ合う金融業者だ。\nイラスト：ab",
    category: "金融・不動産",
    type: "NORMAL",
    name: "銀行業界人(Nature)",
    spec: {
      status: { hp: 1950, atk: 665, def: 508, spd: 390 },
      skill: [
        { title: "嘘も真実も言わない", desc: "敵のバジェットを減らす" },
        { title: "ボリンジャーバンド", desc: "敵全員に大ダメージ" },
        {
          title: "アセットスワップ",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof9v00hku1umjdq758xfm",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cof9v00hku1umjdq758xfm.webp",
    info: "彼らは裁く。善悪ではなく、ルールの守り手たるかを。\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "裁判官(Earth)",
    spec: {
      status: { hp: 1995, atk: 650, def: 520, spd: 381 },
      skill: [
        { title: "苦渋の決断", desc: "敵全員のATKを下げる。3ターン有効" },
        {
          title: "司法権の独立",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        { title: "判決のガベル", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof9bk0hht1umjhe4vfw50",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cof9bk0hht1umjhe4vfw50.webp",
    info: "彼らは裁く。善悪ではなく、ルールの守り手たるかを。\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "裁判官(Fire)",
    spec: {
      status: { hp: 1995, atk: 650, def: 520, spd: 381 },
      skill: [
        { title: "苦渋の決断", desc: "敵全員のATKを下げる。3ターン有効" },
        {
          title: "司法権の独立",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        { title: "判決のガベル", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofm1n0jhz1umjdf6uhz0f",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofm1n0jhz1umjdf6uhz0f.webp",
    info: "眼は心の窓。彼らは心の一部を治すのだ。\nイラスト：色合mdd",
    category: "医療",
    type: "NORMAL",
    name: "眼科医(Thunder)",
    spec: {
      status: { hp: 1935, atk: 645, def: 524, spd: 393 },
      skill: [
        { title: "入念な診察", desc: "味方全員のHP回復" },
        { title: "リレックススマイル", desc: "バジェットを増やす" },
        {
          title: "スペキュラーマイクロスコープ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofvv80l1e1umj2ws180mg",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofvv80l1e1umj2ws180mg.webp",
    info: "眼は心の窓。彼らは心の一部を治すのだ。\nイラスト：色合mdd",
    category: "医療",
    type: "NORMAL",
    name: "眼科医(Nature)",
    spec: {
      status: { hp: 1935, atk: 645, def: 524, spd: 393 },
      skill: [
        { title: "入念な診察", desc: "味方全員のHP回復" },
        { title: "リレックススマイル", desc: "バジェットを増やす" },
        {
          title: "スペキュラーマイクロスコープ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cof7u00h9d1umj2cj032ur",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof7u00h9d1umj2cj032ur.webp",
    info: "眼は心の窓。彼らは心の一部を治すのだ。\nイラスト：色合mdd",
    category: "医療",
    type: "NORMAL",
    name: "眼科医(Water)",
    spec: {
      status: { hp: 1935, atk: 645, def: 524, spd: 393 },
      skill: [
        { title: "入念な診察", desc: "味方全員のHP回復" },
        { title: "リレックススマイル", desc: "バジェットを増やす" },
        {
          title: "スペキュラーマイクロスコープ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofjjv0j3s1umj6kjq1knl",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofjjv0j3s1umj6kjq1knl.webp",
    info: "複雑に絡み合うデータ群に許可なく触れられないデータを刻む。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ブロックチェーンエンジニア(Thunder)",
    spec: {
      status: { hp: 1965, atk: 655, def: 516, spd: 387 },
      skill: [
        {
          title: "束縛の鎖マルチシグ",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "マイニングアサルト", desc: "敵1体に特大ダメージ" },
        {
          title: "絶対的公正の鎖ブロックチェーン",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cofkvn0jbd1umj17dhezov",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofkvn0jbd1umj17dhezov.webp",
    info: "複雑に絡み合うデータ群に許可なく触れられないデータを刻む。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ブロックチェーンエンジニア(Nature)",
    spec: {
      status: { hp: 1965, atk: 655, def: 516, spd: 387 },
      skill: [
        {
          title: "束縛の鎖マルチシグ",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "マイニングアサルト", desc: "敵1体に特大ダメージ" },
        {
          title: "絶対的公正の鎖ブロックチェーン",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cofjm50j451umjep6t3klk",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofjm50j451umjep6t3klk.webp",
    info: "複雑に絡み合うデータ群に許可なく触れられないデータを刻む。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ブロックチェーンエンジニア(Water)",
    spec: {
      status: { hp: 1965, atk: 655, def: 516, spd: 387 },
      skill: [
        {
          title: "束縛の鎖マルチシグ",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "マイニングアサルト", desc: "敵1体に特大ダメージ" },
        {
          title: "絶対的公正の鎖ブロックチェーン",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cof6bt0h0v1umjhbombgr4",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cof6bt0h0v1umjhbombgr4.webp",
    info: "複雑に絡み合うデータ群に許可なく触れられないデータを刻む。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ブロックチェーンエンジニア(Fire)",
    spec: {
      status: { hp: 1965, atk: 655, def: 516, spd: 387 },
      skill: [
        {
          title: "束縛の鎖マルチシグ",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "マイニングアサルト", desc: "敵1体に特大ダメージ" },
        {
          title: "絶対的公正の鎖ブロックチェーン",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9coekp40dm61umj3w7k5byc",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coekp40dm61umj3w7k5byc.webp",
    info: "彼らは、何もない絵に生命を吹き込むことから「生気を与える者」と呼ばれた。\nイラスト：大滝ノスケ\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『味方全員の攻撃力を3ターンアップさせる』というもの。複数を攻撃できる味方とセットで使うと効果的。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "アニメーター(Poison)",
    spec: {
      status: { hp: 1965, atk: 645, def: 512, spd: 396 },
      skill: [
        { title: "創造される世界", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "スピーディートレース",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "描き出す希望",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofy5u0lef1umjbbl3e985",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cofy5u0lef1umjbbl3e985.webp",
    info: "彼らは、何もない絵に生命を吹き込むことから「生気を与える者」と呼ばれた。\nイラスト：大滝ノスケ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "アニメーター(Fire)",
    spec: {
      status: { hp: 1965, atk: 645, def: 512, spd: 396 },
      skill: [
        { title: "創造される世界", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "スピーディートレース",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "描き出す希望",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofds80i781umj1awo6jsq",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofds80i781umj1awo6jsq.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Earth)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofsm80kiz1umj12oaaxvv",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofsm80kiz1umj12oaaxvv.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Poison)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coefej0csl1umjb71413l2",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coefej0csl1umjb71413l2.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Thunder)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof73r0h561umjfb9a6zsb",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cof73r0h561umjfb9a6zsb.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Nature)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof7a00h671umj1p7w4q3z",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cof7a00h671umj1p7w4q3z.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Water)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof53p0gtz1umj1j2e5lwf",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9cof53p0gtz1umj1j2e5lwf.webp",
    info: "日本では米一粒に８８柱の神が宿るという。それを統べる彼の力は８８柱の神の力。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "稲作農家(Fire)",
    spec: {
      status: { hp: 1890, atk: 640, def: 536, spd: 396 },
      skill: [
        {
          title: "豊作の舞",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "アイガモ農法", desc: "味方全員のHP回復" },
        { title: "コンバイン操作", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof2ay0ge01umjd5jcc5ax",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cof2ay0ge01umjd5jcc5ax.webp",
    info: "『スプリガン』 『ＡＲＭＳ』などで世界的に知られる皆川亮二による描き下ろし作品。\n\n彼は歌うことはなく、楽器を奏でる事もない。しかし、彼のタクトは戦場全ての生物の声を楽器に変える。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "指揮者(Poison)",
    spec: {
      status: { hp: 1950, atk: 650, def: 532, spd: 381 },
      skill: [
        { title: "廻天のアニマート", desc: "バジェットを増やす" },
        { title: "鮮烈なるグランディオーソ", desc: "敵1体に特大ダメージ" },
        { title: "安らぎのヴィヴァーチェ", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl9coex2b0fka1umj444t7nri",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coex2b0fka1umj444t7nri.webp",
    info: "『スプリガン』 『ＡＲＭＳ』などで世界的に知られる皆川亮二による描き下ろし作品。\n\n彼は歌うことはなく、楽器を奏でる事もない。しかし、彼のタクトは戦場全ての生物の声を楽器に変える。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "指揮者(Water)",
    spec: {
      status: { hp: 1950, atk: 650, def: 532, spd: 381 },
      skill: [
        { title: "廻天のアニマート", desc: "バジェットを増やす" },
        { title: "鮮烈なるグランディオーソ", desc: "敵1体に特大ダメージ" },
        { title: "安らぎのヴィヴァーチェ", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl9coehlk0d4t1umjgxlu6dn4",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coehlk0d4t1umjgxlu6dn4.webp",
    info: "『究極!!変態仮面』など、究極の筋肉美を描くことで知られるあんど慶周による作品。\n\n「こいつは立派な枝だ。ロープをかけてっと……」「それは私の上腕三頭筋だ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "ボディビルダー(Earth)",
    spec: {
      status: { hp: 1995, atk: 665, def: 504, spd: 384 },
      skill: [
        { title: "バルクアップ", desc: "敵1体に特大ダメージ" },
        { title: "デッドリフト", desc: "敵全員に大ダメージ" },
        {
          title: "身体の極限へ",
          desc: "敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coeszd0ex61umj0lu6ho30",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9coeszd0ex61umj0lu6ho30.webp",
    info: "『究極!!変態仮面』など、究極の筋肉美を描くことで知られるあんど慶周による作品。\n\n「こいつは立派な枝だ。ロープをかけてっと……」「それは私の上腕三頭筋だ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "ボディビルダー(Thunder)",
    spec: {
      status: { hp: 1995, atk: 665, def: 504, spd: 384 },
      skill: [
        { title: "バルクアップ", desc: "敵1体に特大ダメージ" },
        { title: "デッドリフト", desc: "敵全員に大ダメージ" },
        {
          title: "身体の極限へ",
          desc: "敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofuhr0ktj1umjgnn7f5ui",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofuhr0ktj1umjgnn7f5ui.webp",
    info: "ファンタジー漫画の大傑作『BASTARD!! -暗黒の破壊神-』で知られる萩原一至による描き下ろし作品。\n\n宇宙から見るこの世界は静けさに包まれ、清浄で美しい。しかし、彼女の仕事はそこに炎の矢を降らせる事なのだ。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "宇宙飛行士(Poison)",
    spec: {
      status: { hp: 1920, atk: 660, def: 524, spd: 387 },
      skill: [
        { title: "デブリ＝アタック", desc: "ランダムな敵に3回ダメージ" },
        { title: "ロボットアームパンチ", desc: "敵1体に特大ダメージ" },
        {
          title: "マス=ドライバー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofyic0lgd1umj6w1p7he3",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofyic0lgd1umj6w1p7he3.webp",
    info: "世界的大ヒットゲームのスピンオフ作品「ドラゴンクエスト列伝」で知られる人気マンガ家\n藤原カムイによる描き下ろし作品。\n\n彼女は駆ける。その愛馬と共に。人々は彼女の背中しか見ることはなく、その美しい顔を知らない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "騎手(Thunder)",
    spec: {
      status: { hp: 1980, atk: 630, def: 512, spd: 402 },
      skill: [
        { title: "共存の知恵", desc: "味方全員のSPDを上げる。3ターン有効" },
        {
          title: "信頼の手綱",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
        { title: "勝負がかり", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeptj0efa1umjf9ym2uqt",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9coeptj0efa1umjf9ym2uqt.webp",
    info: "料理漫画「中華一番」シリーズで世界的な人気を獲得した小川悦司による描き下ろし作品。\n\n誰よりも多くの鉄鍋をふるい、誰よりも料理を供し続けた彼は、誰よりも強靭な肉体を手に入れた。",
    category: "サービス",
    type: "NORMAL",
    name: "中華料理長(Nature)",
    spec: {
      status: { hp: 1935, atk: 640, def: 528, spd: 393 },
      skill: [
        { title: "スペシャリテ", desc: "味方全員のHP回復" },
        {
          title: "葱爆羊肉",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        { title: "スパルタ修業", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofd070i2t1umjcf6j83yv",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9cofd070i2t1umjcf6j83yv.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Earth)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofub30ksh1umjgx0rf7y0",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9cofub30ksh1umjgx0rf7y0.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Poison)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofss20kjw1umjhncwcj84",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofss20kjw1umjhncwcj84.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Thunder)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof6gj0h1k1umj5pll7e1c",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cof6gj0h1k1umj5pll7e1c.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Nature)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeydy0frv1umj5oc3bdbi",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9coeydy0frv1umj5oc3bdbi.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Water)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coejh20df91umjfiuq773z",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coejh20df91umjfiuq773z.webp",
    info: "大人気マンガ『GetBackers-奪還屋－』で最強のダークヒーロー・メーカーとして名高い綾峰欄人による描き下ろし作品。\n\n「現場は証拠品の山だ。だから誰も立ち入らせない。俺の相棒以外は」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "科学捜査官(Fire)",
    spec: {
      status: { hp: 1950, atk: 665, def: 520, spd: 381 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coelnk0drj1umjg3mtcade",
    rarity: "LEGENDARY",
    element: "EARTH",
    image: "/images/amulets/legendary/cl9coelnk0drj1umjg3mtcade.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Earth)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coeioh0dau1umjexva4mc2",
    rarity: "LEGENDARY",
    element: "POISON",
    image: "/images/amulets/legendary/cl9coeioh0dau1umjexva4mc2.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Poison)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofl520jcv1umjhxqr8e61",
    rarity: "LEGENDARY",
    element: "THUNDER",
    image: "/images/amulets/legendary/cl9cofl520jcv1umjhxqr8e61.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Thunder)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofn7e0jof1umjea9886a2",
    rarity: "LEGENDARY",
    element: "NATURE",
    image: "/images/amulets/legendary/cl9cofn7e0jof1umjea9886a2.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Nature)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofhqo0itj1umjholy1v9v",
    rarity: "LEGENDARY",
    element: "WATER",
    image: "/images/amulets/legendary/cl9cofhqo0itj1umjholy1v9v.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Water)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coewyu0fjq1umj2jttcgl4",
    rarity: "LEGENDARY",
    element: "FIRE",
    image: "/images/amulets/legendary/cl9coewyu0fjq1umj2jttcgl4.webp",
    info: "アニメ「超時空要塞マクロス」で美少女デザインの分野で革命を起こし、最近ではTVアニメ『甲鉄城のカバネリ』でキャラクター原案を務めている美樹本晴彦による描き下ろし作品。\n\n彼女が歌い、踊る時、人々はその目をそらすことはできない。それは彼女こそがアイドルそのものだから。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "アイドル(Fire)",
    spec: {
      status: { hp: 1905, atk: 665, def: 520, spd: 390 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
];
