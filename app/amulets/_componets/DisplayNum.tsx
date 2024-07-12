import React from "react";
import { Amulet } from "../_types/types";
import { Table } from "@tanstack/react-table";

type Props = {
  table: Table<Amulet>;
};

const DisplayNum = ({ table }: Props) => {
  return (
    <p className="mb-1 px-2 text-sm font-semibold text-muted-foreground">
      {table.getRowCount()} 件 ヒット
    </p>
  );
};

export default DisplayNum;
