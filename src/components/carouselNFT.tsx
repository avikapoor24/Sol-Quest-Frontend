import Slider from "react-slick";
import QuestCards from "./questCards";

function CarouselNFT() {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-[70vw] mt-5 ">
      <Slider {...settings}>
        <div className="flex justify-center">
          <QuestCards />
        </div>
        <div className="flex justify-center">
          <QuestCards />
        </div>
        <div className="flex justify-center">
          <QuestCards />
        </div>
        <div className="flex justify-center">
          <QuestCards />
        </div>
        <div className="flex justify-center">
          <QuestCards />
        </div>
        <div className="flex justify-center">
          <QuestCards />
        </div>
      </Slider>
    </div>
  );
}

export default CarouselNFT;
