import { HeaderModal } from "./HeaderModal";
import {
  StyledBox,
  StyledHeaderWrapper,
  StyledSearch,
  StyledSearchBox,
  StyledTwoBox,
} from "./WelcomeSection";

export const HomeSection = () => {
  return (
    <StyledBox>
      <StyledHeaderWrapper>
        <HeaderModal showAvatarModal={false} />
      </StyledHeaderWrapper>
      <StyledSearchBox>
        <StyledTwoBox variant="h3">
          Find a place you'll love to stay at
        </StyledTwoBox>
        <StyledSearch
          type="search"
          variant="outlined"
          size="small"
          placeholder="Region, city, apartment, house..."
        />
      </StyledSearchBox>
    </StyledBox>
  );
};
