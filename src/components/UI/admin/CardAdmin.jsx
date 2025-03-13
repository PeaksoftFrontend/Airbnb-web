import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Box, Menu, MenuItem, styled, Typography } from "@mui/material";
import { Icons } from "../../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants/paths";
import {
  useAcceptedAnnouncementMutation,
  useBlockingAnnouncementMutation,
} from "../../../redux/api/application.service";

export const CardAdmin = ({ cards = [] }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [acceptedAnnouncement] = useAcceptedAnnouncementMutation();
  const [blockingAnnouncement] = useBlockingAnnouncementMutation();
  const navigate = useNavigate();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleNavigate = (id) => {
    navigate(PATHS.ADMIN.APPLICATION_ADMIN + "/" + id);
  };
  return (
    <StyleContainer>
      {cards?.map((item) => (
        <StyledBox key={item.id} onClick={() => handleNavigate(item.id)}>
          <StyleAll>
            <StyleSwiper
              mousewheel={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              keyboard={true}
              pagination={{
                clickable: true,
                el: ".swiper-pagination",
              }}
              modules={[Navigation, Pagination]}
            >
              {item?.images.images.map((images, index) => (
                <SwiperSlide key={index}>
                  <StyleImg src={images} alt="" />
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-prev"
                onClick={(e) => e.stopPropagation()}
              ></div>
              <div
                className="swiper-button-next"
                onClick={(e) => e.stopPropagation()}
              ></div>
              <div
                className="swiper-pagination"
                onClick={(e) => e.stopPropagation()}
              ></div>
            </StyleSwiper>

            <HousingContent>
              <StyledTogetherday>
                <StyledHousingPriceTogether>
                  <HousingPrice>{item.price} </HousingPrice>
                  <HousingPriceTwo> / day</HousingPriceTwo>
                </StyledHousingPriceTogether>
                <HousingRating>
                  <StyledStarIcon>
                    <StarIcon />
                  </StyledStarIcon>
                  <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                    {item.rating}
                  </Typography>
                </HousingRating>
              </StyledTogetherday>
              <HousingDescription>{item.title}</HousingDescription>
              <HousingLocation>
                <StyledLocation />
                <StyledHouse>{item.address}</StyledHouse>
              </HousingLocation>
              <HousingGuests>
                {item.maxGuests} guests
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
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem
                      onClick={(event) => {
                        blockingAnnouncement(item.id);
                        handleClose(event);
                      }}
                    >
                      Accept
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        acceptedAnnouncement({
                          id: item?.id,
                          value: "reject",
                          message: "admin rejected your announcement",
                        });
                        handleClose(event);
                      }}
                    >
                      Reject
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        acceptedAnnouncement({
                          id: item?.id,
                          value: "delete",
                          message: "admin deleted your announcement",
                        });
                        handleClose(event);
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </StyleMenuItem>
              </HousingGuests>
            </HousingContent>
          </StyleAll>
        </StyledBox>
      ))}
    </StyleContainer>
  );
};

const StyleMenuItem = styled("div")({
  paddingLeft: "132px",
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
  width: "100%",
  height: "136px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "3px",
  marginTop: "22px",
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

const HousingContent = styled(Box)({
  height: "135px",
  padding: "7px",
});

const StyledTogetherday = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
});

const StyledHousingPriceTogether = styled("div")({
  display: "flex",
  alignItems: "center",
});

const HousingPrice = styled(Typography)({
  fontSize: "18px",
  color: "#363636",
});

const HousingPriceTwo = styled("div")({
  color: "#6C6C6C",
  fontSize: "16px",
  paddingLeft: "2px",
});

const HousingRating = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#828282",
  width: "62px",
  height: "25px",
  borderRadius: "2px",
  gap: "5px",
});

const StyledStarIcon = styled("span")({
  paddingTop: "0.5px",
  paddingLeft: "5px",
});

const StarIcon = styled(Icons.StarColor)({
  marginLeft: "5px",
  cursor: "pointer",
});

const HousingDescription = styled(Typography)({
  fontSize: "14px",
  marginBottom: "5px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#2B2B2B",
  whiteSpace: "nowrap",
});

const HousingLocation = styled(Typography)({
  fontSize: "0.9rem",
  marginBottom: "5px",
  color: "#828282",
  overflow: "hidden",
  paddingRight: "5px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "flex",
  alignItems: "center",
});

const StyledLocation = styled(Icons.Location)({
  cursor: "pointer",
});

const StyledHouse = styled("span")({
  marginLeft: "4px",
});

const HousingGuests = styled(Typography)({
  fontSize: "0.9rem",
  color: "#939393",
  marginBottom: "5px",
  display: "flex",
  "& svg": {
    width: "19px",
    height: "27px",
  },
});
