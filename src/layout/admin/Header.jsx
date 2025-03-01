import { useState, useEffect, useRef } from "react";
import { Icons } from "../../assets";
import { Box, Menu, MenuItem, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { logout } from "../../redux/slices/authSlie";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      Cookies.remove("admin");

      dispatch(logout());

      navigate("/login");
    } catch (error) {
      error;
    }
  };
  const toggleText = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <StyledHeader>
      <StyledBox>
        <StyleLogo>
          <Icons.Logo />
        </StyleLogo>
        <StyledLiTogether>
          <StyledLink
            to="/admin/application"
            active={location.pathname === "/admin/application" ? 1 : 0}
          >
            Application
          </StyledLink>
          <StyledLink
            to="/admin/users"
            active={location.pathname === "/admin/users" ? 1 : 0}
          >
            Users
          </StyledLink>
          <StyledLink
            to="/admin/all-housing"
            active={location.pathname === "/admin/all-housing" ? 1 : 0}
          >
            All housing
          </StyledLink>
        </StyledLiTogether>
      </StyledBox>

      <StyleEnd>
        <StyledArrow ref={dropdownRef}>
          <StyledDiv StyledDiv onClick={toggleText}>
            Administrator
            <Icons.ArrowDown />
          </StyledDiv>
          <StyledMenu
            id="account-menu"
            anchorEl={dropdownRef.current}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "top" }}
          >
            <StyledMenuItem
              onClick={handleLogout}
              onClose={() => setIsOpen(false)}
            >
              Log out
            </StyledMenuItem>
          </StyledMenu>
        </StyledArrow>
      </StyleEnd>
    </StyledHeader>
  );
};
const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    elevation: 0,
    overflow: "visible",
    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
    marginTop: theme.spacing(4.375),
    marginLeft: theme.spacing(4.375),

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
const StyledMenuItem = styled(MenuItem)({
  width: "180px",
  height: "58px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #C4C4C4",
  borderRadius: "2px ",
});

const StyledDiv = styled("div")({ cursor: "pointer" });

const StyledBox = styled(Box)({
  display: "flex",
  gap: "83px",
  justifyContent: "center",
  alignItems: "center",
});
const StyledHeader = styled("header")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0B0B0B",
  width: "100%",
  height: "82px",
  padding: "40px",
});
const StyledLiTogether = styled(Box)({
  display: "flex",
  gap: "36px",
});
const StyleEnd = styled("div")({
  display: "flex",
  marginLeft: "60px",
  color: "#E5E5E5",
  listStyle: "none",
});
const StyledLink = styled(Link)(({ theme, active }) => ({
  color: active ? "red" : "white",
  textDecoration: "none",
  marginRight: theme.spacing(2.5),
  "&:hover": {
    color: "#FF4B4B",
  },
}));
const StyleLogo = styled("div")({
  height: "54px",
  width: "72px",
  cursor: "pointer",
  "& svg": {
    width: "72px",
    height: "54px",
  },
});
const StyledArrow = styled("div")({
  position: "relative",
});
