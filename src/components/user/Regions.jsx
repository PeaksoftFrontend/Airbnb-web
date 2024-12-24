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
      <div>
        <img src={Chui} alt="" />
      </div>
      <StyledAside>
        <div>
          <img src={Batken} alt="" />
        </div>
        <div>
          <img src={Jalalabad} alt="" />
        </div>
      </StyledAside>

      <div>
        <img src={Osh} alt="" />
      </div>
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
