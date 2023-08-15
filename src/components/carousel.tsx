import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselCard from "./carouselCard";



const Carousel = () => {
	const settings = {
		infinite: true,
		lazyLoad: true,
		autoplay: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	};
	return (
		<div className=" h-[50vh] w-[70vw]">
			<Slider {...settings}>
				<div className="flex justify-center">
					<CarouselCard
						id={"1"}
						title={"HELLO"}
						desc={"quest disc"}
						reward={"100"}
						image={"link"}
					/>
				</div>
				<div className="flex justify-center">
					<CarouselCard
						id={"2"}
						title={"HELLO"}
						desc={"quest disc"}
						reward={"100"}
						image={"link"}
					/>
				</div>
				<div className="flex justify-center">
					<CarouselCard
						id={"3"}
						title={"HELLO"}
						desc={"quest disc"}
						reward={"100"}
						image={"link"}
					/>
				</div>
				<div className="flex justify-center">
					<CarouselCard
						id={"4"}
						title={"HELLO"}
						desc={"quest disc"}
						reward={"100"}
						image={"link"}
					/>
				</div>


			</Slider>
		</div>
	);
};

export default Carousel;
