import { ColumnDef } from "@tanstack/react-table";
import { Amulet } from "../_types/types";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const columns: ColumnDef<Amulet>[] = [
  {
    accessorKey: "image",
    header: "IMAGE",
    cell: ({ row }) => {
      const path: string = row.getValue("image");
      const name: string = row.getValue("name");
      return (
        <Image
          src={path}
          width={80}
          height={80}
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
      // const fromatted =
      return <div className="text-ellipsis">{name}</div>;
    },
  },
  {
    accessorKey: "element",
    header: "ELEMENT",
  },
  {
    accessorKey: "type",
    header: "TYPE",
  },
  {
    accessorKey: "category",
    header: "CATEGORY",
  },
  {
    accessorKey: "spec.status.hp",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting()}
          className="px-3"
        >
          HP
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "spec.status.atk",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting()}
          className="px-3"
        >
          ATK
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "spec.status.def",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting()}
          className="px-3"
        >
          DEF
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "spec.status.spd",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting()}
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="px-3"
        >
          SPD
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
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
            詳細
          </Link>
        </Button>
      );
    },
  },
];
