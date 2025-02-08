import { Box, Container, styled, Typography } from "@mui/material";

import Batken from "../../assets/image/batken-img.png";
import Osh from "../../assets/image/osh-img.png";
import Naryn from "../../assets/image/naryn-img.png";
import Jalalabad from "../../assets/image/jalalabad-img.png";
import Talas from "../../assets/image/talas-img.png";
import Issykkol from "../../assets/image/issykkol-img.png";
import Chui from "../../assets/image/chui-img.png";
import Bishkek from "../../assets/image/bishkek-img.png";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";
// import { PATHS } from "../../utils/constants/paths";

export const Regions = () => {
  const navigate = useNavigate();

  const handleRegions = (region) => {
    navigate(`${PATHS.USER.INNER_HOTEL_OF_REGIONS}/${region}`);
  };

  return (
    <StyledContainer>
      <StyleBoxing>
        <StyledH4 variant="h4">REGION IN KYRGYZSTAN</StyledH4>
        <StyledH6 variant="h6">
          You can visit the site any day and be sure that you will find
          everything for a great vacation.
        </StyledH6>
      </StyleBoxing>
      <StyleBoxContainer>
        <StyledBox>
          <StyledDivs onClick={() => handleRegions("Chui")}>
            <img src={Chui} alt="" />
            <StyledText variant="h6">CHUI</StyledText>
          </StyledDivs>
          <StyledDiv>
            <StyleDiv>
              <StyledDivs onClick={() => handleRegions("Batken")}>
                <img src={Batken} alt="" />
                <StyledTex>BATKEN</StyledTex>
              </StyledDivs>
              <StyledDivs onClick={() => handleRegions("Jalalabad")}>
                <img src={Jalalabad} alt="" />
                <StyledTex>JALALABAT</StyledTex>
              </StyledDivs>
            </StyleDiv>
            <StyledDivs onClick={() => handleRegions("Naryn")}>
              <img src={Naryn} alt="" />
              <StyleNaryn>NARYN</StyleNaryn>
            </StyledDivs>
          </StyledDiv>
        </StyledBox>
        <StylBox>
          <StyledDiv>
            <StylesDiv>
              <StyledDivs onClick={() => handleRegions("Issykkol")}>
                <img src={Issykkol} alt="" />
                <StyledTex>ISSYK-KUL</StyledTex>
              </StyledDivs>
              <StyledDivs onClick={() => handleRegions("Talas")}>
                <img src={Talas} alt="" />
                <StyledTex>TALAS</StyledTex>
              </StyledDivs>
            </StylesDiv>
            <StyledDivs onClick={() => handleRegions("Bishkek")}>
              <img src={Bishkek} alt="" />
              <StyledTex>BISHKEK</StyledTex>
            </StyledDivs>
          </StyledDiv>
          <StyledDivs onClick={() => handleRegions("Osh")}>
            <img src={Osh} alt="" />
            <StyledText>OSH</StyledText>
          </StyledDivs>
        </StylBox>
      </StyleBoxContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
});

const StyleBoxing = styled(Box)({
  position: "relative",
  right: "45px",
});
const StyleBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});
const StyledH4 = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
});

const StyledH6 = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "20px",
  position: "relative",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15.5px",
});

const StyleDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

const StyledText = styled(Typography)({
  position: "absolute",
  top: "570px",
  left: "20px",
  color: "white",
});

const StyledTex = styled(Typography)({
  position: "absolute",
  top: "260px",
  left: "20px",
  color: "white",
});

const StyledDivs = styled("div")({
  position: "relative",
  cursor: "pointer",
});

const StyleNaryn = styled(Typography)({
  position: "absolute",
  top: "260px",
  left: "20px",
  color: "white",
});

const StylBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  gap: "20px",
  position: "relative",
});

const StylesDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});
