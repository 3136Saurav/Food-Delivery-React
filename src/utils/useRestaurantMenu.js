import { useState, useEffect } from "react";
import { RESTAURANT_API_URL } from "../utils/constants";

const useRestaurantMenu = (restaurantId) => {
  const [restaurantItems, setRestaurantItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API_URL + restaurantId);
    const json = await data.json();

    console.log(json);

    // const { itemCards } =
    //   json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card;

    // console.log(itemCards);
    setRestaurantItems(json?.data);
    console.log("data ", json?.data);
  };

  return restaurantItems;
};

export default useRestaurantMenu;
