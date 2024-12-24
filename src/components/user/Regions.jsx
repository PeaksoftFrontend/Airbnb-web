import Batken from "../../assets/image/batken-img.png";
import Osh from "../../assets/image/osh-img.png";
import Naryn from "../../assets/image/naryn-img.png";
import Jalalabad from "../../assets/image/jalalabad-img.png";
import Talas from "../../assets/image/talas-img.png";
import Issykkol from "../../assets/image/issykkol-img.png";
import Chui from "../../assets/image/chui-img.png";
import Bishkek from "../../assets/image/bishkek-img.png";

import { styled } from "@mui/material";
export const Regions = () => {
  return (
    <StyledBox>
      <StyledDiv>
        <img src={Chui} alt="" />
      </StyledDiv>
      <StyledAside>
        <StyledDivs>
          <img src={Batken} alt="" />
        </StyledDivs>
        <StyledDiv1>
          <img src={Jalalabad} alt="" />
        </StyledDiv1>
      </StyledAside>

      <StyledDiv2>
        <img src={Osh} alt="" />
      </StyledDiv2>
      <div>
        <img src={Naryn} alt="" />
      </div>
      <div>
        <img src={Bishkek} alt="" />
      </div>
      <div>
        <img src={Issykkol} alt="" />
      </div>
      <div>
        <img src={Talas} alt="" />
      </div>
    </StyledBox>
  );
};

const StyledAside = styled("aside")({
  display: "flex",
  // justifyContent: "space-evenly",
  position: "relative",
});

const StyledBox = styled("div")({
  width: "1240px",
  height: "1262px",
  marginLeft: "100px",
});

const StyledDiv = styled("div")({
  width: "505px",
  height: "621px",
});
const StyledDivs = styled("div")({
  width: "347px",
  height: "302px",
});

const StyledDiv1 = styled("div")({
  width: "347px",
  height: "302px",
});

const StyledDiv2 = styled("div ")({
  width: "505px",
  height: "621px",
});
