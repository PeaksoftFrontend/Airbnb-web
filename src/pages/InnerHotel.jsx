import { Box, styled } from "@mui/material";
import { Sliders } from "../components/admin/Sliders";

export const InnerHotel = () => {
  return (
    <StyleContainer>
      <StyleDIv>
        <p>NAME</p>
        <StyleSliders />
      </StyleDIv>
      <div>
        <div>
          <div>
            <div>Apartement</div>
            <div>2 Guests</div>
          </div>
          <div>
            <p>Name of hotel</p>
            <p>12 Morris Ave, Toronto, ON, CA</p>
          </div>
          <div>
            <p>
              The hotel will provide guests with air-conditioned rooms offering
              a desk, a kettle, a fridge, a minibar, a safety deposit box, a
              flat-screen TV and a shared bathroom with a shower. At Garden
              Hotel & SPA the rooms have bed linen and towels.
            </p>
            <div>
              <p>Anna Annova</p>
              <p>anna@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <button>REJECT</button>
          <button>ACCEPT</button>
        </div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled("div")({
  display: "flex",
});

const StyleSliders = styled(Sliders)({
  width: "630px",
  margin: 0,
    padding: 0,
  paddingLeft: "20px",
  "& .swiper": {
    padding: "0px 40px",
    margin: 0,
  },
  "& swiper-horizontal": {
    paddingLeft: "40px",
  },
  "&  swiper-initialized": {
    padding:0,
  },
  "& swiper-backface-hidden":{
    padding:0,
  }
});

const StyleDIv = styled(Box)({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "50px",
});
