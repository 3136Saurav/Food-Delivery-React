import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="text-2xl font-bold">Your Cart</div>
      <div className="w-8/12 m-auto">
        {cartItems?.length !== 0 && (
          <button
            className="m-2 p-2 bg-red-600 text-white rounded-lg"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
        {cartItems?.length === 0 && <h3>Cart is EMPTY!!!</h3>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
