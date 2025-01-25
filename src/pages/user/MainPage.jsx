import { Box, styled } from "@mui/material";
import { Icons } from "../../assets";

const properties = [
  {
    id: 1,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/0262/e146/c386a7b3971406286b2dce8e892dd438?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OYwVrb3ytEehO6G~7EWLupW1r5flhXd93RLf66JfUD6S5BIWwIAji4oRe23IpBzxMKQ9e3en9WmAG-L-KhXBNB2r6YxvwLWrerv3idEvd6pScw~G0kcZ953nGQHYjADBFVKabFGU~BBJZltflvtlzaEQBw-aE3kWsoMD0GC6ByWeBWgO~FZdx9tv0u8FY~nvwviYKOZdz3MDGdL-CAjqV34ZAPXA6NvO22ozf8sWLl6cWLe0RPdQqBNKBUVNfCRIyJ14FBBRYlbDaDGGilpR83j2KbRRtmejtM59psV8pWvnQJVTrVkDW~-XN4iycPRHaVTjyMiSDyRNTTzWBldUmQ__", // Replace with actual image URLs or import paths
  },
  {
    id: 2,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/65f5/d71f/91bfdf24c0f08f6cab79a581bccfb36b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bu9qI4r2ttTF-IXyd1fhrWTf~Rih8Lm1Pf~rLEDB4X7FRX5HXN6VeRK6UV55P~bBiLQ8OhMcr8FGP8fyJOhJqIEyjxc~WPzMlervZ85bCzAufcPy2xXP5U0EeJ9lBW7ZBnY290pCsxJ-gNgRp5p0C1s4ajGhuZ2iAvSTw27bLhF7NSA3Rdbwmhx0cJG~WmjbcnNu-nhmQ4l~Lk3KjSUaABFdJDCzNMq2u6gtQ~S4yLrswPlo2KZOpenZTE5zjWhVJzV-PQ0Tw0KtTZZZU2xd6hFaGWNA0P6VMEwhZIZLFInTwR0UEyLl06ES3sOye5oqD1Bf8ZcdNKFE-h0mEt8v6g__",
  },
  {
    id: 3,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/5f4a/e1c4/3a16ceafbb60eebec045632a920ef12e?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AxQdhca0Hkdfb0SzDSndPEnJVcGa84zPoikDlwPccaH2oRgNRfRnwj7mIH1xGmZeah71-Xfgf~UOBkwYNXqSQSWLBHK40vBN9AvZn4QKgH8-GvlywAHyRpcEmtk-E8SBc0Uj92PywX~y7XElXfEe2aYv6FL57FdWBcaRP3-6dUqsuxpxA9hzrt~DPUohGaFvr5ovrvesxHT~YCU7QxaAK92EvQFdLCABcK9lkDe5oSHdIrgbO3uvBlYPeJB6hbSbjMkO9ft6e3-bW3qQD96ld6-1j~fkxtqyeBPNDBTwlCbxAaDoFzBzvHc4e7J9wSHIVkshJLqYN0CqSseWihQklw__",
  },
];

export const HousesPage = () => {
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
        {properties.map((property) => (
          <StyledCard key={property.id}>
            <StyledImage src={property.image} alt={property.name} />
            <StyledRating>
              <StyledStarSpan>
                <Icons.StarColor />
              </StyledStarSpan>
              {property.rating}
            </StyledRating>
            <StyledBoxContainer>
              <StyledName>{property.name}</StyledName>
              <StyledLocation>
                <Icons.Location /> {property.location}
              </StyledLocation>
              <Styledtogether>
                <StyledPrice>{property.price}</StyledPrice>
                <StyledDayPrice> day</StyledDayPrice>
              </Styledtogether>
            </StyledBoxContainer>
          </StyledCard>
        ))}
      </StyledCardContent>
      <ViewAllButton>View all</ViewAllButton>
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
  padding: "24px",
  textAlign: "center",
  fontFamily: "Roboto, sans-serif",
  marginLeft: "100px",
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
