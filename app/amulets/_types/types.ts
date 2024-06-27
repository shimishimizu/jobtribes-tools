import { ColumnDef } from "@tanstack/react-table";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export type Amulet = {
  id: string;
  name: string;
  rarity: string;
  element: "FIRE" | "NATURE" | "WATER" | "EARTH" | "THUNDER" | "POISEN";
  image: string;
  info: string;
  category:
    | "アンノウン"
    | "サービス"
    | "エンターテイナー"
    | "マーチャンダイザー"
    | "スペシャリスト"
    | "金融・不動産"
    | "情報・運輸"
    | "クラフター"
    | "医療"
    | "教育"
    | "パブリックサービス"
    | "ギャザラー";
  type: "NORMAL" | "ANOTHER";
  spec: {
    status: {
      hp: number;
      atk: number;
      def: number;
      spd: number;
    };
    skill: {
      title: string;
      desc: string;
      budget?: number;
    }[];
    ability?: {
      title: string;
      desc: string;
    }[];
  };
};
