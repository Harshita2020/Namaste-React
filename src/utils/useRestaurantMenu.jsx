import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    console.log("DATA", json)
    setData(json);
  };
  return data;
};

export default useRestaurantMenu;
