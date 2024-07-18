import React from "react";
import { Input } from "@/components/ui/input";
import { Amulet } from "../_types/types";
import { Table } from "@tanstack/react-table";

type Props = {
  table: Table<Amulet>;
};

const FilterInput = ({ table }: Props) => {
  return (
    <Input
      placeholder="名前、スキル詳細で絞り込む ..."
      value={(table.getState().globalFilter as string) ?? ""}
      onChange={(event) => table.setGlobalFilter(event.target.value)}
      className="max-w-xl"
    />
  );
};

export default FilterInput;
