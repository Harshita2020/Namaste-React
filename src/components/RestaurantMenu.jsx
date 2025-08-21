import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);
  resData !== null && console.log("Data: " , resData)
  const data = resData?.data?.cards[2].card.card.info

  if (!resData) return <Shimmer />;
  return resData == null ? (
    <Shimmer />
  ) : (
    <div className="flex mx-auto">
      <div className="font-bold px-4 py-8 my-4 flex flex-col text-left mx-auto w-1/2">
        <h1 className="font-bold py-2 my-4 text-left text-3xl ">{data.name}</h1>
        <div
          className="border border-gray-200 rounded-2xl p-6 
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
       
          {

          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
