import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const AccountMenu = () => {
  const anchorRef = useRef(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const handleAvatarOpen = () => {
    setAvatarOpen(true);
  };
  const handleAvatarClose = () => {
    setAvatarOpen(false);
  };
  return (
    <>
      <StyledAvatarBox>
        <StyledLetter ref={anchorRef}>A</StyledLetter>
        <KeyboardArrowDownIcon
          onClick={handleAvatarOpen}
          onClose={handleAvatarClose}
          sx={{
            display: "flex",
            fontSize: "20px",
            color: "#C4C4C4",
          }}
        />
      </StyledAvatarBox>
      <Menu
        id="account-menu"
        open={avatarOpen}
        onClose={handleAvatarClose}
        onClick={handleAvatarClose}
        anchorEl={anchorRef.current}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              marginTop: "35px",
              marginLeft: "35px",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem onClick={handleAvatarClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

const StyledAvatarBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "6px",
}));

const StyledLetter = styled(Avatar)({
  fontSize: "18px",
  fontWeight: "500",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#FFFFFF",
  width: "37px",
  height: "37px",
  backgroundColor: "#0298D9",
});
