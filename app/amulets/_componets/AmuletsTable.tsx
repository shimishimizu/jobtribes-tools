"use client";
import { columns } from "./TableColumn";
import { DataTable } from "./DataTable";
// import { Amulet } from "../_types/types";
import { AMULETS_DATA } from "../_constants/amulets";

// async function getData(): Promise<Amulet[]> {
//   // Fetch data from your API here.
//   return AMULETS_DATA;
// }

// export default async function Table() {
//   const data = await getData();
const AmuletsTable = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-3 py-10">
      <DataTable columns={columns} data={AMULETS_DATA} />
    </div>
  );
};

export default AmuletsTable;
