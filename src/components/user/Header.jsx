import React from "react";
import { Icons } from "../../assets";
import { Checkbox, styled } from "@mui/material";
import { SearchInput } from "../UI/SearchInput";

const Header = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <StyledHeader>
      <StyledLogo>
        <Icons.LogoColor />
      </StyledLogo>
      <StyledP>leave an ad</StyledP>
      <StyledArticle>
        <Checkbox {...label} defaultChecked />
        <p>Search nearby</p>
      </StyledArticle>
      <StyledSearchInput>
        <SearchInput value="Search" variant="outlined" size="small" />
      </StyledSearchInput>
      <StyledButton>JOIN US</StyledButton>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled("header")({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  background: "#FFFFFF",
  width: "100%",
  height: "88px",
});
const StyledLogo = styled("div")({
  cursor: "pointer",
});
const StyledSearchInput = styled("div")({
  height: "37px",
  width: "414px",
  left: "900px",
  gap: "10px",
  borderRadius: "2px 0px 0px 0px",
  border: "1px 0px 0px 0px",
});
const StyledArticle = styled("article")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  left: "50px",
});
const StyledP = styled("p")({
  color: "#FFBE58",
  width: "98px",
  height: "22px",
  position: "relative",
  right: "50px",
});
const StyledButton = styled("button")({
  width: "196px",
  height: " 37px",
  top: "25px",
  left: "1144px",
  padding: "10px 16px 10px 16px",
  gap: "10px",
  borderRadius: "2px ",
  border: "none",
  background: " #DD8A08",
  color: "#F7F7F7",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "16.94px",
  textAlign: "center",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
  cursor: "pointer",
});
