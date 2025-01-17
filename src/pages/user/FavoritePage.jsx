import { Header } from "../../layout/user/Header";
import { Box, Typography, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Footer } from "../../layout/user/Footer";
import { Button } from "../../components/UI/Button";
export const FavoritePage = ({ initial }) => {
  const housingData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4ead/278d/f2c77b81821bdcc661f356c3cdd00ef8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br3Go9w1KXrm0JDFJNvJ6MTD~gUS2--79d6i8VrAsNcSr4E0WHhzMSXd91VMPwpeRiiaEZtK9gyRUx9PXJvtHJiLjAenWd1WN-eYOOR0ehZ3KX7inFocdYLhdPn5wfaD~00Qz4MFDi6~wp5km7c9-lxceNLrtAPtE3GRyvIsKbvSe2hiq1yfiXOEMrKLuUQ4WmJLIRi4HP1sL0U-rv-SUzDF9a-pHev1EHrPW1Hnas8Z4TCP9dofGUc0g0XGbgsdDOMmSBfvgdetY1ysd0ofCkj9gU8w0zZbbaOmMPxpUJQhl9RT0Z7RYasGSuBPEsrYmXI~qECfbPw0-lfOjGP3JQ__",
      price: "$26",
      rating: "3.4",
      description: "Beautiful and picturesque 2 sto...",
      location: "12 Morris Ave, Toronto, ON, CA",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4ead/278d/f2c77b81821bdcc661f356c3cdd00ef8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br3Go9w1KXrm0JDFJNvJ6MTD~gUS2--79d6i8VrAsNcSr4E0WHhzMSXd91VMPwpeRiiaEZtK9gyRUx9PXJvtHJiLjAenWd1WN-eYOOR0ehZ3KX7inFocdYLhdPn5wfaD~00Qz4MFDi6~wp5km7c9-lxceNLrtAPtE3GRyvIsKbvSe2hiq1yfiXOEMrKLuUQ4WmJLIRi4HP1sL0U-rv-SUzDF9a-pHev1EHrPW1Hnas8Z4TCP9dofGUc0g0XGbgsdDOMmSBfvgdetY1ysd0ofCkj9gU8w0zZbbaOmMPxpUJQhl9RT0Z7RYasGSuBPEsrYmXI~qECfbPw0-lfOjGP3JQ__",
      price: "$26",
      rating: "3.4",
      description: "Beautiful and picturesque 2 sto...",
      location: "12 Morris Ave, Toronto, ON, CA",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4ead/278d/f2c77b81821bdcc661f356c3cdd00ef8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br3Go9w1KXrm0JDFJNvJ6MTD~gUS2--79d6i8VrAsNcSr4E0WHhzMSXd91VMPwpeRiiaEZtK9gyRUx9PXJvtHJiLjAenWd1WN-eYOOR0ehZ3KX7inFocdYLhdPn5wfaD~00Qz4MFDi6~wp5km7c9-lxceNLrtAPtE3GRyvIsKbvSe2hiq1yfiXOEMrKLuUQ4WmJLIRi4HP1sL0U-rv-SUzDF9a-pHev1EHrPW1Hnas8Z4TCP9dofGUc0g0XGbgsdDOMmSBfvgdetY1ysd0ofCkj9gU8w0zZbbaOmMPxpUJQhl9RT0Z7RYasGSuBPEsrYmXI~qECfbPw0-lfOjGP3JQ__",
      price: "$26",
      rating: "3.4",
      description: "Beautiful and picturesque 2 sto...",
      location: "12 Morris Ave, Toronto, ON, CA",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4ead/278d/f2c77b81821bdcc661f356c3cdd00ef8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br3Go9w1KXrm0JDFJNvJ6MTD~gUS2--79d6i8VrAsNcSr4E0WHhzMSXd91VMPwpeRiiaEZtK9gyRUx9PXJvtHJiLjAenWd1WN-eYOOR0ehZ3KX7inFocdYLhdPn5wfaD~00Qz4MFDi6~wp5km7c9-lxceNLrtAPtE3GRyvIsKbvSe2hiq1yfiXOEMrKLuUQ4WmJLIRi4HP1sL0U-rv-SUzDF9a-pHev1EHrPW1Hnas8Z4TCP9dofGUc0g0XGbgsdDOMmSBfvgdetY1ysd0ofCkj9gU8w0zZbbaOmMPxpUJQhl9RT0Z7RYasGSuBPEsrYmXI~qECfbPw0-lfOjGP3JQ__",
      price: "$26",
      rating: "3.4",
      description: "Beautiful and picturesque 2 sto...",
      location: "12 Morris Ave, Toronto, ON, CA",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/4ead/278d/f2c77b81821bdcc661f356c3cdd00ef8?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=br3Go9w1KXrm0JDFJNvJ6MTD~gUS2--79d6i8VrAsNcSr4E0WHhzMSXd91VMPwpeRiiaEZtK9gyRUx9PXJvtHJiLjAenWd1WN-eYOOR0ehZ3KX7inFocdYLhdPn5wfaD~00Qz4MFDi6~wp5km7c9-lxceNLrtAPtE3GRyvIsKbvSe2hiq1yfiXOEMrKLuUQ4WmJLIRi4HP1sL0U-rv-SUzDF9a-pHev1EHrPW1Hnas8Z4TCP9dofGUc0g0XGbgsdDOMmSBfvgdetY1ysd0ofCkj9gU8w0zZbbaOmMPxpUJQhl9RT0Z7RYasGSuBPEsrYmXI~qECfbPw0-lfOjGP3JQ__",
      price: "$26",
      rating: "3.4",
      description: "Beautiful and picturesque 2 sto...",
      location: "12 Morris Ave, Toronto, ON, CA",
      guests: "2",
    },
  ];
  return (
    <div>
      <HeaderBarContainer>
        <Header />
        <FavoriteTitleHeader>
          FAVORITE({housingData.length})
        </FavoriteTitleHeader>
        <AccountSelectorContainer>
          <Avatar>
            <Typography variant="h6" sx={{ color: "#FFFFFF" }}>
              {initial}
            </Typography>
          </Avatar>
          <ArrowIcon />
        </AccountSelectorContainer>
      </HeaderBarContainer>
      <MainContainer>
        <StyledMainFavorite>
          <Typography sx={{ color: "#C4C4C4" }}>Main </Typography>
          <Typography sx={{ color: "#363636" }}> / Favorite</Typography>
        </StyledMainFavorite>
        <FavoriteTitle>
          FAVORITE <StyledSpanLength>({housingData.length})</StyledSpanLength>
        </FavoriteTitle>
        <HousingCardContainer>
          {housingData.map((housing, index) => (
            <HousingCard key={index}>
              <HousingImage
                style={{ backgroundImage: `url(${housing.imageUrl})` }}
              />
              <HousingContent>
                <StyledHousingPriceTogether>
                  <HousingPrice>{housing.price} </HousingPrice>
                  <HousingPriceTwo> / day</HousingPriceTwo>
                </StyledHousingPriceTogether>
                <HousingRating>
                  <StyledStarIcon>
                    <Icons.StarColor/>
                  </StyledStarIcon>
                  <Typography sx={{ color: "#FFFFFF" }}>
                    {housing.rating}
                  </Typography>
                </HousingRating>
                <HousingDescription>{housing.description}</HousingDescription>
                <HousingLocation>
                  <StyledLocation />
                  <StyledSpan>{housing.location}</StyledSpan>
                </HousingLocation>
                <HousingGuests>
                  {housing.guests} guests
                  <HousingDots />
                  <StyledButton>Book</StyledButton>
                  <StyledIconsHeart>
                    <Icons.Heart />
                  </StyledIconsHeart>
                </HousingGuests>
              </HousingContent>
            </HousingCard>
          ))}
        </HousingCardContainer>
      </MainContainer>
      <footer style={{ marginTop: "286px" }}>
        <Footer />
      </footer>
    </div>
  );
};
const HeaderBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  textAlign: "center",
  justifyContent: "center",
  backgroundColor: "#FFFFFF",
  height: "88px",
  boxSizing: "border-box",
  boxShadow: "0px 4px 12px 0px #909090",
}));
const StyledMainFavorite = styled("div")({
  marginLeft: "40px",
  paddingBottom: "40px",
  display: "flex",
  gap: "5px",
});
const FavoriteTitleHeader = styled(Typography)({
  marginRight: "50px",
  marginTop: " 30px",
  color: "#000000",
  width: "97px",
  height: "19px",
});
const StyledSpanLength = styled("span")({
  color: "#646464",
  fontSize: "18px",
});
const HousingPriceTwo = styled("span")({
  color: "#6C6C6C",
  fontSize: "16px",
  paddingTop: "4px",
});
const MainContainer = styled("main")({
  marginTop: "90px",
});
const HousingPrice = styled(Typography)({
  fontSize: "18px",
  marginBottom: "5px",
  color: "#363636",
});
const StyledHousingPriceTogether = styled("div")({
  display: "flex",
  gap: "5px",
});
const AccountSelectorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1.5),
  width: "auto",
}));
const StyledSpan = styled("span")({
  marginLeft: "5px",
});
const StyledIconsHeart = styled("div")({
  width: "40px",
  height: "27px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #f0ad4e",
  borderRadius: "5px",
  marginLeft: "10px",
  cursor: "pointer",
  "& svg": {
    width: "14px",
    height: "12px",
  },
});
const StyledLocation = styled(Icons.Location)({
    cursor: "pointer",
})
const Avatar = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: theme.spacing(5),
  height: theme.spacing(5),
  borderRadius: "50%",
  backgroundColor: "#266BD3",
  marginRight: theme.spacing(1),
}));

