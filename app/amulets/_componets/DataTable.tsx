import React from "react";
import {
  Table as TableElem,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef, Table, flexRender } from "@tanstack/react-table";
import { Amulet } from "../_types/types";

type Props = {
  table: Table<Amulet>;
  columns: ColumnDef<Amulet>[];
};

const DataTable = ({ table, columns }: Props) => {
  return (
    <div className="rounded-md border">
      <TableElem>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="px-4">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="break-keep p-2">
                    {/* <Link
                  href={`amulets/${cell.row.original.id}`}
                  className="block break-keep px-3 py-2"
                > */}
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    {/* </Link> */}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableElem>
    </div>
  );
};

export default DataTable;
