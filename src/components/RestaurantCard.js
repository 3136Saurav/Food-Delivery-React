import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { info } = restaurant;
  const { name, cloudinaryImageId, costForTwo, cuisines, sla, avgRating } =
    info;

  return (
    <div
      data-testid="restaurantCard"
      className="m-2 h-[550] p-10 max-w-sm rounded overflow-hidden shadow-lg hover:bg-gray-200"
    >
      <img className="w-full h-2/3" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold text-xl m-2">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700 text-base">{costForTwo}</h4>
      <h4 className="text-gray-700 text-base">{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} mins</h4>
    </div>
  );
};

// Higher Order Component
export const withHigherRating = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-600 text-white rounded-sm p-2">
          HOT
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
