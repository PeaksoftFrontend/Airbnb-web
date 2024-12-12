import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton, styled } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

 export const Input = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <StateTextField
      type={props.type === 'password' && showPassword ? 'text' : props.type}
      
      {...props}
      InputProps={{
        ...props.InputProps,
        endAdornment:
          props.type === 'password' ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null
      }}
    />
  );
};



const StateTextField = styled(TextField)(({ variant }) => ({
  width: "100%",
  borderRadius: "2px",
  cursor: "pointer",
  border:"none",
  padding:"20px",
  
  ...(variant === "outlined" && {
    "hover": {
      border:"1px solid #828282",
    },
    "&:active": {
      border:"1px solid #828282",
  
    },
    "&:default": {
      border:"1px solid #C4C4C4", 
    },
  }),
}));