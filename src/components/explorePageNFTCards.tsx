import Image from "next/image";
function ExplorePageNFTCards() {
  const avatar = "https://api.dicebear.com/6.x/thumbs/svg?seed=Cleo";

  return (
    <div className="w-[360px] h-40 m-2 bg-white shadow-xl rounded-lg grid grid-cols-3">
      <div className="m-3 mx-6 mr-0 col-span-2">
        <h2 className="card-title h-[48px]">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </label>
          Card title!
        </h2>

        <p className="h-[48px] my-2">
          If a dog chews shoes whose shoes does he choose?
        </p>
      </div>
      <figure className="mt-[30px] ">
        <Image
          src="https://picsum.photos/300"
          alt="quest"
          width={100}
          height={100}
          className="w-[100px] h-[100px] rounded-md"
        />
      </figure>
    </div>
  );
}

export default ExplorePageNFTCards;
