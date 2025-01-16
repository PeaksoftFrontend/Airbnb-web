import { useState } from "react";
import { Box, Typography, Modal, TextField, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Input } from "./Input";
import { Button } from "./Button";

export const Payment = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const dailyRate = 240.04;
  const days = 3;
  const subtotal = dailyRate * days;
  const total = subtotal;
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <StyledMain>
      <StyledBoxBooking>
        <StyledSection>
          <StyleColorBlack>$26 /</StyleColorBlack>
          <StyledColorGray>day</StyledColorGray>
        </StyledSection>
        <StyledBorderBottom></StyledBorderBottom>
        <StyledCheck>
          <StyledSpanIn>Check in</StyledSpanIn>
          <StyledSpanOut>Check out</StyledSpanOut>
        </StyledCheck>
        <StyledFormRow>
          <StyledInput
            type="date"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <StyledInput
            type="date"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </StyledFormRow>
        <StyledText>You have to be signed in to book a listing!</StyledText>
      </StyledBoxBooking>
      <StyledTogether>
        <StyledButton fullWidth onClick={handleOpenModal}>
          Request to Book
        </StyledButton>
        <StyledIconsHeart>
          <Icons.HeartColorless />
        </StyledIconsHeart>
      </StyledTogether>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <StyledModal>
          <StyledTextMain>Book Your Trip</StyledTextMain>
          <StyledTextModal>
            Enter your payment information to book the listing from the between
            April 28th 2022 to April 30th 2022
            <p>inclusive.</p>
          </StyledTextModal>
          <StyledBorderModal></StyledBorderModal>
          <StyledContainer>
            <StyledCalculation>
              ${dailyRate.toFixed(2)} × {days} days =
              <StyledScore>${subtotal.toFixed(2)}</StyledScore>
            </StyledCalculation>
            <StyleTotal>Total = ${total.toFixed(2)}</StyleTotal>
          </StyledContainer>
          <StyledTextFieldModal>
            <div>
              <Icons.Interaction />
            </div>
            <TextField
              placeholder="Card number"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ flex: 3, marginRight: 2, paddingLeft: "10px" }}
            />
            <TextField
              placeholder="dd/mm"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ flex: 1, marginRight: 2 }}
            />
            <TextField
              placeholder="CVC"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ flex: 1 }}
            />
          </StyledTextFieldModal>
          <StyledButtonModal>Book</StyledButtonModal>
        </StyledModal>
      </Modal>
    </StyledMain>
  );
};
const StyledMain = styled("main")({
  width: "100%",
});
const StyledBoxBooking = styled(Box)({
  border: "1px solid #FFFFFF",
  borderRadius: "8px",
  padding: "20px",
  width: "494px",
  height: "202px",
  backgroundColor: "#FFFFFF",
});
const StyledSection = styled("section")({
  display: "flex",
  marginBottom: "10px",
  justifyContent: "center",
});
const StyleColorBlack = styled("p")({
  color: "#000000",
  fontSize: "20px",
  fontWeight: "400",
});
const StyledColorGray = styled("p")({
  color: "#6C6C6C",
  fontSize: "18px",
});
const StyledBorderBottom = styled("p")({
  borderBottom: "1px solid #C4C4C4",
  marginBottom: "20px",
});
const StyledCheck = styled("div")({
  marginBottom: "7px",
});
const StyledSpanIn = styled("span")({
  textAlign: "left",
});
const StyledSpanOut = styled("span")({
  paddingLeft: "169px",
});
const StyledText = styled(Typography)({
  color: "#777",
  textAlign: "center",
});
const StyledTogether = styled("div")({
  display: "flex",
  gap: "20px",
});
const StyledIconsHeart = styled("div")({
  width: "55px",
  height: "37px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #f0ad4e",
  borderRadius: "5px",
  padding: "10px",
  backgroundColor: "white",
  cursor: "pointer",
  "& svg": {
    width: "26px",
    height: "26px",
  },
});
const StyledModal = styled("Box")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "474px",
  backgroundColor: "white",
  height: "366px",
  padding: "32px",
  textAlign: "center",
});
const StyledTextMain = styled(Typography)({
  marginBottom: "15px",
  colors: "#000000",
  fontSize: "18px",
  fontFamily: "500",
  lineHeight: "21.78px",
});
const StyledTextModal = styled(Typography)({
  color: "#828282",
  marginBottom: 2,
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19.36px",
  textAlign: "center",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
});
const StyledBorderModal = styled("p")({
  borderBottom: "1px solid #C4C4C4",
  marginTop: "10px",
});
const StyledInput = styled(Input)({
  marginBottom: "10px",
  width: "217px",
  backgroundColor: " white",
  border: "1px solid #6C6C6C",
  padding: "10px, 16px",
  borderRadius: "4px",
  "&.MuiInputBase-root": {
    height: "40px",
  },
});
const StyledFormRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "10px",
});

const StyledButton = styled(Button)({
  width: "423px",
  height: "37px",
  backgroundColor: " #DD8A08",
  color: "#F7F7F7",
  marginRght: "10px",
  cursor: "pointer",

  ".MuiButtonBase-root": {
    border: "none",
  },
});

const StyledButtonModal = styled(Button)({
  height: "37px",
  backgroundColor: " #DD8A08",
  color: "#F7F7F7",
  marginTop: "31px",
  cursor: "pointer",
});
const StyledTextFieldModal = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid #C4C4C4",
  height: "39px",
  padding: "10px",
  marginTop: "15px",
});

const StyledContainer = styled("div")({
  marginTop: "10px",
  lineHeight: "1.5",
  color: "#000",
});

const StyledCalculation = styled("div")({
  display: "flex",
  justifyContent: "center",
  fontSize: "16px",
  color: "#646464",
  fontWeight: "400",
  marginTop: "10px",
});
const StyledScore = styled("div")({
  color: "#363636",
  fontSize: "16px",
  fontWeight: "500",
});

const StyleTotal = styled("div")({
  fontSize: "18px",
  fontWeight: "600",
  color: "#000000",
  marginTop: "10px",
});
