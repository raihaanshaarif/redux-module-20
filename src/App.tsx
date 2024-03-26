import {
  decrement,
  increment,
  incrementedByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex gap-6">
        <button
          className="border-2 border-green-500 rounded-md px-2 py-3 "
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="border-2 border-green-500 rounded-md px-2 py-3 "
          aria-label="Increment value"
          onClick={() => dispatch(incrementedByAmount(5))}
        >
          Increment by Value
        </button>
        <div>{count}</div>
        <button
          className="border-2 border-red-500 rounded-md px-2 py-3"
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
