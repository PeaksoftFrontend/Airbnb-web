import { styled } from "@mui/material";
import { Regions } from "../../components/user/Regions";
import { UserPageSlide } from "../../components/user/UserPageSlide";
import { UserPageWight } from "../../components/user/UserPageWight";
import { WelcomeSection } from "../../components/user/welcome-section/WelcomeSection";
import { Footer } from "../../layout/user/Footer";
import { HousesPage } from "./HousesPage";

export const LandingPAge = () => {
  return (
    <StyleContainer>
      <WelcomeSection />
      <Regions />
      <UserPageSlide />
      <HousesPage />
      <UserPageWight />
      <Footer />
    </StyleContainer>
  );
};

const StyleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "150px",
});
