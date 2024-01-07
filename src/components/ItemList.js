import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ItemList = ({ items }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("ItemList - ", items);

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));

    console.log(item);
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="border-gray-200 border-b-2 m-1 p-2 text-left flex"
          >
            <div className="w-8/12">
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <p className="text-gray-500">{item?.card?.info?.description}</p>
            </div>
            <div className="p-4 w-4/12">
              {location?.pathname?.includes("/restaurant") && (
                <div className="absolute">
                  <button
                    onClick={() => handleAddItem(item)}
                    className="p-2 mx-16 my-32 rounded-lg bg-green-600 font-bold text-white shadow-lg"
                  >
                    Add+
                  </button>
                </div>
              )}
              <img
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item?.card?.info?.imageId
                }
                className="w-full"
              ></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
