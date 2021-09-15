import React from "react";
import { fetchProducts } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import Product from "./SingleProduct";

function App() {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.counter.data);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div>
        {data.map((singleElement) => {
          return <Product product={singleElement} />;
        })}
      </div>
    </div>
  );
}

export default App;
