import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { styled as muiStyled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { authGoogle } from "../../../redux/fireBase";
import { logout } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/constants/paths";

export const AccountMenu = () => {
  const anchorRef = useRef(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const email = useSelector((state) => state.auth.email);
  const isAuthorized = useSelector((state) => state.auth.isAuthorized);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(authGoogle);

      dispatch(logout());
    } catch (error) {
      error;
    }
  };

  const handleAvatarOpen = () => {
    setAvatarOpen(true);
  };

  const handleAvatarClose = () => {
    setAvatarOpen(false);
  };

  const getInitials = (fullName) => {
    if (!fullName) return "A";
    const names = fullName.trim().split(" ");
    return names
      .slice(0, 2)
      .map((name) => name.charAt(0).toUpperCase())
      .join("");
  };

  const initials = isAuthorized && email ? getInitials(email) : "A";

  return (
    <>
      <StyledAvatarBox onClick={handleAvatarOpen}>
        <StyledLetter ref={anchorRef}>{initials}</StyledLetter>
        <StyledArrowDown />
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
        <MenuItem onClick={() => navigate(PATHS.USER.PROFILES_USER)}>
          Профиль
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>Моя учетная запись</MenuItem>
        <Divider />
        <MenuItem onClick={handleAvatarClose}>
          Добавить еще одну учетную запись
        </MenuItem>
        <MenuItem onClick={handleAvatarClose}>Настройки</MenuItem>
        <MenuItem onClick={handleLogout}>Выход</MenuItem>
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
