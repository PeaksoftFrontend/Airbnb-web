import { useState } from "react";
import { TextField, InputAdornment, IconButton, styled } from "@mui/material";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

export const Input = ({
  type,
  value,
  onChange,
  placeholder,
  name,
  required,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StateTextField
      type={type === "password" && showPassword ? "text" : type}
      placeholder={placeholder}
      name="name"
      fullWidth
      {...props}
      InputProps={{
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? (
                  <RemoveRedEyeOutlined />
                ) : (
                  <VisibilityOffOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  );
};

const StateTextField = styled(TextField)(({ variant }) => ({
  borderRadius: "2px",
  cursor: "pointer",
  border: "none",
  fontSize: "16px",
  fontWeight: "400",

  ...(variant === "outlined" && {
    "&:hover": {
      border: "1px solid #828282",
    },
    "&:active": {
      border: "1px solid #828282",
    },
    "&:default": {
      border: "1px solid #C4C4C4",
    },
  }),
}));
