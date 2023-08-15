import { actions } from "@/features/slice";
import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Wallet() {
  const { select, wallets, publicKey, disconnect } = useWallet();
  const [popUp, setPopUp] = useState(false);

  console.log(wallets);
  console.log("public key", publicKey);

  const dispatch = useDispatch();

  if (publicKey) {
    dispatch(actions.setWalletAddress(publicKey.toBase58()));
  }

  return (
    <div>
      {!publicKey ? (
        <button
          className="rounded-[12px] bg-gradient-to-r from-purple-400 to-pink-600  p-[10px]   text-[16px] text-white m-2"
          onClick={() => {
            setPopUp(true);
          }}
        >
          Connect
        </button>
      ) : (
        <div>
          <button
            className="rounded-[12px] bg-gradient-to-r from-[#296BBD] to-[#AC85FF]   p-[10px]   text-[16px] text-white m-2"
            onClick={disconnect}
          >
            {publicKey.toBase58().slice(0, 3) +
              "..." +
              publicKey.toBase58().slice(-2)}
          </button>
        </div>
      )}
      <div
        className={
          popUp && !publicKey
            ? "artboard artboard-horizontal phone-1"
            : "hidden"
        }
      >
        <button
          className="btn btn-square btn-outline"
          onClick={() => {
            setPopUp(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {wallets.filter((wallet) => wallet.readyState === "Installed").length >
        0 ? (
          wallets
            .filter((wallet) => wallet.readyState === "Installed")
            .map((wallet) => (
              <button
                key={wallet.adapter.name}
                onClick={() => select(wallet.adapter.name)}
              >
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  width={30}
                  height={30}
                />
                {wallet.adapter.name}
              </button>
            ))
        ) : (
          <div>WALLET OT FOUND</div>
        )}
      </div>
    </div>
  );
}

export default Wallet;
