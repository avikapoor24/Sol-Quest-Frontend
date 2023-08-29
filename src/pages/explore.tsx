import ExplorePageNFTCards from "@/components/explorePageNFTCards";
import { default as ExplorePageTokenCards } from "@/components/explorePageTokenCards";
import { useGetAllQuestsQuery } from "@/features/api";

function Explore() {

  const allQuest = useGetAllQuestsQuery();
  console.log("ALL QUEST", allQuest);

  return (
    <div className=" grid  justify-center ">
      <div className="navbar bg-base-100 xxl:w-[70vw] bg-white rounded-md ">
        <div className="flex-1">
          <a className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Explore
          </a>
        </div>
        <div className="flex-none gap-2">
          <div>
            <div className="join  ">
              <button className="btn join-item bg-white text-black hover:bg-white">
                All Rewards
              </button>
              <button className="btn join-item bg-white text-black hover:bg-white">
                Token
              </button>
              <button className="btn join-item bg-white text-black hover:bg-white">
                NFT
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* token area */}

      <div className="w-70vw mt-10 grid xl:grid-cols-3 md:grid-cols-2">
        <ExplorePageTokenCards />
        <ExplorePageTokenCards />
        <ExplorePageTokenCards />
        <ExplorePageTokenCards />
        <ExplorePageTokenCards />

        <ExplorePageNFTCards />
        <ExplorePageNFTCards />
        <ExplorePageNFTCards />
        <ExplorePageNFTCards />
        <ExplorePageNFTCards />
      </div>
    </div>
  );
}

export default Explore;
