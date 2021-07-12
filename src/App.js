import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/action";

function App() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>DECREMENT</button>
      <button onClick={() => dispatch(increment())}>INCREMENT</button>
    </div>
  );
}

export default App;
