import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  table: any;
  column: {
    name: string;
    id: string;
    options: {
      value: string;
      label: string;
    }[];
  };
};

const FilterSelect = ({ table, column }: Props) => {
  return (
    <Select
      value={(table.getColumn(column.id)?.getFilterValue() as string) ?? ""}
      onValueChange={(value) =>
        value === "reset"
          ? table.getColumn(column.id)?.setFilterValue("")
          : table.getColumn(column.id)?.setFilterValue(value)
      }
    >
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder={`${column.name}で絞り込む`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="reset">🔄 リセット</SelectItem>
          {column.options.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
