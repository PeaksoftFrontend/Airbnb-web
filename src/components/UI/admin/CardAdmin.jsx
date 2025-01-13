import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Menu, MenuItem, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { useState } from "react";

export const CardAdmin = ({ cards, handleNavigate }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyleContainer>
      {cards.map((item) => (
        <StyledBox key={item.id} {...item}>
          <StyleAll isNew={item.isNew} onClick={() => handleNavigate(item.id)}>
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
                <StyleMenuItem>
                  <Icons.MIniMenu
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    sx={{
                      "& .MuiMenu-paper": {
                        backgroundColor: "#fff",
                        borderRadius: "8px",
                        boxShadow: "none",
                        border: "1px solid #C4C4C4",
                        width: "180px",
                        height: "125px",
                        borderRadius: "2px",
                        transformOrigin: "center bottom",
                      },
                      "& .MuiButtonBase-root": {
                        fontSize: "16px",
                        color: "#5D5D5D",
                        padding: "5px 20px",
                      },
                    }}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Accept</MenuItem>
                    <MenuItem onClick={handleClose}>Reject</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                  </Menu>
                </StyleMenuItem>
              </StyleguesNum>
            </div>
          </StyleAll>
        </StyledBox>
      ))}
    </StyleContainer>
  );
};

const StyleMenuItem = styled("div")({
  "& svg": {
    cursor: "pointer",
  },
});

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

const StyleContainer = styled("div")({
  display: "flex",
  gap: "13px",
  width: "100%",
  flexWrap: "wrap",
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
