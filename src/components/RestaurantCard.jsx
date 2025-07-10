import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.card?.card?.info;

  const { deliveryTime } = resData?.card?.card?.info?.sla;
  console.log(resData.card.card.info.cloudinaryImageId);
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")}</p>
      <h4>{avgRating}✨</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} Minutes⌛</h4>
    </div>
  );
};

export default RestaurantCard