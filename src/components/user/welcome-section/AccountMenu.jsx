import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useRef, useState, useCallback } from "react";
import { Box, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { styled as muiStyled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { authSlice } from "../../../redux/slices/authSlie";

export const AccountMenu = () => {
  const anchorRef = useRef(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const name = useSelector((state) => state.auth.name);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  const handleAvatarOpen = () => {
    setAvatarOpen(true);
  };

  const handleAvatarClose = () => {
    setAvatarOpen(false);
  };

  const logout = useCallback(() => {
    dispatch(authSlice.actions.logout());
  }, [dispatch]);

  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    let initials = "";
    if (names.length > 0 && names[0]) {
      initials += names[0].charAt(0).toUpperCase();
    }

    return initials;
  };

  const initials = isAuthorized ? getInitials(name) : "A";

  return (
    <>
      <StyledAvatarBox>
        <StyledLetter ref={anchorRef}>{initials}</StyledLetter>
        <StyledArrowDown onClick={handleAvatarOpen} />
      </StyledAvatarBox>
      <StyledMenu
        id="account-menu"
        open={avatarOpen}
        onClose={handleAvatarClose}
        onClick={handleAvatarClose}
        anchorEl={anchorRef.current}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem onClick={handleAvatarClose}>Профиль</MenuItem>
        <MenuItem onClick={handleAvatarClose}>Моя учетная запись</MenuItem>
        <Divider />
        <MenuItem onClick={handleAvatarClose}>
          Добавить еще одну учетную запись
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>Настройки</MenuItem>
        <MenuItem onClick={logout}>Выход</MenuItem>
      </StyledMenu>
    </>
  );
};

const StyledAvatarBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  cursor: "pointer",
}));

const StyledLetter = styled(Box)(() => ({
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "#0298D9",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#FFFFFF",
}));

const StyledArrowDown = styled(Icons.ArrowDown)(() => ({
  display: "flex",
  fontSize: "20px",
  color: "#C4C4C4",
}));

const StyledMenu = muiStyled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: theme.spacing(4.375),
    marginLeft: theme.spacing(4.375),
    "& .MuiAvatar-root": {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: theme.palette.background.paper,
      transform: "translateY(-50%) rotate(45deg)",
      zIndex: 0,
    },
  },
}));
