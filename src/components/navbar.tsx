import { selectedWalletAddresSelector } from "@/features/selector";
import { adventurer } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo } from "react";
import { useSelector } from "react-redux";
const Wallets = dynamic(() => import("@/components/wallet"), { ssr: false });

function Navbar() {
  const walletAddress = useSelector(selectedWalletAddresSelector);

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
    <div className="navbar bg-base-100">
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
              <img src={avatar} />
            </div>
          </label>

          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
