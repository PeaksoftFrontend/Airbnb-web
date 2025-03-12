import { useState, useEffect, useRef } from "react";
import { Icons } from "../../assets";
import { Box, styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import { logout } from "../../redux/slices/authSlice";
import Cookies from "js-cookie";
=======
import { logout } from "../../redux/slices/authSlie";
>>>>>>> 65b4ffb4ad31c6e366be002a8ad4bd7fad5e9c8a

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setIsOpen(false);
    try {
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
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
            active={location.pathname.includes("application") ? 1 : 0}
          >
            Application
          </StyledLink>
          <StyledLink
            to="/admin/users"
            active={location.pathname.includes("users") ? 1 : 0}
          >
            Users
          </StyledLink>
          <StyledLink
            to="/admin/all-housing"
            active={location.pathname.includes("all-housing") ? 1 : 0}
          >
            All housing
          </StyledLink>
        </StyledLiTogether>
      </StyledBox>

      <StyleEnd>
        <StyledArrow ref={dropdownRef} onClick={toggleText}>
          {" "}
          <StyledDiv>
            Administrator
            <StyledIconsArrow>
              <Icons.ArrowDown />
            </StyledIconsArrow>
          </StyledDiv>
          {isOpen && (
            <StyledMenu
              id="account-menu"
              anchorEl={dropdownRef.current}
              open={isOpen}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
            >
              <StyledHoverText>
                <StyledMenuItem onClick={handleLogout}>Log out</StyledMenuItem>
              </StyledHoverText>
            </StyledMenu>
          )}
        </StyledArrow>
      </StyleEnd>
    </StyledHeader>
  );
};
const StyledMenu = styled("nav")({
  position: "absolute",
  left: "-45px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #C4C4C4",
  top: "36px",
  paddingTop: "20px",
  width: "180px",
  height: "59px",
  borderRadius: "2px 0px 0px 0px",
  zIndex: 1,
});
const StyledIconsArrow = styled("p")({
  paddingLeft: "5px",
});
const StyledHoverText = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "27px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#F3F3F3",
  },
});
const StyledMenuItem = styled("a")({
  color: "#5D5D5D",
  textDecoration: "none",
  paddingLeft: "20px",
  cursor: "pointer",
});

const StyledDiv = styled("div")({
  cursor: "pointer",
  display: "flex",
});

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
