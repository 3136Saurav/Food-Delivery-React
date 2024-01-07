import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurantItems = useRestaurantMenu(restaurantId);
  const [showItemIndex, setShowItemIndex] = useState(0);

  if (restaurantItems === null) {
    return <Shimmer />;
  }

  const { itemCards } =
    restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  console.log("ItemCards - Restaurant Menu Items - ", itemCards);

  const categories =
    restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("Restaurant Categories - ", categories);

  const { name } = restaurantItems?.cards[0]?.card?.card?.info;
  const { cuisines } = restaurantItems?.cards[0]?.card?.card?.info;

  return (
    <div className="text-center">
      <h2 className="text-center font-extrabold text-3xl m-1">{name}</h2>
      <p className="text-center font-light">{cuisines.join(", ")}</p>
      {/** Categories Accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItemIndex}
          setShowItemIndex={() => {
            setShowItemIndex(index);
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
