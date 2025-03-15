import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, styled, Typography } from "@mui/material";
import { Icons } from "../../assets";
import { Button } from "../UI/Button";
import { useState } from "react";
import { useFavoriteMutation } from "../../redux/api/auth.servers";
import { useSelector } from "react-redux";
import { AuthModal } from "./welcome-section/AuthModal";
import { useNavigate } from "react-router-dom";

export const CardUser = ({ cards, regionId }) => {
  const [favorites, setFavorites] = useState({});

  const [favoriteMutation] = useFavoriteMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleFavorite = async (id) => {
    if (role !== "USER") {
      setModalOpen(true);
      return;
    }
    try {
      await favoriteMutation(id).unwrap();
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [id]: !prevFavorites[id],
      }));
    } catch (error) {
      error;
    }
  };

  return (
    <StyleContainer>
      {cards.map((item) => (
        <Box key={item.id}>
          <StyleAll>
            <StyleSwiper
              mousewheel={true}
              navigation={true}
              keyboard={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
            >
              {item?.images?.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <StyleImg src={images} alt="" />
                </SwiperSlide>
              ))}
            </StyleSwiper>
            <div
              onClick={() =>
                navigate(`/user/inner-hotel-of-regions/${regionId}/${item.id}`)
              }
            >
              <StylePieces>
                <Styledprise>
                  <StyledPtag> ${item.price}/</StyledPtag>
                  <StyleDay>day</StyleDay>
                </Styledprise>
                <StyledSpanStar>
                  <Icons.Star />
                  {item.rating}
                </StyledSpanStar>
              </StylePieces>
              <StyleDiv>
                <StyledTypography>{item.title}</StyledTypography>
                <div>
                  <Icons.Location />
                  {item.address}
                </div>
              </StyleDiv>
              <StyleguesNum>
                <div>{item.maxGuests} guests</div>
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
      <AuthModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </StyleContainer>
  );
};

const Styledprise = styled("div")({ display: "flex", flexDirection: "row" });
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
const StyledTypography = styled(Typography)({
  fontWeight: "400",
  fontSize: "16px",
  color: "#2B2B2B",
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
  "& .swiper-pagination-bullet": { background: "#F7F7F7" },
  "& .swiper-pagination-bullet-active": { background: "#FFBE58" },
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
  alignItems: "center",
});
const StyleDay = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
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

  "& svg path": { fill: "#F7D212" },
  "& svg": {
    width: "18px",
    height: "18px",
  },
});

const StyledPtag = styled("p")({
  fontWeight: "400",
  fontSize: "18px",
  color: "#000000",
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
  "& div": { color: "#939393", fontSize: "14px" },
  "& svg": { width: "20px", height: "20px" },
});
const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
