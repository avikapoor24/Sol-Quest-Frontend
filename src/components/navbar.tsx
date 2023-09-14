import { selectedWalletAddresSelector } from "@/features/selector";
import { adventurer } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
const Wallets = dynamic(() => import("@/components/wallet"), { ssr: false });

function Navbar() {
  const walletAddress = useSelector(selectedWalletAddresSelector);
  const dispatch = useDispatch();

  const avatar = useMemo(() => {
    if (walletAddress !== "") {
      return createAvatar(adventurer, {
        seed: walletAddress,
        size: 128,
        scale: 150,
      }).toDataUriSync();
    } else {
      return createAvatar(adventurer, {
        seed: "2k9AojehMDygHouVoqQgV3rJdfEM3BFR6SZRvsFJwR5v",
        size: 128,
        scale: 150,
      }).toDataUriSync();
    }
  }, [walletAddress !== ""]);

  return (
    <div className="navbar bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
      <div className="flex-1">
        <Link
          href={`/`}
          className="btn btn-ghost text-transparent font-bold  text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        >
          Sol-Quest
        </Link>
      </div>
      <div className="flex-none gap-2">
        <Wallets />

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Link href={`/profile`}>
                <img src={avatar} />
              </Link>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
