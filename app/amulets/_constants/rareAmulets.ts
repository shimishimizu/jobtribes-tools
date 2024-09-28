import { Amulet } from "../_types/types";

export const rareAmulets: Amulet[] = [
  {
    id: "clacbd4884c8ae4d6db5c61620",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/clacbd4884c8ae4d6db5c61620.webp",
    info: "かの南の国で伝えられる舞踊を守り続ける者。\n彼女の舞そのものが貴重な文化であり、重要な芸術の1つである。\nかつて南の国の王の前で披露されたという由緒正しい舞である。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "琉球舞踊家(Water)",
    spec: {
      status: { hp: 1290, atk: 475, def: 380, spd: 252 },
      skill: [
        {
          title: "開演の老人踊り",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        {
          title: "紅型胴衣の女踊り",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        { title: "五穀豊穣の寿ぐ二才", desc: "味方全員のHP回復" },
      ],
    },
  },
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
  {
    id: "cl3bf5d23845044566a6249555",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl3bf5d23845044566a6249555.webp",
    info: "世界中のあらゆる服飾の知識を学び、その会場にドンピシャのドレスをコーディネートするスペシャリスト。\n彼女はドレス選びもさることながら、それに合った装飾品選びのセンスもピカイチ。\n手がけてきた人々を全て満足させる信頼と実績がある。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "ドレスコーディネーター(Fire)",
    spec: {
      status: { hp: 1425, atk: 500, def: 400, spd: 255 },
      skill: [
        {
          title: "喝采のパーティドレス",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "華麗なウェディングドレス",
          desc: "味方全員のHPを3ターン回復し、さらにATKを上げる。",
        },
        {
          title: "秘密のコサージュ",
          desc: "敵1体に特大ダメージを与え、自分のDEFを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cl084c41a6716244e49e39e7cb",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl084c41a6716244e49e39e7cb.webp",
    info: '祝宴や葬送など、あらゆる場面の花を選び抜くコーディネーター。\n彼女の選ぶ花とは"言霊"であり、どのような会場であろうと説得力のあるセンスを持ち、\nたちまち見た人すべてが息を呑み、時に涙、時に笑顔を想像する。',
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "フラワーコーディネーター(Nature)",
    spec: {
      status: { hp: 1395, atk: 505, def: 364, spd: 285 },
      skill: [
        {
          title: "祝宴の花：フィースト",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "葬送の華：フュネラル",
          desc: "敵1体に特大ダメージを与え、自分のATKを上げる。3ターン有効",
        },
        {
          title: "婚儀の花束：ブライド",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "clabd0edc7145249dd82d1dab0",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/clabd0edc7145249dd82d1dab0.webp",
    info: "伝説の殺し屋としてかつて名を馳せ、\n今は隠居している…わけではなく、現役の暗殺者の村人。\n老婆の見た目に油断している標的に対し、その刃は襲い掛かる。",
    category: "アンノウン",
    type: "ANOTHER",
    name: "闇に隠れ命頂戴す村人(Nature)",
    spec: {
      status: { hp: 1425, atk: 465, def: 368, spd: 300 },
      skill: [
        {
          title: "いい天気ねぇ…おらぁ！",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "これかい！？イスを作るのさ！",
          desc: "召喚時に確率でATKを大幅に上げる。1ターン有効",
        },
        { title: "今殺し…あらこんにちは！", desc: "敵1体に特大ダメージ" },
      ],
      ability: [
        {
          title: "スリープレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cl3dfc78cded9c451b9fe05ce6",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl3dfc78cded9c451b9fe05ce6.webp",
    info: "恋人を失い、修羅の剣に身を投じた悲しき村人。\n失った悲しみを一人で抱えた彼女を救おうと多くの村人が手を差し伸べたが\n心を閉ざした者に救いの声は届かなかった。",
    category: "アンノウン",
    type: "ANOTHER",
    name: "心失い修羅に堕ちし村人(Poison)",
    spec: {
      status: { hp: 1455, atk: 495, def: 344, spd: 294 },
      skill: [
        {
          title: "消えて、私に構わないで",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "それ以上近づかないで…！",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        { title: "もうどこにも…いないの", desc: "ランダムな敵に3回ダメージ" },
      ],
      ability: [
        {
          title: "ダークネスレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cl8fabc06844fb49a8baf1d376",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl8fabc06844fb49a8baf1d376.webp",
    info: "かつて東の地方に居た刀職人から教わった製法を用いて麺を作る職人。\n厚くもなく、薄すぎないその境を長年研究し、究極の厚さとまで言わしめたのは\n彼一人である。\nが、しかし彼の最も秀でた点はその見た目故の愛嬌であったことを彼はまだ知らない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "刀削麺職人(Thunder)",
    spec: {
      status: { hp: 1410, atk: 430, def: 376, spd: 258 },
      skill: [
        { title: "神具：東ノ薄緑", desc: "敵1体に特大ダメージ" },
        { title: "小麦を見極める目", desc: "味方全員のHP回復" },
        { title: "瞬術：リブラスライス", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clf169e62e9cd84dda928a8c71",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/clf169e62e9cd84dda928a8c71.webp",
    info: "昼は真面目に栗農家として働く穏やかな青年。\nしかし満月の夜になると昼の50倍素早く動ける狼男になる。\n毬栗型のフレイルを使ってものすごい速さで栗を回収していく。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "栗農家(Nature)",
    spec: {
      status: { hp: 1320, atk: 480, def: 352, spd: 264 },
      skill: [
        {
          title: "満月流：悶舞乱",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "イガグリフレイル",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        { title: "鎖奥義：愚辣世", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl5b673b6f366443599abec9da",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl5b673b6f366443599abec9da.webp",
    info: "普段は最高品質の味を誇るかぼちゃを作る農家。\nハロウィンの季節には味の悪かったり、形が不揃いなかぼちゃを\n別途取引してハロウィンに貢献している。\n彼の作るかぼちゃは甘くとろける味をしており、ジュースにしても絶品。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "カボチャ農家(Thunder)",
    spec: {
      status: { hp: 1395, atk: 465, def: 348, spd: 261 },
      skill: [
        { title: "スマッシュパンプヘッド", desc: "敵1体に特大ダメージ" },
        {
          title: "超大収穫お化けかぼちゃ",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        { title: "最高品質：スイートパンプキン", desc: "味方1体のHP大回復" },
      ],
    },
  },
  {
    id: "cl8b2d43c32f574798acdaac7b",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl8b2d43c32f574798acdaac7b.webp",
    info: "人型万能からくり\nジョブトロイド003：料理メイド\nお料理のことならなんでもお任せ！\n食べたいものをいえば必ず完成させる凄腕。\n残念ながら運ぶスキルだけは身につかなかった。\n「はわわ！また落っことしちゃいましたぁ…」",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【ジョブトロイド】料理メイド(Fire)",
    spec: {
      status: { hp: 1350, atk: 485, def: 368, spd: 303 },
      skill: [
        {
          title: "料理メイドの宿命",
          desc: "召喚時に確率でSPDを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、SPDの上昇量が上がる。3ターン有効 対象アミュレット：【Jobtroid】Maid-in-Chief,【Jobtroid】Cleaning Maid",
        },
        {
          title: "手慣れた？運搬魔法",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "「はわわ！ごめんなさい～！」",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "clgnb5qrk2215009ldh4qh5tut",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/clgnb5qrk2215009ldh4qh5tut.webp",
    info: "相続トラブルを止めるために来た天国からの使者。\n書類などはすっ飛ばして本人から直接聞いてくる。",
    category: "金融・不動産",
    type: "ANOTHER",
    name: "相続診断士(Nature)",
    spec: {
      status: { hp: 1335, atk: 475, def: 380, spd: 303 },
      skill: [
        {
          title: "天界のトラブル防止術",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "天国の連携術",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        { title: "相続完了！", desc: "バジェットを増やす" },
      ],
      ability: [
        {
          title: "スリープレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "clgnaz3w11556809ldq0sj2weo",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/clgnaz3w11556809ldq0sj2weo.webp",
    info: "あなたの商品が国境を越えるために、どれだけの手続きと検査を経てきたか、きっとご存じないだろう。それはささいな書類ミスが多大な損失を生む、苦難の道のりである。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "通関士(Water)",
    spec: {
      status: { hp: 1425, atk: 450, def: 400, spd: 285 },
      skill: [
        {
          title: "杜撰な申告の防止",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "空間魔法「インコタームズ」",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "コンテナバズーカ40ft’", desc: "敵1体に特大ダメージ" },
      ],
      ability: [
        {
          title: "バーンレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "clgnasf3l1487009ld741tbbur",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/clgnasf3l1487009ld741tbbur.webp",
    info: "その戦場は、高齢化社会の最前線。彼女の支え無しでは、戦いは立ち行かないだろう。",
    category: "医療",
    type: "ANOTHER",
    name: "介護事務(Fire)",
    spec: {
      status: { hp: 1425, atk: 500, def: 380, spd: 270 },
      skill: [
        {
          title: "受け入れセットアップ",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "デジタルディシジョン",
          desc: "召喚時に確率でATKを大幅に上げる。1ターン有効",
        },
        {
          title: "マシンガンレセプト",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "clfut5bd3169208l39mebke37",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/clfut5bd3169208l39mebke37.webp",
    info: "闇の魔術師と契約を交わし、深淵へ堕ちた村人。 暗黒を歓迎し、常闇の住人と化した彼女を止められる者はいない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "焔を纏い闇依り齎されし村人(Fire)",
    spec: {
      status: { hp: 1290, atk: 465, def: 360, spd: 273 },
      skill: [
        {
          title: "咎人ノ災禍",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "不朽ノ漆黒",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        { title: "あぁぁあああああああああ！！", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clfusyiza059408l34ifmivw1",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/clfusyiza059408l34ifmivw1.webp",
    info: "修行の果てに極みに到達した村人。その拳は岩をも砕き、その体は鋼のごとく堅く逞しい。",
    category: "アンノウン",
    type: "NORMAL",
    name: "極みに至りし村人(Thunder)",
    spec: {
      status: { hp: 1395, atk: 475, def: 340, spd: 261 },
      skill: [
        {
          title: "ほう？面白い",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "手も足も出ぬか",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        { title: "少し本気を見せてやろう", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cleqmkrht1899708jw4hb6otdb",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cleqmkrht1899708jw4hb6otdb.webp",
    info: "彼女の指摘を杞憂と笑わない方がいいだろう。\n彼女はあなたの建設計画について、あなた以上に詳しいかもしれないのだから。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "建設コンサルタント(Earth)",
    spec: {
      status: { hp: 1440, atk: 480, def: 376, spd: 282 },
      skill: [
        {
          title: "計画ミスの発見",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "八面六臂の実地調査",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        {
          title: "補強計画プレゼンテーション",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
      ],
      ability: [
        {
          title: "パライズレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cleqmdpol664308jwi6frxlzt",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cleqmdpol664308jwi6frxlzt.webp",
    info: "彼の作る空間に足を踏み入れたが最後、自在に翻弄され、心酔させられてしまうだろう。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "空間デザイナー(Thunder)",
    spec: {
      status: { hp: 1440, atk: 470, def: 376, spd: 288 },
      skill: [
        {
          title: "バックヤードを隠すスクリーン",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "心踊るエントランス",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "圧倒するインテリア", desc: "敵全員に大ダメージ" },
      ],
      ability: [
        {
          title: "ポイズンレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cleqm7b271651908l92tlsv6wr",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cleqm7b271651908l92tlsv6wr.webp",
    info: "言葉を通じて人に力を与える者。\nその言葉が脳内にあふれている彼自身も、実力以上の戦果を上げるかもしれない。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "作詞家(Poison)",
    spec: {
      status: { hp: 1410, atk: 470, def: 384, spd: 288 },
      skill: [
        {
          title: "閃きを信じ 身を躍らす",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        { title: "渾身の力 勝利のために", desc: "敵1体に特大ダメージ" },
        {
          title: "その幸運に 足取りは軽く",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
      ],
      ability: [
        {
          title: "ダークネスレジストLv1",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。フィールドの持続は短め",
        },
      ],
    },
  },
  {
    id: "cle4297o2027908mcoa9g1fp3",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cle4297o2027908mcoa9g1fp3.webp",
    info: "「理があれば勝ち理がなければ負ける」\n武術と合わせた独特の乱舞抜刀術が得意。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】中華人民共和国＜炎龍諭（Aaron）＞(Earth)",
    spec: {
      status: { hp: 1275, atk: 480, def: 332, spd: 288 },
      skill: [
        { title: "瞬撃の寸勁", desc: "敵1体に特大ダメージ" },
        {
          title: "黄河の農業地帯",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "長城の守り", desc: "味方全員のDEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cle424a0c4273208ky4t8nuo4t",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cle424a0c4273208ky4t8nuo4t.webp",
    info: "「真実は子供と酔っ払いに聞け」\n長男のためリーダー気質が強く統率力があるためみんなから慕われる。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】デンマーク王国＜久利須天仙（Christensen）＞(Poison)",
    spec: {
      status: { hp: 1500, atk: 415, def: 376, spd: 249 },
      skill: [
        { title: "人魚像の涙", desc: "味方全員のHP回復" },
        { title: "麗しき国", desc: "敵1体に特大ダメージ" },
        {
          title: "ザ・シックネス・アントゥ・デス",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cle41xmn33225508kyovlgy3dp",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cle41xmn33225508kyovlgy3dp.webp",
    info: "「最高を望み、最悪に備えよ」\n槍の名手。神速の突きは見ものだ。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】イギリス＜宇位里阿夢（William）＞(Thunder)",
    spec: {
      status: { hp: 1425, atk: 425, def: 380, spd: 255 },
      skill: [
        { title: "ロンドンの街並み", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "コマドリの導き", desc: "味方全員のDEFを上げる。3ターン有効" },
        {
          title: "UKロック",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "cle41q5ff2170308ky1tfat5ra",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cle41q5ff2170308ky1tfat5ra.webp",
    info: "「朝に紅顔あって夕べに白骨となる」\n明るくお人よし。色々な国の喧嘩を仲裁する弟的存在。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】日本国＜釜本（KAMAMOTO）＞(Nature)",
    spec: {
      status: { hp: 1350, atk: 470, def: 360, spd: 258 },
      skill: [
        { title: "富士の霊峰", desc: "敵1体に特大ダメージ" },
        {
          title: "武士の瞑想",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "和の心", desc: "味方1体のHP回復。DEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cle41i22c1054708kypf9i81ek",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cle41i22c1054708kypf9i81ek.webp",
    info: "「敵が多ければ、誉れも多い。」\nパワー系だが考え方は理路整然としており理論派。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】ドイツ連邦共和国＜外御流具（GEORGE）＞(Water)",
    spec: {
      status: { hp: 1395, atk: 440, def: 364, spd: 264 },
      skill: [
        {
          title: "気高きノイシュヴァンシュタイン",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "ビール＆ソーセージ",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "クラシック音楽にのって",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cle41ai8v000108ky9telna56",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cle41ai8v000108ky9telna56.webp",
    info: "「鼻が邪魔だと思うゾウはいない」\n虹色の斬撃を繰り出し人々をハッピーな気持ちに包み込む「虹剣」の達人。\n真のチカラは未だ解放されていない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】南アフリカ共和国＜万駄羅（Mandela）＞(Fire)",
    spec: {
      status: { hp: 1335, atk: 460, def: 348, spd: 276 },
      skill: [
        { title: "サバンナアニマルの行進", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "ブブゼラの吹奏",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "嵐の岬", desc: "敵1体のATKを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "clde5esuo1071108l23728tiyk",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/clde5esuo1071108l23728tiyk.webp",
    info: "「2階だろうと、3階だろうと、新聞を確実にお届けします!」\nそういいながら、ホットなニュースを届けてくれる。\nイラスト：DEA Artist",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "新聞配達員(Earth)",
    spec: {
      status: { hp: 1297, atk: 448, def: 362, spd: 280 },
      skill: [
        {
          title: "恐怖を告げる新聞",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        { title: "神速の投げ入れ", desc: "敵全員に大ダメージ" },
        {
          title: "早朝の早駆け",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "clde58vmz968208l2xizl4cml",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/clde58vmz968208l2xizl4cml.webp",
    info: "「始めよう、魂の読み合いを。\n全てを賭ける覚悟なら、俺の方はとっくにできてる」\nイラスト：Maeka",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロポーカー選手(Fire)",
    spec: {
      status: { hp: 1358, atk: 452, def: 358, spd: 269 },
      skill: [
        {
          title: "コンテニュエーション・ベット",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        { title: "電光石火のスティール", desc: "敵のバジェットを減らす" },
        {
          title: "ポーカーフェイス",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cld8ak0zl128608l52tm6jkgn",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cld8ak0zl128608l52tm6jkgn.webp",
    info: "誰かに見られる人を、見られたいように変身させるのが僕の仕事さ。\nさぁ、君はどんな風に見られたいのかな？\nイラスト：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "メイクアップアーティスト(Nature)",
    spec: {
      status: { hp: 1342, atk: 452, def: 374, spd: 260 },
      skill: [
        { title: "無限色彩パレット", desc: "敵全員のATKを下げる。3ターン有効" },
        {
          title: "カバーリング ファンデーション",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "伝統の化粧筆",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8afswf049908l5w6j5u7w0",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cld8afswf049908l5w6j5u7w0.webp",
    info: "ひよこを掴み、見て、分ける。その間僅か3秒。1時間に1000匹以上を鑑定する彼女の動きは、千手観音を思わせる。\nイラスト：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ひよこ鑑定士(Thunder)",
    spec: {
      status: { hp: 1335, atk: 455, def: 356, spd: 273 },
      skill: [
        { title: "ひよこラッシュ", desc: "敵全員に大ダメージ" },
        { title: "疾風の手さばき", desc: "味方1体のSPDを上げる。3ターン有効" },
        { title: "秒速識別アイ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clc4dhbee2946408lc2ghrx088",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/clc4dhbee2946408lc2ghrx088.webp",
    info: "GOAL SEEKERSの女子サッカー選手とJobTribesのスポーツトレーナーとのタッグアミュレット\n\nどんなスポーツでも、選手のサポートは欠かせない。\n選手が表なら、彼女たちは裏の主役と言えるだろう。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "女子サッカー選手 ＆ スポーツトレーナー(Thunder)",
    spec: {
      status: { hp: 1395, atk: 425, def: 368, spd: 270 },
      skill: [
        {
          title: "タッグ・ザ・サポート",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "圧倒的エール術", desc: "味方全員のHP回復" },
        { title: "万全のマネジメント", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clc4daa7r1729908milmmr0i6c",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/clc4daa7r1729908milmmr0i6c.webp",
    info: "GOAL SEEKERSの男子サッカー選手とJobTribesのエステティシャンとのタッグアミュレット\n\nボールを包み込むように受け止める繊細かつ大胆な手技は、\nどこかエステティシャンの技術を彷彿とさせる。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "男子サッカー選手 ＆ エステティシャン(Water)",
    spec: {
      status: { hp: 1350, atk: 425, def: 392, spd: 261 },
      skill: [
        {
          title: "タッグ・ザ・ブロッキング",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "秘術：アンチシューティング",
          desc: "敵1体に特大ダメージを与え、自分のDEFを上げる。3ターン有効",
        },
        {
          title: "守のカリスマオーラ",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clc4d3zx11003508mix5px9aqg",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/clc4d3zx11003508mix5px9aqg.webp",
    info: "KAMIYAGURAの天仰の騎士ティプトーンとJobTribesのWebプログラマーとのタッグアミュレット\n\nJobTribesの電子世界を守るため、\nプログラムコードの騎士と天仰の騎士ティプトーンがタッグを組んだ。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "天仰の騎士ティプトーン ＆ ゲームプログラマー(Earth)",
    spec: {
      status: { hp: 1470, atk: 440, def: 360, spd: 252 },
      skill: [
        {
          title: "タッグ・ザ・プロテクト",
          desc: "召喚時に確率でDEFを大幅に上げる。1ターン有効",
        },
        {
          title: "絶対防御のフロントバリア",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "コンバート・バースト", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clc4cvw7t2180808lcyzogx6az",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/clc4cvw7t2180808lcyzogx6az.webp",
    info: "HERO SPIRALのフレイヤとJobTribesのDEPトレーダーとのタッグアミュレット\n\n麗しき二人の女神が揃う時。\nそれはWeb3世界の大きな変革が起こる時。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "フレイヤ ＆ DEPトレーダー(Poison)",
    spec: {
      status: { hp: 1350, atk: 435, def: 368, spd: 273 },
      skill: [
        {
          title: "タッグ・ザ・トレード",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "BCGイノベーション", desc: "バジェットを増やす" },
        {
          title: "Web3アクティベーション",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "clc4con0c1439808lcswf61wto",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/clc4con0c1439808lcswf61wto.webp",
    info: "Graffiti Racerの茶々丸とJobTribesの庭師とのタッグアミュレット\n\n流派は違えど、共に忍びとして息ピッタリの連携が取れる。\nただし任務ではなく、猫たちのお庭作りに関してだが。",
    category: "クラフター",
    type: "NORMAL",
    name: "茶々丸 ＆ 庭師(Nature)",
    spec: {
      status: { hp: 1365, atk: 445, def: 356, spd: 273 },
      skill: [
        {
          title: "タッグ・ザ・ニンジュツ",
          desc: "召喚時に確率でSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "逆境の長柄剪定鋏",
          desc: "自分に致命的なダメージを与え、味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "猫の手乱舞",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "clc4ch959648008lc11azy8hr",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/clc4ch959648008lc11azy8hr.webp",
    info: "Graffiti RacerのビビとJobTribesのライバーとのタッグアミュレット\n\nゲーム・配信界隈で人気な二人のコラボにファンのテンションはアゲアゲ！！",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ビビ ＆ ライバー(Fire)",
    spec: {
      status: { hp: 1290, atk: 445, def: 356, spd: 288 },
      skill: [
        {
          title: "タッグ・ザ・ストリーミング",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "ハイスコア記念の投げ銭シャワー",
          desc: "召喚時に100％の確率で発動し、バジェットを3ターンの間増やし続ける。このアミュレットが破壊されると効果は消える。",
        },
        { title: "映え映えツーショット♪", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clbongps1005708l745gn0lkt",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/clbongps1005708l745gn0lkt.webp",
    info: "心配性のため必要以上に患者とコミュニケーションを取るが、それが親切であると評判が良い。\n思考を止めることができず、思い込みが激しいのが玉に瑕。",
    category: "医療",
    type: "NORMAL",
    name: "義肢装具士(Poison)",
    spec: {
      status: { hp: 1470, atk: 430, def: 352, spd: 264 },
      skill: [
        { title: "心配性", desc: "味方1体のSPDを上げる。3ターン有効" },
        { title: "過保護", desc: "味方1体のHP大回復" },
        {
          title: "自己防衛",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "clajhsrpp511308i64a5z9ml6",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/clajhsrpp511308i64a5z9ml6.webp",
    info: "みかんの栽培を行う者。\nハウス栽培の普及により、季節を問わずその戦いは続くため、歴戦の猛者がそろっているとも言われている。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "みかん農家(Earth)",
    spec: {
      status: { hp: 1312, atk: 462, def: 370, spd: 263 },
      skill: [
        { title: "柑橘キングダム", desc: "敵全員に大ダメージ" },
        {
          title: "ビタミン美白",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "マンダリンコンボ",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clajhdg65405108i6zhp2s2yy",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/clajhdg65405108i6zhp2s2yy.webp",
    info: "一番恐ろしいジョブ・ロード？\n水族館飼育員と戦ったことがあるか？\n魚たちはな、思ったより肉食なんだよ……\n\nイラスト：冬桜*うさぎ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "水族館飼育員(Thunder)",
    spec: {
      status: { hp: 1305, atk: 450, def: 360, spd: 279 },
      skill: [
        { title: "獰猛なる給餌の号令", desc: "敵全員に大ダメージ" },
        {
          title: "結界：紺碧のアクアリウム",
          desc: "敵1体のSPDを下げる。3ターン有効",
        },
        { title: "プリズム・ドルフィンショー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "claidkgo3000108jo6yzmb94g",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/claidkgo3000108jo6yzmb94g.webp",
    info: "餌やり、掃除、健康状態のチェック。\n愛する動物と園のため、今日も元気に奔走中！\n「動物たちの笑顔。お客さんの笑顔。どっちも守って見せるさ！」\nイラスト：DEA Community",
    category: "サービス",
    type: "NORMAL",
    name: "動物園飼育員(Nature)",
    spec: {
      status: { hp: 1410, atk: 435, def: 344, spd: 282 },
      skill: [
        { title: "魂のブラシがけ", desc: "敵1体に特大ダメージ" },
        { title: "栄養満点の調合", desc: "味方全員のHP回復" },
        {
          title: "築き上げた信頼関係",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9z8ld7f004808mfdvj31ne5",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9z8ld7f004808mfdvj31ne5.webp",
    info: "病と不安の相談者。\n降り注ぐ課題や不安に押し潰されそうになった時、そんな時人々は彼女に救いを求める。\n「どうか気を楽にして、私達に任せて下さい。きっと不安を取り除きましょう」",
    category: "医療",
    type: "NORMAL",
    name: "医療ソーシャルワーカー(Thunder)",
    spec: {
      status: { hp: 1410, atk: 465, def: 340, spd: 264 },
      skill: [
        {
          title: "フォローアップ治療",
          desc: "敵1体に特大ダメージを与え、自分のSPDを上げる。3ターン有効",
        },
        {
          title: "社会復帰のお助け人",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする。",
        },
        {
          title: "ホスピタリティ・ケア",
          desc: "味方全員のSPDを大幅に上げるが、自分は致命的なダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coegsf0d091umj3cmy98h2",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coegsf0d091umj3cmy98h2.webp",
    info: "時に厳しく、時に優しく、患者に寄り添う者。\nその手は傷ついた身体を支え、その言葉はくじけそう\nになる心を励ます。\nすべては人々が健やかな日々を取り戻すために。",
    category: "医療",
    type: "NORMAL",
    name: "作業療法士(Earth)",
    spec: {
      status: { hp: 1425, atk: 470, def: 340, spd: 258 },
      skill: [
        {
          title: "生活動作のお助け人",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする。",
        },
        { title: "QOL向上", desc: "味方1体のHP回復。DEFを上げる。3ターン有効" },
        {
          title: "焦らずゆ～っくりと",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coenww0e4d1umjcn1pdrhw",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9coenww0e4d1umjcn1pdrhw.webp",
    info: "イングラムの後継機として警視庁に納入予定だった試作レイバー。マニュピレーターを使用した格闘が可能。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【機動警察パトレイバー】AV-X0 零式(Thunder)",
    spec: {
      status: { hp: 1440, atk: 425, def: 336, spd: 285 },
      skill: [
        { title: "格闘", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "抜き手",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        {
          title: "大型専用シールド",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cofc180hx91umj4r5fb92p",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofc180hx91umj4r5fb92p.webp",
    info: "陸上自衛隊機械化空挺師団が使用する軍用レイバー。イングラムの開発後継機に当たるため性能が高い。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【機動警察パトレイバー】ARL-99 ヘルダイバー(Nature)",
    spec: {
      status: { hp: 1440, atk: 420, def: 380, spd: 255 },
      skill: [
        {
          title: "コンバットナイフ",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        { title: "40mm連射砲", desc: "敵全員に大ダメージ" },
        {
          title: "99式自動砲",
          desc: "敵1体に特大ダメージを与え、自分のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofmfo0jk61umj8b2rfazt",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofmfo0jk61umj8b2rfazt.webp",
    info: "２号機は太田巡査が酷使したために頭部センサーユニットの部品が無くなり、試作型のパーツを流用している。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【機動警察パトレイバー】98式AV イングラム２号機(Earth)",
    spec: {
      status: { hp: 1440, atk: 475, def: 340, spd: 252 },
      skill: [
        {
          title: "ライアットガン",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
        {
          title: "シールド",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "磁気ネット弾", desc: "敵1体のSPDを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coflf70jeh1umjc3317jf3",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coflf70jeh1umjc3317jf3.webp",
    info: "聴く者全てに安心感を与える凄腕の話者。\n「まず今週のヒットチャート、第３位からお届けします！」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ラジオDJ(Water)",
    spec: {
      status: { hp: 1305, atk: 470, def: 344, spd: 279 },
      skill: [
        {
          title: "爆笑お便りトーク！",
          desc: "召喚時に確率でSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "チャートリサーチ",
          desc: "召喚時に確率でATKを大幅に上げる。1ターン有効",
        },
        {
          title: "新鮮な一曲を！",
          desc: "ランダムな敵に3回ダメージ。ただしこの攻撃は確率でミスになる。",
        },
      ],
    },
  },
  {
    id: "cl9cof0fr0g3g1umj6dte2bdg",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cof0fr0g3g1umj6dte2bdg.webp",
    info: "フットボールとサイクリングの街デインズをその手腕で治める市長。彼の目は人々すべてに注がれている。\nイラスト：信吉",
    category: "アンノウン",
    type: "NORMAL",
    name: "デインズ市長Jan Vermeulen(Earth)",
    spec: {
      status: { hp: 1395, atk: 465, def: 348, spd: 261 },
      skill: [
        { title: "公正なるジャッジ", desc: "敵全員に大ダメージ" },
        {
          title: "溢れる知識",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "雄弁", desc: "敵1体のATKを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofmt10jm71umjcyua157c",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofmt10jm71umjcyua157c.webp",
    info: "熱気うずまく会場に、静かに、しかし鮮やかに咲く華。\nスポットライトは当たらずともそれは確かな存在感を示す。\n「そこの貴方！うちのゲーム、試しに遊んで行きませんか？」\nillust：DEA Artist",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "e-sports コンパニオン(Thunder)",
    spec: {
      status: { hp: 1410, atk: 460, def: 344, spd: 264 },
      skill: [
        { title: "勝利のピースサイン", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "販売促進！サービスPR",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "自社ブースへの招待", desc: "味方1体のHP大回復" },
      ],
    },
  },
  {
    id: "cl9cofrbx0kbm1umjdx9b8t2t",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofrbx0kbm1umjdx9b8t2t.webp",
    info: "「実在するかしないかは演出次第...ってわけか。まさかドラゴンが出てくるなんてな...。それも4体」\nillust：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "演出家(Fire)",
    spec: {
      status: { hp: 1305, atk: 470, def: 344, spd: 279 },
      skill: [
        {
          title: "カーテンコール",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "仮想演出：クアドラプルドラゴン", desc: "敵全員に大ダメージ" },
        {
          title: "采配のメガホン",
          desc: "自分に致命的なダメージを与え、味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofkn90ja01umjesq35tyq",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofkn90ja01umjesq35tyq.webp",
    info: "「どんな場所まで行きたい？アナタが望むなら、どこへだって連れて行くわ。…もちろん、お代はキッチリ払ってもらうけどね！」\nillust：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "タクシー運転手(Nature)",
    spec: {
      status: { hp: 1380, atk: 440, def: 344, spd: 282 },
      skill: [
        { title: "常識破りのタクシードライブ", desc: "敵全員に大ダメージ" },
        {
          title: "ハイパーローカル雑談",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        {
          title: "卓越したハンドル捌き",
          desc: "召喚時に確率でSPDを大幅に上げる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coelpw0drw1umj0oagcqls",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9coelpw0drw1umj0oagcqls.webp",
    info: "なにしろ魂入れといたからさ",
    category: "アンノウン",
    type: "NORMAL",
    name: "【大東京トイボックス】谷崎七海(Thunder)",
    spec: {
      status: { hp: 1418, atk: 433, def: 350, spd: 275 },
      skill: [
        {
          title: "サムキチ",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        { title: "愛煙家", desc: "味方1体のHP大回復" },
        { title: "理解者", desc: "味方全員のDEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofm6c0jiq1umj9jgn44bz",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofm6c0jiq1umj9jgn44bz.webp",
    info: "いい天気。いっそ雲ひとつなければよかったのに",
    category: "アンノウン",
    type: "NORMAL",
    name: "【大東京トイボックス】月山星乃(Water)",
    spec: {
      status: { hp: 1395, atk: 440, def: 372, spd: 258 },
      skill: [
        { title: "デスパレ", desc: "敵全員に大ダメージ" },
        { title: "交渉術", desc: "敵全員のSPDを下げる。3ターン有効" },
        {
          title: "やっつけβ",
          desc: "自分に致命的なダメージを与え、ATKとSPDを大幅に上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coexz20fph1umjer50ffg0",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coexz20fph1umjer50ffg0.webp",
    info: "仕様を一部変更する！！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【大東京トイボックス】天川太陽(Fire)",
    spec: {
      status: { hp: 1365, atk: 475, def: 346, spd: 263 },
      skill: [
        { title: "暴走", desc: "召喚時に確率でATKを大幅にあげる。1ターン有効" },
        { title: "カンスト", desc: "敵全員に大ダメージ" },
        {
          title: "萌え×燃え",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofqxb0k9c1umjgrtcbmxc",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofqxb0k9c1umjgrtcbmxc.webp",
    info: "コスプレイヤーKael Pkによるジョブロード・ブロックチェーンエンジニアのコスプレ作品。\n「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "情報・運輸",
    type: "NORMAL",
    name: "コスプレイヤーKael Pk（ブロックチェーンエンジニア）(Poison)",
    spec: {
      status: { hp: 1365, atk: 455, def: 356, spd: 267 },
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
    id: "cl9cofgg60im91umjcw9f6m5b",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofgg60im91umjcw9f6m5b.webp",
    info: "コスプレイヤーYuan Crossによるジョブロード・証券アナリストのコスプレ作品。「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "コスプレイヤーYuan Cross（証券アナリスト）(Earth)",
    spec: {
      status: { hp: 1380, atk: 430, def: 352, spd: 282 },
      skill: [
        {
          title: "爆熱プルーデントマンルール",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "バーニング証券バスター", desc: "敵1体に特大ダメージ" },
        {
          title: "神の見えざるフィンガー！！",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeg7x0cx21umj9giy2cse",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coeg7x0cx21umj9giy2cse.webp",
    info: "コスプレイヤーPAINSによるジョブロード・外交官のコスプレ作品。\n「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "コスプレイヤーPAINS（外交官）(Nature)",
    spec: {
      status: { hp: 1365, atk: 455, def: 356, spd: 267 },
      skill: [
        { title: "社交スマイル", desc: "味方全員のDEFを上げる。3ターン有効" },
        { title: "折衷案の提示", desc: "敵1体に特大ダメージ" },
        {
          title: "外交特権の行使",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coefh10csz1umj76yy3d5h",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coefh10csz1umj76yy3d5h.webp",
    info: "コスプレイヤーhimeshinraによるジョブロード・薬剤師のコスプレ作品。\n「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "医療",
    type: "NORMAL",
    name: "コスプレイヤーhimeshinra（薬剤師）(Fire)",
    spec: {
      status: { hp: 1365, atk: 445, def: 364, spd: 267 },
      skill: [
        { title: "ファーマシューティカル・ケア", desc: "味方1体のHP大回復" },
        {
          title: "精密調剤の心得",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "展開：サテライトファーマシー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofcil0hzz1umj9zwockiv",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofcil0hzz1umj9zwockiv.webp",
    info: "コスプレイヤーVehlo Kazeによるジョブロード・ホストのコスプレ作品。\n「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "コスプレイヤーVehlo Kaze（ホスト）(Water)",
    spec: {
      status: { hp: 1365, atk: 445, def: 356, spd: 273 },
      skill: [
        {
          title: "至高のコール：シャンパンタワー",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "夜の王子の話術",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "ドンペリハンマー・ラッシュ", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof7xe0h9w1umjeempf75v",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cof7xe0h9w1umjeempf75v.webp",
    info: "コスプレイヤーCoser Black/黒によるジョブロード・花屋のコスプレ作品。\n「コスプレで、もう1人の自分を見つける冒険に出よう！あなたも一緒に！」",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "コスプレイヤーCoser Black/黒（花屋）(Thunder)",
    spec: {
      status: { hp: 1395, atk: 450, def: 360, spd: 261 },
      skill: [
        {
          title: "フラワーアレンジメント",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "祝福のウェディングブーケ",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        { title: "フローリストナイフ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofp2g0jyu1umjf1r429kv",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofp2g0jyu1umjf1r429kv.webp",
    info: "秘術「プログラム言語」で代表される幾多の呪文を扱う魔導士。 \n「さぁ、あなたの魔法で私の絵に命を吹き込んで…」イラストレーター談",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ゲームプログラマー(Nature)",
    spec: {
      status: { hp: 1305, atk: 455, def: 356, spd: 279 },
      skill: [
        {
          title: "機械言語の超越者",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "秘術「オブジェクト・ＩＮＩＴ」",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        { title: "秘術「システム・ＥＸＩＴ」", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeifa0d9f1umj3o70f0pc",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coeifa0d9f1umj3o70f0pc.webp",
    info: "銀幕の星である俳優、その影武者を務める者達。\n自分の負傷を顧みず、どんな危険なシーンにも立ち向かう。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "スタントマン(Fire)",
    spec: {
      status: { hp: 1305, atk: 455, def: 356, spd: 279 },
      skill: [
        {
          title: "死生不知",
          desc: "敵全員のSPDを大幅に下げるが、自分は致命的なダメージを受ける。3ターン有効",
        },
        {
          title: "スタントダブル",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "ファイヤーイーター",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coefqb0cue1umjh4us4rbf",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coefqb0cue1umjh4us4rbf.webp",
    info: "昔は美術館だけが収めていた価値あるものを、現代なら自分の手でつかみ取ることが出来る。デジタルな美を探し出して自分だけの物にする。それが彼女達の喜び。",
    category: "アンノウン",
    type: "NORMAL",
    name: "NFTコレクター(Water)",
    spec: {
      status: { hp: 1305, atk: 465, def: 364, spd: 267 },
      skill: [
        {
          title: "先見の明",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "唯一無二のデジタルデータ",
          desc: "敵全員のATKを大幅に下げるが、SPDが上がる。3ターン有効",
        },
        { title: "暗号世界の到来", desc: "ランダムな敵に2回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof3610giv1umj1jamfobl",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cof3610giv1umj1jamfobl.webp",
    info: "「妻を愛し、妻のために生きる。それだけだ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "愛妻家(Nature)",
    spec: {
      status: { hp: 1350, atk: 450, def: 360, spd: 270 },
      skill: [
        { title: "妻へのリスペクト", desc: "味方1体のHP大回復" },
        { title: "結婚記念日のプレゼント", desc: "バジェットを増やす" },
        {
          title: "彼女は僕が守る！",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cofpre0k2q1umj71db8qcq",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofpre0k2q1umj71db8qcq.webp",
    info: "わからないから立ち止まるんじゃない。わからなくても前に進む……。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インベスターZ】月浜蓮(Nature)",
    spec: {
      status: { hp: 1350, atk: 430, def: 376, spd: 270 },
      skill: [
        {
          title: "格言ノート",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        { title: "迎えにきたよ", desc: "味方1体のHP大回復" },
        { title: "出口戦略", desc: "味方1体のDEFを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coess50ew11umjawbk9tkl",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coess50ew11umjawbk9tkl.webp",
    info: "私は投資で成功したい。だから……バフェット様の肩の上に乗る！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インベスターZ】藤田美雪(Fire)",
    spec: {
      status: { hp: 1410, atk: 430, def: 360, spd: 270 },
      skill: [
        { title: "インベスターＰ", desc: "敵全員に大ダメージ" },
        {
          title: "リスクをとる",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        { title: "バフェット様…", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cog0bz0lqs1umj7zwv00z1",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cog0bz0lqs1umj7zwv00z1.webp",
    info: "人目なんか気にしない！　自分がハッピー！　それが一番！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ドラゴン桜2】鍋明美(Thunder)",
    spec: {
      status: { hp: 1365, atk: 445, def: 372, spd: 261 },
      skill: [
        {
          title: "へロ〜エビバディ！",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
        { title: "シャドーイング", desc: "味方1体のSPDを上げる。3ターン有効" },
        {
          title: "モノマネ",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coercj0enu1umj36xqel2n",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coercj0enu1umj36xqel2n.webp",
    info: "一度立ち止まることも大事だ。別の考え方もしてみよう。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ドラゴン桜2】矢島勇介(Earth)",
    spec: {
      status: { hp: 1335, atk: 465, def: 348, spd: 273 },
      skill: [
        { title: "東大なんて行くな！", desc: "敵1体に特大ダメージ" },
        {
          title: "自分の頭で考えろ！",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        {
          title: "ボールシュート",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coel1j0do31umj77fxb774",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coel1j0do31umj77fxb774.webp",
    info: "常にまわりを楽しませたいと考えているエンターテイナー。身体能力が高く身軽で華やかなダンスを披露する。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Youran（レンジャー）(Earth)",
    spec: {
      status: { hp: 1358, atk: 440, def: 358, spd: 276 },
      skill: [
        { title: "アクロバティック・ブレード", desc: "敵全員に大ダメージ" },
        {
          title: "Youranの輝き",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        {
          title: "ふふふ、引っかかったねー",
          desc: "敵1体のSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coezvo0g0c1umj4dwka17d",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coezvo0g0c1umj4dwka17d.webp",
    info: "いつもニコニコと仲間たちを見守るお姉さん。アイドルとしての実力も高く、一目置かれる存在。しかし…",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Camille（ウィザード）(Poison)",
    spec: {
      status: { hp: 1365, atk: 445, def: 350, spd: 278 },
      skill: [
        { title: "マジカル・ボイス", desc: "敵全員に大ダメージ" },
        {
          title: "Camilleの輝き",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        { title: "お茶が入りましたよ♪", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cl9cofv7g0kxm1umj51t4etqc",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofv7g0kxm1umj51t4etqc.webp",
    info: "⻑い手足を生かしたダンスやパフォーマンスに定評がある、面倒見のいいみんなのお姉さん。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Emma（ウォリアー）(Thunder)",
    spec: {
      status: { hp: 1335, atk: 455, def: 370, spd: 263 },
      skill: [
        { title: "ソード・ダンス", desc: "敵1体に特大ダメージ" },
        {
          title: "Emmaの輝き",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        {
          title: "ここは私に任せておきな！",
          desc: "自分のATKを大幅に上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coegfu0cya1umj81ip1mjf",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coegfu0cya1umj81ip1mjf.webp",
    info: "歌もダンスも得意な優等生。やや人見知りなところがあるが、本当はみんなともっと仲良くなりたい。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Sophia（アーチャー）(Nature)",
    spec: {
      status: { hp: 1388, atk: 438, def: 364, spd: 267 },
      skill: [
        { title: "メロディアス・アロー", desc: "敵1体に特大ダメージ" },
        {
          title: "Sophiaの輝き",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "友達を傷つけることは、許さない", desc: "味方1体のHP大回復" },
      ],
    },
  },
  {
    id: "cl9cofylz0lgy1umjdgke5ah1",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofylz0lgy1umjdgke5ah1.webp",
    info: "常に全力で元気いっぱいのムードメーカー。持ち前の人懐っこさと好奇心でトラブルを引き起こすこともしばしば。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Amelia（ランサー）(Water)",
    spec: {
      status: { hp: 1335, atk: 463, def: 350, spd: 273 },
      skill: [
        { title: "チャーミング・スピアー", desc: "敵全員に大ダメージ" },
        {
          title: "Ameliaの輝き",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "あれっ、これなんだろう？", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cofsal0kh41umj2nqadgi0",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofsal0kh41umj2nqadgi0.webp",
    info: "歌もダンスもそれほど得意というわけではないが、アイドルになりたいという気持ちは誰にも負けない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【B-idol】Rin（ナイト）(Fire)",
    spec: {
      status: { hp: 1320, atk: 460, def: 362, spd: 269 },
      skill: [
        { title: "シャイニング・サーベル", desc: "敵1体に特大ダメージ" },
        {
          title: "Rinの輝き",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "みんなを照らす光になる！",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coevmu0fc61umjc9vhgr6g",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coevmu0fc61umjc9vhgr6g.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Earth)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coete30ezi1umj87jz0ipq",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coete30ezi1umj87jz0ipq.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Poison)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofsdw0khn1umj4of33c4h",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofsdw0khn1umj4of33c4h.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Nature)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofwq80l6a1umjfccpf3od",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofwq80l6a1umjfccpf3od.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Water)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coer5u0emt1umjcx0zfwah",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coer5u0emt1umjcx0zfwah.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Fire)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofrpz0kdv1umjhce27jfn",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofrpz0kdv1umjhce27jfn.webp",
    info: "オレがただでやるって言ってんだ‥‥！　だから行けっ‥‥！　合流して来いっ　くそヒーロー‥‥‥‥！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【カイジ】黒服(Water)",
    spec: {
      status: { hp: 1343, atk: 448, def: 362, spd: 272 },
      skill: [
        { title: "圧倒的威圧", desc: "敵1体のSPDを下げる。3ターン有効" },
        { title: "絶望の制圧", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "悪魔的連携", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coels60ds91umja9wi4cpa",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coels60ds91umja9wi4cpa.webp",
    info: "My DeFi PetはNFTとDeFiが融合したブロックチェーンゲームで、ユーザーに対し非常にユニークな体験とPlay2Earnによる収入を実現させます。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【My DeFi Pet】Fang(Earth)",
    spec: {
      status: { hp: 1313, atk: 463, def: 358, spd: 272 },
      skill: [
        { title: "かみつく", desc: "敵1体に特大ダメージ" },
        { title: "ほえる", desc: "敵1体のSPDを下げる。3ターン有効" },
        { title: "ひろってくる", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cofv6a0kxf1umjh0ef2q7v",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofv6a0kxf1umjh0ef2q7v.webp",
    info: "My DeFi PetはNFTとDeFiが融合したブロックチェーンゲームで、ユーザーに対し非常にユニークな体験とPlay2Earnによる収入を実現させます。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【My DeFi Pet】Adonis(Fire)",
    spec: {
      status: { hp: 1388, atk: 453, def: 350, spd: 269 },
      skill: [
        { title: "なつく", desc: "敵1体のDEFを下げる。3ターン有効" },
        {
          title: "けいかい",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "あばれる", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofcgc0hzm1umjbdfvfj79",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofcgc0hzm1umjbdfvfj79.webp",
    info: "My DeFi PetはNFTとDeFiが融合したブロックチェーンゲームで、ユーザーに対し非常にユニークな体験とPlay2Earnによる収入を実現させます。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【My DeFi Pet】Rudolph(Thunder)",
    spec: {
      status: { hp: 1358, atk: 448, def: 370, spd: 263 },
      skill: [
        { title: "つのでつく", desc: "敵1体に特大ダメージ" },
        {
          title: "まもりのしせい",
          desc: "自分のDEFを大幅に上げる。3ターン有効",
        },
        {
          title: "はげます",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofsf40khu1umj6brn2d1r",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofsf40khu1umj6brn2d1r.webp",
    info: "My DeFi PetはNFTとDeFiが融合したブロックチェーンゲームで、ユーザーに対し非常にユニークな体験とPlay2Earnによる収入を実現させます。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【My DeFi Pet】Winged Pupper(Poison)",
    spec: {
      status: { hp: 1343, atk: 438, def: 362, spd: 278 },
      skill: [
        { title: "まいあがる", desc: "自分のSPDを大幅に上げる。3ターン有効" },
        { title: "かぜおこし", desc: "敵1体のATKを下げる。3ターン有効" },
        {
          title: "きゅうけつ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coerny0epn1umjd4fvgjlw",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9coerny0epn1umjd4fvgjlw.webp",
    info: "Play-to-Earn\n ゲームを遊ぶことで日々増えていくDEP。\n 私たちは、新しい時代を生きているんだ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "DEPトレーダー(Thunder)",
    spec: {
      status: { hp: 1373, atk: 443, def: 354, spd: 274 },
      skill: [
        { title: "Play-to-Earn", desc: "バジェットを増やす" },
        { title: "ホワイトペーパーヒーリング", desc: "味方1体のHP大回復" },
        { title: "GameFiの衝撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coesy70ewz1umjgcidbdg2",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coesy70ewz1umjgcidbdg2.webp",
    info: "世に隠れた芸術家や美術品を発掘し、世に出すのが己が使命。\nそう信じて、時には痛い目にあいながら、審美眼を磨く日々を過ごす。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "美術商(Poison)",
    spec: {
      status: { hp: 1342, atk: 438, def: 370, spd: 271 },
      skill: [
        { title: "魅惑のオークション開催", desc: "敵のバジェットを減らす" },
        { title: "魂の目利き", desc: "バジェットを増やす" },
        {
          title: "確認：カタログ・レゾネ",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cof4j90gqq1umj087d3dp0",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cof4j90gqq1umj087d3dp0.webp",
    info: "2021年10月 第9回 JobTribes PvP アリーナランキングバトルチャンピオン、アジフライ。 王者となっても傲ることなく、鍛錬を積み重ね、より高みを目指し続ける。まさに戦士の鏡だ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】アジフライ(ajihurai) ＜2021年10月＞(Nature)",
    spec: {
      status: { hp: 1230, atk: 490, def: 328, spd: 294 },
      skill: [
        {
          title: "奪還作戦開始！",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        { title: "プリズミックスターズ", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "心強い仲間たち",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coerss0eqf1umj24890hi8",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coerss0eqf1umj24890hi8.webp",
    info: "2021年9月 第8回 JobTribes PvP アリーナランキングバトルチャンピオン、MaouKun。 最強の魔王は、彼女だけのヒーローになった。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】MaouKun ＜2021年9月＞(Poison)",
    spec: {
      status: { hp: 1230, atk: 490, def: 328, spd: 294 },
      skill: [
        { title: "共に歩む幸せ", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "アイ・ラブ・ユー",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "幸せな家庭を築こう",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coeh2s0d1v1umj1yiz4enq",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coeh2s0d1v1umj1yiz4enq.webp",
    info: "「採掘場だろうが魔獣の潜む山だろうが\n俺のダイナマイトで爆破できないものはない。\n……いくぞ、奥義・発破！！！」",
    category: "クラフター",
    type: "NORMAL",
    name: "発破技師(Fire)",
    spec: {
      status: { hp: 1373, atk: 457, def: 354, spd: 266 },
      skill: [
        {
          title: "モンロー効果エクスプロード",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        { title: "残薬点検の心得", desc: "敵1体のDEFを下げる。3ターン有効" },
        { title: "最終奥義・爆破解体", desc: "ランダムな敵に2回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coehfh0d3u1umj2t47f33f",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coehfh0d3u1umj2t47f33f.webp",
    info: "誰かに見られる人を、見られたいように変身させるのが僕の仕事さ。\nさぁ、君はどんな風に見られたいのかな？",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "メイクアップアーティスト(Poison)",
    spec: {
      status: { hp: 1342, atk: 452, def: 374, spd: 260 },
      skill: [
        { title: "無限色彩パレット", desc: "敵全員のATKを下げる。3ターン有効" },
        {
          title: "カバーリング ファンデーション",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "伝統の化粧筆",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofshj0ki81umjes1qhjn6",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofshj0ki81umjes1qhjn6.webp",
    info: "説明しよう！ 水中用のヤッターアンコウは、ヤッターマンが中に入れるヤッターメカであり、宇宙にも行けるのだ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ヤッターアンコウ(Thunder)",
    spec: {
      status: { hp: 1328, atk: 458, def: 370, spd: 263 },
      skill: [
        { title: "水流攻撃", desc: "敵全員に大ダメージ" },
        { title: "必殺アンコウナベ", desc: "敵1体に特大ダメージ" },
        {
          title: "ビックラシャックラメカ",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeu5i0f3v1umj46vd6aky",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coeu5i0f3v1umj46vd6aky.webp",
    info: "説明しよう！ 飛行も可能なヤッターメカ２号ヤッターペリカンはヤッターワンと同じくガンちゃんが完成させたのだ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ヤッターペリカン(Nature)",
    spec: {
      status: { hp: 1373, atk: 438, def: 354, spd: 278 },
      skill: [
        {
          title: "水上走行",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        { title: "空中攻撃", desc: "敵1体に特大ダメージ" },
        {
          title: "ビックショックメカ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cog15t0lvh1umjdhg00zzv",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cog15t0lvh1umjdhg00zzv.webp",
    info: "説明せねばなるまい！ ヤッターワンは父親の作りかけをガンちゃんが自力で完成させたものなのだ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ヤッターワン(Earth)",
    spec: {
      status: { hp: 1410, atk: 463, def: 350, spd: 258 },
      skill: [
        {
          title: "チンジャラ砲",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        { title: "放水攻撃", desc: "敵全員に大ダメージ" },
        {
          title: "ビックリドッキリメカ",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coffed0igb1umj3atv3myd",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coffed0igb1umj3atv3myd.webp",
    info: "「2階だろうと、3階だろうと、新聞を確実にお届けします!」\nそういいながら、ホットなニュースを届けてくれる。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "新聞配達員(Fire)",
    spec: {
      status: { hp: 1297, atk: 448, def: 362, spd: 280 },
      skill: [
        {
          title: "恐怖を告げる新聞",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        { title: "神速の投げ入れ", desc: "敵全員に大ダメージ" },
        {
          title: "早朝の早駆け",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coezl90fyo1umjbricegzn",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coezl90fyo1umjbricegzn.webp",
    info: "みかんの栽培を行う者。\nハウス栽培の普及により、季節を問わずその戦いは続くため、歴戦の猛者がそろっているとも言われている。\nイラスト：DAA Artist",
    category: "ギャザラー",
    type: "NORMAL",
    name: "みかん農家(Nature)",
    spec: {
      status: { hp: 1312, atk: 462, def: 370, spd: 263 },
      skill: [
        { title: "柑橘キングダム", desc: "敵全員に大ダメージ" },
        {
          title: "ビタミン美白",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        {
          title: "マンダリンコンボ",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofbfq0htu1umjch0ceacw",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofbfq0htu1umjch0ceacw.webp",
    info: "2021年4月 第4回 JobTribes PvP アリーナランキングバトルチャンピオン、Neoneow。\nキュートな姿とは裏腹の強烈パンチ！最強の黒猫はまだまだとどまるところを知らない。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】Neoneow ＜2021年4月＞(Thunder)",
    spec: {
      status: { hp: 1230, atk: 490, def: 328, spd: 294 },
      skill: [
        {
          title: "猫魔法「木天蓼（またたび）スパーク」",
          desc: "敵全員に大ダメージ",
        },
        {
          title: "夜の運動会「もふもふ夜行」",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        {
          title: "臨戦態勢「狩猟モード」",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofdli0i661umj8lj2gq94",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofdli0i661umj8lj2gq94.webp",
    info: "船民の命を一身に背負う、船の長。\n航海中の船は1つの国に匹敵するため、\n責任も業務内容も国王とほぼ同等。\nイラスト：むらいっち",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "船長(Water)",
    spec: {
      status: { hp: 1327, atk: 443, def: 366, spd: 274 },
      skill: [
        {
          title: "潮流把握",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "航海ルート変更", desc: "敵全員のATKを下げる。3ターン有効" },
        { title: "大航海", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeyan0frc1umj2198h6oc",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coeyan0frc1umj2198h6oc.webp",
    info: "結婚式のコーディネートをする者たち。\n思い出に残るウェディングのため、\nあらゆる要望を全力で叶える。\nイラスト：Maeka",
    category: "サービス",
    type: "NORMAL",
    name: "ブライダルコーディネーター(Earth)",
    spec: {
      status: { hp: 1380, atk: 440, def: 352, spd: 276 },
      skill: [
        {
          title: "幸せプロポーサル",
          desc: "味方1体のDEFを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "ハピネス・ウェディング",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        {
          title: "ホスピタリティの心得",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cofduo0i7m1umjbeuwdkiw",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofduo0i7m1umjbeuwdkiw.webp",
    info: "「始めよう、魂の読み合いを。\n全てを賭ける覚悟なら、俺の方はとっくにできてる」\nイラスト：Maeka",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロポーカー選手(Poison)",
    spec: {
      status: { hp: 1358, atk: 452, def: 358, spd: 269 },
      skill: [
        {
          title: "コンテニュエーション・ベット",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        { title: "電光石火のスティール", desc: "敵のバジェットを減らす" },
        {
          title: "ポーカーフェイス",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cof8o20he41umj0wtzad12",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cof8o20he41umj0wtzad12.webp",
    info: "常識を凌駕するほどの声量と音域の美声は、\n時に愛を語り、正義を称え、神の勝利を告げる。\nあらゆるものを歌い上げる、まさに神の声を持つ者。\nイラスト：RO-Mai ",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "オペラ歌手(Nature)",
    spec: {
      status: { hp: 1342, atk: 452, def: 374, spd: 260 },
      skill: [
        {
          title: "誰も寝てはならぬ",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "魔弾の射手", desc: "敵全員に大ダメージ" },
        {
          title: "ニーベルングの指環",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof6wy0h441umjbg2p45ov",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof6wy0h441umjbg2p45ov.webp",
    info: "2021年2月 第2回 JobTribes PvP アリーナランキングバトルチャンピオン、shinkei。\n圧倒的な力の差を見せつけ、２連覇を達成した。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】shinkei ＜2021年2月＞(Water)",
    spec: {
      status: { hp: 1230, atk: 490, def: 328, spd: 294 },
      skill: [
        {
          title: "shinkei 第二形態",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        { title: "２連覇の圧力", desc: "敵全員に大ダメージ" },
        {
          title: "王者のオーラ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coez1l0fvj1umjbl4wf0wv",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coez1l0fvj1umjbl4wf0wv.webp",
    info: "宝石や貴金属の知識と、豊かな想像力で\nアクセサリーをデザインする者。閃きをデッサンし、\n煌めくアクセサリーへと具現化させる力を持つ。\nイラスト：Maeka",
    category: "サービス",
    type: "NORMAL",
    name: "宝飾デザイナー(Earth)",
    spec: {
      status: { hp: 1358, atk: 467, def: 346, spd: 269 },
      skill: [
        {
          title: "金剛結界：クォードリリオン",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "紅と蒼の鋼玉弾", desc: "ランダムな敵に2回ダメージ" },
        { title: "光輝：インペリアル・ゴールド", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cofje30j2v1umj9wty5s4j",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofje30j2v1umj9wty5s4j.webp",
    info: "「キャンサースクリーナー」の異名を持つ\n医療現場のアーマーナイト。\n様々な兵装で人々の病の探知や殲滅を行う。\nイラスト：RO-Mai",
    category: "医療",
    type: "NORMAL",
    name: "診療放射線技師(Thunder)",
    spec: {
      status: { hp: 1373, atk: 443, def: 366, spd: 266 },
      skill: [
        {
          title: "ガンマナイフ・スラッシュ",
          desc: "ランダムな敵に2回ダメージ",
        },
        {
          title: "光線変換：X,α,γ",
          desc: "味方1体のDEFを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "予防兵器・MRIガード",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coepor0eej1umjb7c37jpg",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coepor0eej1umjb7c37jpg.webp",
    info: "彼女の舞いに魅せられて、財を投げ打ち身を持ち崩し、無職人に成り果てる者は後を絶たない。\nイラスト：DEAartist",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ショーダンサー(Water)",
    spec: {
      status: { hp: 1312, atk: 462, def: 350, spd: 277 },
      skill: [
        {
          title: "情炎のポールダンス",
          desc: "敵全員のSPDを大幅に下げるが、ATKが上がる。3ターン有効",
        },
        {
          title: "鼓舞のステップ",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        {
          title: "鮮烈ショータイム",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl9coffz80ijl1umja0cfbs5u",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coffz80ijl1umja0cfbs5u.webp",
    info: "「街の法律家」の別名を持つ法律書類に特化した侍。\n手にした槌を振るい、1万種類を超える書類を\n次々と作成し処理していく。\nイラスト：DEAartist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "行政書士(Fire)",
    spec: {
      status: { hp: 1403, atk: 452, def: 346, spd: 269 },
      skill: [
        { title: "法の槌：無限書類乱舞", desc: "敵1体に特大ダメージ" },
        { title: "予防法務の極意", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "許認可申請の一撃",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cofks20jas1umjb09xcmlz",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofks20jas1umjb09xcmlz.webp",
    info: "節税はするが脱税は許さない正義の侍。不正を行ったものは、彼の六文銭ソードで一刀両断される。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "税理士(Poison)",
    spec: {
      status: { hp: 1312, atk: 438, def: 370, spd: 277 },
      skill: [
        {
          title: "決算報告グラビトン",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        { title: "領収書ビンタ", desc: "敵1体に特大ダメージ" },
        { title: "節税の恩恵", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cofg0f0ijs1umjcykudgm8",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofg0f0ijs1umjcykudgm8.webp",
    info: "「すべての商品がございます。\nお客様が求める武器も、宝飾も、そして力も……」\nイラスト：望帆みゆ",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "百貨店外商社員(Thunder)",
    spec: {
      status: { hp: 1403, atk: 433, def: 358, spd: 271 },
      skill: [
        {
          title: "厳選カタログシールド",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "買わせる営業トーク",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        {
          title: "掘り出し物の宝剣",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeufo0f5g1umjhxntbc76",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coeufo0f5g1umjhxntbc76.webp",
    info: "トラブル対応に強かったり、天気に詳しかったり…。パイロットの有能性は空だけに留まらない。\nイラスト：RO-Mai",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "航空機操縦士(Fire)",
    spec: {
      status: { hp: 1327, atk: 457, def: 366, spd: 266 },
      skill: [
        {
          title: "フライトケースシールド",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "12G加速", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "ジェットアタック", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coep4w0ebd1umjb8j33pia",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9coep4w0ebd1umjb8j33pia.webp",
    info: "コスプレイヤーYuan Crossによるジョブロード・麻薬密売人のコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：Yuan Cross",
    category: "アンノウン",
    type: "NORMAL",
    name: "コスプレイヤーYuan Cross（麻薬密売人）(Thunder)",
    spec: {
      status: { hp: 1320, atk: 450, def: 360, spd: 276 },
      skill: [
        {
          title: "疲れが消える薬",
          desc: "味方1体のATKを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        {
          title: "ジャンキーマニピュレート",
          desc: "ランダムな敵に2回ダメージ",
        },
        {
          title: "破滅のインジェクション",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofiv90izw1umj7x3ncrj7",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofiv90izw1umj7x3ncrj7.webp",
    info: "彼女は医療の未来を切り開くための重要なコネクターであり、監視者であり、有能なネゴシエーターでもある。\nイラスト：Maeka",
    category: "医療",
    type: "NORMAL",
    name: "治験コーディネーター(Poison)",
    spec: {
      status: { hp: 1395, atk: 435, def: 376, spd: 258 },
      skill: [
        {
          title: "入念インフォームドコンセント",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        {
          title: "神眼スクリーニング",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        { title: "移動途中のデリシャスランチ", desc: "味方1体のHP大回復" },
      ],
    },
  },
  {
    id: "cl9cofef10iar1umj7lsyecr9",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofef10iar1umj7lsyecr9.webp",
    info: "回復を司る魔法・リハビリを極めし天使。\n電気、温熱、寒冷、光線、あらゆる力を用いた魔法で患者に加護を与える。\nイラスト：RO-Mai",
    category: "医療",
    type: "NORMAL",
    name: "理学療法士(Fire)",
    spec: {
      status: { hp: 1365, atk: 435, def: 364, spd: 273 },
      skill: [
        {
          title: "温熱保護シールド",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        {
          title: "気力回復ストレッチパンチ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "継続リハビリテーション",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coegtn0d0g1umj4r9c4tpf",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coegtn0d0g1umj4r9c4tpf.webp",
    info: "牛乳、バター、チーズにヨーグルト…。\n牛たちのもたらす美味しい恩恵にありがとうを言いながら、酪農家たちは今日も乳をしぼる。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "酪農家(Nature)",
    spec: {
      status: { hp: 1305, atk: 470, def: 344, spd: 279 },
      skill: [
        {
          title: "濃厚ミルクチャージ！",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "ウォッシュチーズウォッシュ！", desc: "敵1体に特大ダメージ" },
        { title: "激熱バターシャワー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofwmi0l5p1umj46j0gz5d",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofwmi0l5p1umj46j0gz5d.webp",
    info: "コスプレイヤーVehlo Kaze 風によるジョブロード・科学捜査官のコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：Vehlo Kaze 風",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "コスプレイヤーVehlo Kaze 風（科学捜査官）(Fire)",
    spec: {
      status: { hp: 1350, atk: 450, def: 368, spd: 264 },
      skill: [
        {
          title: "DNAアナライザー",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "C.S.I：クライムブレイク", desc: "敵1体に特大ダメージ" },
        { title: "ルミノール・レイン", desc: "ランダムな敵に2回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coejss0dh21umjf4l95i8x",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coejss0dh21umjf4l95i8x.webp",
    info: "「想像してごらんなさい。この美しく彩られた爪が、あなたの肌を引き裂く瞬間を。…どう？味わってみたいでしょ」\nイラスト：Maeka",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ネイリスト(Water)",
    spec: {
      status: { hp: 1290, atk: 465, def: 348, spd: 282 },
      skill: [
        { title: "マグネットポリッシュショット", desc: "敵1体に特大ダメージ" },
        {
          title: "グリッターディストラクション",
          desc: "ランダムな敵に2回ダメージ",
        },
        {
          title: "アガるオフェンシブネイル",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofzbl0ll21umjc3lm5eqr",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofzbl0ll21umjc3lm5eqr.webp",
    info: "コスプレイヤーPAINSによるジョブロード・マジシャンのコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：PAINS",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "コスプレイヤーPAINS（マジシャン）(Earth)",
    spec: {
      status: { hp: 1365, atk: 455, def: 364, spd: 261 },
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
    id: "cl9coflvp0jh21umj7gzdfdvt",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coflvp0jh21umj7gzdfdvt.webp",
    info: "コスプレイヤーCoser - Black/黒によるジョブロード・宝くじ販売員のコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：Coser - Black/黒",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "コスプレイヤーCoser - Black/黒（宝くじ販売員）(Poison)",
    spec: {
      status: { hp: 1305, atk: 455, def: 364, spd: 273 },
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
    id: "cl9cof5070gtf1umj7cavdjf6",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof5070gtf1umj7cavdjf6.webp",
    info: "悪い奴は決して許さないサンタの始祖。千年以上前に誕生した。北極要塞で有事に備えて常に体を鍛えている。\n「お前もトナカイにしてやろうか！？」\nイラスト：海野螢",
    category: "アンノウン",
    type: "NORMAL",
    name: "サンタクロース（ブラック）(Water)",
    spec: {
      status: { hp: 1410, atk: 430, def: 372, spd: 261 },
      skill: [
        {
          title: "剛健サンタ結界！",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "剛腕サンタインパクト！", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "グローリースターフラッシュ！",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofbgy0hu11umjedqdg17r",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofbgy0hu11umjedqdg17r.webp",
    info: "「俺に任せりゃ臆病な子犬もたちまち勇敢な戦士にできる。\nだがな、犬は家族だ。戦いの後はよく褒めて、一緒に遊んでやれ。怪我したときのケアも怠るな。いいな？」\nイラスト：モ太朗",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ドッグトレーナー(Nature)",
    spec: {
      status: { hp: 1320, atk: 440, def: 368, spd: 276 },
      skill: [
        {
          title: "ご褒美の骨ガム",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "ブリング！敵の武器",
          desc: "敵1体のATKを下げる。3ターン有効",
        },
        {
          title: "犬笛コマンド：標的指示",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coevh50fb91umj7c00e395",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coevh50fb91umj7c00e395.webp",
    info: "コスプレイヤーKOYUKIによるジョブロード・水泳インストラクターのコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：KOYUKI",
    category: "教育",
    type: "NORMAL",
    name: "コスプレイヤーKOYUKI（水泳インストラクター）(Nature)",
    spec: {
      status: { hp: 1320, atk: 460, def: 368, spd: 264 },
      skill: [
        { title: "女神の高速ストローク", desc: "ランダムな敵に2回ダメージ" },
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
    id: "cl9cof8a90hby1umj8mmn93h1",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof8a90hby1umj8mmn93h1.webp",
    info: "コスプレイヤーhimeshinraによるジョブロード・騎手のコスプレ作品。\n\n「コスプレで、もう１人の自分を見つける冒険にでよう！あなたも一緒に！」\nコスプレイヤー：himeshinra",
    category: "アンノウン",
    type: "NORMAL",
    name: "コスプレイヤーhimeshinra（騎手）(Water)",
    spec: {
      status: { hp: 1380, atk: 440, def: 360, spd: 270 },
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
    id: "cl9coepbq0ecg1umjfifr28fa",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coepbq0ecg1umjfifr28fa.webp",
    info: "街が毎日美しいのは、彼が毎朝ゴミを収集してくれているおかげだ。 今日は可燃ゴミ。明日は不燃ゴミ。守ろうゴミ出しスケジュール。",
    category: "サービス",
    type: "NORMAL",
    name: "廃棄物収集業者(Poison)",
    spec: {
      status: { hp: 1395, atk: 435, def: 360, spd: 270 },
      skill: [
        { title: "産廃回収", desc: "ランダムな敵に2回ダメージ" },
        { title: "分別指導", desc: "敵1体のSPDを下げる。3ターン有効" },
        { title: "パッカー車プレス", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofth30knt1umjbmzrbv46",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofth30knt1umjbmzrbv46.webp",
    info: "土地や家屋の測量や調査を行う者。土地の境界を巡る紛争を「筆界特定」の力で収める力を持つ。",
    category: "金融・不動産",
    type: "NORMAL",
    name: "土地家屋調査士(Earth)",
    spec: {
      status: { hp: 1380, atk: 460, def: 352, spd: 264 },
      skill: [
        { title: "境界の杭", desc: "敵1体に特大ダメージ" },
        {
          title: "調査測量の槍",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "秘技・筆界特定", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofz980lko1umj3nzoga4w",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofz980lko1umj3nzoga4w.webp",
    info: "「今日はあなたのために明日は私のために」\n編み笠から見える凍てつく目で魔物をスタンさせるアンデスの魔力を持つ。\n真のチカラは未だ解放されていない。\nイラスト：WORLDFLAGS",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】チリ共和国＜佐々（Za-Sa）＞(Earth)",
    spec: {
      status: { hp: 1380, atk: 440, def: 344, spd: 282 },
      skill: [
        { title: "アンデスの魔眼", desc: "敵全員のDEFを下げる。3ターン有効" },
        {
          title: "パタゴニアの息吹",
          desc: "召喚時に確率でATKを大幅にあげる。1ターン有効",
        },
        { title: "天翔るコンドル", desc: "ランダムな敵に2回ダメージ" },
      ],
    },
  },
  {
    id: "cl9coefyf0cvm1umjgos069k2",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coefyf0cvm1umjgos069k2.webp",
    info: "「火のあるところから煙が来る」\n自由自在に大きさを変えることができる特殊武器の如意を操る。法力を使って癒す技も持ち合わせる。\n真のチカラは未だ解放されていない。\nイラスト：WORLDFLAGS",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】インドネシア共和国＜真春出伊華（MAHARUDIKA）＞(Fire)",
    spec: {
      status: { hp: 1290, atk: 470, def: 368, spd: 264 },
      skill: [
        { title: "大いなるガルーダの爪", desc: "ランダムな敵に2回ダメージ" },
        {
          title: "ジャカルタの賑わい",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        {
          title: "ラフレシアのかほり",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofo270jt81umj8evsckmu",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofo270jt81umj8evsckmu.webp",
    info: "「一枚の絵は千語に値する」\n『世界の警察』の名を継ぐ純真純潔の侍。勇気とたくましさをもって、正義を執行する。\n真のチカラは未だ解放されていない。\nイラスト：WORLDFLAGS",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】アメリカ合衆国＜駄須天（JUSTIN）＞(Thunder)",
    spec: {
      status: { hp: 1320, atk: 430, def: 376, spd: 276 },
      skill: [
        {
          title: "自由の翼",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        { title: "アメリカンドリーム", desc: "敵全員に大ダメージ" },
        {
          title: "ハンバーガーパーティー",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coer1d0em41umjg2698cyu",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coer1d0em41umjg2698cyu.webp",
    info: "「静かなるものは危険である」\nエスクリマが得意。熱血漢で、熱くなりすぎると目と髪の毛が緋色に変わり、手がつけられなくなる。\n真のチカラは未だ解放されていない。\nイラスト：WORLDFLAGS",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】フィリピン共和国＜利沙琉（RISAR）＞(Nature)",
    spec: {
      status: { hp: 1380, atk: 455, def: 356, spd: 264 },
      skill: [
        {
          title: "セントエルモの火",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        {
          title: "スリースターストライク",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "フィリピンワシの一撃", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof7qf0h8s1umj7ddne9br",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof7qf0h8s1umj7ddne9br.webp",
    info: "「キュウリとドリアンのごとし！」\n三日月の刀で繰り出す三段突きはかわすことが出来ないといわれている。\n真のチカラは未だ解放されていない。\nイラスト：WORLDFLAGS",
    category: "アンノウン",
    type: "NORMAL",
    name: "【WORLD FLAGS】マレーシア＜阿漸武（AXAMU）＞(Water)",
    spec: {
      status: { hp: 1395, atk: 450, def: 348, spd: 270 },
      skill: [
        { title: "三日月三破斬", desc: "敵全員に大ダメージ" },
        {
          title: "マラッカ海峡の風",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
        { title: "ホワイトコーヒー・ブレイク", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cl9cof9zn0hlk1umj59trfcrc",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cof9zn0hlk1umj59trfcrc.webp",
    info: "「はーい、キレイキレイしましょうねー……あっ、ごめんなさい。いつものクセで子ども用の口調になっちゃいました」\nイラスト：リッター",
    category: "医療",
    type: "NORMAL",
    name: "小児科医(Thunder)",
    spec: {
      status: { hp: 1350, atk: 435, def: 360, spd: 279 },
      skill: [
        {
          title: "お人形プレパレーション",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
        {
          title: "痛くなくなるおまじない",
          desc: "召喚時に確率でDEFを大幅にあげる。1ターン有効",
        },
        { title: "インフォームド・アセント", desc: "味方1体のHP大回復" },
      ],
    },
  },
  {
    id: "cl9cofb8j0hso1umj64epfgzi",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofb8j0hso1umj64epfgzi.webp",
    info: "「将軍には智慧、信義、仁愛、勇気、厳格の資質が不可欠なり。それ無くして兵や民を導き、覇を称える事能わずと心得よ」\nイラスト：菜",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "古代中国の将軍(Earth)",
    spec: {
      status: { hp: 1350, atk: 450, def: 348, spd: 279 },
      skill: [
        { title: "八陣図：勝機の布陣", desc: "ランダムな敵に2回ダメージ" },
        { title: "忠義の青龍偃月刀", desc: "敵1体に特大ダメージ" },
        {
          title: "秘術：五虎大将軍の加護",
          desc: "召喚時に確率でSPDを大幅にあげる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeftv0cux1umj51d5cg68",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coeftv0cux1umj51d5cg68.webp",
    info: "ひよこを掴み、見て、分ける。その間僅か3秒。1時間に1000匹以上を鑑定する彼女の動きは、千手観音を思わせる。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ひよこ鑑定士(Nature)",
    spec: {
      status: { hp: 1335, atk: 455, def: 356, spd: 273 },
      skill: [
        { title: "ひよこラッシュ", desc: "敵全員に大ダメージ" },
        { title: "疾風の手さばき", desc: "味方1体のSPDを上げる。3ターン有効" },
        { title: "秒速識別アイ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coex6o0fkz1umj9vwl68jy",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coex6o0fkz1umj9vwl68jy.webp",
    info: "「運行と乗客の安全と正確さ。そして快適な旅の約束。そのために日々、運転技術の鍛錬を怠らない。それが俺達——電車運転士の流儀だ」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "電車運転士(Fire)",
    spec: {
      status: { hp: 1320, atk: 470, def: 368, spd: 258 },
      skill: [
        { title: "LRT・メテオストリーム", desc: "敵全員に大ダメージ" },
        { title: "閃光：闇を貫く夜行列車", desc: "バジェットを増やす" },
        { title: "改良型：螺旋連結器ランス", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofgls0in51umj1tn5ab1r",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofgls0in51umj1tn5ab1r.webp",
    info: "一番恐ろしいジョブ・ロード？\n水族館飼育員と戦ったことがあるか？\n魚たちはな、思ったより肉食なんだよ……\n\nイラスト：冬桜*うさぎ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "水族館飼育員(Water)",
    spec: {
      status: { hp: 1305, atk: 450, def: 360, spd: 279 },
      skill: [
        { title: "獰猛なる給餌の号令", desc: "敵全員に大ダメージ" },
        {
          title: "結界：紺碧のアクアリウム",
          desc: "敵1体のSPDを下げる。3ターン有効",
        },
        { title: "プリズム・ドルフィンショー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof1w50gbo1umj3lio23x0",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cof1w50gbo1umj3lio23x0.webp",
    info: "体1つで稼ぎを生み出す肉体派。天候で働きを左右されるのがタマにキズ。騒音に負けぬ声量で他を圧倒する。\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "土木作業員(Earth)",
    spec: {
      status: { hp: 1365, atk: 445, def: 364, spd: 267 },
      skill: [
        { title: "安全確認よし！", desc: "敵1体のSPDを下げる。3ターン有効" },
        { title: "鋼鉄のチームワーク", desc: "敵全員に大ダメージ" },
        { title: "力仕事は任せろ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofxhq0lal1umj6d7w5tqf",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofxhq0lal1umj6d7w5tqf.webp",
    info: "医薬品の情報収集に長けた製薬会社に所属する騎士団。現代のケントゥリアとも呼ばれる。製薬の正しき進歩は、彼らの戦果があってこそなのだ。\nイラスト：色合mdd",
    category: "医療",
    type: "NORMAL",
    name: "製薬会社営業(Thunder)",
    spec: {
      status: { hp: 1350, atk: 435, def: 372, spd: 270 },
      skill: [
        { title: "聖剣・オーファンドラッグ", desc: "敵1体に特大ダメージ" },
        { title: "凱旋の情報フィードバック", desc: "敵のバジェットを減らす" },
        {
          title: "号令：治療薬開発の貢献",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofm7l0jix1umj77hedzzz",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofm7l0jix1umj77hedzzz.webp",
    info: "常夜の妖精たる彼女たちは訪れる者たちに癒しのひと時を与えるが、決して捕まえる事はできない。夜空を優美に舞う姿はまさに夜の蝶である。\nイラスト：たけみや\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『全体攻撃』　育成しておくと使い勝手が良い。\nRareなので安価に入手できる。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "キャバクラ嬢(Poison)",
    spec: {
      status: { hp: 1335, atk: 460, def: 364, spd: 264 },
      skill: [
        { title: "タイムオーバーチャージ", desc: "敵全員に大ダメージ" },
        {
          title: "夜の妖精の話術",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "常夜へ誘うコール", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeok30e811umjcp217cfi",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coeok30e811umjcp217cfi.webp",
    info: "蜂と共に生き、旅をする。蜂は人間の世界を支えているから。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "養蜂家(Nature)",
    spec: {
      status: { hp: 1365, atk: 445, def: 356, spd: 273 },
      skill: [
        { title: "受粉サポート", desc: "バジェットを増やす" },
        {
          title: "プロポリスバリア",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
        { title: "女王の選定", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofyph0lhi1umjfmuh84tl",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofyph0lhi1umjfmuh84tl.webp",
    info: "彼女はどこにでも現れる。コンサート会場、競技場、事故現場、そして戦場。すべての人に伝えるために。\nイラスト：akaya",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "記者(Poison)",
    spec: {
      status: { hp: 1350, atk: 465, def: 360, spd: 261 },
      skill: [
        {
          title: "フィクションペネトレイト",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "時事問題への神撃", desc: "敵1体に特大ダメージ" },
        {
          title: "徹底取材",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof7jl0h7q1umj0yr8b26p",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof7jl0h7q1umj0yr8b26p.webp",
    info: "彼女はどこにでも現れる。コンサート会場、競技場、事故現場、そして戦場。すべての人に伝えるために。\nイラスト：akaya",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "記者(Water)",
    spec: {
      status: { hp: 1350, atk: 465, def: 360, spd: 261 },
      skill: [
        {
          title: "フィクションペネトレイト",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "時事問題への神撃", desc: "敵1体に特大ダメージ" },
        {
          title: "徹底取材",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofkxx0jbq1umj4yknaxq2",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofkxx0jbq1umj4yknaxq2.webp",
    info: "「市役所の人間はこの世界で言えば衛兵だ」\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "市役所職員(Nature)",
    spec: {
      status: { hp: 1395, atk: 450, def: 360, spd: 261 },
      skill: [
        { title: "クレーム対応", desc: "敵1体のDEFを下げる。3ターン有効" },
        { title: "都市開発ラッシュ", desc: "敵1体に特大ダメージ" },
        {
          title: "立入検査ストーム",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof9xd0hl71umj2evkbuz9",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cof9xd0hl71umj2evkbuz9.webp",
    info: "技を研鑽し、敵地に潜入し、情報を収集するために命を懸ける忍びの者はどんな時代にもいる。\nイラスト：色合mdd",
    category: "アンノウン",
    type: "NORMAL",
    name: "忍者(Earth)",
    spec: {
      status: { hp: 1305, atk: 450, def: 372, spd: 270 },
      skill: [
        {
          title: "裏忍術",
          desc: "敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える",
        },
        { title: "児雷也之蝦蟇妖術", desc: "敵1体に特大ダメージ" },
        { title: "変化の術", desc: "敵1体のDEFを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coeocy0e6w1umj1vragpxs",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coeocy0e6w1umj1vragpxs.webp",
    info: "技を研鑽し、敵地に潜入し、情報を収集するために命を懸ける忍びの者はどんな時代にもいる。\nイラスト：色合mdd",
    category: "アンノウン",
    type: "NORMAL",
    name: "忍者(Poison)",
    spec: {
      status: { hp: 1305, atk: 450, def: 372, spd: 270 },
      skill: [
        {
          title: "裏忍術",
          desc: "敵のバジェットを2ターン後に大きく減らす。このアミュレットが破壊されると効果は消える",
        },
        { title: "児雷也之蝦蟇妖術", desc: "敵1体に特大ダメージ" },
        { title: "変化の術", desc: "敵1体のDEFを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cof7f30h701umjdxyz4xxk",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof7f30h701umjdxyz4xxk.webp",
    info: "世界中で活躍する寿司職人たち。寿司も同じ料理を出し続けるだけではない。今日も世界のどこかで新たな寿司が生み出されているだろう。\nイラスト：色合mdd",
    category: "サービス",
    type: "NORMAL",
    name: "寿司職人(Water)",
    spec: {
      status: { hp: 1395, atk: 455, def: 360, spd: 258 },
      skill: [
        {
          title: "美しき飾り切り",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "和の極み", desc: "敵1体に特大ダメージ" },
        {
          title: "ロールオブワールド",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coff5d0iew1umjdon31wcx",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coff5d0iew1umjdon31wcx.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Earth)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coftkm0koc1umj2c3qfaqz",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coftkm0koc1umj2c3qfaqz.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Poison)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofta60kmq1umj1y1s9ww6",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofta60kmq1umj1y1s9ww6.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Thunder)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coehq50d5i1umj9cd4erwx",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coehq50d5i1umj9cd4erwx.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Nature)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof80r0haf1umjcqowhme0",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof80r0haf1umjcqowhme0.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Water)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof9700hh31umj0fghawik",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cof9700hh31umj0fghawik.webp",
    info: "「手も入らないような狭い空間で細かい作業をさせたら彼らの右に出る者はいないだろうね」\nイラスト：大滝ノスケ",
    category: "クラフター",
    type: "NORMAL",
    name: "歯科技工士(Fire)",
    spec: {
      status: { hp: 1305, atk: 465, def: 360, spd: 270 },
      skill: [
        {
          title: "マイクロアジャストメント",
          desc: "味方1体のATKを上げる。3ターン有効",
        },
        { title: "シャイントゥースフラッシュ", desc: "バジェットを増やす" },
        { title: "ギガグラインドブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coexb80flp1umjbhbu6pgm",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9coexb80flp1umjbhbu6pgm.webp",
    info: "「どんな本でもご用意します。絵本でも兵法指南書でも魔導書でも！」\nイラスト：たけみや",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "書店員(Poison)",
    spec: {
      status: { hp: 1335, atk: 445, def: 364, spd: 273 },
      skill: [
        {
          title: "完璧書棚整理",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "本に捧げる愛",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        { title: "ビブリオバトル", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofy190ldp1umjc86thb0b",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofy190ldp1umjc86thb0b.webp",
    info: "「いや、私だって税金払ってますよ？」\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "国税専門官(Thunder)",
    spec: {
      status: { hp: 1320, atk: 460, def: 364, spd: 267 },
      skill: [
        {
          title: "課税対象物チェック",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "告発", desc: "敵1体に特大ダメージ" },
        { title: "申告漏れの指摘", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cl9cog0lg0lsa1umjc7lxc8w7",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cog0lg0lsa1umjc7lxc8w7.webp",
    info: "世界を支えるミクロレベルの回路を組み上げる。まさに神の領域。\nイラスト：Maeka",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "半導体エンジニア(Water)",
    spec: {
      status: { hp: 1395, atk: 465, def: 344, spd: 264 },
      skill: [
        { title: "エキシマレーザーショット", desc: "敵1体に特大ダメージ" },
        { title: "リペアブレイド：集積回路", desc: "敵のバジェットを減らす" },
        { title: "CPUグレネード", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof81z0ham1umja3iy40jh",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cof81z0ham1umja3iy40jh.webp",
    info: "世界を支えるミクロレベルの回路を組み上げる。まさに神の領域。\nイラスト：Maeka",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "半導体エンジニア(Fire)",
    spec: {
      status: { hp: 1395, atk: 465, def: 344, spd: 264 },
      skill: [
        { title: "エキシマレーザーショット", desc: "敵1体に特大ダメージ" },
        { title: "リペアブレイド：集積回路", desc: "敵のバジェットを減らす" },
        { title: "CPUグレネード", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof6om0h2t1umj2h09hl9r",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cof6om0h2t1umj2h09hl9r.webp",
    info: "新しい社員を集め、社内の問題を取り除く。組織の要。\nイラスト：色合mdd",
    category: "サービス",
    type: "NORMAL",
    name: "人事課社員(Earth)",
    spec: {
      status: { hp: 1365, atk: 445, def: 352, spd: 276 },
      skill: [
        {
          title: "カウンターオファー",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "神のヘッドハンティング",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        { title: "渾身のアイスブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coetmr0f0v1umjfftv0wbj",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coetmr0f0v1umjfftv0wbj.webp",
    info: "新しい社員を集め、社内の問題を取り除く。組織の要。\nイラスト：色合mdd",
    category: "サービス",
    type: "NORMAL",
    name: "人事課社員(Water)",
    spec: {
      status: { hp: 1365, atk: 445, def: 352, spd: 276 },
      skill: [
        {
          title: "カウンターオファー",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "神のヘッドハンティング",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        { title: "渾身のアイスブレイク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof9870hha1umj46nm4n0w",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof9870hha1umj46nm4n0w.webp",
    info: "彼は伝説のラーメン職人だ。どんな生き物も彼の出すラーメンには逆らえない。必ず食べてしまう。どんなに満腹でも……。\nイラスト：色合mdd",
    category: "サービス",
    type: "NORMAL",
    name: "ラーメン店店長(Water)",
    spec: {
      status: { hp: 1380, atk: 430, def: 352, spd: 282 },
      skill: [
        { title: "半熟タマゴトッピング", desc: "味方1体のHP大回復" },
        { title: "ドラゴン湯切り", desc: "敵1体に特大ダメージ" },
        { title: "究極のスープ", desc: "味方1体のATKを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofq5w0k521umj4csy7tdi",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofq5w0k521umj4csy7tdi.webp",
    info: "彼は伝説のラーメン職人だ。どんな生き物も彼の出すラーメンには逆らえない。必ず食べてしまう。どんなに満腹でも……。\nイラスト：色合mdd",
    category: "サービス",
    type: "NORMAL",
    name: "ラーメン店店長(Fire)",
    spec: {
      status: { hp: 1380, atk: 430, def: 352, spd: 282 },
      skill: [
        { title: "半熟タマゴトッピング", desc: "味方1体のHP大回復" },
        { title: "ドラゴン湯切り", desc: "敵1体に特大ダメージ" },
        { title: "究極のスープ", desc: "味方1体のATKを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9coeuq40f731umj0fw69h4i",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9coeuq40f731umj0fw69h4i.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『全体攻撃』　育成しておくと使い勝手が良い。　Rareなので安価に入手できる。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Earth)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofpfx0k0y1umjcaakdkip",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofpfx0k0y1umjcaakdkip.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Poison)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof8qb0heh1umj8xfn4t2w",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cof8qb0heh1umj8xfn4t2w.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Thunder)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofr1s0ka11umjgtkj9ncl",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cofr1s0ka11umjgtkj9ncl.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Nature)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coflao0jdr1umj68uzh1nl",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9coflao0jdr1umj68uzh1nl.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Water)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coem920dux1umjcx599m9y",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9coem920dux1umjcx599m9y.webp",
    info: "どんなに高性能で、高速で、巨大な飛行機でも私の二本の誘導灯には従う。\nイラスト：大滝ノスケ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "マーシャラー(Fire)",
    spec: {
      status: { hp: 1350, atk: 450, def: 372, spd: 261 },
      skill: [
        { title: "パドルサイン", desc: "敵全員に大ダメージ" },
        { title: "飛行機への愛", desc: "味方1体のATKを上げる。3ターン有効" },
        { title: "マーシャリング", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofw800l3f1umjde8qfxzn",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofw800l3f1umjde8qfxzn.webp",
    info: "絵に描かれた服を現実のものにする魔法使いだ。\nイラスト：Maeka",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "パタンナー(Poison)",
    spec: {
      status: { hp: 1335, atk: 440, def: 368, spd: 273 },
      skill: [
        { title: "トワルを組む", desc: "味方1体のHP大回復" },
        { title: "グレーディング", desc: "敵1体に特大ダメージ" },
        {
          title: "3Dイマジネーション",
          desc: "味方1体のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofkhq0j951umj01fw1gbu",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofkhq0j951umj01fw1gbu.webp",
    info: "絵に描かれた服を現実のものにする魔法使いだ。\nイラスト：Maeka",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "パタンナー(Fire)",
    spec: {
      status: { hp: 1335, atk: 440, def: 368, spd: 273 },
      skill: [
        { title: "トワルを組む", desc: "味方1体のHP大回復" },
        { title: "グレーディング", desc: "敵1体に特大ダメージ" },
        {
          title: "3Dイマジネーション",
          desc: "味方1体のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofyqo0lhp1umj81r78yst",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cofyqo0lhp1umj81r78yst.webp",
    info: "一日中モニターを眺める。世界が相手だ。休んでる暇はない。その間に他のヤツが儲けてしまうから。\nイラスト：RO-Mai",
    category: "金融・不動産",
    type: "NORMAL",
    name: "デイトレーダー(Poison)",
    spec: {
      status: { hp: 1380, atk: 445, def: 352, spd: 273 },
      skill: [
        { title: "深追い厳禁", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "シグナルキャッチ", desc: "敵1体に特大ダメージ" },
        { title: "損切り即断", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof86n0hbd1umjfxns6yzx",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cof86n0hbd1umjfxns6yzx.webp",
    info: "一日中モニターを眺める。世界が相手だ。休んでる暇はない。その間に他のヤツが儲けてしまうから。\nイラスト：RO-Mai",
    category: "金融・不動産",
    type: "NORMAL",
    name: "デイトレーダー(Thunder)",
    spec: {
      status: { hp: 1380, atk: 445, def: 352, spd: 273 },
      skill: [
        { title: "深追い厳禁", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "シグナルキャッチ", desc: "敵1体に特大ダメージ" },
        { title: "損切り即断", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coehhw0d481umjasmk2kfv",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coehhw0d481umjasmk2kfv.webp",
    info: "「何を作ります？ 小屋？ 家？ 城？ 要塞？ 魔獣の小屋？」\nイラスト：大滝ノスケ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "一級建築士(Nature)",
    spec: {
      status: { hp: 1290, atk: 440, def: 376, spd: 276 },
      skill: [
        {
          title: "耐震強度チェック",
          desc: "味方1体のDEFを上げる。3ターン有効",
        },
        {
          title: "高度アーキテクト",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "均等ディバイダー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof84e0hb01umj7s8pdr1o",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cof84e0hb01umj7s8pdr1o.webp",
    info: "「何を作ります？ 小屋？ 家？ 城？ 要塞？ 魔獣の小屋？」\nイラスト：大滝ノスケ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "一級建築士(Fire)",
    spec: {
      status: { hp: 1290, atk: 440, def: 376, spd: 276 },
      skill: [
        {
          title: "耐震強度チェック",
          desc: "味方1体のDEFを上げる。3ターン有効",
        },
        {
          title: "高度アーキテクト",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "均等ディバイダー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofj9n0j261umj9oxq8zhp",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofj9n0j261umj9oxq8zhp.webp",
    info: "彼らがなんだって？ 文字を絵と音、映像に変える魔法使いだよ。\nイラスト：RO-Mai",
    category: "情報・運輸",
    type: "NORMAL",
    name: "WEBプログラマー(Thunder)",
    spec: {
      status: { hp: 1365, atk: 455, def: 356, spd: 267 },
      skill: [
        {
          title: "起動：スタンドアロンシステム",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "MVCブラスト", desc: "敵1体に特大ダメージ" },
        { title: "ソースコードキャノン", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofhej0irn1umj7zvs6ziz",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cofhej0irn1umj7zvs6ziz.webp",
    info: "彼らがなんだって？ 文字を絵と音、映像に変える魔法使いだよ。\nイラスト：RO-Mai",
    category: "情報・運輸",
    type: "NORMAL",
    name: "WEBプログラマー(Water)",
    spec: {
      status: { hp: 1365, atk: 455, def: 356, spd: 267 },
      skill: [
        {
          title: "起動：スタンドアロンシステム",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "MVCブラスト", desc: "敵1体に特大ダメージ" },
        { title: "ソースコードキャノン", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeh0e0d1h1umjafne5clq",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9coeh0e0d1h1umjafne5clq.webp",
    info: "「死ぬ前に教えておこう。トマトは元々は観葉植物だ。なに？ 知ってる？ じゃあ、トマトは野菜じゃなくて果物だ。それも知ってる!? わかった、お前は許してやる」\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "トマト農家(Nature)",
    spec: {
      status: { hp: 1335, atk: 455, def: 364, spd: 267 },
      skill: [
        { title: "ケチャップショット", desc: "敵1体に特大ダメージ" },
        { title: "リコピンブースト", desc: "バジェットを増やす" },
        {
          title: "天地返し",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cof0q30g531umjgbrr81ek",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cof0q30g531umjgbrr81ek.webp",
    info: "「死ぬ前に教えておこう。トマトは元々は観葉植物だ。なに？ 知ってる？ じゃあ、トマトは野菜じゃなくて果物だ。それも知ってる!? わかった、お前は許してやる」\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "トマト農家(Fire)",
    spec: {
      status: { hp: 1335, atk: 455, def: 364, spd: 267 },
      skill: [
        { title: "ケチャップショット", desc: "敵1体に特大ダメージ" },
        { title: "リコピンブースト", desc: "バジェットを増やす" },
        {
          title: "天地返し",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofbyv0hwv1umj6vpr6m1p",
    rarity: "RARE",
    element: "EARTH",
    image: "/images/amulets/rare/cl9cofbyv0hwv1umj6vpr6m1p.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Earth)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof7v20h9j1umj90bo8i7h",
    rarity: "RARE",
    element: "POISON",
    image: "/images/amulets/rare/cl9cof7v20h9j1umj90bo8i7h.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Poison)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofgz80ip91umj4ms7fgm6",
    rarity: "RARE",
    element: "THUNDER",
    image: "/images/amulets/rare/cl9cofgz80ip91umj4ms7fgm6.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『全体攻撃』　育成しておくと使い勝手が良い。　Rareなので安価に入手できる。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Thunder)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof4vi0gso1umj97p8glb4",
    rarity: "RARE",
    element: "NATURE",
    image: "/images/amulets/rare/cl9cof4vi0gso1umj97p8glb4.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Nature)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof1990g831umj8zh473hc",
    rarity: "RARE",
    element: "WATER",
    image: "/images/amulets/rare/cl9cof1990g831umj8zh473hc.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Water)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofph50k151umjggg4gm19",
    rarity: "RARE",
    element: "FIRE",
    image: "/images/amulets/rare/cl9cofph50k151umjggg4gm19.webp",
    info: "この世界にDJが現れた時、人々は困惑した。しかし、彼は人々を虜にし、いまや引く手数多だ。舞踏会でも、戦場でも。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DJ(Fire)",
    spec: {
      status: { hp: 1350, atk: 465, def: 348, spd: 270 },
      skill: [
        { title: "ビートマッチング", desc: "敵全員に大ダメージ" },
        { title: "EQコントロール", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "ゴッドスクラッチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
];
