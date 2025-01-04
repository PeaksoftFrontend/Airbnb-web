import { styled } from "@mui/material";
import { Icons } from "../../assets";
export const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <FooterLeft>
        <FooterLink href="#" first>
          Regions
        </FooterLink>
        <FooterLink href="#" second>
          leave an ad
        </FooterLink>
      </FooterLeft>
      <FooterCenter>
        <div>
          <StyledLogo>
            <Icons.Logo />
          </StyledLogo>
        </div>
        <FooterText>© Copyright PeakSoft. All Rights Reserved</FooterText>
      </FooterCenter>
      <IconGroup>
        <IconWrapper>
          <Icons.Instagram />
        </IconWrapper>
        <IconWrapper>
          <Icons.Telegram />
        </IconWrapper>
        <IconWrapper>
          <Icons.Telephone />
        </IconWrapper>
      </IconGroup>
    </FooterContent>
  </FooterContainer>
);

const FooterContainer = styled("footer")({
  backgroundColor: "#013220",
  height: "222px",
  color: "white",
  padding: "24px 0",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const FooterContent = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1440px",
  width: "calc(100% - 200px)",
  margin: "0 auto",
});

const FooterLeft = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  gap: "16px",
});

const FooterLink = styled("a")(({ first, second }) => ({
  color: first ? "#FFFFFF" : second ? "#FFBE58" : "white",
  textDecoration: "none",
  fontWeight: "normal",
}));

const FooterCenter = styled("div")({
  textAlign: "center",
  flex: 1,
});

const StyledLogo = styled("div")({
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  " & svg": {
    width: "88px",
    height: "65px",
  },
});

const FooterText = styled("p")({
  position: "absolute",
  bottom: "16px",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "0.875rem",
  textAlign: "center",
  color: "#859589",
});
const IconGroup = styled("div")({
  display: "flex",
  gap: "16px",
  alignItems: "center",
  cursor: "pointer",
});

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  background: "#FFFFFF1F",
  borderRadius: "2px",
  "& svg": {
    width: "20px",
    height: "20px",
  },
});
