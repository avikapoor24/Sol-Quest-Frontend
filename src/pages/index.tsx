import Carousel from "@/components/carousel";
import CarouselNFT from "@/components/carouselNFT";
import CarouselToken from "@/components/carouselToken";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectedCounterSelector } from "../features/selector";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(selectedCounterSelector);

  return (
    <div>
      <div className=" grid items-center justify-center my-12 ">
        <Carousel />
      </div>

      {/*  */}
      <div className=" grid items-center justify-center my-20 ">
        <div className="navbar bg-base-100 xxl:w-[70vw]  rounded-md ">
          <div className="flex-1">
            <a className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Recommended :
            </a>
          </div>
          <div className="flex-none gap-2">
            <div>
              <Link
                href={"/explore"}
                className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        <CarouselToken />
      </div>

      <div className=" grid items-center justify-center my-20 ">
        <div className="navbar bg-base-100 xxl:w-[70vw]  rounded-md ">
          <div className="flex-1">
            <a className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NFT Collection :
            </a>
          </div>
          <div className="flex-none gap-2">
            <div>
              <Link
                href={"/explore"}
                className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>

        <CarouselNFT />
      </div>
    </div>
  );
}
