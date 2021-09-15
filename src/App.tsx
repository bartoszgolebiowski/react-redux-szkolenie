import React from "react";
import { fetchProducts } from "./features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state);

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <div>{JSON.stringify(store)}</div>
    </div>
  );
}

export default App;
