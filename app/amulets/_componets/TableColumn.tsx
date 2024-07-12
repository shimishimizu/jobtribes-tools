import { ColumnDef, FilterFn, Row } from "@tanstack/react-table";
import { Amulet } from "../_types/types";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  categoryIcon,
  elementIcon,
  rarityIcon,
  typeIcon,
} from "../_constants/Icon";
import { IoIosLink } from "react-icons/io";

// カスタムフィルタ関数を定義
const exactTextFilterFn: FilterFn<Amulet> = (
  row: Row<Amulet>,
  columnId: string,
  filterValue: string,
) => {
  const rowValue = row.getValue(columnId);
  return rowValue !== undefined ? rowValue === filterValue : true;
};

// フィルタ関数を自動的に削除する条件を設定
exactTextFilterFn.autoRemove = (val) => !val;

export const columns: ColumnDef<Amulet>[] = [
  // データ追加時のID確認用
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  {
    accessorKey: "image",
    header: "IMAGE",
    cell: ({ row }) => {
      const path: string = row.getValue("image");
      const name: string = row.getValue("name");
      return (
        <Image
          src={path}
          width={70}
          height={70}
          alt={name}
          placeholder="blur"
          blurDataURL={"/images/blur.webp"}
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      const id: string = row.getValue("id");
      // 文字数多いならフォーマット
      return (
        <div className="text-ellipsis">
          <Link href={`amulets/${id}`} className="underline">
            {name}
            <IoIosLink className="inline" />
          </Link>
        </div>
      );
    },
  },
  {
    accessorKey: "rarity",
    header: () => {
      return <span className="block text-center">RARITY</span>;
    },
    cell: ({ row }) => {
      const rarity: string = row.getValue("rarity");
      const path = rarityIcon.find((item) => item.name === rarity);
      return path ? (
        <Image
          src={path.image}
          alt={rarity}
          width={50}
          height={50}
          className="mx-auto rounded-[8px]"
          placeholder="blur"
          blurDataURL={"/images/blur.webp"}
        />
      ) : (
        <p className="text-center">{rarity}</p>
      );
    },
  },
  {
    accessorKey: "element",
    header: () => {
      return <span className="block text-center">ELEMENT</span>;
    },
    cell: ({ row }) => {
      const element: string = row.getValue("element");
      const path = elementIcon.find((item) => item.name === element);
      return path ? (
        <Image
          src={path.image}
          alt={element}
          width={50}
          height={50}
          className="mx-auto rounded-[8px]"
          placeholder="blur"
          blurDataURL={"/images/blur.webp"}
        />
      ) : (
        <p className="text-center">{element}</p>
      );
    },
  },
  {
    accessorKey: "type",
    header: () => {
      return <span className="block text-center">TYPE</span>;
    },
    cell: ({ row }) => {
      const type: string = row.getValue("type");
      const path = typeIcon.find((item) => item.name === type);
      return path ? (
        <Image
          src={path.image}
          alt={type}
          width={50}
          height={50}
          className="mx-auto rounded-[8px]"
          placeholder="blur"
          blurDataURL={"/images/blur.webp"}
        />
      ) : (
        <p className="text-center">{type}</p>
      );
    },
  },
  {
    accessorKey: "category",
    header: () => {
      return <span className="block text-center">CATEGORY</span>;
    },
    filterFn: exactTextFilterFn,
    cell: ({ row }) => {
      const category: string = row.getValue("category");
      const path = categoryIcon.find((item) => item.name === category);
      return path ? (
        <Image
          src={path.image}
          alt={category}
          width={50}
          height={50}
          className="mx-auto"
          placeholder="blur"
          blurDataURL={"/images/blur.webp"}
        />
      ) : (
        <p className="text-center">{category}</p>
      );
    },
  },
  {
    accessorKey: "spec.status.hp",
    header: ({ column }) => {
      return (
        <span className="block text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            className="px-3"
          >
            HP
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </span>
      );
    },
    cell: ({ row }) => {
      const hp: string = row.getValue("spec_status.hp");
      return <p className="text-center">{hp}</p>;
    },
  },
  {
    accessorKey: "spec.status.atk",
    header: ({ column }) => {
      return (
        <span className="block text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            className="px-3"
          >
            ATK
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </span>
      );
    },
    cell: ({ row }) => {
      const atk: string = row.getValue("spec_status.atk");
      return <p className="text-center">{atk}</p>;
    },
  },
  {
    accessorKey: "spec.status.def",
    header: ({ column }) => {
      return (
        <span className="block text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            className="px-3"
          >
            DEF
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </span>
      );
    },
    cell: ({ row }) => {
      const def: string = row.getValue("spec_status.def");
      return <p className="text-center">{def}</p>;
    },
  },
  {
    accessorKey: "spec.status.spd",
    header: ({ column }) => {
      return (
        <span className="block text-center">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting()}
            // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="px-3"
          >
            SPD
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </span>
      );
    },
    cell: ({ row }) => {
      const spd: string = row.getValue("spec_status.spd");
      return <p className="text-center">{spd}</p>;
    },
  },
  {
    accessorKey: "id",
    header: "",
    cell: ({ row }) => {
      const id: string = row.getValue("id");
      return (
        <Button asChild variant={"outline"} size={"lg"}>
          <Link href={`amulets/${id}`} className="">
            詳細を見る
          </Link>
        </Button>
      );
    },
  },
];
