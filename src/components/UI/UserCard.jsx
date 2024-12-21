import { Box, Container, styled } from "@mui/material";
import { Button } from "./Button";
import { Icons } from "../../assets";

export const Data = [
  {
    id: 1,
    url: "https://s3-alpha-sig.figma.com/img/304f/ca39/f33258e3faeba9fc4de788c01b284bfb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SimzsnRGf9bw~z773tBXJSQH~rTA2QjcbqYhpBRgDGUUY2HdCxYoaTnxv0lKhAZvRzgT6BBLMhCePCXpC~9OGrgA29gVICDJ63Imm0wcKEojOPIhJ1fxnO~8ygThLVGOFo7jUdaeDLyZIcmNTOF-Wbs8eBDIuyyClxW4yb8Ua-8oJqt5nsFKxu6zYb4Vua7dmZoevWpgi~~ucX8O6OJZA3Ncu0nxr7l4f-YtMvk8StEG~fjiz54wX11uCdNxK9JyyqLvHyiPUXBU87EIcyrM2MEF2pyKW8hA1wpwFgtAUpfchqzXkOgozlsoYQQwk7qOshSWbiMnj2S2-b1fbhsYiw__",

    pieces: 26,
    rating: 3.4,
    title: "Beautiful and picturesque 2 sto...",
    gps: "12 Morris Ave, Toronto, ON, CA,",
    guests: 2,
  },
  //   {
  //     id: 2,
  //     url: "https://s3-alpha-sig.figma.com/img/304f/ca39/f33258e3faeba9fc4de788c01b284bfb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SimzsnRGf9bw~z773tBXJSQH~rTA2QjcbqYhpBRgDGUUY2HdCxYoaTnxv0lKhAZvRzgT6BBLMhCePCXpC~9OGrgA29gVICDJ63Imm0wcKEojOPIhJ1fxnO~8ygThLVGOFo7jUdaeDLyZIcmNTOF-Wbs8eBDIuyyClxW4yb8Ua-8oJqt5nsFKxu6zYb4Vua7dmZoevWpgi~~ucX8O6OJZA3Ncu0nxr7l4f-YtMvk8StEG~fjiz54wX11uCdNxK9JyyqLvHyiPUXBU87EIcyrM2MEF2pyKW8hA1wpwFgtAUpfchqzXkOgozlsoYQQwk7qOshSWbiMnj2S2-b1fbhsYiw__",
  //     url: "https://s3-alpha-sig.figma.com/img/304f/ca39/f33258e3faeba9fc4de788c01b284bfb?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SimzsnRGf9bw~z773tBXJSQH~rTA2QjcbqYhpBRgDGUUY2HdCxYoaTnxv0lKhAZvRzgT6BBLMhCePCXpC~9OGrgA29gVICDJ63Imm0wcKEojOPIhJ1fxnO~8ygThLVGOFo7jUdaeDLyZIcmNTOF-Wbs8eBDIuyyClxW4yb8Ua-8oJqt5nsFKxu6zYb4Vua7dmZoevWpgi~~ucX8O6OJZA3Ncu0nxr7l4f-YtMvk8StEG~fjiz54wX11uCdNxK9JyyqLvHyiPUXBU87EIcyrM2MEF2pyKW8hA1wpwFgtAUpfchqzXkOgozlsoYQQwk7qOshSWbiMnj2S2-b1fbhsYiw__",

  //     pieces: 26,
  //     rating: 3.4,
  //     title: "Beautiful and picturesque 2 sto...",
  //     gps: "12 Morris Ave, Toronto, ON, CA,",
  //     guests: 2,
  //   },
];

export const UserCard = () => {
  return (
    <StyleConteiner>
      {Data.map((item) => (
        <Box key={item.id} {...item}>
          <StyleAll>
            <div>
              <StyleImg src={item.url} alt="" />
            </div>
            <div>
              <StylePieces>
                <b>
                  ${item.pieces}/<span>day</span>
                </b>
                <span>
                  <Icons.Star />
                  {item.rating}
                </span>
              </StylePieces>
              <StyleDiv>
                <p>{item.title}</p>
                <div>{item.gps}</div>
              </StyleDiv>

              <StyleguesNum>
                <div>{item.guests} guests</div>
                <StyledButton variant="outlined">BOOK</StyledButton>
                <Icons.HeartColorless />
              </StyleguesNum>
            </div>
          </StyleAll>
        </Box>
      ))}
    </StyleConteiner>
  );
};

const StyleImg = styled("img")({
  width: "295px",
  height: "191px",
});

const StylePieces = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  "& p": {
    fontSize: "20px",
    color: "yellow",
  },
});

const StyleConteiner = styled(Container)({
  width: "295px",
  height: "362px",
});

const StyleDiv = styled("div")({
  paddingTop: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  display: "flex",
  padding: "5px 0px 0px 30px",
});

const StyleguesNum = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  paddingTop: "23px",
});

const StyleAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "19px",
});
