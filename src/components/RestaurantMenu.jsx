import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
// import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [data, setData] = useState([]);
  const {resId} = useParams() 
  console.log("resId", resId)

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId="+ resId+"&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    console.log("jsoon: ", json);
    setData(json?.data?.cards[2].card.card.info);
  };
  // data const {name,avgRating, costForTwo, cuisines} = data[1]?.info

  return data == [] ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="menu">
        {}
        {/* <img
                    className="menu-logo"
                    alt="res-logo"
                    src={
                      CDN_URL +
                      data[1]?.info?.cloudinaryImageId
                    }
                  /> */}
        <h1>{data.name}</h1>
        {/* <p>{data.cuisines.join(", ")}</p> */}
        <h3>
          ✨{data.avgRatingString} ({data?.totalRatingsString}) *{" "}
          {data?.costForTwoMessage}
        </h3>
        <p> {data[1]?.info?.cuisines.join(", ")} </p>
        <div>
          <h2>Menu</h2>
          {data[1]?.info?.cuisines.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </div>

        <h2>{data[1]?.info?.avgRating}✨</h2>
        <h3>{data[1]?.info?.costForTwo}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
