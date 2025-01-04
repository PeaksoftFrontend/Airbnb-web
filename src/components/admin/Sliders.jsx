import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { styled } from "@mui/material";

export const Sliders = ({ images = [] }) => {
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    swiperRef.current?.swiper?.slideTo(index, 0, false);
  };

  const limitedImages = images.slice(1, 4);

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
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <StyledImg src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <StyledDiv>
        {limitedImages.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleButtonClick(index + 1)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <StyledImage src={image} alt={`Button ${index}`} />
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

const StyledImage = styled("img")({
  width: "196px",
  height: "137px",
  objectFit: "cover",
});
