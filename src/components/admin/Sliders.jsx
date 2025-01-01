import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/material";

const image = [
  "https://shorturl.at/eUvUY",
  //
  "https://shorturl.at/EvCA4",

  "https://shorturl.at/OZJtQ",
];
const images = [
  "https://shorturl.at/eUvUY",
  //
  "https://shorturl.at/EvCA4",

  "https://shorturl.at/OZJtQ",
];

export const Sliders = () => {
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    swiperRef.current?.swiper?.slideTo(index, 0, false);
  };

  return (
    <StyledContainer>
      <StyledSwiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
      >
        {image.map((image, index) => (
          <SwiperSlide key={index}>
            <StyledImg src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <StyledDiv>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(index)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <Styledimage src={image} alt={`Button ${index}`} />
          </button>
        ))}
      </StyledDiv>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  transform: "translateX(-400px)",
});

const StyledSwiper = styled(Swiper)({
  width: "630px",
  height: "507px",
  margin: "0 auto",
});
const StyledImg = styled("img")({
  width: "630px",
  height: "507px",
  objectFit: "cover",
});

const StyledDiv = styled("div")({
  display: "flex",
  marginTop: "20px",
  gap: "17px",
  justifyContent: "center",
});

const Styledimage = styled("img")({
  width: "196px",
  height: "137px",
  objectFit: "cover",
});
