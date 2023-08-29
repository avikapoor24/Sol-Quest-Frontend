import { selectedWalletAddresSelector } from "@/features/selector";
import { adventurer } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import { useMemo } from "react";
import { useSelector } from "react-redux";

function Profile() {
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
    <div>
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar w-36  h-36 m-2"
                    >
                      <div className=" w-36 rounded-full">
                        <img src={avatar} />
                      </div>
                    </label>
                  </div>
                </div>
                <div className="w-full px-4 text-center ">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    {walletAddress}
                  </div>
                </div>
              </div>
              {/* <div className="text-center mt-12">
								<h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
									Jenna Stones
								</h3>
								<div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
									<i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
									Los Angeles, California
								</div>
								<div className="mb-2 text-blueGray-600 mt-10">
									<i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
									Solution Manager - Creative Tim Officer
								</div>
								<div className="mb-2 text-blueGray-600">
									<i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
									University of Computer Science
								</div>
							</div> */}
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
