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
import { Input } from "@/components/ui/input";
import { columns } from "./TableColumn";
import { useAmuletsTable } from "../_hooks/useAmuletsTable";

// async function getData(): Promise<Amulet[]> {
//   // Fetch data from your API here.
//   return AMULETS_DATA;
// }

// export default async function Table() {
//   const data = await getData();

const AmuletsTable = () => {
  const { table, changeDisplayValue } = useAmuletsTable();

  return (
    <div className="mx-auto w-full max-w-6xl px-3 pb-10 pt-24">
      <Input
        placeholder="アミュレット名で絞り込む ..."
        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("name")?.setFilterValue(event.target.value)
        }
        className="max-w-xl"
      />
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
      <p className="mb-1 px-2 text-sm font-semibold text-muted-foreground">
        {table.getRowModel().rows.length}件表示
      </p>
      <div className="rounded-md border">
        <DataTable table={table} columns={columns} />
      </div>
      {/* <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div> */}
    </div>
  );
};

export default AmuletsTable;
