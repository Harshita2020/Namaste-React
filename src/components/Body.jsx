import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants]  = useState([
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "65797",
  //           name: "Leon's - Burgers & Wings (Leon Grill)",
  //           cloudinaryImageId:
  //             "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
  //           costForTwo: "₹300 for two",
  //           cuisines: [
  //             "American",
  //             "Snacks",
  //             "Turkish",
  //             "Portuguese",
  //             "Continental",
  //           ],
  //           avgRating: 4.5,
  //           sla: {
  //             deliveryTime: 37,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "65798",
  //           name: "KFC",
  //           cloudinaryImageId:
  //             "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
  //           costForTwo: "₹300 for two",
  //           cuisines: [
  //             "American",
  //             "Snacks",
  //             "Turkish",
  //             "Portuguese",
  //             "Continental",
  //           ],
  //           avgRating: 3.5,
  //           sla: {
  //             deliveryTime: 37,
  //           },
  //         },
  //       },
  //     },
  //   },
  //   {
  //     card: {
  //       card: {
  //         info: {
  //           id: "65799",
  //           name: "MCD",
  //           cloudinaryImageId:
  //             "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
  //           costForTwo: "₹300 for two",
  //           cuisines: [
  //             "American",
  //             "Snacks",
  //             "Turkish",
  //             "Portuguese",
  //             "Continental",
  //           ],
  //           avgRating: 4.5,
  //           sla: {
  //             deliveryTime: 37,
  //           },
  //         },
  //       },
  //     },
  //   },
  // ]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(
    () => {
      fetchData();
    }, ///Callback function - called as soon as the render cycle is finished
    []
  );

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log("response", json);
      console.log(
        "response",
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("ERROR", err);
    }
  };
  const handleFilter = () => {
    setListOfRestaurants(
      listOfRestaurants.filter(
        (res) => res?.info?.avgRating > 4.5
        // (res) => res?.card?.card?.info?.avgRating > 4
      )
    );
    console.log(listOfRestaurants);
    return listOfRestaurants;
  };

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={handleFilter}>
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
