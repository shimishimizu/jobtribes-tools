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
      placeholder="アミュレット名で絞り込む ..."
      value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn("name")?.setFilterValue(event.target.value)
      }
      className="max-w-xl"
    />
  );
};

export default FilterInput;
