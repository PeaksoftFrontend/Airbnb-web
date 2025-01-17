import { Box, styled, Typography } from "@mui/material";
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
    <StyledDiv>
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
    </StyledDiv>
  );
};

const StyledDiv = styled("div")({
  width: "100%",
  maxWidth: "100%",
  overflowX: "hidden",
  overflowY: "hidden",
});
const StyledBox = styled(Box)({
  position: "relative",
  top: "40px",
  left: "40px",
});
const StyledInner = styled(Box)({
  position: "relative",
  top: "103px",
  left: "40px",
});

const StyledBoxing = styled(Box)({
  position: "relative",
  top: "200px",
  left: "5px",
});

const StylTypography = styled(Typography)({
  position: "relative",
  top: "150px",
  left: "40px",
});

const StyledBoxed = styled(Box)({
  display: "flex",
  flexDirection: "row",
});
const StyledReviews = styled(Box)({
  position: "relative",
  top: "230px",
  left: "120px",
});

const StyledShow = styled(Typography)({
  display: "flex",
  alignContent: "center",
  position: "relative",
  top: "15rem",
  left: "30rem",
});
