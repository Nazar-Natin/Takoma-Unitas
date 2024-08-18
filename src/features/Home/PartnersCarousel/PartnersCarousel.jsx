import React from "react";
import Slider from "react-slick";
import "./PartnersCarousel.css";

const partners = [
  { imgUrl: "", title: "Partner 1" },
  { imgUrl: "", title: "Partner 2" },
  { imgUrl: "", title: "Partner 3" },
  { imgUrl: "", title: "Partner 4" },
  { imgUrl: "", title: "Partner 5" },
  { imgUrl: "", title: "Partner 6" },
  { imgUrl: "", title: "Partner 7" },
];

const PartnersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="partners-carousel">
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div className="carousel-item" key={index}>
            <img src={partner.imgUrl} alt={partner.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnersCarousel;
