import { styled } from "@mui/material";

export const NotFoundPage = () => {
  return (
    <StyledMain>
      <StyledH1 style={{ color: "#000000", fontSize: "18px" }}>
        Results for
        <StyledStrong>{`"Bishkek, Chuy Province, Kyrgyzstan"`}</StyledStrong>
      </StyledH1>
      <StyledDiv>
        It appears that no listings have yet been created for{" "}
        <StyledLinkCounter>
          {`"Bishkek, Chuy Province, Kyrgyzstan"`}.
        </StyledLinkCounter>
      </StyledDiv>
      <StyledSection>
        <StyledP style={{ fontSize: "16px", color: "#888888" }}>
          Be the first person to create a
          <StyledA href="#">listing in this area!</StyledA>
        </StyledP>
      </StyledSection>
    </StyledMain>
  );
};
const StyledMain = styled("main")({
  marginLeft: "100px",
  marginRight: "100px",
  marginTop: "40px",
});
const StyledH1 = styled("h1")({
  color: "#000000",
  fontSize: "18px",
});
const StyledDiv = styled("div")({
  marginTop: "40px",
  color: "#888888",
  fontSize: "16px",
});
const StyledSection = styled("section")({
  marginTop: "20px",
});
const StyledLinkCounter = styled("a")({
  color: "#D98F2B",
  cursor: "pointer",
});
const StyledA = styled("a")({
  color: "blue",
  paddingLeft: "5px",
  cursor: "pointer",
});
const StyledP = styled("p")({
  fontSize: "16px",
  color: "#888888",
});
const StyledStrong = styled("strong")({
  cursor: "pointer",
});
