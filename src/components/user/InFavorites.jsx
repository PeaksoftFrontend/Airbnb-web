import { Box, styled, Typography } from "@mui/material";

const IN_FAVORITES = [
  {
    id: 1,
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    email: "anna@gmail.com",
    date: "28.04.22",
  },
  {
    id: 2,
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    email: "anna@gmail.com",
    date: "28.04.22",
  },
  {
    id: 3,
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    email: "anna@gmail.com",
    date: "28.04.22",
  },
  {
    id: 4,
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    email: "anna@gmail.com",
    date: "28.04.22",
  },
];

export const InFavorites = () => {
  return (
    <div>
      <Typography
        sx={{ fontSize: "20px", fontWeight: 500, paddingBottom: "40px" }}
      >
        IN FAVORITES
      </Typography>
      <STyleAll>
        {IN_FAVORITES.map((item) => (
          <Box key={item.id}>
            <StyleContainer>
              <StyleInfavorites>
                <StyleAvatar
                  src={item.avatar}
                  alt={`${item.userName}'s avatar`}
                />
                <div>
                  <StyleSpan>{item.userName}</StyleSpan>
                  <StyleEmail>{item.email}</StyleEmail>
                </div>
              </StyleInfavorites>

              <STyleDate>{item.date}</STyleDate>
            </StyleContainer>
          </Box>
        ))}
      </STyleAll>
    </div>
  );
};

const STyleAll = styled("div")({
  display: "flex",
  gap: "30px",
});

const StyleAvatar = styled("img")({
  width: "36px",
  height: "36px",
});

const StyleInfavorites = styled("div")({
  display: "flex",
  gap: "15px",
  alignItems: "center",
});

const StyleSpan = styled("div")({
  fontSize: "16px",
  fontWeight: 500,
  color: "#000000",
});

const StyleEmail = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#828282",
});

const STyleDate = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#363636",
  paddingLeft: "50px",
  paddingTop: "5px",
});

const StyleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
