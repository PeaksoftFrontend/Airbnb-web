import { forwardRef } from "react";
import { FormControl, MenuItem, styled } from "@mui/material";
import { Select as MuiSelect } from "@mui/material";
import { Icons } from "../../assets";

export const Select = forwardRef(
  ({ options = [], placeholder, value, label, onChange, ...props }, ref) => {
    return (
      <FormControl fullWidth variant="outlined">
        <MuiSelect
          ref={ref}
          value={value}
          displayEmpty
          onChange={onChange}
          IconComponent={Icons.ArrowDown}
          sx={{
            color: "#828282",
            fontSize: "16px",
            fontWeight: "400",
            padding: "12px auto",
          }}
          {...props}
          renderValue={(selected) => {
            if (!selected) {
              return <Placeholder>{placeholder}</Placeholder>;
            }
            const selectedOption = options.find(
              (option) => option.value === selected
            );
            return selectedOption ? selectedOption.label : "";
          }}
        >
          {options.length === 0 ? (
            <MenuItem disabled>Здесь пока что нету данных.</MenuItem>
          ) : (
            options.map((option) => (
              <StyledMenuItem key={option.value} value={option.value}>
                {option.label}
              </StyledMenuItem>
            ))
          )}
        </MuiSelect>
      </FormControl>
    );
  }
);

const StyledMenuItem = styled(MenuItem)({
  color: "#5D5D5D",
  fontSize: "16px",
  fontWeight: "400",
  padding: "12px auto",
  "&:hover": {
    background: "#F3F3F3",
  },
});

const Placeholder = styled("p")({
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
});
