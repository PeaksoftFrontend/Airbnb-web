import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Icons } from "../../assets";
import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useGetLatestAnnouncementsQuery } from "../../redux/api/houses.service";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";

export const UserPageWight = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const { data, error, isLoading } = useGetLatestAnnouncementsQuery();
  const navigate = useNavigate();

  if (error) return <p>error data</p>;
  if (isLoading) return <p>Loading...</p>;

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handleRegions = (region) => {
    navigate(
      `${PATHS.USER.INNER_HOTEL_OF_REGIONS}/${region}?category=the-lastest`
    );
  };

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.activeIndex + 1);
  };

  return (
    <StyleContainer>
      <StyleBox {...data}>
        <StyleImageGlobal>
          <p>{data.title}</p>
          <img src={data.images[0]} alt="" />
        </StyleImageGlobal>
        <div>
          <StyleDescriptionText>
            <p>{data.text}</p>
            <StyleDiscription>{data.description}</StyleDiscription>
          </StyleDescriptionText>

          <StyleInformation>
            <p style={{ display: "flex", gap: "4px" }}>
              <Icons.Location />
              {data.gps}
            </p>
            <span>{data.information}</span>
          </StyleInformation>
        </div>
        <StyleLines>
          <StyleDetailsansImages>
            <StyleMore onClick={() => handleRegions("Another")}>
              {data.detail}
            </StyleMore>
            <StyleImages>
              <StyleSwiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  setTotalSlides(swiper.slides.length);
                }}
                onSlideChange={handleSlideChange}
                slidesPerView={3}
                spaceBetween={3}
                modules={[Pagination]}
              >
                {data.images.map((images, index) => (
                  <SwiperSlide key={index} style={{ position: "relative" }}>
                    <img src={images} position={{ position: "absolut" }} />
                  </SwiperSlide>
                ))}
              </StyleSwiper>
            </StyleImages>
          </StyleDetailsansImages>
          <StyledIcons>
            <div>
              <Icons.RightBlack
                style={{
                  cursor: "pointer",
                  width: "23px",
                  height: "23px",
                  border: "none",
                }}
                onClick={handlePrev}
              />
            </div>

            <CustomPagination>
              <span>{String(currentSlide).padStart(2, "0")}</span>/
              <span>{String(totalSlides).padStart(2, "0")}</span>
            </CustomPagination>

            <div>
              <Icons.LeftBlack
                style={{
                  cursor: "pointer",
                  width: "23px",
                  height: "23px",
                  border: "none",
                }}
                onClick={handleNext}
              />
            </div>
          </StyledIcons>
        </StyleLines>
      </StyleBox>
    </StyleContainer>
  );
};

const CustomPagination = styled("div")({
  display: "flex",
  gap: "3px",
  color: "#363636",
  "& span": {
    fontSize: "16px",
    fontWeight: 400,
  },
});

const StyleImageGlobal = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  "& img": {
    width: "525px",
    height: "456px",
    objectFit: "cover",
  },
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: "#363636",
  },
});

const StyleSwiper = styled(Swiper)({
  width: "800px",

  "& img": {
    width: "224px",
    height: "317px",
    objectFit: "cover",
  },
});

const StyleBox = styled(Box)({
  display: "flex",
  gap: "40px",
  paddingLeft: "80px",
});

const StyleImages = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const StyledIcons = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "68px",
});

const StyleDiscription = styled("div")({
  width: "290px",
  height: "105px",
  fontSize: "16px",
  fontWeight: 400,
  color: "#6A6A6A",
});

const StyleContainer = styled("div")({
  overflow: "hidden",
  width: "100%",
  maxWidth: "none",
  padding: "10px 0px",
});

const StyleDescriptionText = styled("div")({
  paddingTop: "140px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& p": {
    fontSize: "18px",
    fontWeight: 500,
    color: "#363636",
  },
});

const StyleInformation = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "17px",
  "& p": {
    fontSize: "14px",
    fontWeight: 400,
    color: "#97C69E",
  },
  "& span": {
    fontSize: "16px",
    fontWeight: 500,
    color: "#8A8A8A",
    textDecoration: "underline",
    cursor: "pointer",
  },
  "& svg path": {
    fill: " #97C69E",
  },
});

const StyleMore = styled("p")({
  textDecoration: "underline",
  display: "flex",
  alignItems: "center",
  paddingLeft: "60px",
  fontSize: "16px",
  fontWeight: 400,
  color: "#363636",
  cursor: "pointer",
});

const StyleDetailsansImages = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});

const StyleLines = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
});
