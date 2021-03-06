import React from "react";
import { fetchProducts } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import SingleProduct from "./SingleProduct";
function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.counter.data);
  const cart = useAppSelector((state) => state.counter.cart);
  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  React.useEffect(() => {
    if (cart.length) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <div>
      <div>
        <h4>Product</h4>
        {data.map((singleElement) => {
          return <SingleProduct product={singleElement} isProduct={true} />;
        })}
      </div>
      <div>
        <h4>Cart</h4>
        {cart.map((singleElement) => {
          return <SingleProduct product={singleElement} isProduct={false} />;
        })}
      </div>
    </div>
  );
}
export default App;
