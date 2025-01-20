import { Box, Container, styled, Typography } from "@mui/material";
import { Header } from "../../layout/admin/Header";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { InnerHotel } from "../../pages/InnerHotel";
import { FeedbackList } from "../../components/UI/FeedbackList";
import { Reviews } from "../../components/user/Reviews";

const path = [
  { id: 1, url: "/user", title: "Users" },
  { id: 1, url: "/user", title: "Медер Медеров" },
  { id: 2, url: "/advertising_page", title: "Name" },
];

export const ProductDetail = () => {
  return (
    <StylContainer>
      <Header />
      <Box>
        <StyledBox>
          <Breadcrumbs path={path} />
        </StyledBox>
        <StyledInner>
          <InnerHotel />
        </StyledInner>
        <StylTypography variant="h5">FEEDBACK</StylTypography>
        <StyledBoxed>
          <StyledBoxing>
            <FeedbackList />
          </StyledBoxing>
          <StyledReviews>
            <Reviews />
          </StyledReviews>
        </StyledBoxed>
        <StyledShow variant="h6">Show more</StyledShow>
      </Box>
    </StylContainer>
  );
};

const StylContainer = styled(Container)({
  width: "100%",
});
const StyledBox = styled(Box)({
  position: "relative",
  top: "40px",
});
const StyledInner = styled(Box)({
  position: "relative",
  top: "103px",
});

const StyledBoxing = styled(Box)({
  position: "relative",
  top: "200px",
  right: "35px",
});

const StylTypography = styled(Typography)({
  position: "relative",
  top: "150px",
});

const StyledBoxed = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
const StyledReviews = styled(Box)({
  position: "relative",
  top: "230px",
  left: "20px",
});

const StyledShow = styled(Typography)({
  display: "flex",
  alignContent: "center",
  position: "relative",
  top: "15rem",
  left: "10rem",
});
