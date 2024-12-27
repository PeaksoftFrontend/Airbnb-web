import { styled } from "@mui/material";
import { Icons } from "../../assets";
import { useState } from "react";

export const Page = () => {
  const initialUsers = [
    {
      id: 1,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      booking: 1,
      announcement: 2,
    },
    {
      id: 2,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      booking: 1,
      announcement: 2,
    },
    {
      id: 3,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      booking: 1,
      announcement: 2,
    },
    {
      id: 4,
      name: "Максат Максатов",
      contact: "example@gmail.com",
      booking: 1,
      announcement: 2,
    },
  ];
  const [items, setItems] = useState(initialUsers);

  const deleteItem = (id) => () => {
    setItems((prevItems) => prevItems.filter((user) => user.id !== id));
  };

  return (
    <StyleMain>
      <h1>Users</h1>
      <StyledLi>
        <StyleDiv>
          <p>№</p>
          <p>Name</p>
        </StyleDiv>
        <StyledP>Contact</StyledP>
        <StyledPublication>
          <p>Booking</p>
          <p>Announcement</p>
        </StyledPublication>
        <StyledTwoP>Action</StyledTwoP>
      </StyledLi>
      {items.map((user) => (
        <StyleLis key={user.id}>
          <StyledMapP>
            {user.id}
            <StyledName>{user.name} </StyledName>
            <StyledContact>{user.contact}</StyledContact>
            <StyledBooks>{user.booking} </StyledBooks>
            <StiledAnnouncement>{user.announcement}</StiledAnnouncement>
            <StyledDelete onClick={deleteItem(user.id)}>
              <Icons.Korzina />
            </StyledDelete>
          </StyledMapP>
        </StyleLis>
      ))}
    </StyleMain>
  );
};

const StyleMain = styled("main")({
  width: "100%",
});
const StyledLi = styled("ul")({
  display: "flex",
  padding: "10px 16px",
  textAlign: "left",
  fontSize: "14px",
  height: "37px",
  backgroundColor: "#646464",
});
const StyleDiv = styled("div")({
  display: "flex",
  marginLeft: "16px",
  gap: "30px",
});
const StyledP = styled("p")({
  marginLeft: "360px",
});
const StyledTwoP = styled("p")({
  marginLeft: "144px",
});
const StyledPublication = styled("div")({
  display: "flex",
  marginLeft: "400px",
  gap: "70px",
});

const StyleLis = styled("li")({
  backgroundColor: "#D8D8D8",
  padding: "10px 15px",
  textAlign: "left",
  display: "flex",
});
const StyledMapP = styled("div")({
  display: "flex",
  alignItems: "center",
  marginLeft: "16px",
});
const StyledName = styled("P")({
  marginLeft: "42px",
});
const StyledContact = styled("p")({
  marginLeft: "260px",
});
const StyledBooks = styled("p")({
  marginLeft: "300px",
});

const StiledAnnouncement = styled("div")({
  marginLeft: "115px",
});
const StyledDelete = styled("span")({
  marginLeft: "245px",
});
