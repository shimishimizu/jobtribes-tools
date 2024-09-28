import { Amulet } from "../_types/types";

export const epicAmulets: Amulet[] = [
  {
    id: "clb9eb30e48d7f4aff89563ce5",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clb9eb30e48d7f4aff89563ce5.webp",
    info: "かの遠くの東の地にて帝、ひいては宮廷に仕えた音楽のスペシャリスト。\n彼女の笛は聞くものに癒しや安らぎを与え、平穏の願いと豊穣の祈りを込めて奏でられる。\n「私が常に願うのは平和な世、それだけですよ」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "雅楽師(Fire)",
    spec: {
      status: { hp: 1650, atk: 580, def: 428, spd: 321 },
      skill: [
        { title: "遥か遠く越殿楽", desc: "敵1体に特大ダメージ" },
        { title: "舞うは喜春楽", desc: "味方全員のDEFを上げる。3ターン有効" },
        {
          title: "願う喜び萬歳楽",
          desc: "敵1体に特大ダメージを与え、自分のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cla773c09bafdc49a2aefa998c",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cla773c09bafdc49a2aefa998c.webp",
    info: "彼が話すのは人々のあれこれ。彼が語るのは物事の面白。\n彼が見せるのは黒い感情。\n彼は一人で全てを見せる、面白可笑しく鮮やかに。\n「という訳でこの一席、どうぞよろしく」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "噺家(Earth)",
    spec: {
      status: { hp: 1650, atk: 550, def: 472, spd: 306 },
      skill: [
        { title: "ふっと消える「死神」", desc: "敵全員に大ダメージ" },
        { title: "情景が映る「富士詣り」", desc: "2回攻撃する。" },
        {
          title: "今宵はこれにて「金の大黒」",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clc4c2bbdeb7194258ab23ebcb",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clc4c2bbdeb7194258ab23ebcb.webp",
    info: "異世界で販売されているお菓子「かっぱえびせん」をJobTribesの世界で売り歩く少女。\n彼女の持つバスケットは異世界とつながるゲートになっており、いつでもできたてのかっぱえびせんを仕入れることができる。\nたまに自分で食べているのは内緒。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "かっぱえびせん販売員(Fire)",
    spec: {
      status: { hp: 1620, atk: 550, def: 472, spd: 312 },
      skill: [
        { title: "無限えびせんバスケット", desc: "ランダムな敵に3回ダメージ" },
        { title: "シュリンプレッドの赤ずきん", desc: "味方全員のHP回復" },
        { title: "「食べたら止まらないわよ！」", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "cl2b032f4f9fdb4617997b45e8",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl2b032f4f9fdb4617997b45e8.webp",
    info: "異世界で販売されているお菓子「じゃがりこ」をJobTribesの世界でPRするアイドルグループ。\n彼女らはそれぞれ味の担当があり、それに合わせた衣装の色になっている。\nまだメンバーが居るらしい…。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "じゃがりこ販売員(Nature)",
    spec: {
      status: { hp: 1725, atk: 550, def: 460, spd: 300 },
      skill: [
        {
          title: "「心ほっこりじゃがバター！」",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        {
          title: "「みんな大好きサラダ！」",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "「にこっと笑って、チーズ！」", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl121857dcbdf445859802ab85",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl121857dcbdf445859802ab85.webp",
    info: "世界中でアイスを売ってわたり歩く少女。\nどんな種族にもアイスを提供でき、ディッシャーの大きさを自由に変え提供する。\nまた彼女はアイスを高く乗せるのが得意で、最高記録は20段乗せという凄腕の持ち主である",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "アイスクリーム販売業者(Poison)",
    spec: {
      status: { hp: 1650, atk: 525, def: 420, spd: 360 },
      skill: [
        {
          title: "大玉ディッシャーストライク",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        {
          title: "78色のフレーバー",
          desc: "味方全員のATKとDEFとSPDを上げる。3ターン有効",
        },
        { title: "トリプルXトリプル", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
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
  {
    id: "cld8awo37269208l5nc2ppuvj",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cld8awo37269208l5nc2ppuvj.webp",
    info: "競走馬のケアに心血を注ぐ者たち。\n馬のコンディションを見抜き、\n飴と鞭を駆使して最高の状態に整える。\nイラスト：モ太朗",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "競馬調教師(Nature)",
    spec: {
      status: { hp: 1620, atk: 540, def: 448, spd: 336 },
      skill: [
        { title: "人馬一体の極意", desc: "味方全員のHP回復" },
        {
          title: "競走馬への昇華",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "コンセントレイト・ブリンカー",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cld8arrtb201108l597i41qn1",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cld8arrtb201108l597i41qn1.webp",
    info: "禁断の果実を守る者。\n寒さに負けない鋼の忍耐力を持つクールビューティ。\n非常に働き者だが暑さには弱い。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "リンゴ農家(Fire)",
    spec: {
      status: { hp: 1650, atk: 535, def: 452, spd: 330 },
      skill: [
        {
          title: "召喚獣：りんごウサギ",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "りんごの皮ウィップ",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "アップルフェノンの癒し",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "clc085hcv051008lc8jllm6vf",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clc085hcv051008lc8jllm6vf.webp",
    info: "麵屋 ドラゴンラーメンのラン・レイリンとJobTribesのラーメン店店長とのタッグアミュレット\n\n美味しいラーメンを作る為、いまは店長秘伝 ドラゴン湯切りの習得中。\n店長「そう、肘から先の力を抜き、腕と麺の同化を意識して振るんだ！」\nレイリン「これがドラゴン湯切り....！！」",
    category: "サービス",
    type: "NORMAL",
    name: "ラン・レイリン ＆ ラーメン店店長(Water)",
    spec: {
      status: { hp: 1590, atk: 545, def: 436, spd: 348 },
      skill: [
        {
          title: "タッグ・ザ・ラーメン",
          desc: "味方1体をカウンター状態にする。1度だけ受けたダメージを増大して攻撃した相手に与える。",
        },
        { title: "秘伝：ドラゴン湯切り", desc: "敵1体に特大ダメージ" },
        {
          title: "特選：愛情ましましトッピング",
          desc: "味方1体のHP回復。SPDを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "clc07u0ts432008lceao63scm",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clc07u0ts432008lceao63scm.webp",
    info: "麵屋 ドラゴンラーメンのジャク・ロンとJobTribesの古代中国の将軍とのタッグアミュレット\n\nロン「JobTribesの世界にはどんな珍しい食材があるのか、ワクワクするぜ」\n古代中国の将軍「よし、食材探索に向けていざ進軍！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ジャク・ロン ＆ 古代中国の将軍(Fire)",
    spec: {
      status: { hp: 1605, atk: 560, def: 436, spd: 336 },
      skill: [
        { title: "タッグ・ザ・ハンティング", desc: "敵1体に特大ダメージ" },
        {
          title: "忠義の食材探索",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        { title: "天下無双の二連斬", desc: "2回攻撃する。" },
      ],
    },
  },
  {
    id: "clc07ik2v961309l5r3swxylz",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/clc07ik2v961309l5r3swxylz.webp",
    info: "SOUL FusersのDRAGNARISEとJobTribesのキャバクラ嬢とのタッグアミュレット\n\n業炎を纏う者と妖美に舞う者。\n圧倒的な存在感を放つ二人は注目を集めながらも、どこか近寄りがたい雰囲気を醸し出す。",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "DRAGNARISE ＆ キャバクラ嬢(Poison)",
    spec: {
      status: { hp: 1575, atk: 550, def: 432, spd: 351 },
      skill: [
        { title: "タッグ・ザ・プレッシャー", desc: "敵全員に大ダメージ" },
        {
          title: "業炎へ誘うコール",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        {
          title: "ドラゴニックチャージ",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "clc077phj846009l5nm6115v3",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/clc077phj846009l5nm6115v3.webp",
    info: "SOUL FusersのIGNILORDとJobTribesのカニ漁師とのタッグアミュレット\n\n灼熱と形容されるIGNILORDのオーラは漁で冷えたカニ漁師の体を温める。",
    category: "ギャザラー",
    type: "NORMAL",
    name: "IGNILORD ＆ カニ漁師(Thunder)",
    spec: {
      status: { hp: 1650, atk: 585, def: 440, spd: 309 },
      skill: [
        { title: "タッグ・ザ・パッション", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "気合の雄たけび",
          desc: "召喚時に確率でATKを上げる。3ターン有効",
        },
        { title: "カニボルケーノ！", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clc06tuy6642809l5vmbwwbta",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/clc06tuy6642809l5vmbwwbta.webp",
    info: "SOUL FusersのIGNITTOとJobTribesのゲームプロデューサーとのタッグアミュレット\n\nJobTribesに来たIGNITTOは気の合うお友達を見つけたようだ。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "IGNITTO & ゲームプロデューサー(Earth)",
    spec: {
      status: { hp: 1770, atk: 535, def: 436, spd: 318 },
      skill: [
        {
          title: "タッグ・ザ・フレンドリー",
          desc: "召喚時に確率で自分をカウンター状態にする。1度だけ受けるダメージを半減し、受けたダメージを攻撃した相手に与える。",
        },
        {
          title: "トレーニング・スケジュール",
          desc: "味方全員のDEFとSPDを上げる。3ターン有効",
        },
        {
          title: "これで私たちお友達ね！",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "clbomwm33480708lauo5pgxkt",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/clbomwm33480708lauo5pgxkt.webp",
    info: "幼い頃からドローン操作に中毒的だったため、現在は自分の手足のように操作ができるように。\n働き者であるが故に、仕事の成功のためにはドローンを使い捨てる事もいとわない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ドローン操縦士(Nature)",
    spec: {
      status: { hp: 1725, atk: 525, def: 440, spd: 330 },
      skill: [
        {
          title: "かく乱ドローン",
          desc: "敵1体に特大ダメージを与え、SPDを下げる。3ターン有効",
        },
        { title: "偵察ドローン", desc: "敵全員のDEFを下げる。3ターン有効" },
        { title: "強襲ドローン", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "clajh1kwm307008i6pa7swvi5",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/clajh1kwm307008i6pa7swvi5.webp",
    info: "身にまとう香りで美を演出し、放つアロマで回復も攻撃もこなす。人呼んで芳香の魔術師とは彼女の事である。\nイラスト：大滝ノスケ",
    category: "サービス",
    type: "NORMAL",
    name: "アロマセラピスト(Nature)",
    spec: {
      status: { hp: 1650, atk: 550, def: 448, spd: 324 },
      skill: [
        {
          title: "ラベンサラ防壁",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "鎮静のティーローズ",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "美獣のムスク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "clajgt766270008i65bmqomct",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/clajgt766270008i65bmqomct.webp",
    info: "天より降り来るもの、目前に横たわるもの、自らの内より湧き上がるもの……。描くモチーフは様々なれど、見るものに影響を与えることを使命とする職である。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "画家(Water)",
    spec: {
      status: { hp: 1695, atk: 535, def: 456, spd: 318 },
      skill: [
        {
          title: "美の女神の囁き",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のATKを上げる。3ターン有効。",
        },
        { title: "魂の慟哭", desc: "敵全員のDEFとSPDを下げる。3ターン有効" },
        { title: "パトロンとの出会い", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "clajgi6kg197408i6xwzpjiip",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/clajgi6kg197408i6xwzpjiip.webp",
    info: "花のように摘んで、花のように切りそろえ、花のように飾ってあげましょう。あなたも。\nイラスト：沼黒",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "フラワーデザイナー(Fire)",
    spec: {
      status: { hp: 1695, atk: 565, def: 424, spd: 324 },
      skill: [
        { title: "フラワリング・ウィンド", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "深紅の鋏：カーディナル・シザー",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "空間精製：装花の迷宮",
          desc: "敵1体のDEFとSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9z7vrux014608lbkszo40s8",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9z7vrux014608lbkszo40s8.webp",
    info: "色のない世界に色を落とし、形のない空間に新たな形を生みだす\n1000色を超える創造の刃で人の価値観をたやすく切り裂く神出鬼没の暗殺者",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "クリエイティブデザイナー(Poison)",
    spec: {
      status: { hp: 1590, atk: 570, def: 432, spd: 339 },
      skill: [
        {
          title: "ダルネス・アサシン",
          desc: "敵全員を毎ターン終了時、ダメージを受ける状態にする。3ターン有効",
        },
        { title: "RGBエッジ＆CMYKブレード", desc: "敵1体に特大ダメージ" },
        {
          title: "独創性の探求者",
          desc: "味方1体のHP回復。ATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coelk00dqy1umj6z57g450",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coelk00dqy1umj6z57g450.webp",
    info: "より扱いやすく、より壊れにくく・・・人々の生活を\n豊かにするため、創意工夫を重ねる者。\n彼女が生み出した物、それはただの製品ではなく芸術\nである。",
    category: "クラフター",
    type: "NORMAL",
    name: "工業デザイナー(Thunder)",
    spec: {
      status: { hp: 1710, atk: 540, def: 416, spd: 342 },
      skill: [
        {
          title: "改善リサーチ",
          desc: "味方1体のDEFを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "機能美：革新的デザイン",
          desc: "味方1体をカウンター状態にする。1度だけ受けたダメージを増大して攻撃した相手に与える。",
        },
        {
          title: "素材強度検証",
          desc: "敵1体に特大ダメージを与え、自分のATKを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coex7u0fl61umjfp4bdr93",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coex7u0fl61umjfp4bdr93.webp",
    info: "シャフト社が秘密裏に開発した戦闘用試作レイバー。ASURAシステムによる高機動戦闘能力や飛行能力を持つ。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【機動警察パトレイバー】TYPE-J9 グリフォン(Poison)",
    spec: {
      status: { hp: 1740, atk: 560, def: 420, spd: 321 },
      skill: [
        {
          title: "アクアユニット",
          desc: "敵1体に特大ダメージを与え、SPDを下げる。3ターン有効",
        },
        {
          title: "フライトユニット",
          desc: "敵1体に特大ダメージを与え、自分のSPDを上げる。3ターン有効",
        },
        {
          title: "ASURA",
          desc: "召喚時に確率で味方全員のATKを上げる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofqo40k7w1umj60vcaq1d",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofqo40k7w1umj60vcaq1d.webp",
    info: "冷ややかな美貌。物憂げな横顔。明るい笑顔。\nフラッシュの下で自在に作り上げる印象は、着ている服に劣らない。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "モデル(Poison)",
    spec: {
      status: { hp: 1590, atk: 570, def: 432, spd: 336 },
      skill: [
        {
          title: "アラベスク・ジャカード",
          desc: "味方1体をカウンター状態にする。1度だけ受けたダメージを増大して攻撃した敵に与える。",
        },
        {
          title: "スチール：20カット",
          desc: "味方1体のSPDを大幅に上げるが、DEFが下がる。3ターン有効",
        },
        {
          title: "揺れないウォーキング",
          desc: "味方1体のHP大回復し、バジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "cl9cof4d50gpq1umj2b96gmdi",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cof4d50gpq1umj2b96gmdi.webp",
    info: "スーチーユキ「私がスーチーユキちゃんよ、よろしくね！」\nAmelia「ねーねー。なんでユキちゃんだけ変身のセリフないの？」\nスーチーユキ「ぎくっ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】スーチーユキ＆Amelia(Water)",
    spec: {
      status: { hp: 1680, atk: 560, def: 416, spd: 336 },
      skill: [
        { title: "イッキツウカン", desc: "2回攻撃する。" },
        {
          title: "妄想モード",
          desc: "召喚時に高確率でDEFを少しあげる。さらに以下のアミュレットが自分のバトル場に存在する場合、DEFの上昇量が上がる。3ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Suchie-Pai & Rin",
        },
        {
          title: "ツバメ返し",
          desc: "敵1体にダメージを与え、バジェットを増やす。",
        },
      ],
    },
  },
  {
    id: "cl9coeyio0fsm1umj93s364r2",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coeyio0fsm1umj93s364r2.webp",
    info: "Youran「ミルキーパイちゃんはウサギ型宇宙人なんだよね？」\nミルキーパイ「ぎくっ、ひ、秘密だぴょん！」\nYouran「ほい、ニンジンだよー」\nミルキーパイ「わーい、カリカリカリカリカリ、ニンジンうめぇ～ぴょん！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】ミルキーパイ＆Youran(Earth)",
    spec: {
      status: { hp: 1605, atk: 535, def: 452, spd: 339 },
      skill: [
        { title: "ミルキーシャワー", desc: "敵全員に大ダメージ" },
        {
          title: "鳴きさらし",
          desc: "召喚時に高確率でSPDを少しあげる。さらに以下のアミュレットが自分のバトル場に存在する場合、SPDの上昇量が上がる。3ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Cherry-Pai & Camille",
        },
        { title: "爆弾", desc: "敵全員のSPDを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofk6f0j7c1umj8470bdgn",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofk6f0j7c1umj8470bdgn.webp",
    info: "チェリーパイ「おーほほほほほ！　ってなんで私が毒属性なんだい！？」\nCamille「本当ですね。私もちょっと不満です」\nチェリーパイ「運営に一言言わないとな！」\nCamille「(怪しげに微笑む)」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】チェリーパイ＆Camille(Poison)",
    spec: {
      status: { hp: 1665, atk: 555, def: 416, spd: 342 },
      skill: [
        { title: "チェリーボンバー", desc: "敵1体に特大ダメージ" },
        {
          title: "立直",
          desc: "召喚時に高確率でATKを少しあげる。さらに以下のアミュレットが自分のバトル場に存在する場合、ATKの上昇量が上がる。3ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Milky-Pai & Youran",
        },
        {
          title: "ぶっこ抜き",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
      ],
    },
  },
  {
    id: "cl9cofetp0id21umjaf88ce8o",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cofetp0id21umjaf88ce8o.webp",
    info: "Emma「つかささんは年上なんですよね。よろしくです！」\nレモンパイ「オレにはタメ口でいいって」\nEmma「そうなんだ？　よろしくな、つかさ！」\nレモンパイ「…ちなみにミサイルとか撃てるぞ」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】レモンパイ＆Emma(Thunder)",
    spec: {
      status: { hp: 1695, atk: 545, def: 452, spd: 315 },
      skill: [
        { title: "ライトニングブレード", desc: "2回攻撃する。" },
        {
          title: "高速平和",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。さらに以下のアミュレットが自分のバトル場に存在する場合、DEFとSPDの上昇量が上がる。1ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Peach-Pai & Sophia",
        },
        { title: "エレベーター", desc: "味方全員のATKを上げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cof12l0g711umj5bqmaf8d",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cof12l0g711umj5bqmaf8d.webp",
    info: "ピーチパイ「Sophiaちゃんもアイドルなんでしょう？　私もアイドルの卵なの！」\nSophia「キミも？　どこで活動しているの？」\nピーチパイ「えーとね、まだ卵だから秘密！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】ピーチパイ＆Sophia(Nature)",
    spec: {
      status: { hp: 1710, atk: 530, def: 448, spd: 324 },
      skill: [
        { title: "ピンキッシュ・フローレア", desc: "敵全員に大ダメージ" },
        {
          title: "プリンセス・リーチ",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。さらに以下のアミュレットが自分のバトル場に存在する場合、ATKとSPDの上昇量が上がる。1ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Lemon-Pai & Emma",
        },
        { title: "指ローズ", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl9cofiry0izd1umjd5979lof",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofiry0izd1umjd5979lof.webp",
    info: "スーチーパイ「Rinちゃん今日はよろしくね！」\nRin「はい恭子さん。よろしくお願いします！」\nスーチーパイ「しー！　正体は秘密だから！」\nRin「あ、すいません御崎さん！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "【アイドル雀士スーチーパイ】スーチーパイ&Rin(Fire)",
    spec: {
      status: { hp: 1560, atk: 555, def: 448, spd: 339 },
      skill: [
        { title: "ハイパーせっかん", desc: "敵1体に特大ダメージ" },
        {
          title: "スーチー・アイ",
          desc: "召喚時に100％の確率でATKとDEFを大幅に上げる。さらに以下のアミュレットが自分のバトル場に存在する場合、ATKとDEFの上昇量が上がる。1ターン有効 対象アミュレット：【Idol Janshi Suchie-Pai】Suchie-Yuki & Amelia",
        },
        {
          title: "コンビ打ち",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coftcl0kn41umj4oze6h39",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coftcl0kn41umj4oze6h39.webp",
    info: '書いてある事が"嘘"である事は間違いない。でも書いた人、読んだ人、残った記憶は真実なんだ。\nillust：DEA Artist',
    category: "スペシャリスト",
    type: "NORMAL",
    name: "小説家(Nature)",
    spec: {
      status: { hp: 1590, atk: 570, def: 432, spd: 336 },
      skill: [
        {
          title: "書きだした世界の断片",
          desc: "召喚時に100％の確率で発動し、バジェットを3ターンの間増やし続ける。このアミュレットが破壊されると効果は消える。",
        },
        { title: "イマジネイト・フィクション", desc: "敵1体に特大ダメージ" },
        {
          title: "遠い夏のおもひで：純文学",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のSPDを上げる。3ターン有効。",
        },
      ],
    },
  },
  {
    id: "cl9cofodb0juy1umjcl9odeox",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofodb0juy1umjcl9odeox.webp",
    info: "いいゲームとは私……仙水伊鶴を満足させるもの",
    category: "アンノウン",
    type: "NORMAL",
    name: "【大東京トイボックス】仙水伊鶴(Poison)",
    spec: {
      status: { hp: 1673, atk: 540, def: 424, spd: 344 },
      skill: [
        {
          title: "権謀術数",
          desc: "敵1体にダメージを与え、バジェットを増やす。",
        },
        { title: "SOUP", desc: "味方全員のSPDを上げる。3ターン有効" },
        { title: "ソードクロニクルVIII", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof0up0g5t1umj0drs6m4m",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9cof0up0g5t1umj0drs6m4m.webp",
    info: "JobTribes公式コスプレイヤーThamesによるジョブロード・ソーシャルメディアプランナーのコスプレ作品。\n「画面から飛び出してきたみたいだって？逆だよ。オレが画面に飛び込んだのさ！」",
    category: "情報・運輸",
    type: "NORMAL",
    name: "公式コスプレイヤーThames（ソーシャルメディアプランナー）(Earth)",
    spec: {
      status: { hp: 1590, atk: 565, def: 428, spd: 342 },
      skill: [
        {
          title: "ミリオンRTストリーム",
          desc: "味方1体のHP大回復し、バジェットを増やす。",
        },
        {
          title: "バズカタルシス",
          desc: "召喚時に確率で自分にバリアをはる。攻撃されても1回ダメージを受けない。",
        },
        { title: "ハッシュタグ・レーザー", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofbdf0hth1umja7s87tv7",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofbdf0hth1umja7s87tv7.webp",
    info: "JobTribes公式コスプレイヤーSikayによるジョブロード・ショーダンサーのコスプレ作品。\n「画面から飛び出してきたみたいだって？逆よ。私が画面に飛び込んだのよ！」",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "公式コスプレイヤーSikay（ショーダンサー）(Poison)",
    spec: {
      status: { hp: 1612, atk: 562, def: 430, spd: 337 },
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
    id: "cl9cof3wg0gn31umjcmg8fmnu",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cof3wg0gn31umjcmg8fmnu.webp",
    info: "JobTribes公式コスプレイヤーmihoによるジョブロード・スポーツトレーナーのコスプレ作品。\n「画面から飛び出してきたみたいだって？逆よ。私が画面に飛び込んだのよ！」",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "公式コスプレイヤーmiho（スポーツトレーナー）(Fire)",
    spec: {
      status: { hp: 1612, atk: 538, def: 450, spd: 337 },
      skill: [
        { title: "攻撃的マッサージ術", desc: "2回攻撃する。" },
        {
          title: "快癒のアイシング",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
        {
          title: "防衛的テーピング術",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof5np0gx51umjdvh7bh0k",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cof5np0gx51umjdvh7bh0k.webp",
    info: "世に溢れ、様々な所に存在する絵を生み出す現代の芸術家。\n「あなたのイラストで一緒に世界（ゲーム）を創るわよ！」ゲームプロデューサー談",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "イラストレーター(Thunder)",
    spec: {
      status: { hp: 1680, atk: 545, def: 432, spd: 333 },
      skill: [
        {
          title: "色彩の探究者",
          desc: "召喚時に100％の確率で発動し、バジェットを3ターンの間減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "三原色の軌跡",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
        {
          title: "創造のペイントブラシ",
          desc: "敵全員のATKとDEFを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeyx00fut1umj8siwcmrr",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9coeyx00fut1umj8siwcmrr.webp",
    info: "「海の事、風の事、もちろん船の事もおまかせ下さい！安全なクルーズを提供しますよ！」\n単身、または複数で船の征く路を指し示す。\n船員の命を預かる彼女達は、短期間の航海でも無くてはならない存在だ。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "航海士(Water)",
    spec: {
      status: { hp: 1680, atk: 545, def: 432, spd: 333 },
      skill: [
        {
          title: "天測航法",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。1ターン有効",
        },
        { title: "操舵輪ストライク", desc: "2回攻撃する。" },
        {
          title: "台風の目",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofpxf0k3p1umj33o49tvt",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cofpxf0k3p1umj33o49tvt.webp",
    info: "損切りは決して失敗ではない。むしろ次の成功のためのチャンスと思え。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【インベスターZ】神代圭介(Thunder)",
    spec: {
      status: { hp: 1650, atk: 570, def: 424, spd: 330 },
      skill: [
        {
          title: "損切り",
          desc: "敵全員のDEFを大幅に下げるが、ATKが上がる。3ターン有効",
        },
        { title: "マネーゲームさ", desc: "敵のバジェットを減らす" },
        {
          title: "株は法則でやれ",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofafx0ho41umj9g33drat",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofafx0ho41umj9g33drat.webp",
    info: "今は待つ……。二人が戻ってくると信じて待つ……。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ドラゴン桜2】水野直美(Water)",
    spec: {
      status: { hp: 1605, atk: 545, def: 444, spd: 339 },
      skill: [
        {
          title: "東大合格第一号",
          desc: "召喚時に100％の確率でATKとDEFを大幅に上げる。1ターン有効",
        },
        {
          title: "歯を磨くように勉強",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "バカ鉢巻き",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofbi60hu81umje6vvc09u",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofbi60hu81umje6vvc09u.webp",
    info: "ワシは本物が見たいっ‥!!　特等席で‥‥!!　人間のドス黒い感情‥‥際の際‥‥本性‥‥!　破滅‥!　絶望‥!　そして死‥!!　それこそが真の娯楽‥!　愉悦‥!!",
    category: "アンノウン",
    type: "NORMAL",
    name: "【カイジ】兵藤和尊(Poison)",
    spec: {
      status: { hp: 1598, atk: 568, def: 438, spd: 332 },
      skill: [
        {
          title: "エスポワール号",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "地下強制労働",
          desc: "敵1体にダメージを与え、敵のバジェットを減らす",
        },
        {
          title: "焼き土下座",
          desc: "自分のATKを大幅に上げるが、ダメージを受ける。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof38f0gj91umj50rc03eh",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9cof38f0gj91umj50rc03eh.webp",
    info: "よく考えると‥‥振ってないっ‥‥‥! 　わしは‥‥!!",
    category: "アンノウン",
    type: "NORMAL",
    name: "【カイジ】大槻班長(Earth)",
    spec: {
      status: { hp: 1673, atk: 535, def: 446, spd: 329 },
      skill: [
        {
          title: "冷えたビール",
          desc: "自分のSPDを大幅に上げるが、ATKが下がる。3ターン有効",
        },
        {
          title: "ホカホカ焼鳥",
          desc: "味方1体のHP大回復し、敵のバジェットを減らす",
        },
        { title: "四五六賽", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9cof8uw0hf71umj9lsfbw3i",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9cof8uw0hf71umj9lsfbw3i.webp",
    info: "金は命より重い‥‥！　そこの認識をごまかす輩は生涯地を這う‥‥!!",
    category: "アンノウン",
    type: "NORMAL",
    name: "【カイジ】利根川幸雄(Thunder)",
    spec: {
      status: { hp: 1643, atk: 548, def: 454, spd: 323 },
      skill: [
        { title: "Eカード", desc: "敵1体にダメージを与え、バジェットを増やす" },
        {
          title: "限定ジャンケン",
          desc: "敵1体に特大ダメージを与えるが、自分のDEFが下がる。3ターン有効",
        },
        {
          title: "電流鉄骨渡り",
          desc: "自分のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeo1j0e531umjhqw1geg2",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coeo1j0e531umjhqw1geg2.webp",
    info: "2021年11月 第10回 JobTribes PvP アリーナランキングバトルチャンピオン、Neoneow。\n圧倒的勝利。さらなる進化を遂げる黒猫魔道士は、次はどんな進化を果たすのだろうか。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】Neoneow ＜2021年11月＞(Thunder)",
    spec: {
      status: { hp: 1590, atk: 570, def: 424, spd: 342 },
      skill: [
        {
          title: "猫魔法「超肉球キャノン」",
          desc: "ランダムな敵に3回ダメージ",
        },
        {
          title: "猫魔法「アクセルハント」",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "猫秘薬「エリクシア・ささみ」",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。1ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coei4w0d7s1umj7vzl06q0",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coei4w0d7s1umj7vzl06q0.webp",
    info: "ショコラティエールは当初、宮廷の宴で活躍したが、\nショコラが戦士を鼓舞するとわかり状況は一変した。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "ショコラティエール(Earth)",
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
  {
    id: "cl9coflm00jfk1umj52yxhswg",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coflm00jfk1umj52yxhswg.webp",
    info: "憎しみの心だけを増幅されてこの世を滅ぼす運命を与えられた「仮初めの女王」。",
    category: "アンノウン",
    type: "NORMAL",
    name: "＜L-ilith＞魔王(Poison)",
    spec: {
      status: { hp: 1650, atk: 550, def: 424, spd: 342 },
      skill: [
        {
          title: "虎と象の護り",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。1ターン有効",
        },
        {
          title: "女神の癒し",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "堅牢な城壁",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9coet9c0eyq1umj7k57a0m1",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coet9c0eyq1umj7k57a0m1.webp",
    info: "カノアは修業を極め、世界の命運を握る最強の剣士となった。\n「妹は俺が救い出す！」",
    category: "アンノウン",
    type: "NORMAL",
    name: "＜Kanoa＞勇者(Nature)",
    spec: {
      status: { hp: 1590, atk: 570, def: 424, spd: 342 },
      skill: [
        {
          title: "アンシバーレナーデル(不可視の針)",
          desc: "ランダムな敵に3回ダメージ",
        },
        { title: "シュツルムゴッデス(神の嵐)", desc: "敵1体に特大ダメージ" },
        {
          title: "シュテルンデシェナンゲン(揺らぎの加護)",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coezs70fzs1umjbwgmg36g",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coezs70fzs1umjbwgmg36g.webp",
    info: "アスリートの心身を最高の状態に保つプロフェッショナル。\n故障の予防から、メンタルケアに、試合中の応急処置まで、\nすべてはアスリートのパフォーマンスを高めるために！",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "スポーツトレーナー(Thunder)",
    spec: {
      status: { hp: 1612, atk: 538, def: 450, spd: 337 },
      skill: [
        { title: "攻撃的マッサージ術", desc: "2回攻撃する。" },
        {
          title: "快癒のアイシング",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
        {
          title: "防衛的テーピング術",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofdr10i711umj57qr447k",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofdr10i711umj57qr447k.webp",
    info: "カイロはギリシア語で手を意味するのよ。\n私たちは、西洋医学に基づいて身体の歪みの原因を探しだし、神業的な手技で背骨や骨盤を矯正するの。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "カイロプラクター(Fire)",
    spec: {
      status: { hp: 1627, atk: 557, def: 446, spd: 326 },
      skill: [
        { title: "ドロップアジャストメント", desc: "2回攻撃する。" },
        {
          title: "アクティベーターメソッド",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        {
          title: "ディバーシファイド",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coeu2z0f3g1umj71usbe1v",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coeu2z0f3g1umj71usbe1v.webp",
    info: "ボヤやんばかり目立ってますけど、ドロンボーには筋肉担当のワイもおりまんねん！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】トンズラー(Poison)",
    spec: {
      status: { hp: 1688, atk: 570, def: 430, spd: 318 },
      skill: [
        {
          title: "怪力",
          desc: "自分のATKをあげ、敵1体に特大ダメージを与える。3ターン有効",
        },
        { title: "ドロップキック", desc: "敵1体に特大ダメージ" },
        {
          title: "タダじゃおきまへん！",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof7670h5k1umjgsp5byp9",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cof7670h5k1umjgsp5byp9.webp",
    info: "会津若松のおハナちゃん見てる～？ ボクちゃんねNFTデビューなのよ、これが。",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ボヤッキー(Nature)",
    spec: {
      status: { hp: 1613, atk: 530, def: 450, spd: 342 },
      skill: [
        {
          title: "ポチッとな",
          desc: "味方全員のDEFを上げる。3ターン有効。さらに敵のバジェットを減らす",
        },
        {
          title: "自爆ボタン",
          desc: "敵全員にダメージをあたえるが、自分のDEFを下げる。3ターン有効",
        },
        {
          title: "ボクちゃんもうイヤ",
          desc: "味方全員のATKを上げるが、自分のATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coft5s0km11umjdbf9b7ah",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9coft5s0km11umjdbf9b7ah.webp",
    info: "説明しよう！ この世に悪がある限り、ガンちゃんとアイちゃんはヤッターマン1号、2号に変身して正義のために戦うのだ！",
    category: "アンノウン",
    type: "NORMAL",
    name: "【ヤッターマン】ヤッターマン(Water)",
    spec: {
      status: { hp: 1628, atk: 563, def: 430, spd: 335 },
      skill: [
        { title: "ケンダマジック", desc: "2回攻撃する。" },
        {
          title: "シビレステッキ",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "勝利のポーズ",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
      ],
    },
  },
  {
    id: "cl9cof2210gcl1umj0fcr72g2",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cof2210gcl1umj0fcr72g2.webp",
    info: "2021年7月 第7回 JobTribes PvP アリーナランキングバトルチャンピオン、shinkei。\n誰もが認めるミスターJobTribesは、３度目の栄冠を手にした。\nイラスト：信吉",
    category: "アンノウン",
    type: "NORMAL",
    name: "【PvP チャンピオン】shinkei ＜2021年7月＞(Nature)",
    spec: {
      status: { hp: 1590, atk: 530, def: 456, spd: 342 },
      skill: [
        {
          title: "shinkei 第３形態",
          desc: "召喚時に100％の確率でDEFとSPDを大幅に上げる。1ターン有効",
        },
        { title: "三位一体アタック", desc: "敵のバジェットを減らす" },
        { title: "龍の息吹", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9coez2s0fvq1umj1ox4hk1u",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coez2s0fvq1umj1ox4hk1u.webp",
    info: "天より降り来るもの、目前に横たわるもの、自らの内より湧き上がるもの……。描くモチーフは様々なれど、見るものに影響を与えることを使命とする職である。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "画家(Poison)",
    spec: {
      status: { hp: 1695, atk: 535, def: 456, spd: 318 },
      skill: [
        {
          title: "美の女神の囁き",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のATKを上げる。3ターン有効。",
        },
        { title: "魂の慟哭", desc: "敵全員のDEFとSPDを下げる。3ターン有効" },
        { title: "パトロンとの出会い", desc: "バジェットを増やす" },
      ],
    },
  },
  {
    id: "cl9coehgp0d411umjhs5i9qe8",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coehgp0d411umjhs5i9qe8.webp",
    info: "図面を読み取り、コンクリートの中に隠される鉄筋を組む者。\n鉄の筋肉をコンクリートにあたえる、気合に満ちたソルジャーである。",
    category: "クラフター",
    type: "NORMAL",
    name: "鉄筋工(Earth)",
    spec: {
      status: { hp: 1612, atk: 562, def: 430, spd: 337 },
      skill: [
        { title: "番線カッター", desc: "2回攻撃する。" },
        {
          title: "ローリング・ハッカー",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        {
          title: "耐震の加護",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
      ],
    },
  },
  {
    id: "cl9cofv520kx81umjbjf523su",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cofv520kx81umjbjf523su.webp",
    info: "競走馬のケアに心血を注ぐ者たち。\n馬のコンディションを見抜き、\n飴と鞭を駆使して最高の状態に整える。\nイラスト：モ太朗",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "競馬調教師(Thunder)",
    spec: {
      status: { hp: 1620, atk: 540, def: 448, spd: 336 },
      skill: [
        { title: "人馬一体の極意", desc: "味方全員のHP回復" },
        {
          title: "競走馬への昇華",
          desc: "味方全員のATKとSPDを上げる。3ターン有効",
        },
        {
          title: "コンセントレイト・ブリンカー",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coei3n0d7l1umjdsjmehwy",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9coei3n0d7l1umjdsjmehwy.webp",
    info: "患者の手術への恐怖や痛みを消す魔術師。\n麻酔や医学の知識はもちろん、\n患者の不安を和らげる術も持ち合わせている。\nイラスト：Youki",
    category: "医療",
    type: "NORMAL",
    name: "麻酔科医(Fire)",
    spec: {
      status: { hp: 1703, atk: 533, def: 438, spd: 331 },
      skill: [
        {
          title: "ペイン・コントローラー",
          desc: "味方1体にバリアをはる。攻撃されても1回ダメージを受けない。さらに味方1体のATKを上げる。3ターン有効。",
        },
        {
          title: "秘薬精製：ダチュラの花",
          desc: "味方全員のDEFを上げる。3ターン有効",
        },
        { title: "スリーピング・ペネトレイト", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofqe20k6d1umj6sxwcizc",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cofqe20k6d1umj6sxwcizc.webp",
    info: "食に関するプロデュースやコーディネートを行う者。\n料理をおいしく「見せる」様々な魔法を使う事ができるという。\nイラスト：Maeka",
    category: "サービス",
    type: "NORMAL",
    name: "フードコーディネーター(Nature)",
    spec: {
      status: { hp: 1665, atk: 535, def: 444, spd: 333 },
      skill: [
        {
          title: "料理のスタイリスト",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "フードコンサルティング",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        { title: "シズル感の演出", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofaja0hon1umj8war2i7m",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofaja0hon1umj8war2i7m.webp",
    info: "船舶や海事に特化した「海の法律家」の別名を持つ者。\n船舶の登記や登録、依頼人の免許の更新や様々な手続きを代行する海の侍である。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "海事代理士(Water)",
    spec: {
      status: { hp: 1605, atk: 570, def: 424, spd: 339 },
      skill: [
        {
          title: "海事の刀：無窮",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "船舶登記の極意",
          desc: "敵1体に特大ダメージをあたえ、自分のATKをあげる。3ターン有効",
        },
        {
          title: "秘技・船舶国籍証書取得",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofa390hm51umj4mqugmyf",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofa390hm51umj4mqugmyf.webp",
    info: "財務や会計に特化した力を持つ武将。\n秘技「監査」で不正な経営を行った企業を容赦なく斬る他、\n経営戦略の助言といった軍師的な側面を持つ。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "公認会計士(Water)",
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
    id: "cl9coftze0kqn1umj6aht3evw",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coftze0kqn1umj6aht3evw.webp",
    info: "臓器移植という命のリレーに携わる者たち。\n命の重さを知る彼らは、別れの悲しみに寄り添いながら\n今日も命の希望を繋いでいく。\nイラスト：Maeka",
    category: "医療",
    type: "NORMAL",
    name: "移植コーディネーター(Earth)",
    spec: {
      status: { hp: 1673, atk: 543, def: 446, spd: 326 },
      skill: [
        {
          title: "命の旋律：ドナー・C",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "希望の序曲：レシピエント・C",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "契約：生命の橋渡し",
          desc: "味方1体のATKを大幅に上げるが、SPDが下がる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coff2y0iei1umjc7s983ed",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coff2y0iei1umjc7s983ed.webp",
    info: "出産や赤ちゃん、女性の身体のケアを行う癒し手。\n生命の誕生を守護する者として\n「コウノトリの化身」とも呼ばれている。\nイラスト：宇田川みぅ",
    category: "医療",
    type: "NORMAL",
    name: "産婦人科医(Thunder)",
    spec: {
      status: { hp: 1680, atk: 540, def: 440, spd: 330 },
      skill: [
        {
          title: "生命のオーバーチュア",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        { title: "母子の癒し手", desc: "敵全員のATKを下げる。3ターン有効" },
        { title: "加護：献身の翼", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coepf90ed01umj43923ocl",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coepf90ed01umj43923ocl.webp",
    info: "カジノシティの治安を守るジョブ・ロード。 不正入国しようとした者は例外なく石化の刑に処され、富どころか命まで失うことになる。\nイラスト：DEAartist",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "入国審査官(Nature)",
    spec: {
      status: { hp: 1605, atk: 555, def: 444, spd: 333 },
      skill: [
        {
          title: "関税徴収",
          desc: "敵のバジェットを減らし、自分のバジェットを増やす。",
        },
        { title: "触手ウィップ", desc: "ランダムな敵に3回ダメージ" },
        { title: "逃亡阻止光線", desc: "敵全員のSPDを下げる。3ターン有効" },
      ],
    },
  },
  {
    id: "cl9cofw4o0l2w1umj5qnu3is7",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofw4o0l2w1umj5qnu3is7.webp",
    info: "「今日のゲストはPvP Arenaで超絶人気のカニ漁師のおじ様！一緒にダンスパフォーマンスもしちゃうから、みんな投げ銭よろしく☆」\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ライバー(Fire)",
    spec: {
      status: { hp: 1710, atk: 530, def: 452, spd: 321 },
      skill: [
        {
          title: "荒らしはブロック☆",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "感謝の投げ銭シャワー",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "即レスファンサービス",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cof6hs0h1r1umj1lxe730w",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cof6hs0h1r1umj1lxe730w.webp",
    info: "仮説を立てて検証する。検証結果でさらなる仮説を立てる。そしてその検証結果でさらに……。尽きることない好奇心に突き動かされた、終わらない旅路だ。\nイラスト：大滝ノスケ",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "博士研究員(Poison)",
    spec: {
      status: { hp: 1620, atk: 550, def: 440, spd: 336 },
      skill: [
        {
          title: "ピペットショット",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "副作用のある薬",
          desc: "味方1体のDEFを大幅に上げるが、SPDが下がる。3ターン有効",
        },
        {
          title: "危険な臨床試験",
          desc: "味方全員を大幅に回復するが、自分はダメージを受ける。",
        },
      ],
    },
  },
  {
    id: "cl9coeqr80ekj1umjf3772a5n",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9coeqr80ekj1umjf3772a5n.webp",
    info: "身にまとう香りで美を演出し、放つアロマで回復も攻撃もこなす。人呼んで芳香の魔術師とは彼女の事である。\nイラスト：大滝ノスケ",
    category: "サービス",
    type: "NORMAL",
    name: "アロマセラピスト(Water)",
    spec: {
      status: { hp: 1650, atk: 550, def: 448, spd: 324 },
      skill: [
        {
          title: "ラベンサラ防壁",
          desc: "味方1体にバリアをはる。攻撃されても2ターンダメージを受けない。",
        },
        {
          title: "鎮静のティーローズ",
          desc: "敵全員のDEFを下げる。3ターン有効",
        },
        { title: "美獣のムスク", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof9f30hid1umj4g0edo86",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cof9f30hid1umj4g0edo86.webp",
    info: "平和な世には農業機械や客船を造り、戦乱の世には大砲や戦艦を造る。重機の強大なパワーに方向性を与えるのは、いつだって小さな人間たちである。\nイラスト：U9",
    category: "クラフター",
    type: "NORMAL",
    name: "重機メーカー社員(Thunder)",
    spec: {
      status: { hp: 1590, atk: 565, def: 428, spd: 342 },
      skill: [
        { title: "全力粉砕！鉄球クレーン", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "突進！ホイールローダー",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
        {
          title: "ロケットエンジン点火！",
          desc: "召喚時に確率でSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coezj00fyb1umj0sfkd0ar",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coezj00fyb1umj0sfkd0ar.webp",
    info: "夢想を具現化する強大な力は、彼の不屈の精神がエネルギー源である。\n心の泉が枯れ果てぬ限り、彼の右手からメガホンが落ちることはない。\nイラスト：Maeka",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "映画監督(Earth)",
    spec: {
      status: { hp: 1695, atk: 550, def: 428, spd: 330 },
      skill: [
        {
          title: "羞恥心を捨てろ！",
          desc: "敵1体に特大ダメージをあたえ、ATKを下げる。3ターン有効",
        },
        {
          title: "切迫のスローモーション",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "信念のメガトンメガホン", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofcyz0i2m1umjb4nngmua",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofcyz0i2m1umjb4nngmua.webp",
    info: "電脳世界の道先案内人。\nキーワードの剣とリンクの転送魔術を巧みに設置して、訪れた民を意のままに、望みの場所へと誘導する。\nイラスト：DEAartist",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ポータルサイター(Fire)",
    spec: {
      status: { hp: 1680, atk: 560, def: 432, spd: 324 },
      skill: [
        { title: "バズワードスラッシュ", desc: "敵全員に大ダメージ" },
        { title: "アフィリエイトボーナス", desc: "バジェットを増やす" },
        { title: "神速トレンドインパクト", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coezuh0g051umjdzvx6are",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coezuh0g051umjdzvx6are.webp",
    info: "このアミュレットを持つ者を見ると、多くの者が知り合いになろうと近づいていく。\n人生における面倒ごとは、大抵彼が引き受けてくれるのだから。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "司法書士(Earth)",
    spec: {
      status: { hp: 1695, atk: 535, def: 440, spd: 330 },
      skill: [
        {
          title: "財産管理サポート",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "惑わしの書類乱舞", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "死角なき登記書類",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coek360dip1umjgua7357h",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coek360dip1umjgua7357h.webp",
    info: "まだ見習の新米サンタ。実力はあるが、プレゼント用のおもちゃを勝手に開けて遊んでしまうのが欠点。\n「ち、違う！ これはランダムにピックアップして検品してるだけだよ！」\nイラスト：あさみ青子",
    category: "アンノウン",
    type: "NORMAL",
    name: "サンタクロース（グリーン）(Nature)",
    spec: {
      status: { hp: 1590, atk: 570, def: 448, spd: 324 },
      skill: [
        {
          title: "ヒイラギの加護",
          desc: "召喚時に確率でDEFをあげる。3ターン有効",
        },
        { title: "エンジェルニーキック", desc: "敵1体に特大ダメージ" },
        {
          title: "デリシャスターキースイング",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coemil0dwf1umj8tgm85bd",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coemil0dwf1umj8tgm85bd.webp",
    info: "「削り屋」の異名を持つ健康の守護者。\n巨大ドリルの音に恐怖する患者もいるが、それは殲滅される虫歯も同様である。\nイラスト：mori",
    category: "医療",
    type: "NORMAL",
    name: "歯科医師(Thunder)",
    spec: {
      status: { hp: 1695, atk: 550, def: 428, spd: 330 },
      skill: [
        {
          title: "ピンポイント麻酔",
          desc: "召喚時に100％の確率でATKとSPDを大幅に上げる。1ターン有効",
        },
        { title: "虫歯一掃ダイヤモンドドリル", desc: "敵全員に大ダメージ" },
        { title: "容赦なき抜歯ペンチ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofm0e0jhs1umj0bnwa3o3",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofm0e0jhs1umj0bnwa3o3.webp",
    info: "氷上を華麗に舞う妖精たち。その美しい姿に多くの人々が魅了され、歓声と共に花などの供物を捧げるという。\nイラスト：べにはあ",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "フィギュアスケーター(Water)",
    spec: {
      status: { hp: 1620, atk: 530, def: 456, spd: 336 },
      skill: [
        {
          title: "レイバック・イナバウアー",
          desc: "味方全員のSPDを上げる。3ターン有効",
        },
        { title: "トリプルアクセル・ブリザード", desc: "敵1体に特大ダメージ" },
        {
          title: "ファビュラス！クワッドアクセル",
          desc: "敵1体に特大ダメージをあたえ、自分のSPDをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofsnl0kj71umj1fmb6hkm",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofsnl0kj71umj1fmb6hkm.webp",
    info: "「握り、開く度に掴んだ夢。それはどんな夢だ？」\n-アルチュール・ランボー『ジャンヌ・マリの掌』\nイラスト：ぎるぎる",
    category: "アンノウン",
    type: "NORMAL",
    name: "夢魔使い(Poison)",
    spec: {
      status: { hp: 1680, atk: 555, def: 436, spd: 324 },
      skill: [
        { title: "魅惑の宝珠・恐怖の魔手", desc: "敵全員に大ダメージ" },
        {
          title: "支配：ナイトメア・プリズン",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
        {
          title: "誘いのイーヴィル・ミスト",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9coez7d0fwg1umjdqwz3jda",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coez7d0fwg1umjdqwz3jda.webp",
    info: "JobTribes公式コスプレイヤーThamesによるジョブロード・漫画家のコスプレ作品。\n\n「画面から飛び出してきたみたいだって？逆だよ。オレが画面に飛び込んだのさ！」\n\nコスプレイヤー：Thames",
    category: "クラフター",
    type: "NORMAL",
    name: "公式コスプレイヤーThames（漫画家）(Poison)",
    spec: {
      status: { hp: 1635, atk: 555, def: 436, spd: 333 },
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
    id: "cl9coemuy0dyd1umjcux78aco",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coemuy0dyd1umjcux78aco.webp",
    info: "JobTribes公式コスプレイヤーMihoによるジョブロード・アイドルのコスプレ作品。\n\n「画面から飛び出してきたみたいだって？逆よ。私が画面に飛び込んだのよ！」\n\nコスプレイヤー：Miho",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "公式コスプレイヤーMiho（アイドル）(Earth)",
    spec: {
      status: { hp: 1650, atk: 550, def: 428, spd: 339 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofr550kak1umj5zeyc9vt",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofr550kak1umj5zeyc9vt.webp",
    info: "不動産の価値を瞬時に見極める心眼を持つ。数百年先を見通す彼の元には、時に王族すらも助言を求め、お忍びで訪れているという。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "不動産鑑定士(Fire)",
    spec: {
      status: { hp: 1620, atk: 570, def: 448, spd: 318 },
      skill: [
        { title: "奥義：都市開発", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "心眼のデューデリジェンス",
          desc: "召喚時に確率でATKをあげる。3ターン有効",
        },
        { title: "破邪：アプレイザルスラッシュ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coegnx0czk1umj9d3372ha",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coegnx0czk1umj9d3372ha.webp",
    info: "JobTribes公式コスプレイヤーThamesによるジョブロード・科学捜査官のコスプレ作品。\n\n「画面から飛び出してきたみたいだって？逆だよ。オレが画面に飛び込んだのさ！」\n\nコスプレイヤー：Thames",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "公式コスプレイヤーThames（科学捜査官）(Thunder)",
    spec: {
      status: { hp: 1605, atk: 550, def: 440, spd: 339 },
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
    id: "cl9cofv1i0kwo1umj1mcdhh8d",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cofv1i0kwo1umj1mcdhh8d.webp",
    info: "「街角の白魔導師」と呼ばれる者たち。医師による魔法の文書・処方箋を読み解いて調剤し、患者に回復薬を授ける。\nイラスト：大滝ノスケ",
    category: "医療",
    type: "NORMAL",
    name: "薬剤師(Nature)",
    spec: {
      status: { hp: 1665, atk: 545, def: 444, spd: 327 },
      skill: [
        {
          title: "ファーマシューティカル・ケア",
          desc: "味方全員のHPを3ターン回復し続ける。",
        },
        {
          title: "精密調剤の心得",
          desc: "召喚時に確率で自分のHPを3ターン回復状態にする",
        },
        { title: "展開：サテライトファーマシー", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coengw0e1u1umj99xx9rr1",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9coengw0e1u1umj99xx9rr1.webp",
    info: "JobTribes公式コスプレイヤーSikayによるジョブロード・アイドルのコスプレ作品。\n\n「画面から飛び出してきたみたいだって？逆よ。私が画面に飛び込んだのよ！」\nコスプレイヤー：Sikay",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "公式コスプレイヤーSikay（アイドル）(Water)",
    spec: {
      status: { hp: 1635, atk: 560, def: 444, spd: 324 },
      skill: [
        { title: "弾けるサマーライブ！", desc: "敵全員に大ダメージ" },
        { title: "激戦のアリーナチケット", desc: "敵のバジェットを減らす" },
        {
          title: "コールアンドレスポンス",
          desc: "敵1体に特大ダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coemm00dwy1umj9fpxb2l7",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9coemm00dwy1umj9fpxb2l7.webp",
    info: "JobTribes公式コスプレイヤーMihoによるジョブロード・看護師のコスプレ作品。\n\n「画面から飛び出してきたみたいだって？逆よ。私が画面に飛び込んだのよ！」\nコスプレイヤー：Miho",
    category: "医療",
    type: "NORMAL",
    name: "公式コスプレイヤーMiho（看護師）(Fire)",
    spec: {
      status: { hp: 1650, atk: 535, def: 440, spd: 339 },
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
    id: "cl9cog1260luw1umj4kwe846y",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cog1260luw1umj4kwe846y.webp",
    info: "サイトのデザインやコーディングを行う騎士。電脳の軍勢における前衛の要であり「芸術騎士」の異名を持つ。",
    category: "情報・運輸",
    type: "NORMAL",
    name: "ウェブデザイナー(Poison)",
    spec: {
      status: { hp: 1605, atk: 550, def: 452, spd: 330 },
      skill: [
        {
          title: "インフィニティ・カスタマイズ",
          desc: "召喚時に100％の確率でATKとDEFを大幅に上げる。1ターン有効",
        },
        { title: "インパクトパララックス", desc: "敵1体に特大ダメージ" },
        {
          title: "フラットデザイン",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coenlm0e2l1umjhluw6y09",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coenlm0e2l1umjhluw6y09.webp",
    info: "花のように摘んで、花のように切りそろえ、花のように飾ってあげましょう。あなたも。\nイラスト：沼黒",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "フラワーデザイナー(Earth)",
    spec: {
      status: { hp: 1695, atk: 565, def: 424, spd: 324 },
      skill: [
        { title: "フラワリング・ウィンド", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "深紅の鋏：カーディナル・シザー",
          desc: "敵1体に特大ダメージ",
        },
        {
          title: "空間精製：装花の迷宮",
          desc: "敵1体のDEFとSPDを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofmc40jjm1umj8seb7was",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cofmc40jjm1umj8seb7was.webp",
    info: "禁断の果実を守る者。\n寒さに負けない鋼の忍耐力を持つクールビューティ。\n非常に働き者だが暑さには弱い。\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "リンゴ農家(Nature)",
    spec: {
      status: { hp: 1650, atk: 535, def: 452, spd: 330 },
      skill: [
        {
          title: "召喚獣：りんごウサギ",
          desc: "敵1体に特大ダメージをあたえ、SPDを下げる。3ターン有効",
        },
        {
          title: "りんごの皮ウィップ",
          desc: "敵1体に特大ダメージをあたえ、DEFを下げる。3ターン有効",
        },
        {
          title: "アップルフェノンの癒し",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coefzm0cvt1umjbno25hs3",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coefzm0cvt1umjbno25hs3.webp",
    info: "心の扉を開く鍵を持つ司祭。\n悩める者との対話を通して最も最適な鍵を選び、\n閉ざされた心に光を取り戻す。\n\nイラスト：伊禮ゆきとし",
    category: "医療",
    type: "NORMAL",
    name: "精神科医(Thunder)",
    spec: {
      status: { hp: 1680, atk: 545, def: 432, spd: 333 },
      skill: [
        { title: "心の鍵：青い鳥の羽ばたき", desc: "敵全員に大ダメージ" },
        {
          title: "4つのケア・シュリュッセル",
          desc: "味方1体のHP回復。DEFを上げる。3ターン有効",
        },
        {
          title: "対話：アクティブリスニング",
          desc: "敵全員のATKを下げる。3ターン有効",
        },
      ],
    },
  },
  {
    id: "cl9cofh3u0ipy1umj2ogp096a",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofh3u0ipy1umj2ogp096a.webp",
    info: "対人用の美技を極めたゴッドハンド。この手に揉みほぐされた者は美しさと癒しを得られる。なお話術も巧み。\nイラスト：たけみや",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "エステティシャン(Water)",
    spec: {
      status: { hp: 1650, atk: 550, def: 452, spd: 321 },
      skill: [
        { title: "秘術：アンチエイジング", desc: "味方全員のHP回復" },
        { title: "フェイシャルリフト", desc: "敵1体に特大ダメージ" },
        { title: "美のカリスマオーラ", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofxe60la11umj9vj50wh3",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofxe60la11umj9vj50wh3.webp",
    info: "金融と投資のプロ。市場の動きを予測し、投資家に利益をもたらす。\nイラスト：中山ゆりりえんす\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『味方全員の攻撃力を3ターンアップさせる』というもの。\nSPDが高いジョブ・ロードなので、味方より早く行動して強化しやすい。",
    category: "スペシャリスト",
    type: "NORMAL",
    name: "証券アナリスト(Fire)",
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
    id: "cl9cofuyy0kw91umjfgg5hew7",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cofuyy0kw91umjfgg5hew7.webp",
    info: "女性のハートに、癒しと夢と刺激を与える者。高額ボトルが入ると俄然テンションが上がる。狙うは下克上。\nイラスト：たけみや",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "ホスト(Nature)",
    spec: {
      status: { hp: 1665, atk: 545, def: 436, spd: 333 },
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
    id: "cl9coeskx0euv1umjbxoxfrfn",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9coeskx0euv1umjbxoxfrfn.webp",
    info: "製薬は戦いだ。次々と現れる新しい敵を倒せる武器を探して世界を旅し、実験を続けるのだ。\nイラスト：色合mdd\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『バジェットを3ターン増やし続ける』という便利なもの。育成すると回復スキルも覚えて、自分も味方も生き残りやすくなる。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "製薬会社社員(Fire)",
    spec: {
      status: { hp: 1635, atk: 545, def: 444, spd: 333 },
      skill: [
        {
          title: "先進のゲノム創薬",
          desc: "バジェットを3ターン増やし続ける。このアミュレットが破壊されると効果は消える",
        },
        {
          title: "メガファーマパワー",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        { title: "おすすめのお薬", desc: "味方全員のHP回復" },
      ],
    },
  },
  {
    id: "cl9coermq0epg1umj1b3686gu",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coermq0epg1umj1b3686gu.webp",
    info: "町一番の花屋。どんな花でも売る。敵を倒す花でも。\nイラスト：たけみや\n\n＜中西プロデューサーのオススメ＞\n初期スキルが『味方全員のスピードを3ターンアップさせる』というもの。一方的に先手が取りやすくなる。",
    category: "マーチャンダイザー",
    type: "NORMAL",
    name: "花屋(Nature)",
    spec: {
      status: { hp: 1695, atk: 550, def: 440, spd: 321 },
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
    id: "cl9coewl40fhj1umj39un1m50",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9coewl40fhj1umj39un1m50.webp",
    info: "一説に将棋の局面パターンは無量大数。この銀河系全ての原子の数と同数。銀河の視点を持つ神。\nイラスト：色合mdd",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "プロ棋士(Poison)",
    spec: {
      status: { hp: 1650, atk: 565, def: 428, spd: 330 },
      skill: [
        {
          title: "盤なし対局",
          desc: "敵のバジェットを3ターン減らし続ける。このアミュレットが破壊されると効果は消える",
        },
        { title: "穴熊の姿焼き", desc: "ランダムな敵に3回ダメージ" },
        {
          title: "ギガ糖分摂取",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9cofqv00k8z1umj528d8anb",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofqv00k8z1umj528d8anb.webp",
    info: "「溶かす？ 何がいい？ 電気？ ガス？ レーザー？ 摂氏二万度まで行けるぜ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "溶接工(Fire)",
    spec: {
      status: { hp: 1695, atk: 555, def: 440, spd: 318 },
      skill: [
        { title: "神々の溶接", desc: "敵のバジェットを減らす" },
        { title: "電子ビーム銃", desc: "敵1体に特大ダメージ" },
        { title: "プラズマ切断", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofv3v0kx11umjdf1oaqoe",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofv3v0kx11umjdf1oaqoe.webp",
    info: "「授業を始めます。席に着いて。戦い？ では戦い方を教えます。武器を持って」\nイラスト：色合mdd",
    category: "教育",
    type: "NORMAL",
    name: "教師(Poison)",
    spec: {
      status: { hp: 1665, atk: 545, def: 432, spd: 336 },
      skill: [
        { title: "抜き打ちテスト", desc: "敵全員のDEFを下げる。3ターン有効" },
        { title: "危険物没収", desc: "敵1体に特大ダメージ" },
        { title: "突然のホームルーム", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofew50idg1umjg4vxfvmh",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofew50idg1umjg4vxfvmh.webp",
    info: "「授業を始めます。席に着いて。戦い？ では戦い方を教えます。武器を持って」\nイラスト：色合mdd",
    category: "教育",
    type: "NORMAL",
    name: "教師(Water)",
    spec: {
      status: { hp: 1665, atk: 545, def: 432, spd: 336 },
      skill: [
        { title: "抜き打ちテスト", desc: "敵全員のDEFを下げる。3ターン有効" },
        { title: "危険物没収", desc: "敵1体に特大ダメージ" },
        { title: "突然のホームルーム", desc: "敵全員に大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofriz0kcr1umj82sm465f",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9cofriz0kcr1umj82sm465f.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Earth)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofa980hn31umjdbxs5pmd",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofa980hn31umjdbxs5pmd.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Poison)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofopl0jwu1umjbbep8an6",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cofopl0jwu1umjbbep8an6.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Thunder)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coemck0dvg1umj2fhr28hs",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9coemck0dvg1umj2fhr28hs.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Nature)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cog0fj0lrc1umj9t1s3ead",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cog0fj0lrc1umj9t1s3ead.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Water)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofiga0ixj1umjg8s7bfn6",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cofiga0ixj1umjg8s7bfn6.webp",
    info: "「あの庭師にしてから、庭のバラが実に綺麗になったな」「ええ。そういえば、子供たちの猫と犬がいなくなってしまって大騒ぎしていたわ」\nイラスト：色合mdd",
    category: "クラフター",
    type: "NORMAL",
    name: "庭師(Fire)",
    spec: {
      status: { hp: 1635, atk: 555, def: 444, spd: 327 },
      skill: [
        { title: "流麗なる枯山水", desc: "敵全員に大ダメージ" },
        { title: "芝刈り乱舞", desc: "敵1体のATKを下げる。3ターン有効" },
        { title: "疾風の長柄剪定鋏", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9coeygc0fs91umj32wa9uzy",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coeygc0fs91umj32wa9uzy.webp",
    info: "「常に最前線の仕事です。私のいる場所が次の瞬間敵地になるかもしれない。ですが、そうならないように働くのも我々の仕事です。たとえ相手が人間でなくとも」\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "外交官(Earth)",
    spec: {
      status: { hp: 1665, atk: 555, def: 436, spd: 327 },
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
    id: "cl9cofgah0ild1umjdaupgnpo",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cofgah0ild1umjdaupgnpo.webp",
    info: "「常に最前線の仕事です。私のいる場所が次の瞬間敵地になるかもしれない。ですが、そうならないように働くのも我々の仕事です。たとえ相手が人間でなくとも」\nイラスト：色合mdd",
    category: "パブリックサービス",
    type: "NORMAL",
    name: "外交官(Poison)",
    spec: {
      status: { hp: 1665, atk: 555, def: 436, spd: 327 },
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
    id: "cl9cofz820lkh1umj507hhkto",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cofz820lkh1umj507hhkto.webp",
    info: "「土地はどこにでもある。そこが誰の持ち物でもない場合お売りします。誰かの持ち物である場合は私の物にしてお売りします」\nイラスト：大滝ノスケ",
    category: "金融・不動産",
    type: "NORMAL",
    name: "不動産販売業者(Thunder)",
    spec: {
      status: { hp: 1605, atk: 565, def: 440, spd: 330 },
      skill: [
        {
          title: "秘技：テナントラビリンス",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "土地精製：住宅地", desc: "敵1体に特大ダメージ" },
        {
          title: "楼閣精製：タワーマンション",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9cofasi0hq41umjbftw4xfv",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofasi0hq41umjbftw4xfv.webp",
    info: "「土地はどこにでもある。そこが誰の持ち物でもない場合お売りします。誰かの持ち物である場合は私の物にしてお売りします」\nイラスト：大滝ノスケ",
    category: "金融・不動産",
    type: "NORMAL",
    name: "不動産販売業者(Water)",
    spec: {
      status: { hp: 1605, atk: 565, def: 440, spd: 330 },
      skill: [
        {
          title: "秘技：テナントラビリンス",
          desc: "敵全員のSPDを下げる。3ターン有効",
        },
        { title: "土地精製：住宅地", desc: "敵1体に特大ダメージ" },
        {
          title: "楼閣精製：タワーマンション",
          desc: "ランダムな敵に3回ダメージ",
        },
      ],
    },
  },
  {
    id: "cl9coexlh0fnc1umjb9o0chkt",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coexlh0fnc1umjb9o0chkt.webp",
    info: "「仕事？ 伝えること、楽しませることかな。あとは……欲しがらせること」 －あるテレビ局員\nイラスト：ジジ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "テレビ局社員(Thunder)",
    spec: {
      status: { hp: 1650, atk: 565, def: 440, spd: 321 },
      skill: [
        { title: "ノーヴェルPレーザー", desc: "敵1体に特大ダメージ" },
        {
          title: "秘術：視聴率急上昇",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
        { title: "テストパターンウェーブ", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof8er0hcn1umjd45e17xq",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9cof8er0hcn1umjd45e17xq.webp",
    info: "「仕事？ 伝えること、楽しませることかな。あとは……欲しがらせること」 －あるテレビ局員\nイラスト：ジジ",
    category: "情報・運輸",
    type: "NORMAL",
    name: "テレビ局社員(Fire)",
    spec: {
      status: { hp: 1650, atk: 565, def: 440, spd: 321 },
      skill: [
        { title: "ノーヴェルPレーザー", desc: "敵1体に特大ダメージ" },
        {
          title: "秘術：視聴率急上昇",
          desc: "敵1体のDEFを下げる。3ターン有効",
        },
        { title: "テストパターンウェーブ", desc: "ランダムな敵に3回ダメージ" },
      ],
    },
  },
  {
    id: "cl9cofb9q0hsv1umjc4vg700t",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofb9q0hsv1umjc4vg700t.webp",
    info: "簡単な仕事さ。真冬の北極、嵐の海で籠を沈めて回収する。中にカニが入ってれば万歳さ。大儲けできるぜ。なに、40日ほど寝られないだけだ。‐アラスカのカニ漁師\nイラスト：モ太朗",
    category: "ギャザラー",
    type: "NORMAL",
    name: "カニ漁師(Water)",
    spec: {
      status: { hp: 1620, atk: 560, def: 444, spd: 327 },
      skill: [
        { title: "気合の底引き網", desc: "ランダムな敵に3回ダメージ" },
        { title: "20時間労働", desc: "敵1体のSPDを下げる。3ターン有効" },
        { title: "カニシザー！", desc: "敵1体に特大ダメージ" },
      ],
    },
  },
  {
    id: "cl9cof6y70h4b1umjfd3ybg1a",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9cof6y70h4b1umjfd3ybg1a.webp",
    info: "時代と共に名前や立場が違っても、彼らの仕事は変わらない。それは「未来を守る」ことだ。\nイラスト：RO-Mai",
    category: "教育",
    type: "NORMAL",
    name: "保育士(Thunder)",
    spec: {
      status: { hp: 1635, atk: 540, def: 448, spd: 333 },
      skill: [
        { title: "お遊戯のじかん", desc: "バジェットを増やす" },
        { title: "癒しの子守歌", desc: "味方全員のHP回復" },
        {
          title: "慈愛のトロッコ：集団移動",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
      ],
    },
  },
  {
    id: "cl9coestg0ew81umjdu1oaf5f",
    rarity: "EPIC",
    element: "EARTH",
    image: "/images/amulets/epic/cl9coestg0ew81umjdu1oaf5f.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Earth)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cof47b0gos1umjexzd4hxw",
    rarity: "EPIC",
    element: "POISON",
    image: "/images/amulets/epic/cl9cof47b0gos1umjexzd4hxw.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Poison)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coejwj0dho1umj55ki0fg0",
    rarity: "EPIC",
    element: "THUNDER",
    image: "/images/amulets/epic/cl9coejwj0dho1umj55ki0fg0.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Thunder)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofgmz0inc1umj67t9gdnd",
    rarity: "EPIC",
    element: "NATURE",
    image: "/images/amulets/epic/cl9cofgmz0inc1umj67t9gdnd.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Nature)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9cofo0z0jt11umjbrtlbmez",
    rarity: "EPIC",
    element: "WATER",
    image: "/images/amulets/epic/cl9cofo0z0jt11umjbrtlbmez.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Water)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
  {
    id: "cl9coenfp0e1n1umjgxbdcmk3",
    rarity: "EPIC",
    element: "FIRE",
    image: "/images/amulets/epic/cl9coenfp0e1n1umjgxbdcmk3.webp",
    info: "伝説のメイドカフェ店員は一万人のご主人様に仕え、十万の料理を運び、百万のオムライスにハートを描いたという。ケチャップで。\nイラスト：りーん",
    category: "エンターテイナー",
    type: "NORMAL",
    name: "メイドカフェ店員(Fire)",
    spec: {
      status: { hp: 1590, atk: 540, def: 456, spd: 336 },
      skill: [
        { title: "咲き誇る華たち", desc: "味方全員のHP回復" },
        {
          title: "萌え萌えキュン♡",
          desc: "敵1体にダメージを与え、自分のHPを回復する",
        },
        {
          title: "美味の呪文",
          desc: "バジェットを2ターン後に大きく増やす。このアミュレットが破壊されると効果は消える",
        },
      ],
    },
  },
];
