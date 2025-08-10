import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const data = useRestaurantMenu(resId);
  if (data === null) return <Shimmer />;
  return data == [] ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="menu">
        <h1>{data.name}</h1>
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
