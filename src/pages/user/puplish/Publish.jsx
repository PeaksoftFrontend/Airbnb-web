import { Box, Container, styled, Typography } from "@mui/material";
import { Icons } from "../../../assets";
import { Input } from "../../../components/UI/Input";
import { Select } from "../../../components/UI/Select";
import { Button } from "../../../components/UI/Button";
import { useRef, useState } from "react";
import { Radio } from "../../../components/UI/Radio";
import { orange } from "@mui/material/colors";
import { Modal } from "../../../components/UI/Modal";
import { FileUploader } from "./FileUploader";

export const Publish = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [open, setOpen] = useState(false);
  const radioRef = useRef(null);
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handlerOpen = () => {
    setOpen(!open);
  };
  const options = [
    { value: "Batken", label: "Batken" },
    { value: "Jalalabat", label: "Jalalabat" },
    { value: "Naryn", label: "Naryn" },
    { value: "Issyk-Kul", label: "Issyk-Kul" },
    { value: "Talas", label: "Talas" },
    { value: "Osh", label: "Osh" },
    { value: "Chui", label: "Chui" },
    { value: "Bishkek", label: "Bishkek" },
  ];

  return (
    <StyledContainer>
      <StyledStartText variant="h6">
        Hi! Let's get started listing your place.
      </StyledStartText>
      <StyledBoxContainer>
        <StyledCreateDiv>
          <StyledInfoText variant="h6">
            In this form, we'll collect some basic and additional information
            about your listing.
          </StyledInfoText>
          <StyledFotoDiv>
            <StyledBoxSpan>
              <StyledSpan>Image</StyledSpan>
              <StyledMaxSpan>Max 4 photo</StyledMaxSpan>
            </StyledBoxSpan>
            <StyledFotoBox>
              <StyledIconsDiv>
                {open ? (
                  <StyledModal open={open} onClose={handlerOpen}>
                    <StyledFileUp />
                  </StyledModal>
                ) : (
                  ""
                )}
                <StyledIcons onClick={handlerOpen} />
              </StyledIconsDiv>
              <StyledTextBox>
                <StyledAddTypography>
                  Add photos to the review
                </StyledAddTypography>
                <StyledFotoText>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 photos.
                </StyledFotoText>
              </StyledTextBox>
            </StyledFotoBox>
          </StyledFotoDiv>
        </StyledCreateDiv>
        <StyledBox>
          <StyledSection>
            <StyledTypography variant="h6">Home type</StyledTypography>
            <StyledRadiosDiv>
              <StyledRadios>
                <Radio
                  label="Apartment"
                  value="apartment"
                  ref={radioRef}
                  variant="apartment"
                  checked={selectedValue === "apartment"}
                  onChange={handleRadioChange}
                  sx={{
                    "&.Mui-checked": {
                      color: orange[500],
                    },
                  }}
                />
              </StyledRadios>
              <StyledRadios>
                <Radio
                  label="Home"
                  ref={radioRef}
                  value="home"
                  variant="home"
                  checked={selectedValue === "home"}
                  onChange={handleRadioChange}
                  sx={{
                    "&.Mui-checked": {
                      color: orange[500],
                    },
                  }}
                />
              </StyledRadios>
            </StyledRadiosDiv>
          </StyledSection>
          <StyledSectionTwo>
            <StyledPriceDiv>
              <StyledTypography>Max of Guests</StyledTypography>
              <StyledInputMini type="number" placeholder="0" size="small" />
            </StyledPriceDiv>

            <StyledPriceDiv>
              <StyledTypography>Price</StyledTypography>
              <StyledInputMini type="number" placeholder="$ 0" size="small" />
            </StyledPriceDiv>
          </StyledSectionTwo>
          <StyledSection>
            <StyledTypography>Title</StyledTypography>
            <Input type="text" size="small" />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Description of listing</StyledTypography>
            <Input
              type="text"
              id="outlined-multiline-static"
              multiline
              rows={3}
              maxRows={5}
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Region</StyledTypography>
            <Select
              placeholder="Please, select the region"
              options={options}
              size="small"
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Town / Province</StyledTypography>
            <Input type="text" size="small" />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Address</StyledTypography>
            <Input type="text" size="small" />
          </StyledSection>
        </StyledBox>
      </StyledBoxContainer>
      <StyledButtonDiv>
        <StyledButton type="submit" variant="outlined">
          Submit
        </StyledButton>
      </StyledButtonDiv>
    </StyledContainer>
  );
};
export const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "36px",
  backgroundColor: theme.palette.primary.main,
}));

const StyledFileUp = styled(FileUploader)({ width: "100%" });
const StyledContainer = styled(Container)({
  display: "flex",
  gap: "20px",
  flexDirection: "column",
  backgroundColor: "#F5F5F5",
  height: "100%",
  width: "610px",
});

const StyledStartText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  fontFamily: "Inter,sans-serif",
  color: "#363636",
});

const StyledInfoText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Inter,sans-serif",
  color: "#646464",
});
const StyledCreateDiv = styled("div")({
  display: "flex",
  gap: "30px",
  flexDirection: "column",
});

const StyledBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});
const StyledSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});
const StyledRadiosDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});
const StyledRadios = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});
const StyledSpan = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Inter, sans-serif",
  color: "#363636",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});
const StyledTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#363636",
  fontFamily: "Inter, sans-serif",
});
const StyledSectionTwo = styled("section")({
  display: "flex",
  flexDirection: "row",
  gap: "18px",
});
const StyledPriceDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});
const StyledInputMini = styled(Input)({
  width: "245px",
});
const StyledButtonDiv = styled("div")({
  display: "flex",
  justifyContent: "end",
});
const StyledButton = styled(Button)({
  width: "196px",
  height: "37px",
});
const StyledFotoDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
const StyledBoxSpan = styled(Box)({ display: "flex", gap: "8px" });
const StyledMaxSpan = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  fontFamily: "Inter, sans-serif",
  color: "#A9A9A9",
});
const StyledFotoBox = styled(Box)({ display: "flex", gap: "16px" });
const StyledIconsDiv = styled("div")({
  width: "135px",
  height: "135px",
  backgroundColor: "#F3F3F3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
const StyledAddTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#266BD3",
  fontFamily: "Inter, sans-serif",
});
const StyledFotoText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#828282",
  fontFamily: "Inter, sans-serif",
});
const StyledIcons = styled(Icons.Photo)(({ iconSize }) => ({
  width: iconSize?.width || "43px",
  height: iconSize?.height || "32px",
  cursor: "pointer",
}));
