import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { mockMenu } from "./mockMenu";
const useRestaurantMenu = (resId) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try{

      const response = await fetch(MENU_API + resId);
      const json = await response.json();
      console.log("DATA", json)
      setData(json);
    } catch (err){
      console.error("ERROR!", err);
      const mockData = mockMenu.data
      console.log("MOCK DATA", mockData)
      setData(mockData)
    }
  };
  return data;
};

export default useRestaurantMenu;
