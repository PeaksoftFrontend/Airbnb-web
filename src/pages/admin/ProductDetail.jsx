import { Box, styled, Typography } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { InnerHotel } from "../../pages/InnerHotel";
import { FeedbackList } from "../../components/UI/FeedbackList";
import { Reviews } from "../../components/user/Reviews";

export const ProductDetail = () => {
  const path = [
    { id: 1, url: "/user", title: "Users" },
    { id: 1, url: "/user", title: "Медер Медеров" },
    { id: 2, url: "/advertising_page", title: "Name" },
  ];
  return (
    <StyledContainer>
      <Box>
        <Breadcrumbs path={path} />
      </Box>
      <Box>
        <InnerHotel outlined="DELETE" contained="BLOCK" />
      </Box>
      <div>
        <Typography variant="h5">FEEDBACK</Typography>
      </div>
      <StyledBox>
        <StyledDiv>
          <FeedbackList />
          <Typography variant="h6">Show More</Typography>
        </StyledDiv>
        <div>
          <Reviews />
        </div>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  paddingLeft: "40px",
  marginTop: "46px",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "120px",
});

const StyledDiv = styled("div")({
  display: "flex",
  gap: "28px",
  flexDirection: "column",
  alignItems: "center",
});
