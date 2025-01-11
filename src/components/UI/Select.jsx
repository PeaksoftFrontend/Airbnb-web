import { forwardRef } from "react";
import { FormControl, MenuItem, styled } from "@mui/material";
import { Select as MuiSelect } from "@mui/material";
import { Icons } from "../../assets";

export const Select = forwardRef(
  ({ options = [], placeholder, value, label, onChange, ...props }, ref) => {
    return (
      <FormControl fullWidth variant="outlined">
        <StyledSelect
          ref={ref}
          value={value}
          displayEmpty
          onChange={onChange}
          IconComponent={Icons.ArrowDown}
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
            <MenuItem disabled> Пока что нету данных.</MenuItem>
          ) : (
            options.map((option) => (
              <StyledMenuItem key={option.value} value={option.value}>
                {option.label}
              </StyledMenuItem>
            ))
          )}
        </StyledSelect>
      </FormControl>
    );
  }
);

const StyledSelect = styled(MuiSelect)(() => ({
  backgroundColor: "#FFFFFF",
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C4C4C4",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C4C4C4",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C4C4C4",
    borderWidth: "2px",
  },
  "&:active .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C4C4C4",
  },
}));

const StyledMenuItem = styled(MenuItem)({
  color: "#5D5D5D",
  fontSize: "16px",
  fontWeight: "400",
  "&:hover": {
    backgroundColor: "#F3F3F3",
  },
});

const Placeholder = styled("p")({
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
});
