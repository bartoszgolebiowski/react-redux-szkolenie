import React from "react";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import {
  decrement as decrement2,
  increment as increment2,
  incrementByAmount as incrementByAmount2,
} from "./features/counter2/counterSlice";
import { useAppDispatch, useAppSelector } from "./hooks";

function App() {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state);
  const value = useAppSelector((state) => state.counter.value);
  // const prevValue = useAppSelector((state) => state.counter.prevValue);
  const value2 = useAppSelector((state) => state.testtest.value);
  // const prevValue2 = useAppSelector((state) => state.testtest.prevValue);
  const incrementAction = increment();
  
  return (
    <div>
      {JSON.stringify(store)}
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementAction)}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>{value}</div>
      {/* <div>{prevValue}</div> */}

      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment2())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementByAmount2(5))}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement2())}
        >
          Decrement
        </button>
      </div>
      <div>{value2}</div>
      {/* <div>{prevValue2}</div> */}
    </div>
  );
}

export default App;
