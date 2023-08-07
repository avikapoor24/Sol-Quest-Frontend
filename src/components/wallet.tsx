import { useWallet } from "@solana/wallet-adapter-react";
import Image from "next/image";
import { useState } from "react";

function Wallet() {
  const { select, wallets, publicKey, disconnect } = useWallet();
  const [popUp, setPopUp] = useState(false);

  console.log(wallets);
  console.log("public key", publicKey);
  return (
    <div>
      {!publicKey ? (
        <button
          className="btn btn-accent"
          onClick={() => {
            setPopUp(true);
          }}
        >
          Connect
        </button>
      ) : (
        <div>
          <button className="btn btn-accent" onClick={disconnect}>
            disconnect wallet
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
