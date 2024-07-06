import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  desc: string;
  path: string;
};

const ContentsCard = ({ item }: { item: Props }) => {
  return (
    <>
      {item.path ? (
        <Link
          href={item.path}
          className="mx-auto w-full max-w-[500px] rounded-md border p-3 py-4 transition hover:-translate-y-2 hover:ring-4 md:w-[30%]"
        >
          <h2 className="mb-4 text-center text-lg font-bold">{item.title}</h2>
          <p
            className="text-sm text-slate-600"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </Link>
      ) : (
        <div className="mx-auto flex w-full max-w-[500px] cursor-not-allowed flex-col rounded-md border p-3 py-4 md:w-[30%]">
          <h2 className="mb-4 text-center text-lg font-bold">{item.title}</h2>
          <p
            className="flex h-full items-center justify-center text-sm text-slate-600"
            dangerouslySetInnerHTML={{ __html: item.desc }}
          />
        </div>
      )}
    </>
  );
};

export default ContentsCard;
