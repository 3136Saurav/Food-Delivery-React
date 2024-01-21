import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withHigherRating } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const RestaurantCardHighRating = withHigherRating(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const json = await response.json();
    console.log("json = ", json);
    console.log(
      "json-restaurants = ",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!</h1>;
  }

  if (listOfRestaurants == null || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex justify-center">
        <input
          name="searchText"
          className="m-5 w-1/2 p-2 border border-black border-solid rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search Restaurant"
          data-testid="searchInput"
        />
        <button
          className="m-5 bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .toLocaleLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );

            console.log("filtered - ", filteredRestaurants);
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Search
        </button>
        <button
          className="m-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            const topRatedRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.5
            );

            setFilteredRestaurants(topRatedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating == 4.5 ? (
              <RestaurantCardHighRating restaurant={restaurant} />
            ) : (
              <RestaurantCard restaurant={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
