import { selectedWalletAddresSelector } from "@/features/selector";
import { useSelector } from "react-redux";

export default function About() {
	const walletAddress = useSelector(selectedWalletAddresSelector);

	if (walletAddress) {
		console.log("wallet address found");
	}
	return (
		<div>about</div>

	)
}

