import { Avatar, styled } from "@mui/material";

export const Profile = ({ fullName, name, email }) => {
  return (
    <StyleBox>
      <Styledh1>{fullName}</Styledh1>
      <StyledContainer>
        <StyledAvatar>{name.charAt(0).toUpperCase()}</StyledAvatar>
        <StyledContent>
          <StyledDiv>
            <StyledP>Name:</StyledP>
            <StylP>Contact:</StylP>
          </StyledDiv>
          <StyledDivs>
            <StyleP>{name}</StyleP>
            <StyleP>{email}</StyleP>
          </StyledDivs>
        </StyledContent>
      </StyledContainer>
    </StyleBox>
  );
};

const StyleBox = styled("div")({});

const StyledContainer = styled("div")({
  width: "372px",
  height: "285px",
  border: "1px solid #C4C4C4",
  display: "flex",
  borderRadius: "16px",
});

const StyledAvatar = styled(Avatar)({
  width: "89px",
  height: "89px",
  fontSize: "38px",
  backgroundColor: "#266BD3",
  marginLeft: "141px",
});
const StyledDiv = styled("div")({
  display: "flex",
  marginTop: "15px",
});

const StyledDivs = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
});

const StyledContent = styled("div")({
  display: "flex",
  gap: "16px",
  marginTop: "160px",
});

const StyledP = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#646464",
  marginTop: "12px",
  marginLeft: "-180px",
});

const StylP = styled("P")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#646464",
  marginTop: "45px",
  marginLeft: "-65px",
});
const StyleP = styled("p")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#383838",
  marginTop: "10px",
  marginLeft: "-120px",
});

const Styledh1 = styled("h1")({
  fontSize: "20px",
  color: "#363636",
  fontWeight: "500",
});
