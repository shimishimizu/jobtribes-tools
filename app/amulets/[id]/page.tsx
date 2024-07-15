import React from "react";
import Header from "@/components/Header";
import AmuletDetail from "./_components/AmuletDetail";
import { Metadata } from "next";
import { AMULETS_DATA } from "../_constants/amulets";
// import { getAllAmulets } from "@/utils/supabaseFunctions";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const amulet = AMULETS_DATA.filter((amulet) => amulet.id === id);
  return {
    title: amulet[0].name,
  };
}

const Amulet = ({ params }: Props) => {
  // // supabaseデータ取得の試し
  // const [amulets, setAmulets] = useState([]);
  // useEffect(() => {
  //   const getAmulets = async () => {
  //     const result = await getAllAmulets();
  //     setAmulets(result);
  //     console.log(result);
  //   };
  //   getAmulets();
  // }, []);

  return (
    <>
      <Header />
      <AmuletDetail id={params.id} />
    </>
  );
};

export default Amulet;
