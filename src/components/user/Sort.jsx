import { Box } from "@mui/material";
import { Select } from "../UI/Select";
import { useState } from "react";
import { Checkbox } from "../UI/Checkbox";

export const Sort = () => {
  const [selectValue, setSelectValue] = useState([]);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const options = [
    { value: "all", label: "All" },
    { value: "in_wish_list", label: "In wish list" },
    { value: "apartment", label: "Apartment" },
    { value: "house", label: "House" },
    { value: "price", label: "Price" },
    { value: "low_to_high", label: "Low to high" },
    { value: "high_to_low", label: "High to low" },
  ];

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };
  return (
    <Box>
      <Select
        options={options}
        label="Sort"
        multiple
        value={selectValue}
        onChange={handleSelectChange}
      />
      <Checkbox
        label="Checkbox Option"
        checked={checkboxValue}
        onChange={handleCheckboxChange}
      />
      <Select />
    </Box>
  );
};