const ArrowIcon = styled(Icons.ArrowDown)(({ theme }) => ({
  fontSize: "1rem",
  color: theme.palette.grey[600],
  marginLeft: "auto",
  cursor: "pointer",
}));
const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  color: "#F7F7F7",
  fontSize: "12px",
  backgroundColor: "#DD8A08",
  borderRadius: "3px",
  marginLeft: "40px",
});
const HousingCardContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(295px, 1fr))",
  gap: theme.spacing(2),
  paddingLeft: "40px",
}));

const HousingCard = styled(Box)(({ theme }) => ({
  width: "295px",
  borderRadius: "5px",
  overflow: "hidden",
  backgroundColor: " white",
}));

const HousingImage = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "191px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}));

const HousingContent = styled(Box)(({ theme }) => ({
  height: "135px",
  padding: theme.spacing(0.875),
}));

const HousingRating = styled(Box)(({ theme }) => ({
  position: "relative",
  bottom: "30px",
  left: "200px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#828282",
  width: "62px",
  height: "25px",
  borderRadius: "2px",
  gap: "5px",
}));
const StyledStarIcon = styled("span")({
  paddingTop: "0.5px",
  paddingLeft: "5px",
  cursor: "pointer",
});

const HousingDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginBottom: theme.spacing(0.625),
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontsize: "16px",
  position: "relative",
  bottom: "20px",
}));

const HousingLocation = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  marginBottom: theme.spacing(0.625),
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: " #828282",
  fontsize: " 14px",
  position: "relative",
  bottom: "20px",
}));

const HousingGuests = styled(Typography)(({ theme }) => ({
  fontSize: "0.9rem",
  color: " #888",
  marginBottom: theme.spacing(0.625),
  position: "relative",
  bottom: "15px",
  display: "flex",
  fontsize: "14px",
}));
const FavoriteTitle = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
  paddingLeft: "40px",
  color: "#363636",
  marginBottom: "30px",
}));

const HousingDots = styled(Box)(({ theme }) => ({
  display: "inline-block",
  marginLeft: theme.spacing(0.625),
}));
