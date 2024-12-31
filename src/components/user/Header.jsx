import { Icons } from "../../assets";
import { Checkbox } from "../UI/Checkbox";
import { styled } from "@mui/material";
import { SearchInput } from "../UI/SearchInput";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <Icons.LogoColor />
      </StyledLogo>
      <StyledP>leave an ad</StyledP>
      <StyledArticle>
        <StyledCheckbox>
          <Checkbox />
        </StyledCheckbox>
        <p>Search nearby</p>
      </StyledArticle>
      <StyledSearchInput>
        <SearchInput value="Search" variant="outlined" size="small" />
      </StyledSearchInput>
      <StyledButton>JOIN US</StyledButton>
    </StyledHeader>
  );
};

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
  gap: "10px",
  borderRadius: "2px 0px 0px 0px",
  border: "1px 0px 0px 0px",
  position: "relative",
  left: "10px",
});
const StyledCheckbox = styled("span")({
  position: "relative",
  left: "20px",
});
const StyledArticle = styled("article")({
  display: "flex",
  alignItems: "center",
  position: "relative",
  left: "60px",
});
const StyledP = styled("p")({
  color: "#FFBE58",
  width: "98px",
  height: "22px",
  position: "relative",
  right: "50px",
  cursor: "pointer",
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
