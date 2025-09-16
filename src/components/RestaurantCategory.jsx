import React, {useState} from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  // console.log("DATA: ", data)
  const [showItems, setShowItems] = useState(false)
  const handleClick = () => {
    console.log("Clicked!!")
    setShowItems(!showItems)
  }
  return (
    <>
      <div className="  w-full bg-gray-100 my-4 shadow-lg p-4 rounded-2xl ">
        <div className=" font-bold flex justify-between cursor-pointer" onClick={handleClick}>

        <span>
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
        </div>
        {showItems && <ItemList data={data?.itemCards} />}
      </div>
      {/* // Accordian Body */}
    </>
  );
};

export default RestaurantCategory;
