import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log("Item data, ", data);
  return (
    <div>
      {data.map((item, i) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="m-4 p-2 border-b-2 border-gray-400 text-left flex"
          >
            <div className="w-9/12 h-auto">
              <div className="py-2 font-medium">
                <div>
                  <span>{item?.card?.info?.name}</span> - &nbsp;
                  <span>₹ {item?.card?.info?.price/100 ||  item?.card?.info?.defaultPrice/ 100} </span>
                </div>
              </div>
              <p>{item?.card?.info?.description}</p>
            </div>

            <div className="w-3/12 items-center relative">
              <div className="absolute bottom-0 right-7 ">
                {item?.card?.info?.imageId && <button className="font-bold bg-gray-50 border border-gray-300 text-green-600 shadow-lg py-2 px-4 rounded-lg cursor-pointer">
                  ADD
                </button>}
              </div>
              {item?.card?.info?.imageId && <img
                src={(CDN_URL + item?.card?.info?.imageId)} 
                className="rounded-lg m-4"
                alt={item?.card?.info?.name}
              />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
