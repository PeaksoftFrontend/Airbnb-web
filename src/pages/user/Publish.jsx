import { Box, Container, styled, Typography } from "@mui/material";
import { Icons } from "../../assets";
import { Radios } from "../../components/UI/Radios";
import { Input } from "../../components/UI/Input";

export const Publish = () => {
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
          <div>
            <Box>
              <span>Image</span>
              <span>Max 4 photo</span>
            </Box>
            <Box>
              <div>
                <Icons.Photo />
              </div>
              <Box>
                <Typography>Add photos to the review</Typography>
                <Typography>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 photos.
                </Typography>
              </Box>
            </Box>
          </div>
        </StyledCreateDiv>
        <StyledBox>
          <StyledSection>
            <StyledRadioTypography variant="h6">
              Home type
            </StyledRadioTypography>
            <StyledRadiosDiv>
              <StyledRadios>
                <Radios /> <StyledRadiosSpan>Apartment</StyledRadiosSpan>
              </StyledRadios>
              <StyledRadios>
                <Radios /> <StyledRadiosSpan>House</StyledRadiosSpan>
              </StyledRadios>
            </StyledRadiosDiv>
          </StyledSection>
          <StyledSectionTwo>
            <StyledPriceDiv>
              <StyledRadioTypography>Max of Guests</StyledRadioTypography>
              <Input
                type="texp"
                placeholder="0"
                size="small"
                sx={{ width: "245px" }}
              />
            </StyledPriceDiv>

            <StyledPriceDiv>
              <StyledRadioTypography>Price</StyledRadioTypography>
              <Input placeholder="$ 0" size="small" sx={{ width: "245px" }} />
            </StyledPriceDiv>
          </StyledSectionTwo>
          <section></section>
        </StyledBox>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  gap: "20px",
  flexDirection: "column",
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
  gap: "12px",
});
const StyledRadiosSpan = styled("span")({
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
const StyledRadioTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#363636",
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
