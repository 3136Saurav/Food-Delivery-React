import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItemIndex }) => {
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 my-2">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => setShowItemIndex()}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>{"🔽"}</span>
        </div>
        {/* Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
