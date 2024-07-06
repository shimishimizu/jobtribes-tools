import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4 px-3 md:px-8">
        <div className="font-semibold">
          <Link href={"/"}>JobTribes Tools...</Link>
        </div>
        {/* PC */}
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link href={"/amulets"}>アミュレット一覧</Link>
          </li>
          <li>
            <Link href={"/terms"}>利用規約</Link>
          </li>
        </ul>
        {/* SP */}
        <div className="block md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="h-12 w-12">
                <HamburgerMenuIcon className="m-auto scale-[2]" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4 w-[200px]">
              <DropdownMenuItem className="p-0 text-base">
                <Link href={"/amulets"} className="block w-full px-2 py-1">
                  アミュレット一覧
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="mx-0" />
              <DropdownMenuItem className="p-0 text-base">
                <Link href={"/terms"} className="block w-full px-2 py-1">
                  利用規約
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
