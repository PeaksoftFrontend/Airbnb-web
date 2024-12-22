import { forwardRef } from "react";
import { FormControl, MenuItem, styled } from "@mui/material";
import { Select as MuiSelect } from "@mui/material";

export const Select = forwardRef(
  ({ options = [], placeholder, value, label, onChange, ...props }, ref) => {
    return (
      <FormControl fullWidth variant="outlined">
        <MuiSelect
          ref={ref}
          value={value}
          onChange={onChange}
          sx={{
            color: "#828282",
            fontSize: "16px",
            fontWeight: "400",
            padding: "12px auto",
          }}
          {...props}
          renderValue={(selected) => {
            if (!selected) {
              return placeholder;
            }
            const selectedOption = options.find(
              (option) => option.value === selected
            );
            return selectedOption ? selectedOption.label : "";
          }}
        >
          {options.length > 0 ? (
            options.map((option) => (
              <StyledMenuItem key={option.value} value={option.value}>
                {option.label}
              </StyledMenuItem>
            ))
          ) : (
            <StyledMenuItem disabled>{placeholder}</StyledMenuItem>
          )}
        </MuiSelect>
      </FormControl>
    );
  }
);

const StyledMenuItem = styled(MenuItem)({
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
  padding: "12px auto",
});
