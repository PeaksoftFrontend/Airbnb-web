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
      "https://s3-alpha-sig.figma.com/img/0262/e146/c386a7b3971406286b2dce8e892dd438?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV6F4X2AHi9rdhfIn-tpsD2DgoI02B3pfs7keWf0dqQnrWsG4yfLQ~LSp8QXih33dnjNHutcX5R7uhzzPCCNM6T34~dY4QZUb2YG0~i9DHXBoA6giJcA5ERgINOoVyJZvhGlsTDrkhtNOm8sj3tgiqbxgkWUOPhU1519czWErABBChTK4-kL~fxoimsA5ucZKQcsPY7gJrhKJ8zcwEgrf-pSbQ5dxNQt8qEJWLJGebtP3KGleEHMYtMlNqDI1NpXIXsqwzhXUpvbiYAoAnGPJre~2GDzT3nyPKWk~ypwd9cdQ~WuBILVaiBWoOAXOZTCOlnG-zjgH6zsILW2fjGttg__",
  },
  {
    id: 2,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/0262/e146/c386a7b3971406286b2dce8e892dd438?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV6F4X2AHi9rdhfIn-tpsD2DgoI02B3pfs7keWf0dqQnrWsG4yfLQ~LSp8QXih33dnjNHutcX5R7uhzzPCCNM6T34~dY4QZUb2YG0~i9DHXBoA6giJcA5ERgINOoVyJZvhGlsTDrkhtNOm8sj3tgiqbxgkWUOPhU1519czWErABBChTK4-kL~fxoimsA5ucZKQcsPY7gJrhKJ8zcwEgrf-pSbQ5dxNQt8qEJWLJGebtP3KGleEHMYtMlNqDI1NpXIXsqwzhXUpvbiYAoAnGPJre~2GDzT3nyPKWk~ypwd9cdQ~WuBILVaiBWoOAXOZTCOlnG-zjgH6zsILW2fjGttg__",
  },
  {
    id: 3,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/0262/e146/c386a7b3971406286b2dce8e892dd438?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pV6F4X2AHi9rdhfIn-tpsD2DgoI02B3pfs7keWf0dqQnrWsG4yfLQ~LSp8QXih33dnjNHutcX5R7uhzzPCCNM6T34~dY4QZUb2YG0~i9DHXBoA6giJcA5ERgINOoVyJZvhGlsTDrkhtNOm8sj3tgiqbxgkWUOPhU1519czWErABBChTK4-kL~fxoimsA5ucZKQcsPY7gJrhKJ8zcwEgrf-pSbQ5dxNQt8qEJWLJGebtP3KGleEHMYtMlNqDI1NpXIXsqwzhXUpvbiYAoAnGPJre~2GDzT3nyPKWk~ypwd9cdQ~WuBILVaiBWoOAXOZTCOlnG-zjgH6zsILW2fjGttg__",
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
