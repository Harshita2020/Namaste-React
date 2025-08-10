import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response = await fetch(MENU_API + resId);
    const json = await response.json();
    setData(json?.data?.cards[2].card.card.info);
  };
  return data;
};

export default useRestaurantMenu;
