import { Box, styled } from "@mui/material";
import { Icons } from "../../assets";
import { useGetPopularsHousesQuery } from "../../redux/api/houses.service";

export const HousesPage = () => {
  const { data, error, isLoading } = useGetPopularsHousesQuery();

  if (error) return <p>error data</p>;
  if (isLoading) return <p>Loading...</p>;

  const handleRegions = () => {};

  return (
    <StyledBox>
      <StyledPopularHouse variant="h4" fontWeight="bold" gutterBottom>
        POPULAR HOUSE
      </StyledPopularHouse>
      <StyledTextHouse>
        Helping you make the best decisions in buying, selling, & renting your
        last minute locations.
      </StyledTextHouse>
      <StyledCardContent>
        {data.map((property) => (
          <StyledCard key={property.id}>
            <StyledImage src={property.images} alt={property.title} />
            <StyledRating>
              <StyledStarSpan>
                <Icons.StarColor />
              </StyledStarSpan>
              {property.rating}
            </StyledRating>
            <StyledBoxContainer>
              <StyledName>{property.title}</StyledName>
              <StyledLocation>
                <Icons.Location /> {property.address}
              </StyledLocation>
              <Styledtogether>
                <StyledPrice>{property.price}</StyledPrice>
                <StyledDayPrice> day</StyledDayPrice>
              </Styledtogether>
            </StyledBoxContainer>
          </StyledCard>
        ))}
      </StyledCardContent>
      <ViewAllButton onClick={() => handleRegions("Another")}>
        View all
      </ViewAllButton>
    </StyledBox>
  );
};

const StyledName = styled("p")({
  textAlign: "left",
  color: "#363636",
  fontSize: "18px",
  paddingBottom: "10px",
});
const StyledPrice = styled("p")({
  color: "#363636",
});
const StyledDayPrice = styled("p")({
  color: "#757575",
});
const Styledtogether = styled("div")({
  display: "flex",
});
const StyledCardContent = styled("div")({
  display: "flex",
  gap: "20px",
  marginTop: "60px",
});
const StyledPopularHouse = styled("h1")({
  textAlign: "left",
  fontSize: "20px",
  color: "#363636",
});
const StyledTextHouse = styled("p")({
  textAlign: "left",
  color: "#363636",
  paddingTop: "16px",
  fontSize: "16px",
});
const StyledLocation = styled("p")({
  color: "#757575",
  textAlign: "left",
  paddingBottom: "10px",
  cursor: "pointer",
});

const StyledBox = styled(Box)(() => ({
  padding: "20px 100px",
  textAlign: "center",
}));

const StyledCard = styled("div")(() => ({
  maxWidth: 345,
  position: "relative",
  overflow: "hidden",
  marginRight: "20px",
}));

const StyledImage = styled("img")(() => ({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  gap: "20px",
}));

const StyledRating = styled("div")(() => ({
  position: "absolute",
  top: "8px",
  right: "8px",
  fontSize: "14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "4px 8px",
  borderRadius: "2px",
  backgroundColor: "#34343480",
  color: "#FFFFFF",
  fontWeight: "400",
  cursor: "pointer",
}));
const StyledStarSpan = styled("span")({
  marginRight: "4px",
});
const StyledBoxContainer = styled("div")({
  paddingTop: "16px",
});
const ViewAllButton = styled("button")(() => ({
  background: "none",
  border: "none",
  color: "#363636",
  fontSize: "18px",
  width: "66px",
  fontWeight: "400",
  textDecoration: "underline",
  cursor: "pointer",
  display: "block",
  position: "relative",
  left: "1012px",
  bottom: "610px",
}));
