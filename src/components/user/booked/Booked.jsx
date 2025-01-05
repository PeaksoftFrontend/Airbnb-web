import { Box, Container, styled, Typography } from "@mui/material";
import { Icons } from "../../../assets";
import { BookedCard } from "./BookedCard";

export const Booked = () => {
  const booked = [
    {
      id: "1",
      price: "26$",
      day: "day",
      checkInDate: "02.02.22",
      checkOutDate: "02.02.22",
    },
  ];
  return (
    <StyledContainer>
      <StyledText variant="h6">BOOKED</StyledText>
      <StyledDivContainer>
        <StyledDivBox>
          <BookedCard booked={booked} />

          <StyledDivIcon>
            <div>
              <Icons.Circle />
            </div>

            <StyledBoxData>
              <StyledName variant="body1">Anna Annova</StyledName>
              <StyledEmail variant="body1">anna@gmail.com</StyledEmail>
            </StyledBoxData>
          </StyledDivIcon>
        </StyledDivBox>
        <StyledDivBox>
          <BookedCard booked={booked} />

          <StyledDivIcon>
            <div>
              <Icons.Circle />
            </div>

            <StyledBoxData>
              <StyledName variant="body1">Anna Annova</StyledName>
              <StyledEmail variant="body1">anna@gmail.com</StyledEmail>
            </StyledBoxData>
          </StyledDivIcon>
        </StyledDivBox>
        <StyledDivBox>
          <BookedCard booked={booked} />

          <StyledDivIcon>
            <div>
              <Icons.Circle />
            </div>

            <StyledBoxData>
              <StyledName variant="body1">Anna Annova</StyledName>
              <StyledEmail variant="body1">anna@gmail.com</StyledEmail>
            </StyledBoxData>
          </StyledDivIcon>
        </StyledDivBox>
      </StyledDivContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

const StyledDivContainer = styled("div")({
  display: "flex",
  gap: "20px",
});

const StyledText = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
  color: "#000000",
});

const StyledDivBox = styled("div")({
  display: "flex",
  gap: "30px",
  flexDirection: "column",
});
const StyledDivIcon = styled("div")({
  display: "flex",
  gap: "16px",
  alignItems: "center",
});

const StyledBoxData = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "1px",
});

const StyledName = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#000000",
});
const StyledEmail = styled(Typography)({
  fontWeight: "400",
  fontSize: "16px",
  color: "#828282",
});
