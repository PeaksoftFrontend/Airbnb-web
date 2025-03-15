import { Box, styled } from "@mui/material";
import { SearchInput } from "../../UI/SearchInput";
import { Checkbox } from "../../UI/Checkbox";
import { HeaderModal } from "./HeaderModal";
import Backround from "../../../assets/image/backgroundimage-img.png";
import { useSelector } from "react-redux";

export const WelcomeSection = () => {
  const role = useSelector((state) => state.auth.role);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <StyledBox>
      <StyledHeaderWrapper>
        <HeaderModal />
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
          {role === "GUEST" ? (
            <StyledCheckBox>
              <CustomCheckbox {...label} />
              <StyledSpan>Искать поблизости</StyledSpan>
            </StyledCheckBox>
          ) : null}
        </StyledDiv>
      </StyledSearchBox>
    </StyledBox>
  );
};

export const StyledBox = styled(Box)({
  backgroundImage: `url(${Backround})`,
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
const CustomCheckbox = styled(Checkbox)(() => ({
  "& .MuiSvgIcon-root": {
    marginLeft: "8px",
  },
}));

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
});
