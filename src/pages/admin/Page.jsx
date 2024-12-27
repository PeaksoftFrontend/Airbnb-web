import { styled } from "@mui/material";
export const Page = () => {
  const Users = [
    {
      id: 1,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      bookings: 1,
      announcement: 2,
    },
    {
      id: 2,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      bookings: 1,
      announcement: 2,
    },
    {
      id: 3,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      bookings: 1,
      announcement: 2,
    },
    {
      id: 4,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      bookings: 1,
      announcement: 2,
    },
  ];
  return (
    <>
      <h1>Users</h1>
      <StyledLi>
        <StyleP>№</StyleP>
        <StylP>Name</StylP>
        <StylesP>Contact</StylesP>
        <StyledP>Booking</StyledP>
        <StylsP>Announcement</StylsP>
        <StilP>Action</StilP>
      </StyledLi>
      {Users.map((user) => (
        <StyleLis key={user.id}>
          <StyleP>
            {user.id} {user.name} {user.bookings} {user.announcement} 🗑
          </StyleP>
        </StyleLis>
      ))}
    </>
  );
};

const StyledLi = styled("li")({
  display: "flex",
  padding: "10px 15px",
  textAlign: "left",
  backgroundColor: "darkgray",
});

const StyleLis = styled("li")({
  backgroundColor: "#D8D8D8",
  padding: "10px 15px",
  textAlign: "left",
  display: "flex",
});
const StyleP = styled("div")({
  marginLeft: "16px",
});

const StylP = styled("P")({
  marginLeft: "42px",
});

const StylesP = styled("p")({
  marginLeft: "353px",
});

const StyledP = styled("p")({
  marginLeft: "396px",
});

const StylsP = styled("p")({
  marginLeft: "104px",
});

const StilP = styled("div")({
  marginLeft: "110px",
});