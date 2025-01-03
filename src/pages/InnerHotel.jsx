import { Avatar, Box, styled, Typography } from "@mui/material";
import { Sliders } from "../components/admin/Sliders";

export const image = [
  "https://shorturl.at/eUvUY",
  //
  "https://shorturl.at/EvCA4",

  "https://shorturl.at/OZJtQ",
];
const images = [
  "https://shorturl.at/eUvUY",
  //
  "https://shorturl.at/EvCA4",

  "https://shorturl.at/OZJtQ",
];

export const InnerHotel = () => {
  return (
    <StyleContainer>
      <StyleDIv>
        <p>NAME</p>
        <Sliders image={image} images={images} />
      </StyleDIv>
      <StyledText>
        <div>
          <StyleGlobal>
            <StyleApartaments>Apartement</StyleApartaments>
            <StyleGuests>2 Guests</StyleGuests>
          </StyleGlobal>
          <StyleGPS>
            <p>Name of hotel</p>
            <span>12 Morris Ave, Toronto, ON, CA</span>
          </StyleGPS>
          <StyleDiscription>
            <Typography
              sx={{ fontSize: "14px", fontWeight: 400, color: "#363636" }}
            >
              The hotel will provide guests with air-conditioned rooms offering
              a desk, a kettle, a fridge, a minibar, a safety deposit box, a
              flat-screen TV and a shared bathroom with a shower. At Garden
              Hotel & SPA the rooms have bed linen and towels.
            </Typography>
            <StyleProfile>
              <Avatar />
              <StyleEmail>
                <StyleName>Anna Annova</StyleName>
                <StyleNik>anna@gmail.com</StyleNik>
              </StyleEmail>
            </StyleProfile>
          </StyleDiscription>
        </div>
        <StyleButtons>
          <StyleReject>REJECT</StyleReject>
          <StyleAccept>ACCEPT</StyleAccept>
        </StyleButtons>
      </StyledText>
    </StyleContainer>
  );
};

const StyleContainer = styled("div")({
  display: "flex",
  gap: "65px",
});

const StyleDIv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: "#000000",
  },
});

const StyledText = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "50px",
});

const StyleGlobal = styled("div")({
  display: "flex",
  gap: "14px",
});

const StyleApartaments = styled("div")({
  width: "95px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGuests = styled("div")({
  width: "75px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGPS = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "8px",
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: " #000000",
  },
  "& span": {
    fontSize: "14px",
    fontWeight: 400,
    color: "#828282",
  },
});

const StyleDiscription = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "30px",
});

const StyleProfile = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const StyleEmail = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

const StyleName = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
  color: "#000000",
});

const StyleNik = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#afaeae",
});

const StyleButtons = styled("div")({
  display: "flex",
  paddingTop: "57px",
  gap: "20px",
});

const StyleReject = styled("button")({
  width: "196px",
  height: "37px",
  border: "1.5px solid #DD8A08",
  color: "#DD8A08",
  background: "none",
  cursor: "pointer",
});

const StyleAccept = styled("button")({
  width: "196px",
  height: "37px",
  background: "#DD8A08",
  border: "none",
  color: " #F7F7F7",
  cursor: "pointer",
});
