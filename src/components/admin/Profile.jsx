import { Avatar, Box, styled, Typography } from "@mui/material";
import { useState } from "react";
// import { Hover } from "./Hover";

export const Profile = ({ Date }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredItem(id);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  return (
    <>
      {Date.map((item) => (
        <StyledBox key={item.id} {...item}>
          <Typography>{item.fullName}</Typography>
          <StyleD>
            <StyleBox>
              <StyleAvatar>
                {item.image ? (
                  <StyledImg src={item.image} alt={`${item.name}'s avatar`} />
                ) : (
                  item.name.charAt(0).toUpperCase()
                )}
              </StyleAvatar>
            </StyleBox>
            <StyleText>
              <StyleName
                onMouseEnter={() => handleMouseEnter(`name-${item.id}`)}
                onMouseLeave={handleMouseLeave}
              >
                <StyleSpan>Name:</StyleSpan>
                {hoveredItem === `name-${item.id}`
                  ? item.name
                  : `${item.name.slice(0, 7)}${item.name.length > 7 ? "..." : ""}`}
              </StyleName>
              <StyleName
                onMouseEnter={() => handleMouseEnter(`email-${item.id}`)}
                onMouseLeave={handleMouseLeave}
              >
                <span>Contact:</span>
                {hoveredItem === `email-${item.id}`
                  ? item.email
                  : item.email && item.email.length > 6
                    ? `${item.email.substring(0, 6)}...@gmail.com`
                    : item.email}
                {/* // <Hover text={item.email} /> */}
              </StyleName>
            </StyleText>
          </StyleD>
        </StyledBox>
      ))}
    </>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  gap: "22px",
  flexDirection: "column",
});

const StyleD = styled("div")({
  width: "372px",
  height: "285px",
  border: "1px solid #C4C4C4",
  borderRadius: "16px",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
});

const StyleAvatar = styled(Avatar)({
  width: "89px",
  height: "89px",
  background: " #266BD3",
  color: "#FFFFFF",
  fontSize: "40px",
});

const StyleBox = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyleText = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "30px",
  gap: "12px",
});

const StyleName = styled("p")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#363636",
  display: "flex",
  gap: "16px",
  "& span": {
    fontSize: "16px",
    fontWeight: 400,
    color: "#646464",
  },
});

const StyleSpan = styled("span")({
  paddingLeft: "16px",
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
});
