import  { useState } from "react";
import { Icons } from "../../assets";
import { styled } from "@mui/material";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledHeader>
      <StyleLogo>
        <Icons.Logo />
      </StyleLogo>
      <StyledLiTogether>
        <StyledA href="#">Application</StyledA>
        <StyledA href="#">Users</StyledA>
        <StyledA href="#">All housing</StyledA>
      </StyledLiTogether>
      <StyleEnd>
        <StyledArrow>
          <StyledText onClick={ToggleText}>
            Administator
            <StyleDropDown>
              <Icons.ArrowDown />
            </StyleDropDown>
          </StyledText>
          {isOpen && (
            <StyledNav>
              <StyledHoverText>
                <StyledDropDownText href="#">Log out</StyledDropDownText>
              </StyledHoverText>
            </StyledNav>
          )}
        </StyledArrow>
      </StyleEnd>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0B0B0B",
  width: "100%",
  height: "82px",
});
const StyledLiTogether = styled("nav")({
  display: "flex",
  listStyle: "none",
  color: "#E5E5E5",
  width: "310px",
  height: "22px",
  marginRight: "400px",
  gap: "36px",
  cursor: "pointer",
});
const StyleEnd = styled("div")({
  display: "flex",
  marginLeft: "60px",
  color: "#E5E5E5",
  listStyle: "none",
});
const StyledA = styled("li")({
  textDecoration: "none",
  ":hover": {
    color: "#FF4B4B",
  },
});
const StyleLogo = styled("div")({
  width: "72px",
  height: "54px",
  marginLeft: "40px",
  cursor: "pointer",
});
const StyledArrow = styled("div")({
  position: "relative",
  display: "inline-block",
});

const StyledText = styled("li")({
  display: "flex",
  alignItems: "center",
});
const StyleDropDown = styled("span")({
  marginLeft: "10px",
  transition: "transform 0.2s",
  cursor: "pointer",
});
const StyledNav = styled("nav")({
  position: "absolute",
  left: "0",
  backgroundColor: "#FFFFFF",
  width: "110px",
  height: "59px",
  top: "36px",
  borderRadius: "2px",
  border: "1px solid #F3F3F3",
  paddingTop: "20px",
  zIndex: 1,
});
const StyledHoverText = styled("div")({
  ":hover": {
    backgroundColor: "#F3F3F3",
    height: "27px",
  },
});
const StyledDropDownText = styled("a")({
  color: "#5D5D5D",
  textDecoration: "none",
});
