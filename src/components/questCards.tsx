import Image from "next/image"

function QuestCards() {
	return (
		<div className="card w-64 h-[360px] m-5  bg-white shadow-2xl border border-black">
			<h2 className="card-title px-2 pt-2">Shoes!</h2>

			<figure className="px-5 pt-5">
				<Image src="https://picsum.photos/300" alt="quest" width={100} height={100} className=" w-64 h-28 rounded" />
			</figure>

			<div className="card-body items-center text-center">
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions">
					<button
						className="rounded-[12px] bg-gradient-to-r from-[#296BBD] to-[#AC85FF]   p-[10px]   text-[16px] text-white m-2">Buy Now</button>
				</div>
			</div>
		</div>
	)
}

export default QuestCards