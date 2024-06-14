import React from "react";
import { AMULETS_DATA as data } from "../_constants/amulets";
import Header from "@/components/Header";
import Image from "next/image";
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
import { notFound } from "next/navigation";

const AmuletDetail = ({ params }: { params: { id: string } }) => {
  const amulet = data.find((item) => item.id === params.id);
  console.log(amulet);
  return (
    <>
      <Header />
      {amulet ? (
        <div className="mx-auto max-w-screen-lg px-4 pb-10 pt-28">
          <h1 className="mb-10 text-center text-xl font-bold">{amulet.name}</h1>

          <div className="mb-5 flex items-start justify-center gap-4">
            <Image
              src={amulet.image}
              width={200}
              height={200}
              alt={amulet.name}
              className="w-[50%] max-w-[200px]"
            />
            <div>
              <p className="mb-2">{amulet.category}</p>
              <p dangerouslySetInnerHTML={{ __html: amulet.info }}></p>
            </div>
          </div>

          <div className="flex flex-col gap-y-10">
            <div>
              <h2 className="mb-2 text-center font-medium text-slate-800">
                【ステータス】
              </h2>
              <Table className="min-w-[500px] overflow-auto">
                <TableHeader className="whitespace-nowrap bg-slate-100">
                  <TableRow>
                    <TableHead className="sticky left-0 top-0 w-20 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:border-r before:bg-slate-100"></TableHead>
                    <TableHead className="text-center">Lv.1</TableHead>
                    <TableHead className="text-center">Lv.</TableHead>
                    <TableHead className="text-center">Lv.70</TableHead>
                    {/* <TableHead className="text-center">Lv.70+1</TableHead> */}
                    {/* <TableHead className="text-center">Lv.70+5</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody className="text-center">
                  <TableRow>
                    <TableHead className="sticky left-0 top-0 w-20 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:border-r before:bg-white">
                      HP
                    </TableHead>
                    <TableCell>{amulet.spec.status.hp}</TableCell>
                    <TableCell>{amulet.spec.status.hp * 4}</TableCell>
                    <TableCell>{amulet.spec.status.hp * 4}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="sticky left-0 top-0 w-20 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:border-r before:bg-white">
                      ATK
                    </TableHead>
                    <TableCell>{amulet.spec.status.atk}</TableCell>
                    <TableCell>{amulet.spec.status.atk}</TableCell>
                    <TableCell>{amulet.spec.status.atk}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="sticky left-0 top-0 w-20 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:border-r before:bg-white">
                      DEF
                    </TableHead>
                    <TableCell>{amulet.spec.status.def}</TableCell>
                    <TableCell>{amulet.spec.status.def}</TableCell>
                    <TableCell>{amulet.spec.status.def}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHead className="sticky left-0 top-0 w-20 text-center before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:border-r before:bg-white">
                      SPD
                    </TableHead>
                    <TableCell>{amulet.spec.status.spd}</TableCell>
                    <TableCell>{amulet.spec.status.spd}</TableCell>
                    <TableCell>{amulet.spec.status.spd}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <div>
              <h2 className="mb-2 text-center font-medium text-slate-800">
                【スキル】
              </h2>
              <Table className="min-w-[600px] overflow-auto">
                <TableHeader className="whitespace-nowrap bg-slate-100">
                  <TableRow>
                    <TableHead className="w-[150px]">スキル名</TableHead>
                    <TableHead>詳細</TableHead>
                    <TableHead className="text-right">消費バジェット</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {amulet.spec.skill.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-bold">{item.title}</TableCell>
                      <TableCell>{item.desc}</TableCell>
                      <TableCell className="text-center">
                        {item.budget}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            {amulet.spec.ability && (
              <div>
                <h2 className="mb-2 text-center font-medium text-slate-800">
                  【アビリティ】
                </h2>
                <Table className="min-w-[600px] overflow-auto">
                  <TableHeader className="whitespace-nowrap bg-slate-100">
                    <TableRow>
                      <TableHead className="w-[150px]">アビリティ</TableHead>
                      <TableHead>詳細</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amulet.spec.ability.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-bold">
                          {item.title}
                        </TableCell>
                        <TableCell>{item.desc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  );
};

export default AmuletDetail;
