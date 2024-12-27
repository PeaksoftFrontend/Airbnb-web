import { styled } from "@mui/material";

export const Breadcrumbs = ({ path, current }) => {
  return (
    <StyledDiv>
      <Path>{path}</Path>
      <Span> / </Span>
      <Current>{current}</Current>
    </StyledDiv>
  );
};

const Path = styled("span")({
  color: "#999",
});

const Span = styled("span")({
  margin: "0 5px",
  color: "#666",
});

const Current = styled("span")({
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
