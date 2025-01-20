import { Avatar, Box, styled, Tooltip, Typography } from "@mui/material";

export const Profile = ({ name, email, fullName, avatar, isAuth, role }) => {
  const handleLogout = () => {};
  return (
    <StyledBox>
      {role === "ADMIN" && (
        <StyledTypography>
          {name} {fullName}
        </StyledTypography>
      )}
      <StyledContainer>
        <StyledAvatar>
          {avatar ? (
            <StyledImg src={avatar} alt={`${name}'s avatar`} />
          ) : (
            name.charAt(0).toUpperCase()
          )}
        </StyledAvatar>
        <StyledText>
          <StyledRow>
            <StyledLabel>Name:</StyledLabel>
            <span>
              {name} {fullName}
            </span>
          </StyledRow>
          <StyledRow>
            <StyledLabel>Contact:</StyledLabel>
            <StyledTooltip title={email || "No email provided"}>
              <StyledEmail>{`${email.slice(0, 24)}...`}</StyledEmail>
            </StyledTooltip>
          </StyledRow>
        </StyledText>
        {isAuth ? (
          <Typography onClick={handleLogout} color="red">
            Log out
          </Typography>
        ) : null}
      </StyledContainer>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  gap: "22px",
  flexDirection: "column",
});

const StyledContainer = styled(Box)({
  width: "372px",
  height: "fit-content",
  border: "1px solid #C4C4C4",
  borderRadius: "16px",
  display: "flex",
  gap: "30px",
  flexDirection: "column",
  padding: "16px",
  paddingBottom: "24px",
});

const StyledTypography = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
  textTransform: "uppercase",
});

const StyledAvatar = styled(Avatar)({
  width: "89px",
  height: "89px",
  background: "#266BD3",
  color: "#FFFFFF",
  fontSize: "40px",
  alignSelf: "center",
});

const StyledText = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const StyledRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  fontSize: "18px",
  fontWeight: 500,
  color: "#363636",
});

const StyledLabel = styled("span")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#646464",
});

const StyledEmail = styled("span")({
  cursor: "pointer",
  color: "#363636",
});

const StyledTooltip = styled(Tooltip)({
  "& .MuiTooltip-tooltip": {
    backgroundColor: "#424242",
    color: "white",
    fontSize: "16px",
  },
});

const StyledImg = styled("img")({
  width: "100%",
  height: "100%",
});
