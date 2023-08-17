import Image from "next/image";
import Link from "next/link";
import Twiter from "../assets/Social/Twitter X.svg";
import Discord from "../assets/Social/discord-icon-svgrepo-com.svg";
import Telegram from "../assets/Social/icons8-telegram.svg";

function Socials() {
  return (
    <div className=" flex items-center justify-end mr-5 ">
      <Link href="https://twitter.com/" target="_blank">
        <Image
          src={Twiter}
          alt="twitter-social"
          width={30}
          height={30}
          className=" m-1"
        />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <Image
          src={Discord}
          alt="discord-social"
          width={30}
          height={30}
          className=" m-1"
        />
      </Link>
      <Link href="https://twitter.com/" target="_blank">
        <Image
          src={Telegram}
          alt="telegram-social"
          width={30}
          height={30}
          className=" m-1"
        />
      </Link>
    </div>
  );
}

export default Socials;
