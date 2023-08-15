import Carousel from "@/components/carousel";
import { useDispatch, useSelector } from "react-redux";
import { selectedCounterSelector } from "../features/selector";
import { actions } from "../features/slice";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectedCounterSelector);

  return (
    <div className="text-[40px]">
      <h1>hello</h1>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(actions.increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(actions.decrement())}
          >
            Decrement
          </button>
        </div>
        <div className="">
          CAROUSEL
          <div
            className="mt-10 flex
				items-center justify-center"
          >
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}
