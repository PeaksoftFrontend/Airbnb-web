import { styled } from "@mui/material";

export const Profile = ({ fullName, name, email }) => {
  return (
    <StyleBox>
      <Styledh1>{fullName}</Styledh1>
      <StyledContainer>
        <Avatar>
          <AvatarP>{name.charAt(0).toUpperCase()}</AvatarP>
        </Avatar>
        <StyledContent>
          <StyledDiv>
            <StyledP>Name:</StyledP>
            <StyledP>Contact:</StyledP>
          </StyledDiv>
          <StyledDivs>
            <StyleP>{email}</StyleP>
            <StyleP>{name}</StyleP>
          </StyledDivs>
        </StyledContent>
      </StyledContainer>
    </StyleBox>
  );
};

const StyleBox = styled("div")({
  marginTop: "121px",
});

const StyledContainer = styled("div")({
  width: "372px",
  height: "285px",
  border: "1px solid #C4C4C4",
  marginLeft: "100px",
  marginTop: "20px",
  display: "flex",
  borderRadius: "16px",
});

const Avatar = styled("div")({
  width: "89px",
  height: "89px",
  backgroundColor: "#266BD3",
  borderRadius: "45px",
  marginTop: "38px",
  display: "flex",
  marginLeft: "141px",
});

const AvatarP = styled("p")({
  fontSize: "38px",
  fontWeight: "500",
  color: "white",
  display: "flex",
  justifyContent: "center",
  marginTop: "21px",
  marginLeft: "27px",
});

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
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
  // marginTop: "122px",
  marginLeft: "100px",
});
