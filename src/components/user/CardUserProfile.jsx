import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Container, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Button } from "../UI/Button";

export const Data = [
  {
    id: 1,
    images: ["https://shorturl.at/RWBEI"],
    pieces: 26,
    rating: 3.4,
    title: "Beautiful and picturesque 2 sto...",
    gps: "12 Morris Ave, Toronto, ON, CA,",
    guests: 2,
    checkIn: "02.02.22",
    checkOut: "02.02.22",
  },
  {
    id: 2,
    images: [
      "https://shorturl.at/sFdTT",
      "https://shorturl.at/RWBEI",
      "https://shorturl.at/SFypy",
    ],
    pieces: 26,
    rating: 3.4,
    title: "Beautiful and picturesque 2 sto...",
    gps: "12 Morris Ave, Toronto, ON, CA,",
    guests: 2,
    checkIn: "02.02.22",
    checkOut: "02.02.22",
  },
];

export const CardUserProfile = () => {
  return (
    <StyleContainerProfile>
      {Data.map((item) => (
        <div key={item.id} {...item}>
          <StyleAllProfile>
            <StyleSwiperProfile
              mousewheel={true}
              navigation={true}
              keyboard={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {item.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <StyleImgProfile src={images} alt="" />
                </SwiperSlide>
              ))}
            </StyleSwiperProfile>
            <StyleText>
              <StylePiecesProfile>
                <p>
                  ${item.pieces}/<StyleDayProfile>day</StyleDayProfile>
                </p>
                <StyledSpanStarProfile>
                  <Icons.Star />
                  {item.rating}
                </StyledSpanStarProfile>
              </StylePiecesProfile>

              <StyleDivProfile>
                <p>{item.title}</p>
                <span>
                  <Icons.Location />
                  {item.gps}
                </span>
              </StyleDivProfile>
              <StyleGuests>{item.guests} guests</StyleGuests>
              <StyleData>
                <span>
                  <StyleChecIt>Check in</StyleChecIt>

                  {item.checkIn}
                </span>
                <span>
                  <StyleChecOut>Check ou</StyleChecOut>
                  {item.checkOut}
                </span>
              </StyleData>
            </StyleText>
            <StyledButtonprofile variant="outlined">CHANGE</StyledButtonprofile>
          </StyleAllProfile>
        </div>
      ))}
    </StyleContainerProfile>
  );
};

const StyleContainerProfile = styled(Container)({
  display: "flex",
  gap: "40px",
});

const StyleAllProfile = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

const StyleImgProfile = styled("img")({
  width: "260px",
  height: "168px",
});

const StyleSwiperProfile = styled(Swiper)({
  width: "260px",
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

const StylePiecesProfile = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "& p": {
    fontSize: "18px",
    fontWeight: 400,
    color: "#363636",
  },
});

const StyleDayProfile = styled("span")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#6C6C6C",
});

const StyledSpanStarProfile = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
  background: "#828282",
  color: "#FFFFFF",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: 500,
  width: "62px",
  height: "25px",

  "& svg path": {
    fill: "#F7D212",
  },
});

const StyleDivProfile = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "16px",
  gap: "8px",
  "& span": {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#828282",
    fontSize: "14px",
  },
});

const StyleGuests = styled("p")({
  paddingTop: "14px",
  color: "#939393",
  fontSize: "14px",
});

const StyleData = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "16px",
  "& span": {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
});

const StyleChecIt = styled("span")({
  fontSize: "14px",
  fontWeight: 400,
  color: " #646464",
});

const StyleChecOut = styled("span")({
  fontSize: "14px",
  fontWeight: 400,
  color: " #646464",
});

const StyleText = styled("div")({
  padding: "0px 12px 0px 12px ",
});

const StyledButtonprofile = styled(Button)({
  fontSize: "14px",
  fontWeight: 500,
});
