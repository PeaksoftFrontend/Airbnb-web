import { Box, styled } from "@mui/material";
import { Icons } from "../../assets";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../utils/constants/paths";

const properties = [
  {
    id: 1,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/0262/e146/c386a7b3971406286b2dce8e892dd438?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nbO9LvHYUp40XREh30X9V8Csj7DICptFkeeS4G05Y-VUuErq~u9cJvbNQQwdFDrjE5oAbMcGi4pFUqMJqUffodVj9nHvwgE5Jhum4VXAB3QHQALlC8zwf1PASWMmRUvn6Al5Msfwx7q691PF-wNgSxrOhRTiNAvaIxozH3gFiHAue3FcTqEyziBnSLLE5AornLo3vMdyqHdM1WZm44OSLddrSta8d5ywo8EbUeMqp~i5UtW3ekhQqHfmlbH8pkdy67R8pthgqwOABUBWyNWfRJXquhRrINIEiMQMK8n5M4b-bSPRXhcc3oxfFuZYsZUW~GSKbhb20PaTYNhngaCW5Q__",
  },
  {
    id: 2,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/65f5/d71f/91bfdf24c0f08f6cab79a581bccfb36b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mr7dF12yMs3syRpLhH~j035z8W~TYSH2K6TyYux3bwIqUOMOD8z0wBgHWaXtHsVk97e3Qd1fUIFY6kUeFyw48bZaok18oIlTJzzud~9bfbbqHf0Qd30VsDKKmBT2SZ5xUEZ3GiMOuEMW6w39JHboFmATpWbQyts5awJRrhLoZktSgT-RhAonoozZ8eVCLdOFk3OSWilRWTSwvQIfJm1BpXcB-knjhOQEtLnkaB85j2kkPc3Wcbpf0WiR2hsj7St7t8LRQQpsairaQVz7gW06MFEInNzD3N9wRmcfocDuC1QizYMe0r-1QrEHRPCmub32XI7jkXhxsPH9RWGZZOUg7Q__",
  },
  {
    id: 3,
    name: "Asman guest house",
    location: "723510 Osh Muzurbek Alimbekov 9/7",
    price: "$26 / ",
    rating: 3.4,
    image:
      "https://s3-alpha-sig.figma.com/img/5f4a/e1c4/3a16ceafbb60eebec045632a920ef12e?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=of1j3vpjuVUSzUad0ZIidtjazmpTM4BzesGmfpqYoaNczKwubvf~ShSm0EaC5ci2oedeGbQpPfhBe8LwZ~1Mt47~sNhnZ02ojQBWgf7ZPnBgxnNMmzjYaq5MXr~IfKHvnGhfumUO3I01Li5DnyT92wSqebKo1m9DfBG8hHZBLVX54JLSt-n~LqXQClH~DDvCs8eqBodaBD4sQvjxfXxTVG54urO-Jbqf1-tUoQ97HmywYSBRDWcsDQJKdbZQ65uQT8aZSobvjsYWbCpSEuqdpyhu1RtdnWHCETvLZeFeOC6mC~m0JqquKjRVtQrDdX2iirGxxgZhgOPoJ5U0qRXpjQ__",
  },
];

export const HousesPage = () => {
  const navigate = useNavigate();
  const handleRegions = (region) => {
    navigate(`${PATHS.USER.INNER_HOTEL_OF_REGIONS}/${region}?category=house`);
  };
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
