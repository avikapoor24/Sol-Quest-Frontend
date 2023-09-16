import Image from "next/image";
import templateReward from '../assets/Social/template.jpg';

function RewardBlock() {
  return (
    <div className=" w-[220px] h-[300px] bg-white border border-black rounded-md flex justify-center items-center">
      <div className=" w-[210px] h-[290px] bg-white border border-black rounded-md flex justify-center items-center ">
        <Image src={templateReward} alt="template reward" width={190} height={270} className=" rounded-md w-[200px] h-[280px]" />
      </div>
    </div>
  );
}

export default RewardBlock;
