import Carousel from "@/components/carousel";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { selectedCounterSelector } from "../features/selector";
import { decrement, increment } from "../features/slice";
const Wallets = dynamic(() => import("@/components/wallet"), { ssr: false });

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectedCounterSelector);

  return (
    <div className="text-[40px]">
      <h1>hello</h1>
      <Wallets />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
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
