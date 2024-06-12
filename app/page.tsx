import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <Link href={"/amulets"}>アミュレット一覧</Link>
    </div>
  );
}
