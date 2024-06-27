import { Amulet } from "../_types/types";

export const AMULETS_DATA: Amulet[] = [
  {
    id: "clec11e985a7154be4a11b79af",
    rarity: "LEGENDARY",
    element: "POISEN",
    image: "/images/amulets/LEGENDARY/clec11e985a7154be4a11b79af.webp",
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
    image: "/images/amulets/LEGENDARY/cl34060d4f9a5548f0bcb121d4.webp",
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
    image: "/images/amulets/LEGENDARY/cl15ee43a6012a4ab98bc8a298.webp",
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
    image: "/images/amulets/LEGENDARY/cl1d1260a6e75b4ff6b75982a4.webp",
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
    image: "/images/amulets/LEGENDARY/cl01611aac7da846aea2c22c4a.webp",
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
    image: "/images/amulets/LEGENDARY/clff59abc8967d4ac6aee0fcea.webp",
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
    element: "POISEN",
    image: "/images/amulets/LEGENDARY/clfe9412fa475e4a649ebbd19e.webp",
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
    image: "/images/amulets/LEGENDARY/cled5bf227def84c2a9727a9b8.webp",
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
    image: "/images/amulets/LEGENDARY/clb1a87d9253c24e4c81788124.webp",
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
    image: "/images/amulets/LEGENDARY/cl824e425bbb23485a9f99a437.webp",
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
    image: "/images/amulets/LEGENDARY/cl6b61979e2c9a43c896a24e69.webp",
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
    image: "/images/amulets/LEGENDARY/cl05a5691a066041b1946e1667.webp",
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
    image: "/images/amulets/LEGENDARY/cl3b763d68068d48ebba7a65d2.webp",
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
    image: "/images/amulets/LEGENDARY/cl19d29f7023bf4e4d9ffff5dc.webp",
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
    element: "POISEN",
    image: "/images/amulets/LEGENDARY/cle93afdb0ed53400aa949c732.webp",
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
    image: "/images/amulets/LEGENDARY/clce0a3f1bc2d84edbb2be90c3.webp",
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
    image: "/images/amulets/LEGENDARY/clb1b4630b0ae44e8e91d9f1df.webp",
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
    image: "/images/amulets/LEGENDARY/cl78cf02c62e1649c1b4150d61.webp",
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
    image: "/images/amulets/LEGENDARY/cl725185abf62a40ba9e8194cb.webp",
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
    image: "/images/amulets/LEGENDARY/cl218d1cc0d6f041aa98128b1b.webp",
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
];
