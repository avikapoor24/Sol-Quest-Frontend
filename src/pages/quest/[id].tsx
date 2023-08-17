import BaseAccordianButton from "@/components/TaskButtons/baseAccordianButton";
import Avatar from "@/components/avatar";
import Countdown from "@/components/countdown";
import RewardBlock from "@/components/rewardBlock";
import Socials from "@/components/socials";
import Image from "next/image";
import { useRouter } from "next/router";
import Share from "../../assets/Social/icons8-share.svg";

function Id() {
  const router = useRouter();
  const questID = router.asPath.split("/")[2].split("?")[0];
  const avatar = "https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo";

  return (
    <div className=" grid  justify-center ">
      <div className="w-[70vw]  rounded-md grid md:grid-cols-8 ">
        {/*  */}
        <div className=" grid col-span-6 mr-5 overflow-y-scroll no-scrollbar">
          {/*Title  */}
          <div className="flex justify-between items-center mx-5 my-2">
            <h2 className="card-title h-[60px] mx-3">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={avatar} />
                </div>
              </label>
              Card title!
            </h2>

            <div>
              <button
                className="rounded-[12px] bg-gradient-to-r from-purple-400 to-pink-600 opacity-90  p-[10px]   text-[16px] text-white m-2"
                onClick={() => {
                  navigator.clipboard.writeText(questID);
                }}
              >
                <Image src={Share} alt="share-icon" height={22} width={22} />
              </button>
            </div>
          </div>

          {/* Title -2  */}
          <div>
            <h2 className="card-title h-[48px] m-5">
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum
            </h2>
          </div>

          {/* Task Button */}
          <div className="m-5">
            <BaseAccordianButton />
            <BaseAccordianButton />
            <BaseAccordianButton />
          </div>

          {/* Description */}
          <div className="m-5 p-5">
            <h2 className="card-title">Description </h2>
            <p className="my-2 md:mr-20 card-title">
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum{" "}
            </p>
          </div>

          {/* Socials */}
          <div className="">
            <Socials />
          </div>
        </div>
        {/*  */}
        <div className=" lg:col-span-2 overflow-y-scroll no-scrollbar col-span-6">
          <h1 className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">          Reward Pool
          </h1>
          <div>
            <Countdown />
          </div>
          <div className=" flex justify-center">
            <RewardBlock />
          </div>
          <div>
            <h1 className="btn btn-ghost text-transparent font-bold  text-md bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Questers</h1>
            <div className=" grid grid-cols-5">
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Id;
