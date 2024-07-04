import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed z-10 w-full bg-black text-white">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <div>LOGO</div>
        <ul className="flex items-center gap-4">
          <li>
            <Link href={"/amulets"}>アミュレット一覧</Link>
          </li>
          <li>
            <Link href={"/terms"}>利用規約</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
