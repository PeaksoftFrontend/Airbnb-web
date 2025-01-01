import { Box, styled } from "@mui/material";
import { SearchInput } from "../../UI/SearchInput";
import { Checkbox } from "../../UI/Checkbox";
import { HeaderModal } from "./HeaderModal";

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
  backgroundImage: `url(${"https://shorturl.at/xs8ce"})`,
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

export const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
  gap: "50px",
  marginTop: "12.4rem",
}));

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
