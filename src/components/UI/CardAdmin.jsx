import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Container, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Button } from "./Button";
import { useState } from "react";

export const Data = [
  {
    id: 1,
    images: ["https://shorturl.at/RWBEI"],
    pieces: 26,
    rating: 3.4,
    title: "Beautiful and picturesque 2 sto...",
    gps: "12 Morris Ave, Toronto, ON, CA,",
    guests: 2,
    isNew: true,
  },
  {
    id: 2,
    images: [
      "https://shorturl.at/sFdTT",
      "https://shorturl.at/RWBEI",
      "https://shorturl.at/SFypy",
      "https://shorturl.at/WlCnu",
    ],
    pieces: 26,
    rating: 3.4,
    title: "Beautiful and picturesque 2 sto...",
    gps: "12 Morris Ave, Toronto, ON, CA,",
    guests: 2,
    isNew: false,
  },
];

export const CardAdmin = () => {
  return (
    <StyleContainer>
      {Data.map((item) => (
        <StyledBox key={item.id} {...item}>
          <StyleAll isNew={item.isNew}>
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
                <p>
                  ${item.pieces}/<StyleDay>day</StyleDay>
                </p>
                <StyledSpanStar>
                  <Icons.Star />
                  {item.rating}
                </StyledSpanStar>
              </StylePieces>
              <StyleDiv>
                <p>{item.title}</p>
                <div>
                  <Icons.Location />
                  <p>{item.gps}</p>
                </div>
              </StyleDiv>
              <StyleguesNum>
                <div>{item.guests} guests</div>
                <Icons.MIniMenu />
              </StyleguesNum>
            </div>
          </StyleAll>
        </StyledBox>
      ))}
    </StyleContainer>
  );
};

const StyleAll = styled("div")(({ isNew }) => ({
  display: "flex",
  flexDirection: "column",

  gap: "12px",
  border: isNew ? "3px solid #FF0000" : "none",
  webkitBoxShadow: isNew ? "1px 0px px 4px rgba(255, 0, 0, 0.2) inset" : "none",
  mozBoxShadow: isNew ? "1px 0px 0px 4px rgba(255, 0, 0, 0.2)  inset" : "none",
  boxShadow: isNew ? "1px 0px 0px 6px rgba(255, 0, 0, 0.2)  inset" : "none",
  borderRadius: "8px",
}));

const StyledBox = styled(Box)({
  width: "224px",
  height: "285",
});

const StyleImg = styled("img")({
  borderRadius: "3px",
  width: "210px",
  height: "136px",
  objectFit: "cover",
});

const StyleSwiper = styled(Swiper)({
  width: "210px",
  "& .swiper-button-prev": {
    background: "#828282",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    "&:hover": {
      background: "#DD8A08",
    },
  },
  "& .swiper-button-next": {
    background: "#828282",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
    "&:hover": {
      background: "#DD8A08",
    },
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

const StyleContainer = styled(Container)({
  display: "flex",
  gap: "40px",
});
const StylePieces = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 19px 0px 19px ",
  "& p": {
    fontSize: "18px",
    fontWeight: 400,
  },
});
const StyleDay = styled("span")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#6C6C6C",
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
  padding: "14px 19px 0px 19px ",
  gap: "8px",
  "& div": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    color: "#828282",
    fontSize: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "& p": {
    fontSize: "14x",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

const StyleguesNum = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "13px 19px 12px 19px",
  "& div": {
    color: "#939393",
    fontSize: "14px",
  },
  "& svg": {
    width: "29px",
    height: "27px",
    color: "background: #C4C4C4",
  },
});
const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
