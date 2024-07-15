import React from "react";
import { TermsData } from "../_constants/terms";

const TermsContent = () => {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-y-8 px-3 pb-10 pt-24 md:gap-y-12">
      <h1 className="text-center text-2xl font-bold">利用規約</h1>
      {TermsData.map((item, index) => (
        <div key={index}>
          <h2 className="mb-4 text-center text-xl font-bold">{item.title}</h2>
          <ul className="flex list-disc flex-col gap-y-2 pl-5 text-base">
            {item.descriptionList.map((desc, index) => (
              <li
                key={index}
                className="leading-6"
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TermsContent;
