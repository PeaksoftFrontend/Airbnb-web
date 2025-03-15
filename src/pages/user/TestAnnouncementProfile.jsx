import { useState } from "react";
import { Button } from "../../components/UI/Button";
import { useFavoriteMutation } from "../../redux/api/auth.servers";
import { useSelector } from "react-redux";
import { Box, styled, Typography } from "@mui/material";
import { Icons } from "../../assets";
import { AuthModal } from "../../components/user/welcome-section/AuthModal";

export const TestAnnouncementsProfile = ({ announcements }) => {
  const [favorites, setFavorites] = useState({});

  const [favoriteMutation] = useFavoriteMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const { role } = useSelector((state) => state.auth);

  const handleFavorite = async (id) => {
    if (role !== "USER") {
      setModalOpen(true);
      return;
    }
    try {
      await favoriteMutation(id).unwrap();
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [id]: !prevFavorites[id],
      }));
    } catch (error) {
      error;
    }
  };

  return (
    <StyleContainer>
      {announcements?.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: "260px",
          }}
        >
          <StyleAll>
            {/* {item.images.map((item) => ( */}
            <img
              src={item.images[0]}
              style={{
                width: "260px",
                height: "168px",
              }}
            />
            {/* ))} */}
            <div>
              <StylePieces>
                <Styledprise>
                  <StyledPtag> ${item.price}/</StyledPtag>
                  <StyleDay>day</StyleDay>
                </Styledprise>
                <StyledSpanStar>
                  <Icons.Star />
                  {item.rating}
                </StyledSpanStar>
              </StylePieces>
              <StyleDiv>
                <StyledTypography>{item.title}</StyledTypography>
                <div>
                  <Icons.Location />
                  {item.address}
                </div>
              </StyleDiv>
              <StyleguesNum>
                <div>{item.maxGuests} guests</div>
                <StyledButton variant="outlined">BOOK</StyledButton>
                <StyleFordButton onClick={() => handleFavorite(item.id)}>
                  {favorites[item.id] ? (
                    <Icons.Heart />
                  ) : (
                    <Icons.HeartColorless />
                  )}
                </StyleFordButton>
              </StyleguesNum>
            </div>
          </StyleAll>
        </Box>
      ))}
      <AuthModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </StyleContainer>
  );
};

const Styledprise = styled("div")({ display: "flex", flexDirection: "row" });
const StyleFordButton = styled("button")({
  background: "none",
  border: "none",
});

const StyleAll = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "19px",
});

const StyledTypography = styled(Typography)({
  fontWeight: "400",
  fontSize: "16px",
  color: "#2B2B2B",
});

const StyleContainer = styled("div")({
  display: "flex",
  width: "100%",
  gap: "15px",
  flexWrap: "wrap",
  padding: "0 19px",
});
const StylePieces = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
const StyleDay = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
});
const StyledSpanStar = styled("span")({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  background: "#828282",
  color: "#FFFFFF",
  borderRadius: "3px",
  fontSize: "14px",
  fontWeight: 500,
  padding: "5px",

  "& svg path": { fill: "#F7D212" },
  "& svg": {
    width: "18px",
    height: "18px",
  },
});

const StyledPtag = styled("p")({
  fontWeight: "400",
  fontSize: "18px",
  color: "#000000",
});
const StyleDiv = styled("div")({
  paddingTop: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  "& div": {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#828282",
    fontSize: "14px",
  },
});

const StyleguesNum = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "23px",
  "& div": { color: "#939393", fontSize: "14px" },
  "& svg": { width: "20px", height: "20px" },
});
const StyledButton = styled(Button)({
  width: "103px",
  height: "27px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
