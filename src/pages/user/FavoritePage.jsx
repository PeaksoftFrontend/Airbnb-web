import { Box, Typography, styled } from "@mui/material";
import { Icons } from "../../assets";
import { Button } from "../../components/UI/Button";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";

export const FavoritePage = () => {
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
  const breadcrumbs = [
    {
      id: "1",
      url: "/user",
      title: "Main",
    },
    {
      id: "2",
      url: "/user/favorite",
      title: "Favorite",
    },
  ];
  return (
    <MainContainer>
      <StyledMainFavorite>
        <Breadcrumbs path={breadcrumbs} />
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
              <Box sx={{ display: "flex", gap: "3px" }}>
                <HousingPrice>{housing.price} /</HousingPrice>
                <Typography
                  sx={{
                    color: "#6C6C6C",
                    fontSize: "16px",
                    marginTop: "1px",
                  }}
                >
                  day
                </Typography>
              </Box>
              <HousingRating>
                <StyledDivIcon>
                  <Icons.StarColor />
                </StyledDivIcon>
                <Typography sx={{ color: "#FFFFFF" }}>
                  {housing.rating}
                </Typography>
              </HousingRating>
              <HousingDescription>{housing.description}</HousingDescription>
              <HousingLocation>
                <StyledLocationIcon />
                {housing.location}
              </HousingLocation>
              <HousingGuests>{housing.guests} guests</HousingGuests>
            </HousingContent>
            <StyledDiv>
              <StyledButton>Book</StyledButton>
              <StyledIconsHeart>
                <Icons.Heart />
              </StyledIconsHeart>
            </StyledDiv>
          </HousingCard>
        ))}
      </HousingCardContainer>
    </MainContainer>
  );
};

const StyledMainFavorite = styled("div")({
  marginLeft: "40px",
  paddingBottom: "40px",
  display: "flex",
  gap: "5px",
});
const StyledDivIcon = styled("div")({
  paddingTop: "0.5px",
  paddingLeft: "5px",
  cursor: "pointer",
});

const StyledSpanLength = styled("span")({
  color: "#646464",
  fontSize: "18px",
});

const StyledDiv = styled("div")({
  position: "relative",
  bottom: "30px",
  left: "60px",
  right: "0",
});

const MainContainer = styled("main")({
  paddingTop: "40px",
  background: "#F7F7F7",
  minHeight: "100vh",
});
const HousingPrice = styled(Typography)({
  display: "flex",
  fontSize: "18px",
  marginBottom: "5px",
  color: "#363636",
});

const StyledIconsHeart = styled("div")({
  width: "40px",
  height: "27px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid #f0ad4e",
  borderRadius: "5px",
  marginLeft: "170px",
  position: "relative",
  bottom: "26px",

  cursor: "pointer",
  "& svg": {
    width: "14px",
    height: "12px",
  },
});
const StyledLocationIcon = styled(Icons.Location)({
  cursor: "pointer",
});

const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  color: "#F7F7F7",
  fontSize: "12px",
  backgroundColor: "#DD8A08",
  borderRadius: "3px",
  marginLeft: "50px",
});
const HousingCardContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(295px, 1fr))",
  gap: "16px",
  paddingLeft: "40px",
});

const HousingCard = styled(Box)({
  width: "295px",
  borderRadius: "5px",
  overflow: "hidden",
  backgroundColor: " white",
});

const HousingImage = styled(Box)({
  width: "100%",
  height: "191px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const HousingContent = styled(Box)({
  height: "135px",
  padding: "7px",
});

const HousingRating = styled(Box)({
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
});

const HousingDescription = styled(Typography)({
  fontSize: "1rem",
  marginBottom: "5px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontsize: "16px",
  position: "relative",
  bottom: "20px",
});

const HousingLocation = styled(Typography)({
  display: "flex",
  fontSize: "0.9rem",
  marginBottom: "5px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  color: " #828282",
  fontsize: " 14px",
  position: "relative",
  bottom: "20px",
  gap: "5px",
});

const HousingGuests = styled(Typography)({
  fontSize: "0.9rem",
  color: " #888",
  marginBottom: "5px",
  position: "relative",
  bottom: "15px",
  display: "flex",
  fontsize: "14px",
});
const FavoriteTitle = styled(Typography)({
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "16px",
  paddingLeft: "40px",
  color: "#363636",
});
