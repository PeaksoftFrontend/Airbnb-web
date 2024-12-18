import { useState } from "react";
import { FormControl, Select, MenuItem, Box, styled } from "@mui/material";

export const Selecter = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        id="filter-select"
        value={selectedOption}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => <StyledBox>{selected || "Filter by:"}</StyledBox>}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const StyledBox = styled(Box)({ color: "#828282",
    fontSize:"16px",
    fontWeight:"400",
    padding:"12px auto"
 });
