import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Popper,
  Box,
} from "@mui/material";
import { Icons } from "../../assets";
import {
  useGetUsersQuery,
  useRemoveUserMutation,
} from "../../redux/api/users.service";
import { useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const { data = [], error, isLoading } = useGetUsersQuery();
  const [removeUser] = useRemoveUserMutation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const currentFilter = data?.filter((user) => user.role === null);

  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  const handleOpen = (event, id) => {
    setAnchorEl(event.currentTarget);
    setDeleteId(id);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDeleteId(null);
  };

  const handleDeleteItem = async (id) => {
    try {
      await removeUser(id).unwrap();
      console.log(`${id} delete`);
    } catch (error) {
      console.log("error delete", error);
    }
    handleClose();
  };

  return (
    <StyleTableContainer component={Paper}>
      <Table>
        <TableHead sx={{ background: "#646464" }}>
          <TableRow>
            <StyledTableCell sx={{ color: "#FFFFFF", paddingLeft: "25px" }}>
              №
            </StyledTableCell>
            <StyledTableCell
              sx={{
                color: "#FFFFFF",
              }}
            >
              Name
            </StyledTableCell>
            <StyledTableCell sx={{ color: "#FFFFFF" }}>Contact</StyledTableCell>
            <StyledTableCell sx={{ color: "#FFFFFF" }}>Booking</StyledTableCell>
            <StyledTableCell sx={{ color: "#FFFFFF" }}>
              Announcement
            </StyledTableCell>
            <StyledTableCell sx={{ color: "#FFFFFF" }}>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentFilter?.map((user, index) => (
            <TableRow
              onClick={() =>
                navigate(`/admin/users/${user.id}?name=${user.fullName}`)
              }
              key={user.id}
              sx={{
                backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                " &:hover": {
                  background: "#D8D8D8",
                },
                cursor: "pointer",
              }}
            >
              <StyledTableCell sx={{ paddingLeft: "25px" }}>
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{user.fullName}</StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.bookings}</StyledTableCell>
              <StyledTableCell>{user.announcements}</StyledTableCell>
              <StyledTableCell>
                <Icons.Korzina
                  onClick={(e) => handleOpen(e, user.id)}
                  style={{ cursor: "pointer" }}
                />
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        placement="bottom-start"
        disablePortal
      >
        <Box
          sx={{
            width: 250,
            height: 100,
            p: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            boxShadow: 3,
          }}
        >
          <Button onClick={handleClose} variant="contained" color="success">
            Cancel
          </Button>
          <Button
            onClick={() => handleDeleteItem(deleteId)}
            variant="contained"
            color="error"
          >
            Delete
          </Button>
        </Box>
      </Popper>
    </StyleTableContainer>
  );
};

const StyleTableContainer = styled(TableContainer)({
  display: "flex",
  paddingTop: "40px",
});

const StyledTableCell = styled(TableCell)({
  fontSize: 14,
  padding: "10px",
});
