import React, { forwardRef } from "react";
import { InputAdornment, styled, TextField } from "@mui/material";
import { Icons } from "../../assets";

export const SearchInput = forwardRef(
  ({ type, value, placeholder, variant, ...props }, ref) => {
    return (
      <SearchTextField
        type={type}
        ref={ref}
        placeholder={placeholder}
        value={value}
        variant={variant}
        fullWidth
        {...props}
        InputProps={{
          startAdornment: (
            <StyledDiv position="start">
              <Icons.Search />
            </StyledDiv>
          ),
        }}
      />
    );
  }
);

const SearchTextField = styled(TextField)(() => ({
  border: "1px solid #C4C4C4",
  borderRadius: "2px",
  fontSize: "16px",
  fontWeight: "400",
  "& .MuiInputBase-root": {
    backgroundColor: "#FFF",
    "&:focus": {
      backgroundColor: "#fff",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#C4C4C4",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#C4C4C4",
    },
  },
  "& input": {
    color: "#939292",
  },
}));

const StyledDiv = styled(InputAdornment)({
  width: "22px",
  height: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "5px",
});
