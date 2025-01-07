import { Box, Container, styled, Typography } from "@mui/material";

import Batken from "../../assets/image/batken-img.png";
// import Osh from "../../assets/image/osh-img.png";
import Naryn from "../../assets/image/naryn-img.png";
import Jalalabad from "../../assets/image/jalalabad-img.png";
// import Talas from "../../assets/image/talas-img.png";
// import Issykkol from "../../assets/image/issykkol-img.png";
import Chui from "../../assets/image/chui-img.png";
// import Bishkek from "../../assets/image/bishkek-img.png";

export const Regions = () => {
  return (
    <StyledContainer>
      <Box>
        <StyledH4 variant="h4">REGION IN KYRGYZSTAN</StyledH4>
        <StyledH6 variant="h6">
          You can visit the site any day and be sure that you will find
          everything for a great vacation.
        </StyledH6>
      </Box>
      <StyledBox>
        <StyledDivs>
          <img src={Chui} alt="" />
          <StyledText variant="h6">CHUI</StyledText>
        </StyledDivs>
        <StyledDiv>
          <StyleDiv>
            <StyledDivs>
              <img src={Batken} alt="" />
              <StyledTex>BATKEN</StyledTex>
            </StyledDivs>
            <StyledDivs>
              <img src={Jalalabad} alt="" />
              <StyledTex>JALALABAT</StyledTex>
            </StyledDivs>
          </StyleDiv>
          <StyledDivs>
            <img src={Naryn} alt="" />
            <StyleNaryn>NARYN</StyleNaryn>
          </StyledDivs>
        </StyledDiv>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  gap: "60px",
});

const StyledH4 = styled(Typography)({});

const StyledH6 = styled(Typography)({});

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
// const StyledChuiDiv = styled("div")({
//   position: "relative",
// });
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
});

const StyleNaryn = styled(Typography)({
  position: "absolute",
  top: "260px",
  left: "20px",
  color: "white",
});
