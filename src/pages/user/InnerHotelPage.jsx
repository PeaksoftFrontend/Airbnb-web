import { Sliders } from "../../components/admin/Sliders";
import { Avatar, Box, styled, Typography } from "@mui/material";
import { Payment } from "../../components/UI/Payment";
import { Reviews } from "../../components/user/Reviews";
import { FeedbackList } from "../../components/UI/FeedbackList";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";

export const InnerHotelPage = () => {
  const main = [
    { id: 1, url: "/main", title: "Main" },
    { id: 2, url: "/naryn", title: "Naryn" },
    { id: 3, url: "/hotel", title: "Hotel" },
  ];
  const image = [
    "https://s3-alpha-sig.figma.com/img/d191/5c46/b81941212a948a76824c21edd9c509af?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZSDZAlR88jSO92~pwqhGJKBP9MAXPnDWuQgc5aU7eMrs6zUjJJums87sRE84aJun~a-z9vwEc5lKyK0rb3ykp8X8jR8TLw5zsItr8gp4BhYFTuIrBxVJK-J68R8P7YIwDVBDWlNo61dU0tQEB3ZPXS3ErAb30JinIMgAhs4SjsOMPBtiJyQ9NDjWWg51V8zp5e1OqZ24AMXueIs9liO5G8JZknq-YKuhGOkM~qDPgi626eio~QS2ZlprsmZ27lZrzQAUygo5LXsNzUaWH5SdagXc~f88b0Hidi5YWuTaoKREgzLcFlsbczXXXJw7Fw2DZk-K1F~ihXP5P46-fsc2Dg__",
    "https://s3-alpha-sig.figma.com/img/f3fb/d735/f97c76cf6d37044fead6fcdd7924e622?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yimd5DvJT2qMJwn6K2zHks9EXYq0xvVSLoR~F63UlsvQV7y1v32OxWL9PRrMVFHR0CRMhYAIDBJ2amj9IrUa0MSy2UZMmfKVUh~IWvHGuMNm7mTwhqzVBtQjhC7Ze9y4uYqQtoZ2EM3HWwdAVHUG26bIEn9I6fGs36~PUyACc-koEAJuj018PVYJoGG9~XK2L3ZgNyBsVyH9NR~NxMA3FKBWDJb7Z1X4-WUGTiEAfpKaj0TIhmn0-sf7NTErn0tGzjgAB~qHAYcpwSX9twmIeKUkDmKA211K~MuR91mw6VLUp7oVcY2hnvgByVBcobjSQS6eXDTjY4FL9HBDe6WjTg__",
    "https://s3-alpha-sig.figma.com/img/f0fd/1fb4/9b072855c55e71e699ad7bc3bbbe7462?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F9mSYV2zhqzLke4Q5Zs4~PtNAu1OQLOURl-A9pToFfVK-wXnqUZQiWK-XnJF8ZB-PxY-4rsGp1UqNwDVqnCJEpXQ7qKyAxAG6IcHC~Z48IzKijPCXbxAKDI26DUiQFP7e0Y2satPXq6glwonkiBPWpMSTkuxwq9sj-ZzimT3tE~pcvuHnHSeNaOLQOA8~XmuIku7faIiiK11w1cho3JbLrIvGLvZog9SQMtjfGJ4AMn1Z4zL7J5Ggtm3TogKfM2oDlDJ7umkw7Iyyrscm8ZwUCPAv3b5kWGYB1nfIm-e5FLtE9oXwnhuJgdGgij9EhohVxYWhWSGIJyGAYRYAd6ieg__",
    "https://s3-alpha-sig.figma.com/img/b24a/1f9f/05941e018a384cc6e08778c6317dc348?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CzX1NQfA2AZtQfMbQFJgfg90FT1mKmgt2nFLFLMR7NUpRUBMVew-GHY1TJqNZhhVC86tPb0mg-zdsXdvrRa90d7qTv84L14oM7GhyYHdyE9cOBbCqUAzFioyySxhcZT~tIpRsI-6-UkeMi4St0ecGrgLIVF~wzFOqVHReWegyh6~KdufGYu-eUBHP5hCOrawwePVlMusahqYvYr1PBxSWuRfvdRPR-xQMh73mqaW~IAN9TYTvtDGXv7Om70IhtwncgtgqhiWvyhkvhL~UJx6eY5F8CnNJyQTPDqQFOxIT51Cbk-VxKS2EcPSkzuHiNClSXg~JgFNeCq3qbBkWPurZA__",
  ];
  const DETAIL_PUBLISHES = {
    type: "Apartement",
    person: "2 Guests",
    name: "12 Morris Ave, Toronto, ON, CA",
    description: `The hotel will provide guests with air-conditioned rooms offering a desk, a kettle, a fridge, a minibar, a safety deposit box, a flat-screen TV and a shared bathroom with a shower. At Garden Hotel & SPA the rooms have bed linen and towels.`,
    userInfo: {
      userName: "Anna",
      userLastName: "Annova",
      userEmail: "anna@gmail.com",
    },
  };
  return (
    <div>
      <StyledSection>
        <Breadcrumbs path={main} />

        <StyleContainer>
          <StyleDIv>
            <p>NAME</p>
            <Sliders images={image} />
          </StyleDIv>
          <StyledText>
            <div>
              <StyleGlobal>
                <StyleApartaments>{DETAIL_PUBLISHES?.type}</StyleApartaments>
                <StyleGuests>{DETAIL_PUBLISHES?.person}</StyleGuests>
              </StyleGlobal>
              <StyleGPS>
                <p>Name of hotel</p>
                <span>{DETAIL_PUBLISHES?.name}</span>
              </StyleGPS>
              <StyleDiscription>
                <StyledDescription>
                  {DETAIL_PUBLISHES?.description}
                </StyledDescription>
                <StyleProfile>
                  <Avatar
                    sx={{ backgroundColor: "#C4C4C4" }}
                    alt={DETAIL_PUBLISHES?.userInfo?.userName}
                  />
                  <StyleEmail>
                    <StyleName>
                      {DETAIL_PUBLISHES?.userInfo?.userName}
                      {DETAIL_PUBLISHES?.userInfo?.userLastName}
                    </StyleName>
                    <StyleNik>{DETAIL_PUBLISHES?.userInfo?.userEmail}</StyleNik>
                  </StyleEmail>
                </StyleProfile>
              </StyleDiscription>
              <Payment />
              <StyledReviews>
                <Reviews />
              </StyledReviews>
            </div>
          </StyledText>
        </StyleContainer>
        <StyledSectionFeedback>
          <StyledFeedBack variant="h5">FEEDBACK</StyledFeedBack>
          <StyledBox>
            <StyledDiv>
              <FeedbackList />
              <Typography variant="h6">Show More</Typography>
            </StyledDiv>
          </StyledBox>
        </StyledSectionFeedback>
      </StyledSection>
    </div>
  );
};

const StyleContainer = styled("div")({
  display: "flex",
  gap: "65px",
});
const StyledReviews = styled("div")({
  paddingTop: "235px",
  marginRight: "130px",
});
const StyledSectionFeedback = styled("section")({
  position: "relative",
  bottom: "180px",
});
const StyledFeedBack = styled(Typography)({
  paddingLeft: "10px",
});

const StyledDescription = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#363636",
});

const StyleDIv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: "#000000",
  },
});
const StyledSection = styled("section")({
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "80px",
});
const StyledText = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "50px",
});

const StyleGlobal = styled("div")({
  display: "flex",
  gap: "14px",
});
const StyleApartaments = styled("div")({
  width: "95px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGuests = styled("div")({
  width: "75px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGPS = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "8px",
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: " #000000",
  },
  "& span": {
    fontSize: "14px",
    fontWeight: 400,
    color: "#828282",
  },
});

const StyleDiscription = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "30px",
});

const StyleProfile = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const StyleEmail = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

const StyleName = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
  color: "#000000",
});

const StyleNik = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#afaeae",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "120px",
});

const StyledDiv = styled("div")({
  display: "flex",
  gap: "28px",
  flexDirection: "column",
  alignItems: "center",
  width: "630px",
});
