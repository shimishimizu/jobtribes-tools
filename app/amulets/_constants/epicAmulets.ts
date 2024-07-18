import { Amulet } from "../_types/types";

export const epicAmulets: Amulet[] = [
  {
    id: "cl81da7b27d5a242128986b9eb",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl81da7b27d5a242128986b9eb.webp",
    info: '数多の結婚式をプロデュースしてきた敏腕コンサルタント。\n式場を審美し、最高のタイミング、最高のスケジュールで結婚式を成功させてきた。\n「幸せの手向けになれば正に"幸い"ですわ～！」',
    category: "サービス",
    type: "NORMAL",
    name: "ウェディングコンサルタント(Water)",
    spec: {
      status: { hp: 1665, atk: 500, def: 460, spd: 342 },
      skill: [
        {
          title: "審美眼：セレモニーアイ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "サプライズスケジューリング",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        {
          title: "「最高の式にして見せますわ！」",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "cl4cd084471d5642c3a36d73a5",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl4cd084471d5642c3a36d73a5.webp",
    info: "なんせ俺は喰っただけだからな、人間の感覚じゃ生き物を食うのは悪い事じゃない、そーだろう？",
    category: "アンノウン",
    type: "NORMAL",
    name: "ジンメン(Water)",
    spec: {
      status: { hp: 1800, atk: 565, def: 480, spd: 321 },
      skill: [
        {
          title: "美しい美術品",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "甲羅の人面瘡",
          desc: "召喚時に100％の確率でATKとDEFを大幅に上げる。1ターン有効",
        },
        { title: "地獄の声", desc: "ランダムな敵に3回ダメージ" },
      ],
      ability: [
        {
          title: "バーンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cl57f6a8fae4144b3f9cbf5a1f",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl57f6a8fae4144b3f9cbf5a1f.webp",
    info: "リカの使い魔で幹部を任される召喚獣。\nそのヘンテコな名前と裏腹に、絶大な魔力と焔に特化した身体はとんでもない力を生み出す。\n「お願いタウロスちゃん！力を貸して！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "あちあちタウロスちゃん(Fire)",
    spec: {
      status: { hp: 1695, atk: 575, def: 448, spd: 300 },
      skill: [
        {
          title: "タウロスクラッシュ",
          desc: "敵1体に特大ダメージを与え、確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "ボルケフィールド",
          desc: "召喚時に確率でDEFを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、DEFの上昇量が上がる。3ターン有効 対象アミュレット：【Guide of the Firestorm】Rika",
        },
        {
          title: "あっちっちアックス",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl01a5bd67154f44b498868b5b",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl01a5bd67154f44b498868b5b.webp",
    info: "キリの使い魔で幹部を任される召喚獣。\nその名のごとく繰り出される2撃は素早く、相手を追い詰め、氷が相手を蝕むが如く襲いかかる。\n「2発もいらないっしょ、1発で決めて」",
    category: "アンノウン",
    type: "NORMAL",
    name: "氷牙の二閃(Poison)",
    spec: {
      status: { hp: 1575, atk: 525, def: 460, spd: 345 },
      skill: [
        {
          title: "零制＝アブソリュート",
          desc: "敵1体を確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        {
          title: "氷地＝エベレス",
          desc: "召喚時に確率でSPDを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、SPDの上昇量が上がる。3ターン有効 対象アミュレット：【Guide of the Frigid Soul】 Kiri",
        },
        {
          title: "二閃＝アイスエイジ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "clc50023e424c541eeb8ecec45",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/clc50023e424c541eeb8ecec45.webp",
    info: "迷宮クエストを踏破した伝説の冒険者の一人。\n彼女は魔法を魔石を通じて扱う魔法界の第一人者であり、未知の魔石を求め迷宮にやってきた。\n彼女の手に入れられなかった魔石の1つが、この迷宮に眠っていると石碑には刻まれている。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "ストーンセラピスト(Poison)",
    spec: {
      status: { hp: 1665, atk: 555, def: 476, spd: 357 },
      skill: [
        {
          title: "ストーンズ＝プロテクション",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        {
          title: "魔具：ワイバーンの杖",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "魔石術：セブンカラーズ", desc: "ランダムな敵に3回ダメージ" },
      ],
      ability: [
        {
          title: "ダークネスレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "clbfc321513fb1403f9c8b0264",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clbfc321513fb1403f9c8b0264.webp",
    info: "迷宮クエストを踏破した伝説の冒険者の一人。\n彼は過去他のダンジョンなどを踏破し、そのガイド能力を買われ王国の調査員として出向いた凄腕である。\n残された地図はちょうど石碑までの案内で途切れている。",
    category: "クラフター",
    type: "ANOTHER",
    name: "地図編集者(Water)",
    spec: {
      status: { hp: 1770, atk: 560, def: 448, spd: 354 },
      skill: [
        {
          title: "記憶術：アンスペースメモリー",
          desc: "敵1体に特大ダメージを与え、確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
        { title: "魔具：思考のペンシル", desc: "敵1体に特大ダメージ" },
        {
          title: "痕跡術：アクアガイド",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "バーンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "clbf758c4c62474f3c86af3dbc",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/clbf758c4c62474f3c86af3dbc.webp",
    info: "考古学者の後輩。\n迷宮で行方不明になった先輩を調査するために彼女もまた迷宮に身を投じるのであった。\n迷宮の奥へ進むと、そこにはかつての伝説の冒険者たちと迷宮の謎が描かれた石碑があった。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "発掘調査員(Earth)",
    spec: {
      status: { hp: 1650, atk: 525, def: 420, spd: 360 },
      skill: [
        {
          title: "「先輩を発見しなきゃ…！」",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "鉱石探知用ツール",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "ミッシングサインの追跡",
          desc: "敵1体に特大ダメージを与え、自分のSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl56fb60f6c37d4c22b085aad4",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl56fb60f6c37d4c22b085aad4.webp",
    info: "迷宮クエストを踏破した伝説の冒険者の一人。\nどんな強敵も1点突破して突き進む様はまさに冒険者の鑑といえる。\n最深部で彼が見たものはまだ世に明かされていない。",
    category: "パブリックサービス",
    type: "ANOTHER",
    name: "山岳救助隊員(Fire)",
    spec: {
      status: { hp: 1755, atk: 585, def: 468, spd: 327 },
      skill: [
        {
          title: "救炎術：百十九式",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "遠隔解呪：心火滅却",
          desc: "味方全員のDEFを上げ、敵全員のDEFを下げる",
        },
        {
          title: "フェニックス＝ドライブ",
          desc: "敵1体に特大ダメージを与え、確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cl364126f15001497fab3fd437",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl364126f15001497fab3fd437.webp",
    info: "迷宮クエストを踏破した伝説の冒険者の一人。\n彼女は聖女でありながら柔術に通じており、聖魔法ではなく柔術でアンデッドの群れを退けたと言われる。\n彼女が生涯で解けなかった呪いはこの迷宮のどこかにあるとされている。",
    category: "サービス",
    type: "ANOTHER",
    name: "柔道整復師(Thunder)",
    spec: {
      status: { hp: 1800, atk: 560, def: 480, spd: 324 },
      skill: [
        {
          title: "柔術：快癒の骨鳴り",
          desc: "敵1体に特大ダメージを与え、確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        { title: "聖魔法：ホーリーセイバー", desc: "敵1体に特大ダメージ" },
        {
          title: "遺物：ノアの断片",
          desc: "味方全員のDEFを上げ、敵全員のDEFを下げる",
        },
      ],
      ability: [
        {
          title: "ポイズンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cl13ec2df10eeb4a51ba40c377",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl13ec2df10eeb4a51ba40c377.webp",
    info: "迷宮クエストを踏破した伝説の冒険者の一人。\n歴史に名を遺すパワーを誇り、あらゆる敵をなぎ倒してきたベテラン戦士。\nこの迷宮には彼が唯一破壊できなかった魔具が存在すると噂されている。",
    category: "サービス",
    type: "ANOTHER",
    name: "きこり(Nature)",
    spec: {
      status: { hp: 1680, atk: 595, def: 476, spd: 330 },
      skill: [
        {
          title: "神具：ガイアの大斧",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "付加術：ブレイクパワーX9",
          desc: "召喚時に100％の確率でATKとDEFを大幅に上げる。1ターン有効",
        },
        {
          title: "ウッドインパクト",
          desc: "敵1体に特大ダメージを与え、確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cl0596c8fc44004e0a8057180b",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl0596c8fc44004e0a8057180b.webp",
    info: "各国を転々とし、季節の食材を管理することに従事する者。\n時に食材が足りない事態に陥った際は自ら命を賭してなんとしてでも食材をそろえて見せる。\n実は冷凍料理や氷魔法が得意である。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ガルドマンジェ(Nature)",
    spec: {
      status: { hp: 1650, atk: 550, def: 460, spd: 315 },
      skill: [
        {
          title: "管理術：ナッシングロス",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "狩猟術：インパクトワン", desc: "敵1体に特大ダメージ" },
        {
          title: "氷結術：ホールフリーズ",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clb998723b64b84e8981b2007e",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clb998723b64b84e8981b2007e.webp",
    info: "チョコレートを使ってありとあらゆるものを形作る職人。\n元来彼女は火の魔導士であり、チョコレートにはまったのがきっかけでチョコレート技師になった。\n故に彼女の作りだすチョコレートの造形は見るものを圧倒するとか。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "チョコレート技師(Fire)",
    spec: {
      status: { hp: 1575, atk: 550, def: 420, spd: 360 },
      skill: [
        {
          title: "相手の目を引く甘い造形",
          desc: "召喚時に確率でATKを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、ATKの上昇量が上がる。3ターン有効 対象アミュレット：Chocolate Shop Owner,Cookie Shop Owner",
        },
        { title: "スイートフレイムマジック", desc: "2回攻撃する。" },
        { title: "「ハートの形はもう飽きた！」", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl64b2528d7e5240bebb4a636b",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl64b2528d7e5240bebb4a636b.webp",
    info: "わたしがなんで平手美樹っていわれているか知ってるか？　知らなけりゃ、教えてやるぜ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "牧村美樹(Nature)",
    spec: {
      status: { hp: 1620, atk: 580, def: 424, spd: 330 },
      skill: [
        { title: "平手打ち", desc: "敵1体に特大ダメージ" },
        { title: "文化包丁", desc: "敵1体に特大ダメージ" },
        {
          title: "火炎瓶",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl4466d3459414415198c639be",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl4466d3459414415198c639be.webp",
    info: "おれを虫ケラだといったな！　人間をごみ溜めにうごめく虫ケラだと！　その虫ケラの力がどのようなものか！　見るがいいっ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "不動明(Fire)",
    spec: {
      status: { hp: 1500, atk: 560, def: 456, spd: 342 },
      skill: [
        {
          title: "理性の消失",
          desc: "敵1体に特大ダメージを与え、自分のATKを上げる。3ターン有効",
        },
        {
          title: "デーモン合体",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        { title: "高速飛行", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cl220046b53ca24a1b9ef1a1d1",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl220046b53ca24a1b9ef1a1d1.webp",
    info: "デーモンと戦う方法それは！　自分自身がデーモンになる事だ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "飛鳥了(Water)",
    spec: {
      status: { hp: 1695, atk: 560, def: 444, spd: 312 },
      skill: [
        { title: "ショットガン", desc: "敵全員に大ダメージ" },
        {
          title: "デーモンの歴史書",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
        { title: "デーモンハンター", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl2af9fadad91f4e8ebfcbd6d8",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl2af9fadad91f4e8ebfcbd6d8.webp",
    info: "異世界から召喚されたおせち職人の一人。\n彼は大なり小なり自由自在な大きさのだて巻きを巻くことができ、\n柄を入れるのも得意で、所謂「映える」柄をだて巻きに取り入れることができる。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "だて巻き職人(Earth)",
    spec: {
      status: { hp: 1635, atk: 570, def: 460, spd: 306 },
      skill: [
        {
          title: "混合術：諏璃魅",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "超耐熱巨大巻き簾",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "「だし巻きとは一味違うぜぇ！」",
          desc: "敵1体に特大ダメージ",
        },
      ],
    },
  },
  {
    id: "clb8709c38c8fe4ec1abed4ef0",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clb8709c38c8fe4ec1abed4ef0.webp",
    info: "人間の里で自家製の焼きソーセージを提供することを生業としている魔物。\n彼の焼くソーセージは世界中どこでも食べたことのない味わいをしており、\n遠方からそれを求めて来訪する者も多い。「材料…普通、製法…内緒」",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "焼きソーセージ屋(Water)",
    spec: {
      status: { hp: 1680, atk: 540, def: 448, spd: 324 },
      skill: [
        { title: "焼成術：バランスドグリル", desc: "敵全員に大ダメージ" },
        {
          title: "炎操術：ウィークネスフレイム",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
        { title: "「パンに、挟め、食え」", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl232921ad7db24ff98a1c1812",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl232921ad7db24ff98a1c1812.webp",
    info: "冬の夜の間に奇跡と呼ばれそうな程度で除雪を行う少年とロボット。\n少年の杖の光は熱を持った光の珠を自在に操り雪を溶かす。\nロボットは仲間の雪だるまを作るために雪をかき集めている。",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "除雪作業員(Earth)",
    spec: {
      status: { hp: 1650, atk: 570, def: 444, spd: 315 },
      skill: [
        {
          title: "光焔術：ツリートップ",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        {
          title: "雪専用無限スノーコンテナ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "「巨大ロボ通りまーす！」", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl15938141248e463e945ea0df",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl15938141248e463e945ea0df.webp",
    info: "人間の住む石細工の街を一人で取り仕切る亜人の職人。\nその巨大な体躯からは想像もつかないほど繊細な技術は\n見るもの全てを圧倒する建造物を作り上げる。",
    category: "クラフター",
    type: "NORMAL",
    name: "石工(Earth)",
    spec: {
      status: { hp: 1665, atk: 535, def: 464, spd: 318 },
      skill: [
        {
          title: "超ハイパースケールパテ",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        {
          title: "巨大丁張",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "巨大で繊細なマレットハンマー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clc97f9ad23a3649e2ba67b313",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/clc97f9ad23a3649e2ba67b313.webp",
    info: "命を人の扱う製品に変える素材を生み出したり、直したりする職人。\n本人もまた獣人ではあるものの人間社会に深い関心を持ち、\n動物たちの「命」を無駄にしないために日々精進している。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "皮なめし(Earth)",
    spec: {
      status: { hp: 1695, atk: 535, def: 452, spd: 321 },
      skill: [
        { title: "蘇生術：レザレクション", desc: "味方1体のHPを大回復。" },
        {
          title: "防護術：アンチコラプション",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        { title: "転換術：リメイクビースト", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl2ea18b81b5bc45c9a61f0b22",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl2ea18b81b5bc45c9a61f0b22.webp",
    info: "世界中の猫の置物を取り扱う店の主人。\n正体は人間社会に興味を持った化け猫であり、\n猫の良さを広めるためにこの商いに就いた。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "ネコの置物を売る店(Fire)",
    spec: {
      status: { hp: 1605, atk: 535, def: 468, spd: 327 },
      skill: [
        {
          title: "千客万来：招き猫像",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        { title: "癒しの波動：眠る猫像", desc: "味方全員のHP回復" },
        { title: "落とすな危険：巨大猫像", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl828f17f1bc364e479e95ef95",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl828f17f1bc364e479e95ef95.webp",
    info: "ある日わたあめに興味をもち、わたあめに憑依したら成功し実体を得てしまったゴースト。\n彼？の作るわたあめは正に”魂を持っていかれる”程うまいのだとか。\n人界にも霊界にも人気の凄腕職人なのだ。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "わたあめ屋(Water)",
    spec: {
      status: { hp: 1695, atk: 535, def: 420, spd: 345 },
      skill: [
        { title: "コツがあるくるくるテクニック", desc: "敵全員に大ダメージ" },
        {
          title: "ゴーストカラーの透明ざらめ",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "天にも昇るふわふわ触感", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl63db0b4601ac4348b92534a8",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl63db0b4601ac4348b92534a8.webp",
    info: "元来はゴーレムを操る家計の生まれの少女だが、\nハロウィンを体験し、かぼちゃのゴーレムを扱うようになった。\nハロウィンのかぼちゃを売るだけでなく、ゴーレム魔法を駆使し、\n小規模なかぼちゃでなんとアトラクションまで創ってしまう。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "パンプキンパッチ(Earth)",
    spec: {
      status: { hp: 1605, atk: 570, def: 448, spd: 321 },
      skill: [
        {
          title: "パンプキンゴーランド",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        { title: "世界の変わったかぼちゃ達", desc: "味方全員のHP回復" },
        { title: "搭乗型かぼちゃゴーレム", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cl9b8923a9cdf2496fba6449c9",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9b8923a9cdf2496fba6449c9.webp",
    info: "元々凄腕のディーラーだった人間が異世界に転生し、さらに高いカジノスキルを得た。\nルーレットの玉は思い通りのポケットに行き、トランプはまるで意思を持ったように\n図柄が揃うその光景はまさに神業。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "カジノディーラー(Thunder)",
    spec: {
      status: { hp: 1665, atk: 555, def: 436, spd: 327 },
      skill: [
        { title: "音速トランプディール", desc: "敵全員に大ダメージ" },
        {
          title: "無慈悲なチップ回収",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "出来レースのルーレット",
          desc: "敵1体のDEFとSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl431ce64b71f5409199cf296b",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl431ce64b71f5409199cf296b.webp",
    info: "魔界から人界へサポートメンバーとしてやってきたギタリストの悪魔の一柱。\n最高速度のギターソロは、まるで悪魔の手招きのように見えるとか。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ギタリスト(Poison)",
    spec: {
      status: { hp: 1680, atk: 510, def: 448, spd: 342 },
      skill: [
        {
          title: "デビルズハーモニクス",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        {
          title: "魔界流ギターソロ",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        { title: "デーモンフレアピッキング", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cl2c8952c4b1f143f08b3eb3a4",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl2c8952c4b1f143f08b3eb3a4.webp",
    info: "人類の100年後の技術を用いて作られた専用機器を用いて戦うバスケットボール選手。\nパスやシュートの正確さはさることながら、特筆すべきはドライブ。\n対戦した選手曰く、まるで違う誰かと対峙したようだったと述べている。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロバスケットボール選手(Earth)",
    spec: {
      status: { hp: 1695, atk: 545, def: 456, spd: 312 },
      skill: [
        {
          title: "オートエイム＝スリーポイント",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "アルターエゴ＝ドライブ",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "ハイパーリンク＝ダンク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl726bd0d9bd704ff49575c848",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl726bd0d9bd704ff49575c848.webp",
    info: "波に乗ってたら異世界にやってきた生粋のサーファー。\n尾を引く波はまるで水の龍のように逆巻き、荒ぶる。「俺に乗れない波なんてねぇんだよぉ！」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "サーフィンインストラクター(Water)",
    spec: {
      status: { hp: 1650, atk: 555, def: 412, spd: 348 },
      skill: [
        { title: "ドロップフローター", desc: "敵1体に特大ダメージ" },
        { title: "ドラゴンカットバック", desc: "敵1体に特大ダメージ" },
        { title: "神速エアリアル", desc: "味方全員のSPDを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl2d6c23acfdf54bd8acadcd78",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl2d6c23acfdf54bd8acadcd78.webp",
    info: '世界の様々な植物を管理する植物園の職員。\nその正体は自然と"話す"ことができる精霊なのである。「お世話してあげるから、私以外と話しちゃだめよ」',
    category: "サービス",
    type: "NORMAL",
    name: "植物園職員(Nature)",
    spec: {
      status: { hp: 1605, atk: 535, def: 452, spd: 339 },
      skill: [
        {
          title: "ドライアド特製ジョウロ",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "花魔法：メニーメニーブルーム", desc: "敵全員に大ダメージ" },
        {
          title: "「シーッ、喋っちゃだめよ」",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
      ],
    },
  },
  {
    id: "cl32228e88f5bc406187b73bc9",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl32228e88f5bc406187b73bc9.webp",
    info: "人型万能からくり\nジョブトロイド002：掃除メイド\n掃除をやらせればピカイチの能力を発揮する…のだが\n何かにつけて興味が他に行きがちなちょっとマイペースなジョブトロイド。\n「この箒すげぇんだ！野球できるんだもんな！」",
    category: "アンノウン",
    type: "ANOTHER",
    name: "【ジョブトロイド】掃除メイド(Water)",
    spec: {
      status: { hp: 1710, atk: 595, def: 436, spd: 354 },
      skill: [
        {
          title: "掃除メイドの戯れ",
          desc: "召喚時に確率でATKを上げる。 さらに以下のアミュレットが自分のバトル場に存在する場合、ATKの上昇量が上がる。3ターン有効 対象アミュレット：【Jobtroid】Maid-in-Chief,【Jobtroid】Cooking Maid",
        },
        {
          title: "華麗で瀟洒？な箒裁き",
          desc: "自分にバリアをはる。攻撃されても1ターンダメージを受けない。さらにこのスキルは必ず先制で発動する。",
        },
        { title: "「雑巾ストラァァアイク！」", desc: "敵1体に特大ダメージ" },
      ],
      ability: [
        {
          title: "バーンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cllk82xwr208208mmgzfgs1rj",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cllk82xwr208208mmgzfgs1rj.webp",
    info: "まっとうな会話が成り立たず、そのため彼は狂っている、とされる。止められた時間の中で、永遠にお茶会を続けているという。",
    category: "アンノウン",
    type: "NORMAL",
    name: "マッドハッター(Thunder)",
    spec: {
      status: { hp: 1680, atk: 515, def: 472, spd: 321 },
      skill: [
        {
          title: "永遠のお茶会",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "答えの無いなぞなぞ",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
        { title: "きらきらコウモリ", desc: "2回攻撃し、自分のATKをあげる。" },
      ],
    },
  },
  {
    id: "cllk7wvaq320908mf68d8ogs1",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cllk7wvaq320908mf68d8ogs1.webp",
    info: "ある詩の中で語られる、異形の生物。どのような姿か、どのような生態なのか、いまひとつ判然としない。\nいくつかの恐ろしい身体特徴だけは確かである。",
    category: "アンノウン",
    type: "NORMAL",
    name: "ジャバウォック(Earth)",
    spec: {
      status: { hp: 1590, atk: 570, def: 416, spd: 348 },
      skill: [
        { title: "食らいつく顎", desc: "敵1体に特大ダメージ" },
        {
          title: "捕らえるかぎ爪",
          desc: "敵全員にダメージをあたえ、SPDを下げる。3ターン有効",
        },
        { title: "炎の瞳", desc: "敵のバジェットを減らす" },
      ],
    },
  },
  {
    id: "cll4oc3nw316108l6x0verr8x",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cll4oc3nw316108l6x0verr8x.webp",
    info: "様々な「うなぎ」を育てるスペシャリスト。元魔界在住の知識を生かし、独自の方法で鰻達を徹底管理している。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "鰻師(Fire)",
    spec: {
      status: { hp: 1695, atk: 560, def: 452, spd: 306 },
      skill: [
        {
          title: "密着！養鰻場24時！",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        {
          title: "「おいしくなれよ～！」",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        { title: "炭焼術：白蒲", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cll4dmthc041008mntjkzxbbe",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cll4dmthc041008mntjkzxbbe.webp",
    info: "ジョブトライブスの世界に音楽フェスを持ち込んだ転生神。彼の手腕にかかれば、村人さえも「参加者」に変わる。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "フェスオーガナイザー(Earth)",
    spec: {
      status: { hp: 1635, atk: 570, def: 412, spd: 342 },
      skill: [
        {
          title: "情熱的スケジュール管理力",
          desc: "味方全員のATKを上げる。3ターン有効",
        },
        {
          title: "圧倒的アーティスト斡旋力",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        { title: "「さぁ、みんな楽しもう！」", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cljxvayt4010308l3q3ako73n",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cljxvayt4010308l3q3ako73n.webp",
    info: "お化け屋敷内で人を驚かすことを生業としているスタッフ。お化けメイクがうまくいきすぎて、お客に倒れられたことがある。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "お化け役スタッフ(Poison)",
    spec: {
      status: { hp: 1620, atk: 560, def: 416, spd: 348 },
      skill: [
        {
          title: "「うらめしや～！」",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
        { title: "一つ目番傘", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "霊魂の提灯",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cljxux7sc2907408kyer6dikad",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cljxux7sc2907408kyer6dikad.webp",
    info: "祭りのわなげ屋台を取り仕切る超ベテラン。大人子供と合わせて難易度を調節できる凄腕。",
    category: "サービス",
    type: "NORMAL",
    name: "わなげ屋(Thunder)",
    spec: {
      status: { hp: 1680, atk: 540, def: 464, spd: 312 },
      skill: [
        {
          title: "「らっしゃい、遊んでいきな」",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        { title: "全輪必中", desc: "敵全員に大ダメージ" },
        {
          title: "「やるな、景品やるよ」",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cljs35x2b107708l3dpu2h4qx",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cljs35x2b107708l3dpu2h4qx.webp",
    info: "ありとあらゆるスポーツ観戦の場で究極に至ったビール売りの少女。\n自己流に改造した高威力の水鉄砲でサーブするビールはキンキンに冷えているそうな。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "ビール立売スタッフ(Thunder)",
    spec: {
      status: { hp: 1620, atk: 530, def: 448, spd: 342 },
      skill: [
        { title: "ビアカップ：ミサイル", desc: "2回攻撃する。" },
        {
          title: "おかわりスナイプ",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "ビアチャージ：フル", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cljs2zz66123608l9jsqvgees",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cljs2zz66123608l9jsqvgees.webp",
    info: "世界各所にキャンプの楽しさを伝えるべく渡り歩く経営亀兼旅亀。\n自身の上にキャンプ場があるため、収益の半分が餌代になっている。",
    category: "サービス",
    type: "NORMAL",
    name: "キャンプ場経営者(Nature)",
    spec: {
      status: { hp: 1650, atk: 520, def: 456, spd: 336 },
      skill: [
        {
          title: "「キャンプは好きかーい？」",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        { title: "タートルグランピング", desc: "味方全員のHP回復" },
        {
          title: "森術：無限薪",
          desc: "召喚時に100％の確率で発動し、バジェットを3ターンの間増やし続ける。このアミュレットが破壊されると効果は消える。",
        },
      ],
    },
  },
  {
    id: "clijya2ia013008jr2rfyboet",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/clijya2ia013008jr2rfyboet.webp",
    info: '音楽業界になくてはならない存在の一人。\n彼らなくして"音楽"は世に流れないからである。',
    category: "スペシャリスト",
    type: "NORMAL",
    name: "レコーディングエンジニア(Nature)",
    spec: {
      status: { hp: 1590, atk: 565, def: 432, spd: 339 },
      skill: [
        {
          title: "圧倒的機材記憶力",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "空間音量バランス調整", desc: "味方1体のHPを大回復。" },
        { title: "「本番スタート！」", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "clhycbo8a189108mned1ep0jz",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/clhycbo8a189108mned1ep0jz.webp",
    info: "人間の医療に手を貸すべく異世界から召喚された科学者。\nどんな人間も彼女の技術の前ではどこに居ようと見つかってしまう。",
    category: "医療",
    type: "NORMAL",
    name: "臨床検査技師(Earth)",
    spec: {
      status: { hp: 1695, atk: 570, def: 416, spd: 327 },
      skill: [
        {
          title: "ケミカルミキシング",
          desc: "敵1体のDEFとSPDを下げる。3ターン有効",
        },
        {
          title: "ブラッドチェック",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "バイオショウダウン",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clhyc76ql706008mg4vchb7q3",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/clhyc76ql706008mg4vchb7q3.webp",
    info: "何故かペストマスクを着用したまま診察を行う内科医。\n巨大な聴診器は自分の神経とリンクしており、わずかな違和感も聞き逃さない。",
    category: "医療",
    type: "NORMAL",
    name: "内科医(Poison)",
    spec: {
      status: { hp: 1680, atk: 580, def: 424, spd: 318 },
      skill: [
        {
          title: "爆心音チェック",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "呼吸術：プルモノ",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "シークレットドデカルテ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clhyc33gw131208mnx2cjbvsn",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clhyc33gw131208mnx2cjbvsn.webp",
    info: "ありとあらゆる精神分析魔術に長けたスペシャリスト。\n彼女の前では隠し事などできるはずもなく無駄なのである。",
    category: "医療",
    type: "NORMAL",
    name: "臨床心理士(Fire)",
    spec: {
      status: { hp: 1710, atk: 535, def: 444, spd: 324 },
      skill: [
        { title: "アウトインワード", desc: "敵全員に大ダメージ" },
        { title: "忘却ボイド", desc: "味方全員のATKを上げる。3ターン有効" },
        {
          title: "サイクルオブライフ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "clgvkjtjc000408jn0jlciwbg",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/clgvkjtjc000408jn0jlciwbg.webp",
    info: "昔はよく公園で野球をしていた。\nNFTに出会い、熱いプロジェクトを見つけては、無我夢中でNFTをミントした。\n気がつくと、彼の体はミントに適した進化を遂げ、minterの神となった。",
    category: "サービス",
    type: "NORMAL",
    name: "NFT minter (Thunder)",
    spec: {
      status: { hp: 1695, atk: 545, def: 460, spd: 309 },
      skill: [
        {
          title: "爆速ウォレットコネクト",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
        {
          title: "神速コントラクト解読",
          desc: "味方1体のSPDを上げる。3ターン有効",
        },
        { title: "最強NFTミント「ガス盛り」", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clgvjwnnu13833508mmve0e2ntr",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/clgvjwnnu13833508mmve0e2ntr.webp",
    info: "Web3コミュニティの指揮を預けられた強い女性職業神。\nそのロールは彼女が彼女たる証であり、メンバーへの深い愛と、時にみせる厳しさは、プロジェクトの成功に欠かせないものである。",
    category: "サービス",
    type: "NORMAL",
    name: "Web3コミュニティマネージャー(Nature)",
    spec: {
      status: { hp: 1710, atk: 570, def: 416, spd: 324 },
      skill: [
        { title: "＠everyone", desc: "味方全員のSPDを上げる。3ターン有効" },
        {
          title: "手とり足とり新規サポート",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "一刀両断：アカBANブレード", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clgvjnwwp942508l8xea6n4po",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clgvjnwwp942508l8xea6n4po.webp",
    info: "現代社会のストレスを取り除くために地上に降りた天からの使者。\n彼女の奏でる音楽を聴けばどんな人間も天にも昇る気分になるとか。",
    category: "医療",
    type: "NORMAL",
    name: "音楽療法士(Water)",
    spec: {
      status: { hp: 1695, atk: 540, def: 416, spd: 345 },
      skill: [
        {
          title: "ヘブンズフェルマータ",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "エンジェルグリッサンド", desc: "味方全員のHP回復" },
        {
          title: "ホワイトスタッカート",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "clgnaln8j1420109ldksa65owc",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/clgnaln8j1420109ldksa65owc.webp",
    info: "ありとあらゆる物語の語り部として世界に存在する。\n彼らなくして物語は語られることはない。",
    category: "エンターテイナー",
    type: "ANOTHER",
    name: "ナレーター(Nature)",
    spec: {
      status: { hp: 1815, atk: 575, def: 460, spd: 327 },
      skill: [
        {
          title: "これからお話する物語は",
          desc: "敵1体に特大ダメージを与え、確率で混乱状態にする。 混乱状態のアミュレットは、ターン開始時に入力する行動を自分で決められない。３ターン有効",
        },
        {
          title: "古に語られる",
          desc: "味方全員のATKを上げ、敵全員のATKを下げる",
        },
        {
          title: "神々の物語です",
          desc: "敵全員に大ダメージを与え、敵のバジェットを減らす",
        },
      ],
      ability: [
        {
          title: "スリープレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる眠り状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "clgnagy4k2387608l7cndmq8jg",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clgnagy4k2387608l7cndmq8jg.webp",
    info: "作者が本にどんな思いを込めようとも、読者の手に渡らなければ意味がない。\nその本を手に取ってもらえるかどうかは、彼女の腕にかかっている。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "装丁家(Water)",
    spec: {
      status: { hp: 1770, atk: 560, def: 460, spd: 345 },
      skill: [
        {
          title: "ビビッドな色使い",
          desc: "敵1体に特大ダメージを与え、確率で眠り状態にする。 眠り状態中は行動できなくなるが、ダメージを受けると解除される。2ターン有効",
        },
        {
          title: "氷結サスペンス",
          desc: "味方全員のDEFを上げ、敵全員のDEFを下げる",
        },
        {
          title: "炎上ドキュメンタリー",
          desc: "敵全員に大ダメージを与え、バジェットを増やす",
        },
      ],
      ability: [
        {
          title: "バーンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる火傷状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "clgnabf2l1988908l7xrefxgch",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clgnabf2l1988908l7xrefxgch.webp",
    info: "声も手も大きな手話拳法の使い手。\n笑顔と手話で今日も幸せを振りまく。\n「だって伝わらなかったら嫌じゃん！」",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "手話通訳者(Fire)",
    spec: {
      status: { hp: 1650, atk: 600, def: 440, spd: 360 },
      skill: [
        {
          title: "燃える通訳への情熱",
          desc: "敵1体に特大ダメージを与え、確率で火傷状態にする。 火傷状態中は、スキルのバジェット消費量が増大する。2ターン有効",
        },
        { title: "手話拳法「御刃妖」", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "手話拳法・奥義「邪亞音」",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
      ],
      ability: [
        {
          title: "コンフューズレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる混乱状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cleqm1kar1255808l9dwt9im30",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cleqm1kar1255808l9dwt9im30.webp",
    info: "ただ日々を暮らす善良な人々にも、トラブルは容赦なく襲い来る。\n平穏を求める人々は、教え導いてくれる者を求めた。",
    category: "マーチャンダイザー",
    type: "ANOTHER",
    name: "マンション管理士(Earth)",
    spec: {
      status: { hp: 1725, atk: 575, def: 464, spd: 342 },
      skill: [
        {
          title: "トラブル発見！",
          desc: "敵1体に特大ダメージを与え、確率で暗闇状態にする。暗闇状態中は全ての行動が一定確率でミスになる。2ターン有効",
        },
        {
          title: "修繕費の徴収",
          desc: "敵1体にダメージを与え、バジェットを増やす",
        },
        {
          title: "災害への備え",
          desc: "味方1体をカウンター状態にする。1度だけ受けたダメージを増大して攻撃した敵に与える。",
        },
      ],
      ability: [
        {
          title: "パライズレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる麻痺状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cleqlvmty418508jw1mwb8ze3",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cleqlvmty418508jw1mwb8ze3.webp",
    info: "光は現実空間を染める絵の具である。それを自由に操る彼女は、存在を描き変える力を持つと言っても過言ではないだろう。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "照明技術(Thunder)",
    spec: {
      status: { hp: 1725, atk: 580, def: 456, spd: 345 },
      skill: [
        {
          title: "幻惑のライトアップ",
          desc: "敵1体に特大ダメージを与え、確率で麻痺状態にする。 麻痺状態中はATK,DEF,SPDが大幅に低下する。2ターン有効",
        },
        {
          title: "活躍を照らすスポットライト",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        { title: "１万ルクス", desc: "敵1体に特大ダメージ" },
      ],
      ability: [
        {
          title: "ポイズンレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる毒状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "cleqlq8t1001408jw3bgvh4al",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cleqlq8t1001408jw3bgvh4al.webp",
    info: "鳴った音と、耳に入る音は同一ではない。前者を自在に整え、美しい響きを届ける事を生業とした、影の一族が存在する。",
    category: "スペシャリスト",
    type: "ANOTHER",
    name: "音響技術者(Poison)",
    spec: {
      status: { hp: 1740, atk: 575, def: 460, spd: 342 },
      skill: [
        {
          title: "トキシック・エコー",
          desc: "敵1体に特大ダメージを与え、確率で毒状態にする。 毒状態中はターン終了ごとに割合ダメージを受ける。3ターン有効",
        },
        { title: "アンプリファイ・ハウリング", desc: "敵全員に大ダメージ" },
        {
          title: "チューニング・ハーモニー",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
      ],
      ability: [
        {
          title: "ダークネスレジストLv2",
          desc: "戦闘開始時、フィールドを展開する。そのフィールド下では、敵のフィールドによる暗闇状態を一定確率で防ぐ。",
        },
      ],
    },
  },
  {
    id: "clemf8kcs000108l9q3abgvtl",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/clemf8kcs000108l9q3abgvtl.webp",
    info: "人類が如何にして、現在に至ったのか。\n 文明、生体、思想のあらゆる垣根を越えてその場所に眠る歴史を掘り出すのが彼女の仕事であり夢である。\nイラスト：タルタル山岡",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "考古学者(Poison)",
    spec: {
      status: { hp: 1800, atk: 500, def: 480, spd: 300 },
      skill: [
        {
          title: "歴史的発見",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "遺跡調査用ツール",
          desc: "敵1体に特大ダメージを与え、SPDを下げる。3ターン有効",
        },
        {
          title: "ミッシング・リンクの解明",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cldi4ty12726908l0jsshtrca",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cldi4ty12726908l0jsshtrca.webp",
    info: "金融と投資のプロ。市場の動きを予測し、投資家に利益をもたらす。\nイラスト：中山ゆりりえんす\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『味方全員の攻撃力を3ターンアップさせる』というもの。\nSPDが高いジョブ・ロードなので、味方より早く行動して強化しやすい。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "証券アナリスト(Thunder)",
    spec: {
      status: { hp: 1680, atk: 530, def: 432, spd: 342 },
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
    id: "cldi4oncc608608l085iol2jv",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cldi4oncc608608l085iol2jv.webp",
    info: "財務や会計に特化した力を持つ武将。\n秘技「監査」で不正な経営を行った企業を容赦なく斬る他、\n経営戦略の助言といった軍師的な側面を持つ。\nイラスト：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "公認会計士(Poison)",
    spec: {
      status: { hp: 1612, atk: 562, def: 430, spd: 337 },
      skill: [
        { title: "監査の刀・明鏡止水", desc: "敵全員に大ダメージ" },
        {
          title: "CF計算書乱舞",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        {
          title: "陣形：勝機の経営戦略",
          desc: "敵1体に特大ダメージをあたえ、自分のDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8b553t454308mjij4tcb91",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cld8b553t454308mjij4tcb91.webp",
    info: "ショコラティエールは当初、宮廷の宴で活躍したが、\nショコラが戦士を鼓舞するとわかり状況は一変した。\nイラスト：DEA Artist",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ショコラティエール(Water)",
    spec: {
      status: { hp: 1658, atk: 552, def: 438, spd: 329 },
      skill: [
        {
          title: "フェアリー・ブレッドワルツ",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
        {
          title: "プロフィットロール・ドリーム",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        { title: "テンパリング・マギア", desc: "2回攻撃する。" },
      ],
    },
  },
];