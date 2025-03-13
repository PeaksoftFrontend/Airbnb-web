import { Avatar, Box, styled, Typography } from "@mui/material";
import { Button } from "../components/UI/Button";
import { Sliders } from "../components/admin/Sliders";
import { Icons } from "../assets";

export const InnerHotel = ({
  onOutlinedFunc,
  onContainedFunc,
  outlined = "",
  contained = "",
  data = [],
  payment,
}) => {
  return (
    <StyleContainer>
      <StyleDIv>
        <p>NAME</p>
        <Sliders images={data.images} />
      </StyleDIv>
      <StyledText>
        <div>
          <StyleGlobal>
            <StyleApartaments>{data.houseType}</StyleApartaments>
            <StyleGuests>{data.maxGuests}</StyleGuests>
          </StyleGlobal>
          <StyleGPS>
            <p>{data.title}</p>
            <span>{data.address}</span>
          </StyleGPS>
          <StyleDiscription>
            <StyledDescription>{data.description}</StyledDescription>
            <StyleProfile>
              <Avatar src={data.image} alt={data.userInfo?.userName} />
              <StyleEmail>
                <StyleName>{data.fullName}</StyleName>
                <StyleNik>{data.email}</StyleNik>
              </StyleEmail>
            </StyleProfile>
          </StyleDiscription>
        </div>
        {payment ? (
          <StyleBox>
            <Styled26day>
              $26/ <span>day</span>
            </Styled26day>
            <StyleBottom></StyleBottom>
            <StyledDates>
              <StyleDate>
                <p>Check in</p>
                <input placeholder="Select date" />
              </StyleDate>
              <StyleDate>
                <p>Check out</p>
                <input placeholder="Select date" />
              </StyleDate>
            </StyledDates>
            <StyledTeaxtBook>
              You have to be signed in to book a listing!
            </StyledTeaxtBook>
            <StyleHeadButton>
              <Button variant="outlined">Request to book</Button>
              <Icons.HeardFor />
            </StyleHeadButton>
          </StyleBox>
        ) : (
          <StyleButtons>
            <StyleReject onClick={onOutlinedFunc}>{outlined}</StyleReject>
            <StyleAccept onClick={onContainedFunc}>{contained}</StyleAccept>
          </StyleButtons>
        )}
      </StyledText>
    </StyleContainer>
  );
};

const StyleContainer = styled("div")({
  display: "flex",
  gap: "65px",
});

const StyledDescription = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#363636",
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

const StyleBox = styled("div")({
  color: "#000000",
  width: "494px",
  height: "255px",
  paddingTop: "30px",
});

const Styled26day = styled("p")({
  display: "flex",
  justifyContent: "center",
  color: "#000000",
  fontSize: "20px",
  fontWeight: 400,
  "& span": {
    color: "#6C6C6C",
    fontSize: "18px",
    fontWeight: 400,
  },
});

const StyleBottom = styled("div")({
  borderBottom: "1px solid #C4C4C4",
  paddingTop: "20px",
});

const StyledDates = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "20px",
});

const StyleDate = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& p": {
    color: "#343434",
    fontSize: "14px",
    fontWeight: 400,
  },
  "& input": {
    width: "217px",
    height: "40px",
    color: "#C4C4C4",
    fontSize: "16px",
    padding: "10px",
  },
});

const StyledTeaxtBook = styled("p")({
  color: "#C4C4C4",
  fontSize: "14px",
  fontWeight: 400,
  paddingTop: "16px",
  display: "flex",
  justifyContent: "center",
});

const StyleHeadButton = styled("div")({
  display: "flex",
  gap: "5px",
  paddingTop: "36px",
  "& button": {
    width: "423px",
  },
  " & svg": {
    width: "65px",
    height: "47px",
  },
});
