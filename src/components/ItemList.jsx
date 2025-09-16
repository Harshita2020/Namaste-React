import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  // console.log("Item data, ", data);
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="m-4 p-2 border-b-2 border-gray-400 text-left flex"
          >
            <div className="w-9/12">
              <div className="py-2 font-medium">
                <div>
                  <span>{item?.card?.info?.name}</span> - &nbsp;
                  <span>₹ {item?.card?.info?.price / 100} </span>
                </div>
              </div>
              <p>{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 items-center relative">
              <div className="absolute top-4 left-4 ">
                <button className=" bg-black text-white shadow-lg p-3 rounded-lg cursor-pointer">
                  Add +
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="rounded-lg m-4"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
