import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("props", resData?.info)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  // const { deliveryTime } = resData?.info?.sla;
  // console.log(resData.card.card.info.cloudinaryImageId);
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
      <h4>{sla?.deliveryTime} Minutes⌛</h4>
    </div>
  );
};

export default RestaurantCard