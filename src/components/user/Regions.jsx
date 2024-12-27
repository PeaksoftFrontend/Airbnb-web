import Batken from "../../assets/image/batken-img.png";
import Osh from "../../assets/image/osh-img.png";
import Naryn from "../../assets/image/naryn-img.png";
import Jalalabad from "../../assets/image/jalalabad-img.png";
import Talas from "../../assets/image/talas-img.png";
import Issykkol from "../../assets/image/issykkol-img.png";
import Chui from "../../assets/image/chui-img.png";
import Bishkek from "../../assets/image/bishkek-img.png";

import { styled, Typography } from "@mui/material";

export const Regions = () => {
  return (
    <StyledContainer>
      <StyledH4 variant="h4">REGION IN KYRGYZSTAN</StyledH4>
      <StyledH6 variant="h6">
        You can visit the site any day and be sure that you will find everything
        for a great vacation.
      </StyledH6>

      <StyledBox>
        <StyledDiv>
          <img src={Chui} alt="" />
          <OverlayText>CHUI</OverlayText>
        </StyledDiv>
        <StyledAside>
          <StyledDiv>
            <img src={Naryn} alt="" />
            <H1>NARYN</H1>
          </StyledDiv>
          <StyledDiv>
            <img src={Batken} alt="" />
            <Text>BATKEN</Text>
          </StyledDiv>
          <StyledDiv>
            <img src={Jalalabad} alt="" />
            <Text>JALAL-ABAD</Text>
          </StyledDiv>
        </StyledAside>
      </StyledBox>
      <Styledsection>
        <StyledAssets>
          <StyledDiv>
            <img src={Issykkol} alt="" />
            <Text>ISSYK-KOL</Text>
          </StyledDiv>

          <StyledDiv>
            <img src={Talas} alt="" />
            <Text>TALAS</Text>
          </StyledDiv>
          <StyledFlex>
            <img src={Bishkek} alt="" />
            <StyleFlex>BISHKEK</StyleFlex>
          </StyledFlex>
        </StyledAssets>
        <StyledDivs>
          <img src={Osh} alt="" />
          <Overlaytex>OSH</Overlaytex>
        </StyledDivs>
      </Styledsection>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  marginLeft: "50px",
  marginTop: "100px",
});

const StyledBox = styled("div")({
  display: "flex",
  gap: "20px",
  width: "1240px",
  padding: "20px",
  marginTop: "60px",
  alignItems: "center",
});

const Styledsection = styled("div")({
  display: "flex",
  marginRight: "70em",
});
const StyledDiv = styled("div")({
  display: "flex",
  position: "relative",
  cursor: "pointer",
});

const StyledAside = styled("div")({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap-reverse",
});

const StyledH4 = styled(Typography)({
  paddingLeft: "20px",
});

const StyledH6 = styled(Typography)({
  paddingLeft: "20px",
  paddingTop: "14px",
});
const StyledAssets = styled("div")({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  paddingTop: "10px",
  paddingLeft: "20px",
  width: "1240px",
});

const OverlayText = styled("h1")({
  position: "absolute",
  top: "95%",
  left: "2%",
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  fontWeight: "500",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  pointerEvents: "none",
  margin: 0,
});

const Text = styled("h1")({
  position: "absolute",
  top: "90%",
  left: "2%",
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  fontWeight: "500",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  pointerEvents: "none",
  margin: 0,
});

const H1 = styled("h1")({
  position: "absolute",
  top: "90%",
  left: "3%",
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  fontWeight: "500",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  pointerEvents: "none",
  margin: 0,
});

const Overlaytex = styled("h1")({
  position: "absolute",
  top: "95%",
  left: "2%",
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  fontWeight: "500",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  pointerEvents: "none",
  marginLeft: "53em",
  marginTop: "51em",
});
const StyleFlex = styled("h1")({
  position: "absolute",
  top: "95%",
  left: "2%",
  color: "white",
  fontSize: "16px",
  fontFamily: "san-serif",
  fontWeight: "500",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  pointerEvents: "none",
  marginLeft: "6em",
  marginTop: "51em",
});
const StyledFlex = styled("div")({
  display: "flex",
  flexWrap: "wrap-reverse",
});

const StyledDivs = styled("div")({
  width: "505px",
  height: "621px",
  marginTop: "10px",
  marginLeft: "20px",
});
