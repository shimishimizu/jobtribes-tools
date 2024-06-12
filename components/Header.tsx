import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full bg-black text-white z-10">
      <div className="container mx-auto flex gap-4 justify-between items-center h-16">
        <div>LOGO</div>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href={"/amulets"}>アミュレット一覧</Link>
          </li>
          <li>
            <Link href={""}>AAA</Link>
          </li>
          <li>
            <Link href={""}>AAA</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
