import { forwardRef, useState } from "react";
import { TextField, InputAdornment, IconButton, styled } from "@mui/material";
import { Icons } from "../../assets";

export const Input = forwardRef(
  ({ type, value, onChange, placeholder, name, required, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <StyledTextField
        type={type === "password" && isPasswordVisible ? "text" : type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        fullWidth
        ref={ref}
        {...props}
        InputProps={{
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleTogglePasswordVisibility}
                  edge="end"
                >
                  {isPasswordVisible ? <Icons.EyeCrossed /> : <Icons.Eye />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    );
  }
);

const StyledTextField = styled(TextField)(({ theme }) => ({
  borderRadius: "2px",
  cursor: "pointer",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.grey[400],
    },
    "&:hover fieldset": {
      borderColor: theme.palette.grey[600],
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },

  "& input": {
    fontSize: "16px",
    fontWeight: "400",

    "&::placeholder": {
      color: theme.palette.text.secondary,
    },
  },
}));
