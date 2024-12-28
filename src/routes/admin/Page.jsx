import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
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
  const colors = ["#D8D8D8", "#F3F3F3", "#fffff", "#F3F3F3"];

  return (
    <StyleMain>
      <StyledH1>Users</StyledH1>
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
      <TableContainer>
        <Table>
          <TableBody>
            {items.map((user, index) => (
              <StyledTableRow
                key={user.id}
                style={{
                  backgroundColor: colors[index % colors.length],
                }}
              >
                <StyledTableCell>
                  <StyledMap>
                    {user.id}
                    <StyledName>{user.name} </StyledName>
                    <StyledContact>{user.contact}</StyledContact>
                    <StyledBooks>{user.booking} </StyledBooks>
                    <StyledAnnouncement>{user.announcement}</StyledAnnouncement>
                    <StyledDelete onClick={deleteItem(user.id)}>
                      <Icons.Korzina />
                    </StyledDelete>
                  </StyledMap>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StyleMain>
  );
};

const StyleMain = styled("main")({
  width: "100%",
});
const StyledH1 = styled("h1")({
  width: "66px",
  height: "24px",
  fontSize: "20px",
  fontWeight: "500",
  textAlign: "left",
  textUnderlinePosition: "from-font",
  textDecorationSkipInk: "none",
});
const StyledTableCell = styled(TableCell)({
  padding: "10px",
  textAlign: "left",
  fontSize: "14px",
  height: "37px",
});
const StyledTableRow = styled(TableRow)({});
const StyledLi = styled("ul")({
  display: "flex",
  padding: "10px 16px",
  textAlign: "left",
  fontSize: "14px",
  height: "37px",
  color: "#FFFFFF",
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

const StyledMap = styled("div")({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  marginLeft: "23px",
});
const StyledName = styled("p")({
  marginLeft: "39px",
  width: "155px",
});
const StyledContact = styled("p")({
  marginLeft: "243px",
});
const StyledBooks = styled("p")({
  marginLeft: "277px",
});

const StyledAnnouncement = styled("div")({
  marginLeft: "116px",
});
const StyledDelete = styled("span")({
  marginLeft: "241px",
  cursor: "pointer",
});
