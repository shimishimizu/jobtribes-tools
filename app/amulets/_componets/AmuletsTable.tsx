"use client";
import FilterSelect from "./FilterSelect";
import {
  columnFilterCategory,
  columnFilterElement,
  columnFilterRarity,
  columnFilterType,
} from "../_constants/dataTable";
import ColumnDropdownMenu from "./ColumnDropdownMenu";
import DataTable from "./DataTable";
import { columns } from "./TableColumn";
import { useAmuletsTable } from "../_hooks/useAmuletsTable";
import FilterInput from "./FilterInput";
import DisplayNum from "./DisplayNum";
import Pagination from "./Pagination";

// async function getData(): Promise<Amulet[]> {
//   // Fetch data from your API here.
//   return AMULETS_DATA;
// }

// export default async function Table() {
//   const data = await getData();

const AmuletsTable = () => {
  const { table, changeDisplayValue } = useAmuletsTable();

  return (
    <div className="mx-auto w-full max-w-6xl px-3 pb-16 pt-24">
      <FilterInput table={table} />
      <div className="flex items-end py-3">
        <div className="space-y-3">
          <FilterSelect table={table} column={columnFilterRarity} />
          <FilterSelect table={table} column={columnFilterElement} />
          <FilterSelect table={table} column={columnFilterCategory} />
          <FilterSelect table={table} column={columnFilterType} />
        </div>
        <ColumnDropdownMenu
          table={table}
          changeDisplayValue={changeDisplayValue}
        />
      </div>
      <Pagination table={table} />
      {/* <DisplayNum table={table} /> */}
      <DataTable table={table} columns={columns} />
      <Pagination table={table} tableBottom />
    </div>
  );
};

export default AmuletsTable;
