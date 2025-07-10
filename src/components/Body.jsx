import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants]  = useState([
    {
      card: {
        card: {
          info: {
            id: "65797",
            name: "Leon's - Burgers & Wings (Leon Grill)",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
            costForTwo: "₹300 for two",
            cuisines: [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental",
            ],
            avgRating: 4.5,
            sla: {
              deliveryTime: 37,
            },
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "65798",
            name: "KFC",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
            costForTwo: "₹300 for two",
            cuisines: [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental",
            ],
            avgRating: 3.5,
            sla: {
              deliveryTime: 37,
            },
          },
        },
      },
    },
    {
      card: {
        card: {
          info: {
            id: "65799",
            name: "MCD",
            cloudinaryImageId:
              "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
            costForTwo: "₹300 for two",
            cuisines: [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental",
            ],
            avgRating: 4.5,
            sla: {
              deliveryTime: 37,
            },
          },
        },
      },
    },
  ]);
  const handleFilter = () => {
    setListOfRestaurants(listOfRestaurants.filter(
      (res) => res?.card?.card?.info?.avgRating > 4
    ));
    console.log(listOfRestaurants);
    return listOfRestaurants;
  };
  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={handleFilter}>
          {" "}
          Top Rated Restaurants{" "}
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="Meghna Foods"
          cuisine="Biryani, North Indian, Asian"
          resRating="4.4 ✨"
          resETA="45 Minutes"
        /> */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.card?.card?.info?.id} resData={res} />
        ))}
        {/* 
        <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} />
        <RestaurantCard resData={resList[4]} />
        <RestaurantCard resData={resList[5]} />
        <RestaurantCard resData={resList[6]} />
        <RestaurantCard resData={resList[7]} />
        <RestaurantCard resData={resList[8]} />
        <RestaurantCard resData={resList[9]} /> */}
      </div>
    </div>
  );
};

export default Body;
