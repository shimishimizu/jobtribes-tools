import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Amulet } from "../../_types/types";

type Props = {
  label: string;
  amuletSkill?: Amulet["spec"]["skill"];
  amuletAbility?: Amulet["spec"]["ability"];
};

const AmuletDetailTable = ({ label, amuletSkill, amuletAbility }: Props) => {
  return (
    <>
      {/* <h2 className="mb-2 text-center font-medium text-slate-800">
        【{label}】
      </h2> */}
      <Table className="min-w-[600px] overflow-auto">
        <TableHeader className="whitespace-nowrap bg-slate-100">
          <TableRow>
            <TableHead className="w-[150px]">{label}名</TableHead>
            <TableHead>詳細</TableHead>
            {/* {label === "スキル" && (
              <TableHead className="text-right">消費バジェット</TableHead>
            )} */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {amuletSkill &&
            amuletSkill.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold">{item.title}</TableCell>
                <TableCell>{item.desc}</TableCell>
                {/* <TableCell className="text-center">{item.budget}</TableCell> */}
              </TableRow>
            ))}
          {amuletAbility &&
            amuletAbility.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-bold">{item.title}</TableCell>
                <TableCell>{item.desc}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AmuletDetailTable;
