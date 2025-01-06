import { Avatar, Box, styled } from "@mui/material";

export const Profile = ({ fullName, name, email }) => {
  return (
    <>
      <Styledh1>{fullName}</Styledh1>
      <StyledContainer>
        <AvatarBox>
          <StyledAvatar>{name.charAt(0).toUpperCase()}</StyledAvatar>
        </AvatarBox>
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
    </>
  );
};

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
  // marginLeft: "141px",
  // marginTop: "38px",
});
const AvatarBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});
const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  // marginTop: "15px",
});

const StyledDivs = styled("div")({
  display: "flex",
  flexDirection: "column",
  // marginTop: "15px",
});

const StyledContent = styled("div")({
  display: "flex",
  gap: "16px",
  // marginTop: "160px",
});

const StyledP = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#646464",
  // marginTop: "12px",
  // marginLeft: "-200px",
});

const StylP = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#646464",
  // marginTop: "45px",
  // marginLeft: "-55px",
});
const StyleP = styled("p")({
  fontSize: "18px",
  fontWeight: "500",
  color: "#383838",
  // marginTop: "10px",
  // marginLeft: "-150px",
});

const Styledh1 = styled("h1")({
  fontSize: "20px",
  color: "#363636",
  fontWeight: "500",
});
// import { Card, CardContent, Typography, Avatar } from "@mui/material";
// import Grid from "@mui/material/Grid";

// export const Profile = ({ name, contact }) => {
//   return (
//     <Card sx={{ minWidth: 275, margin: "16px" }}>
//       <CardContent>
//         <Grid container alignItems="center">
//           <Grid item>
//             <Avatar sx={{ bgcolor: "blue", marginRight: "16px" }}>
//               {name[0]}
//             </Avatar>
//           </Grid>
//           <Grid item>
//             <Typography variant="h6">{name}</Typography>
//             <Typography variant="body2" color="text.secondary">
//               Contact: {contact}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// };
