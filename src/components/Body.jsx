import { useState, useEffect, useContext } from "react";
import resList from "../utils/mockData";
import RestaurantCard, { isRestaurantOpen } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_API } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantOpenCard = isRestaurantOpen(RestaurantCard);
const { loggedInUser, setUserName } = useContext(UserContext);
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const handleUserNameChange = (e) => {
  //     if (e.key === "Enter") {
  //       setUserName(name)
  //       console.log("Changed User Name: ",name);
  //     }
  //   };
  useEffect(
    () => {
      // console.log("while loading...", listOfRestaurants);
      fetchData();
    }, ///Callback function - called as soon as the render cycle is finished
    []
  );

  // useEffect(() => {
  //   document.addEventListener("keypress", handleUserNameChange);
  //   return () => {
  //     document.removeEventListener("keypress", handleUserNameChange);
  //   };
  // }, [name]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(SWIGGY_API);
      // console.log("response", response);
      const json = await response.json();
      // console.log("response", json);
      // console.log(
      //   "response",
      //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
      //     ?.restaurants
      // );
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.error("ERROR", err);
    } finally {
      setIsLoading(false);
    }
  };
  const handleFilter = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((res) => res?.info?.avgRating > 4.5)
    );
    return listOfRestaurants;
  };

  // if(listOfRestaurants.length === 0){
  //   return <Shimmer />
  // }
  // console.log(searchText)

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection!
      </h1>
    );
  // console.log("listofRestaurant", listOfRestaurants);
  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="m-4">
        <input
          className="m-4 p-2 border border-black border-solid rounded-lg"
          type="text"
          placeholder="Search...."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        {/* <div className="flex px-4 py-2"> */}
        <button
          className="mx-4 px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg cursor-pointer"
          onClick={() => {
            // console.log("listOfRestaurants", listOfRestaurants);
            const filteredListOfrestaurant = listOfRestaurants.filter((res) =>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            // const filteredListOfrestaurant = listOfRestaurants.filter((res) => console.log(res?.info?.name))
            // console.log(filteredListOfrestaurant);
            filteredListOfrestaurant.length !== 0
              ? setFilteredRestaurants(filteredListOfrestaurant)
              : setFilteredRestaurants([]);
          }}
        >
          Search
        </button>
        {/* </div> */}
        <button
          className="mx-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
          onClick={handleFilter}
        >
          {" "}
          Top Rated Restaurants{" "}
        </button>
        User Name-{" "}
        <input
          type="text"
          className="border border-black rounded-md p-2"
          value={loginName}
          // onChange={(e) => setName(e.target.value)}
        />
      </div>
      {filteredResaurants?.length !== 0 ? (
        <div className="flex flex-wrap">
          {filteredResaurants.map((res) => (
            <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
              {res?.info?.isOpen ? (
                <RestaurantOpenCard resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
              {/* <RestaurantCard resData={res} /> */}
            </Link>
          ))}
        </div>
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
};

export default Body;
