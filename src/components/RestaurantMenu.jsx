import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { div } from "framer-motion/client";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  resData !== null && console.log("Data: ", resData);
  const data = resData?.data?.cards[2].card.card.info;
  const menuData =
    resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log("-------------MENU DATA: --------------", menuData)
  const menuItems = menuData?.filter((menuItem) =>
    menuItem?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("-------------MENU ITEMS: --------------", menuItems);
  // console.log(first)
  if (!resData) return <Shimmer />;
  return resData == null ? (
    <Shimmer />
  ) : (
    <div className="flex mx-auto">
      <div className=" px-4 py-8 my-4 flex flex-col text-left mx-auto w-1/2">
        <h1 className="font-bold py-2 my-4 text-left text-3xl ">{data.name}</h1>
        <div
          className="font-bold border border-gray-200 rounded-2xl p-6 
  shadow-[0_6px_10px_rgba(0,0,0,0.1),4px_0_6px_rgba(0,0,0,0.05),-4px_0_6px_rgba(0,0,0,0.05)] bg-white"
        >
          <h3>
            <span>
              ✨{data.avgRatingString} ({data?.totalRatingsString}){" "}
            </span>
            <span className="text-gray-400">•</span> {data?.costForTwoMessage}
          </h3>
          <p className="text-orange-500 underline">
            {data?.cuisines?.join(", ") || "No cuisines available"}
          </p>{" "}
          <div className="my-2">
            <div
              className="relative border-l border-gray-400 h-12 pl-4
            before:content-[''] before:absolute before:-left-1 before:top-0
            before:w-2 before:h-2 before:bg-gray-400 before:rounded-full
            after:content-[''] after:absolute after:-left-1 after:bottom-0
            after:w-2 after:h-2 after:bg-gray-400 after:rounded-full"
            >
              <ul className="">
                <li>
                  Outlet{" "}
                  <span className="text-[rgba(2, 6, 12, 0.6)] pl-2 font-medium">
                    {data?.areaName || "..."}
                  </span>{" "}
                  <span className="text-orange-400">▾</span>
                </li>
                <li>{data?.sla?.slaString?.toLowerCase() || "..."}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="80"
              viewBox="0 0 600 100"
            >
              {/* Left curve */}
              <path
                d="M250 50 H120 C95 50, 95 25, 120 25 C145 25, 145 75, 120 75"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />

              {/* Menu text */}
              <text
                x="300"
                y="62"
                textAnchor="middle"
                fontSize="38"
                fontFamily="serif"
                fontWeight="bold"
                padding="20"
              >
                MENU
              </text>

              {/* Right curve */}
              <path
                d="M350 50 H480 C505 50, 505 25, 480 25 C455 25, 455 75, 480 75"
                fill="none"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </div>
          {menuItems.map((category, i) => {
            return  <RestaurantCategory key={i} data={category?.card?.card}/>
          })}
          {/* {menuItems.map((menuItem) => {
            return (
              <div key={menuItem?.card?.card?.categoryId}>
                <div className="m-4 p-4 bg-amber-100 justify-between items-center">
                  {menuItem?.card?.card?.title} ({menuItem?.card?.card?.itemCards.length})
                  🔽
                </div>
                <div className="pl-4 ml-4 border-l-8 border-orange-200">
                  {menuItem?.card?.card?.itemCards?.map((itemCard, i) => {
                    // console.log("itemCard found!!!", itemCard?.card?.info?.id);
                    return (
                      <div key={itemCard?.card?.info?.id}>
                        {itemCard?.card?.info?.name} - &nbsp;
                        {itemCard?.card?.info?.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
