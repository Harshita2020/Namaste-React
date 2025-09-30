import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList.jsx";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log("Cart page!!", cartItems);
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>
      {cartItems.length ? (
        <>
          <div className="w-6/12 m-auto p-4 text-md">
            <ItemList data={cartItems} />
          </div>
          <button
            className="m-4 p-4 rounded-2xl bg-red-400 text-white cursor-pointer font-bold"
            onClick={handleClearCart}
          >
            {" "}
            Clear Cart
          </button>
        </>
      ) : (
        <div>Your cart is empty! Lets do some shopping!!🥳🥳</div>
      )}
    </div>
  );
};

export default Cart;
