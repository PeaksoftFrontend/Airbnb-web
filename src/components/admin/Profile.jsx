import { Avatar, Box, styled, Tooltip, Typography } from "@mui/material";
import { useState } from "react";

export const Profile = ({ Date }) => {
  const [hoveredItem] = useState(null);
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
              <StyleName>
                <StyleSpan>Name:</StyleSpan>
                {item.name}
              </StyleName>
              <StyleName style={{ color: "black" }}>
                <StyleSpan>Contact:</StyleSpan>
                <StyledTooltip title={item.email}>
                  <StyledEmail>
                    {hoveredItem === `email-${item.id}`
                      ? item.email
                      : item.email && item.email.length > 23
                        ? `${item.email.slice(0, 23)}...`
                        : item.email}
                  </StyledEmail>
                </StyledTooltip>
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
  cursor: "pointer",
  "& span": {
    fontSize: "16px",
    fontWeight: 400,
    color: "#646464",
  },
});
const StyledEmail = styled("p")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#363636",
  display: "flex",
  gap: "16px",
  cursor: "pointer",
});

const StyleSpan = styled("span")({
  paddingLeft: "16px",
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
});

const StyledTooltip = styled(Tooltip)({
  ".MuiTooltip-tooltip": {
    backgroundColor: "grey[900]",
    color: "white",
    fontSize: "16px",
  },
});
