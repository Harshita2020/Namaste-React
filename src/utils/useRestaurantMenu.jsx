import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { mockMenu } from "./mockMenu";
const useRestaurantMenu = (resId) => {
  console.log("RESTAURANT ID- ", resId)
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try{

      console.log("Here?")
      const response = await fetch(MENU_API + resId);
      console.log("Here???")
      const json = await response.json();
      console.log("Here??????")
      console.log("DATA => ?????", json)
      setData(json);
    } catch (err){
      console.log("ERROR!", err);
      const mockData = mockMenu.data
      console.log("MOCK DATA", mockData)
      setData(mockData)
    }
  };
  return data;
};

export default useRestaurantMenu;
