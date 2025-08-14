import {CDN_URL} from "../utils/constants"

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("props", resData?.info)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  // const { deliveryTime } = resData?.info?.sla;
  // console.log(resData.card.card.info.cloudinaryImageId);
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      />
      <h3 className="font-bold text-lg py-4">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")}</p>
      <h4>{avgRating}✨</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Minutes⌛</h4>
    </div>
  );
};

export const isRestaurantOpen = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label>Open</label>
        <RestaurantCard {...props}/>
      </>
    )
  }
}

export default RestaurantCard