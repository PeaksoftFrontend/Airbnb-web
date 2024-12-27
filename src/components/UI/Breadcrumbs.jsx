import { styled } from "@mui/material";

export const Breadcrumbs = ({ path, name }) => {
  return (
    <StyledDiv>
      <StyledPath>{path}</StyledPath>
      <StyledSpan> / </StyledSpan>
      <StyledName>{name}</StyledName>
    </StyledDiv>
  );
};

const StyledPath = styled("span")({
  color: "#999",
});

const StyledSpan = styled("span")({
  margin: "0 5px",
  color: "#666",
});

const StyledName = styled("span")({
  fontWeight: "400",
  color: "#333",
});

const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
  color: "#666",
  marginTop: "46px",
  marginLeft: "40px",
});
