import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Modal,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Icons } from "../../assets";

export const UsersPage = () => {
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
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleOpen = (id) => () => {
    setOpen(true);
    setDeleteId(id);
  };

  const handleClose = () => {
    setOpen(false);
    setDeleteId(null);
  };

  const deleteItem = () => {
    if (deleteId) {
      setItems((prevItems) => prevItems.filter((user) => user.id !== deleteId));
      handleClose();
    }
  };

  const colors = ["#F3F3F3", "#fffff"];

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
                    <StyledDelete onClick={handleOpen(user.id)}>
                      <Icons.Korzina />
                    </StyledDelete>
                  </StyledMap>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <StyleTextModal >
                      Are you sure you want to delete user?
                </StyleTextModal>
                    <Box sx={StyleBOx}>
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            color="success"
                            sx={{ '&:hover': { borderColor: 'white' } }}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={deleteItem}
                            variant="contained"
                            color="error"
                             sx={{ '&:hover': { borderColor: 'white' } }}
                        >
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Modal>
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
  " &:hover": {
    background: "#D8D8D8",
  },
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
const style = {
position: "absolute",
top: "50%",
left: "50%",
transform: "translate(-50%, -50%)",
width: 400,
bgcolor: "background.paper",
border: "2px solid #FFFFFF",
boxShadow: 24,
borderRadius: "25px",
p: 4,
};
const StyleBOx = {
display: "flex",
justifyContent: "center",
gap: "20px",
mt: "20px",
};
const StyleTextModal = styled("p")({
  paddingLeft: "20px",
})

