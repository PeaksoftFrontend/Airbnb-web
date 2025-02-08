import { Box, styled } from "@mui/material";
import { SearchInput } from "../../UI/SearchInput";
import { Checkbox } from "../../UI/Checkbox";
import { HeaderModal } from "./HeaderModal";
import Backround from "../../../assets/image/backgroundimage-img.png";

export const WelcomeSection = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <StyledBox>
      <StyledHeaderWrapper>
        <HeaderModal showAvatarModal={true} />
      </StyledHeaderWrapper>
      <StyledSearchBox>
        <StyledTwoBox variant="h3">
          Find a place you'll love to stay at
        </StyledTwoBox>
        <StyledDiv>
          <StyledSearch
            type="search"
            variant="outlined"
            size="small"
            placeholder="Region, city, apartment, house..."
          />

          <StyledCheckBox>
            <CustomCheckbox {...label} defaultChecked />
            <StyledSpan>Искать поблизости</StyledSpan>
          </StyledCheckBox>
        </StyledDiv>
      </StyledSearchBox>
    </StyledBox>
  );
};

export const StyledBox = styled(Box)({
  backgroundImage: `url(${"https://s3-alpha-sig.figma.com/img/881d/982b/7e4c3296da11913f9e1154a99cf7f812?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YxiVq4KQCsojOuP-3kv2OE3i9tpYF9bp3BwrqscHJfIPtuYhgQbeO6kJzsD6C20cVfBoEdfTEAXk-RDP1TU0O2HDRyrYCNZpoJ4jeahOuVg9MfUjP7QfBwaj4V10Q9hyzCi~9oSwBErHCMpk15Gfdi8I7erll0dWNvLrDdKly1EvxCYY0uMvt~v-Mdo3wV5tOTmJGZSvfBMJNmmK2Rsi1JswJY9vpwlDq4SXkydb2aiIq619SrwOT20x~8Pyg-AXfArmvWz7OtMAYak-LPIv4Hd7bJ-zyeQ4ERTEbP~RCsq1-hTsLriwQhGmz~lEhhMvmazMkuJ5Ue6LlzbYdVPWSQ__"})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
});
export const StyledSearch = styled(SearchInput)({
  width: "725px",
  border: "none",
  height: "42px",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#ccc",
    },
    "&:hover fieldset": {
      borderColor: "#aaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#646464",
    },
  },
  "& .MuiInputBase-input": {
    color: "#646464",
  },
});
export const StyledHeaderWrapper = styled(Box)({
  padding: "28px 100px ",
  maxWidth: "1440px",
  width: "100%",
});

export const StyledTwoBox = styled(Box)({
  fontSize: "40px",
  fontWeight: "400",
  color: "#FFFFFF",
  textAlign: "center",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
});

export const StyledSearchBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  marginTop: "8rem",
});

const StyledCheckBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "black",
  "& .MuiCheckbox-root": {
    color: "#FBFBFB",
  },
  "& .Mui-checked": {
    color: "#FBFBFB",
  },
  justifyContent: "end",
});
const StyledSpan = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#EDEDED",
  marginRight: "8px",
});
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "&.Mui-checked": {
    color: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    border: "2px solid #FBFBFB",
    marginLeft: "8px",
  },
}));

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
});
