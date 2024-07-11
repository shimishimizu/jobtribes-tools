import React, { useState } from "react";
import { columns } from "../_componets/TableColumn";
import { AMULETS_DATA as data } from "../_constants/amulets";
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

export const useAmuletsTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    rarity: false, // デフォルトで非表示
    element: false,
    type: false,
    category: false,
    id: false,
  });
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  const changeDisplayValue = (value: string) => {
    let displayName = "";
    switch (value) {
      case "spec_status.hp":
        displayName = "HP";
        break;
      case "spec_status.atk":
        displayName = "ATK";
        break;
      case "spec_status.def":
        displayName = "DEF";
        break;
      case "spec_status.spd":
        displayName = "SPD";
        break;
      case "id":
        displayName = "詳細リンク";
        break;
      default:
        displayName = value;
        break;
    }
    return displayName.toUpperCase();
  };

  const amuletTable = {
    table,
    changeDisplayValue,
  };
  return amuletTable;
};
