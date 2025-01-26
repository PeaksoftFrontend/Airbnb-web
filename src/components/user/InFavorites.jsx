import { Box, styled } from "@mui/material";

const IN_FAVORITES = [
  {
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    email: "anna@gmail.com",
    date: "28.04.22",
  },
];

export const InFavorites = () => {
  return (
    <>
      {IN_FAVORITES.map((item) => (
        <StyleBox key={item.id} {...item}>
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
        </StyleBox>
      ))}
    </>
  );
};

const StyleAvatar = styled("img")({
  width: "36px",
  height: "36px",
});

const StyleBox = styled(Box)({
  width: "100%",
  display: "flex",
  gap: "30px",
});

const StyleInfavorites = styled("div")({
  display: "flex",
  gap: "6px",
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
  paddingLeft: "40px",
  paddingTop: "5px",
});

const StyleContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
