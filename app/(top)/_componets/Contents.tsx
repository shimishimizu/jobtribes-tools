import React, { Fragment } from "react";
import ContentsCard from "./ContentsCard";
import { contentsData } from "../_constants/contents";

const Contents = () => {
  return (
    <div className="mx-auto h-dvh max-w-screen-lg px-4 pb-10 pt-24">
      <div className="flex h-full flex-col justify-center">
        <div className="flex flex-col flex-wrap justify-center gap-6 md:flex-row md:gap-4">
          {contentsData.map((item, index) => (
            <Fragment key={index}>
              <ContentsCard item={item} />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contents;
