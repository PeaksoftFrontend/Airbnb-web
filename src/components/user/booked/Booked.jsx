import { Avatar, Box, styled, Typography } from "@mui/material";
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
    {
      id: "2",
      price: "26$",
      day: "2 days",
      checkInDate: "05.02.22",
      checkOutDate: "07.02.22",
    },
    {
      id: "3",
      price: "26$",
      day: "3 days",
      checkInDate: "10.02.22",
      checkOutDate: "13.02.22",
    },
  ];

  return (
    <StyledContainer>
      <StyledText variant="h6">BOOKED</StyledText>
      <StyledDivContainer>
        {booked.map((booking) => (
          <StyledBookingWrapper key={booking.id}>
            <StyledDivBox>
              <BookedCard booked={[booking]} />
            </StyledDivBox>
            <StyledDivIcon>
              <div>
                <Avatar />
              </div>

              <StyledBoxData>
                <StyledName variant="body1">Anna Annova</StyledName>
                <StyledEmail variant="body1">anna@gmail.com</StyledEmail>
              </StyledBoxData>
            </StyledDivIcon>
          </StyledBookingWrapper>
        ))}
      </StyledDivContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const StyledDivContainer = styled("div")({
  display: "flex",
});

const StyledBookingWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

const StyledText = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
  color: "#000000",
});

const StyledDivBox = styled("div")({
  display: "flex",
});
const StyledDivIcon = styled("div")({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  marginLeft: "15px",
});

const StyledBoxData = styled(Box)({
  display: "flex",
  flexDirection: "column",
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
