import Carousel from "@/components/carousel";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectedCounterSelector } from "../features/selector";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectedCounterSelector);

  return (
    <div className="">
      <div
        className="mt-10 flex
				items-center justify-center"
      >
        <Carousel />
      </div>
      <div>
        <Link href={`/explore`}> Explore</Link>
      </div>
    </div>
  );
}
