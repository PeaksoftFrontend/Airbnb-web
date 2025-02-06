import { styled } from "@mui/material";
import { FeedbackList } from "../../components/UI/FeedbackList";
import { Booked } from "../../components/user/booked/Booked";
import { InFavorites } from "../../components/user/InFavorites";
import { Reviews } from "../../components/user/Reviews";
import { InnerHotel } from "../InnerHotel";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Button } from "../../components/UI/Button";

const path = [
  { id: 1, url: "/main", title: "Main" },
  { id: 1, url: "/naryn", title: "Naryn" },
  { id: 2, url: "/hotel", title: "Hotel" },
  { id: 2, url: "/profile", title: "Profile" },
  { id: 2, url: "/name", title: "Name" },
];

export const MyAnnouncement = () => {
  return (
    <StyledContainer>
      <Breadcrumbs path={path} />
      <StyleInnerHotel>
        <InnerHotel />
      </StyleInnerHotel>
      <StyleBookingandFavorites>
        <div>
          <Booked />
        </div>
        <InFavorites />
      </StyleBookingandFavorites>
      <StyleFeasback>
        <StyleFeadbacktext>
          <FeedbackList />
          <StyleText>
            <StyleShowMore>Show more</StyleShowMore>
          </StyleText>
          <Button variant="contained">LEAVE FEADBACK</Button>
        </StyleFeadbacktext>
        <div>
          <Reviews />
        </div>
      </StyleFeasback>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "40px 70px 300px 70px",
});

const StyleFeasback = styled("div")({
  display: "flex",
  gap: "100px",
  paddingTop: "100px",
});

const StyleInnerHotel = styled("div")({
  display: "flex",
  paddingTop: "40px",
});

const StyleBookingandFavorites = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "70px",
  paddingTop: "70px",
});

const StyleShowMore = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#000000",
  borderBottom: "1px solid #000000",
  cursor: "pointer",
});

const StyleText = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyleFeadbacktext = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
