import {
  Box,
  Container,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";
import { Icons } from "../../assets";

const STAR_RATING = [
  {
    star: 5,
    percentage: 50,
  },
  {
    star: 4,
    percentage: 15,
  },
  {
    star: 3,
    percentage: 0,
  },
  {
    star: 2,
    percentage: 0,
  },
  {
    star: 1,
    percentage: 0,
  },
];

export const Reviews = () => {
  return (
    <StyleConteiner>
      <StyleStar>
        4.4
        <Icons.Star />
      </StyleStar>
      <StyleLiner>
        {STAR_RATING.map((item) => (
          <StyleCardStar key={item.star} {...item}>
            <StyleStarNum>{item.star}</StyleStarNum>
            <StyledLinerProgresParent>
              <StyleLinearProgress
                variant="determinate"
                value={item.percentage}
              />
            </StyledLinerProgresParent>
            <Stylepers>
              <StylePersenges variant="p">{item.percentage}%</StylePersenges>
            </Stylepers>
          </StyleCardStar>
        ))}
      </StyleLiner>
    </StyleConteiner>
  );
};

const Stylepers = styled("div")({
  minWidth: "35px",
  textAlign: "center",
  justifyContent: "center",
});

const StyleLinearProgress = styled(LinearProgress)({
  flex: 1,
  backgroundColor: "#C4C4C4",

  "& .MuiLinearProgress-bar": {
    height: "8px",
    backgroundColor: "#4F7755",
  },
});

const StyledLinerProgresParent = styled("div")({
  width: "274px",
});

const StyleStar = styled("p")({
  padding: "10px 40px",
  fontSize: "28px",
  display: "flex",
  gap: "10px",
  "& svg path": {
    fill: "#F7D212",
  },
  "& svg ": {
    width: "31px",
    height: "31px",
  },
});

const StyleConteiner = styled(Container)({
  border: "1px solid #C4C4C4",
  borderRadius: "16px",
  width: "424px",
  height: "232px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

const StyleCardStar = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",
});

const StyleLiner = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "0px 30px 0 40px  ",
});

const StyleStarNum = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
});

const StylePersenges = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "center",
  justifyContent: "center",
});
