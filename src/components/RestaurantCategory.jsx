import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showIndex, setShowIndex }) => {
  const handleClick = () => {
    console.log("Clicked!!");
    setShowIndex();
  };
  return (
    <>
      <div className="  w-full bg-gray-100 my-4 shadow-lg p-4 rounded-2xl ">
        <div
          className=" font-bold flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span>
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showIndex && <ItemList data={data?.itemCards} />}
      </div>
    </>
  );
};

export default RestaurantCategory;
