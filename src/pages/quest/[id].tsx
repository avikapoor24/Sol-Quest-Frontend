import BaseAccordianButton from "@/components/TaskButtons/baseAccordianButton";
import Socials from "@/components/socials";
import { useRouter } from "next/router";

function Id() {
  const router = useRouter();
  const questID = router.asPath.split("/")[2].split("?")[0];
  const avatar = "https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo";


  return (
    <div className=" grid  justify-center ">
      <div className="w-[70vw] navbar bg-white rounded-md grid grid-cols-8">
        {/*  */}
        <div className=" grid col-span-6 mr-5 overflow-y-scroll no-scrollbar">

          {/*Title  */}
          <div>
            <h2 className="card-title h-[48px]">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={avatar} />
                </div>
              </label>
              Card title!
            </h2>
          </div>

          {/* Title -2  */}
          <div>
            <h2 className="card-title h-[48px] m-5">
              Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </h2>
          </div>

          {/* Task Button */}
          <div className="m-5">
            <BaseAccordianButton />
            <BaseAccordianButton />
            <BaseAccordianButton />
          </div>

          {/* Description */}
          <div className="m-5">
            <h2 className="card-title h-[48px]">Description </h2>
            <p className="my-2 h-[24px] mr-20">remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
          </div>

          {/* Socials */}
          <div className="m-5">
            <h2 className="card-title h-[48px]">Socials </h2>
            <Socials />
          </div>

        </div>
        {/*  */}
        <div className=" col-span-2 overflow-y-scroll no-scrollbar">Reward Pool</div>

      </div>

    </div>
  );
}

export default Id;
