import Image from "next/image";
import Link from "next/link";

interface cardInfo {
  id: string;
  title: string;
  desc: string;
  reward: string;
  image: string;
}

function CarouselCard(cardInfro: cardInfo) {
  const { id, title, desc, reward, image } = cardInfro;
  return (
    <Link href={`/quest/${id}`}>
      <div className="m-2 w-auto">
        <div className=" flex  h-[30vh] w-auto content-between rounded-[16px] bg-white text-[#000000] lg:h-[50vh] ">
          <div className=" grid w-full content-around p-5 py-8">
            <h4 className="text-textxl  lg:text-text3xl">{title}</h4>
            <p className="text-sm  lg:text-textMedium3 ">{desc}</p>
            <button
              type="button"
              className="mt-2 h-8 w-4/5 rounded-[12px] bg-gradient-to-r from-[#296BBD] to-[#AC85FF]   p-[5px]   text-[16px] text-white lg:h-10 lg:w-full lg:text-[18px]"
            >
              Claim Now
            </button>
          </div>
          <Image
            src="https://picsum.photos/300"
            className=" h-auto w-[100%] rounded-[30px] bg-[##212121] object-fill p-4"
            alt="Picture of the author"
            width={120}
            height={20}
          />
        </div>
      </div>
    </Link>
  );
}

export default CarouselCard;
