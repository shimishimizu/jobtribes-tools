import React from "react";
import Header from "@/components/Header";
import AmuletDetail from "./_components/AmuletDetail";
// import { getAllAmulets } from "@/utils/supabaseFunctions";

const Amulet = ({ params }: { params: { id: string } }) => {
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
