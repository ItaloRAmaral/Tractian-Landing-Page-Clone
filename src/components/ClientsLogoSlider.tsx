import React from "react";
import Slider from "react-slick";
import "../styles/ClientsLogo.css";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

function ClientsLogoSlider({ images }: Props): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 100,
    cssEase: "linear",
    variableWidth: true,
    vertical: false,
    horizontal: false,
  };
  return (
    <div className="clients-logo-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            id="client-logo-img"
          />
        ))}
      </Slider>
    </div>
  );
}

export default ClientsLogoSlider;
