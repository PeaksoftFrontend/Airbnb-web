import {
  Box,
  Container,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { Icons } from "../../assets";

const StarRating = [
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
        {StarRating.map((item) => (
          <StyleCardStar key={item.star}>
            <StyleStarNum>{item.star}</StyleStarNum>
            <LinearProgress
              variant="determinate"
              value={item.percentage}
              sx={{
                height: "3px",
                flex: 1,
                backgroundColor: "#C4C4C4",
                border: "1px solid #C4C4C4",
                "& .MuiLinearProgress-bar": {
                  border: "3px solid #4F7755",
                },
              }}
            />
            <Typography variant="p" sx={{ fontSize: "16px", fontWeight: 500 }}>
              {item.percentage}%
            </Typography>
          </StyleCardStar>
        ))}
      </StyleLiner>
    </StyleConteiner>
  );
};

const StyleStar = styled("p")({
  padding: "10px 40px",
  fontSize: "28px",
  display: "flex",
  gap: "10PX",
  "& svg path": {
    fill: "#F7D212",
  },
  "& svg ": {
    width: "31px",
    height: "31px",
  },
});

const StyleConteiner = styled(Container)({
  border: " 1px solid #C4C4C4",
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
  gap: "4px",
});

const StyleLiner = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "0px 40px 0px 40px ",
});

const StyleStarNum = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
});
