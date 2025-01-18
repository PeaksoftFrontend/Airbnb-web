import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Container, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Button } from "../UI/Button";
import { useState } from "react";

export const CardUser = ({ cards }) => {
  const [favorites, setFavorites] = useState({});

  const handleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };
  return (
    <StyleContainer>
      {cards.map((item) => (
        <Box key={item.id} {...item}>
          <StyleAll>
            <StyleSwiper
              mousewheel={true}
              navigation={true}
              keyboard={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {item.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <StyleImg src={images} alt="" />
                </SwiperSlide>
              ))}
            </StyleSwiper>
            <div>
              <StylePieces>
                <b>
                  ${item.pieces}/<StyleDay>day</StyleDay>
                </b>
                <StyledSpanStar>
                  <Icons.Star />
                  {item.rating}
                </StyledSpanStar>
              </StylePieces>
              <StyleDiv>
                <p>{item.title}</p>
                <div>
                  <Icons.Location />
                  {item.gps}
                </div>
              </StyleDiv>
              <StyleguesNum>
                <div>{item.guests} guests</div>
                <StyledButton variant="outlined">BOOK</StyledButton>
                <StyleFordButton onClick={() => handleFavorite(item.id)}>
                  {favorites[item.id] ? (
                    <Icons.Heart />
                  ) : (
                    <Icons.HeartColorless />
                  )}
                </StyleFordButton>
              </StyleguesNum>
            </div>
          </StyleAll>
        </Box>
      ))}
    </StyleContainer>
  );
};

const StyleFordButton = styled("button")({
  background: "none",
  border: "none",
});

const StyleAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "19px",
});

const StyleImg = styled("img")({
  width: "295px",
  height: "191px",
  objectFit: "cover",
});

const StyleSwiper = styled(Swiper)({
  width: "295px",
  "& .swiper-button-prev": {
    background: "#DD8A08",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
  },
  "& .swiper-button-next": {
    background: "#DD8A08",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
  },
  "& .swiper-button-prev::after, & .swiper-button-next::after": {
    fontSize: "16px",
    color: "#fff",
  },
  "& .swiper-pagination": {},
  "& .swiper-pagination-bullet": {
    background: "#F7F7F7",
  },
  "& .swiper-pagination-bullet-active": {
    background: "#FFBE58",
  },
});

const StyleContainer = styled("div")({
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  padding: "0 19px",
});
const StylePieces = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});
const StyleDay = styled("span")({
  fontSize: "16px",
  fontWeight: 400,
});
const StyledSpanStar = styled("span")({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  background: "#828282",
  color: "#FFFFFF",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: 500,
  padding: "5px",

  "& svg path": {
    fill: "#F7D212",
  },
});

const StyleDiv = styled("div")({
  paddingTop: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#828282",
    fontSize: "14px",
  },
});

const StyleguesNum = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "23px",
  "& div": {
    color: "#939393",
    fontSize: "14px",
  },
  "& svg": {
    width: "20px",
    height: "20px",
  },
});
const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
