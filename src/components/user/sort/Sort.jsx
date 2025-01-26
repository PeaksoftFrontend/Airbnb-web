import { Fragment, useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  ListItemText,
  ListSubheader,
  RadioGroup,
  styled,
  Box,
  Chip,
} from "@mui/material";
import { Checkbox } from "../../UI/Checkbox";
import { Radio } from "../../UI/Radio";

const groupedOptions = [
  {
    label: "All",
    options: [
      { value: "In wish list", label: "In wish list" },
      { value: "Apartement", label: "Apartement" },
      { value: "House", label: "House" },
    ],
  },
  {
    label: "Price",
    options: [
      { value: "Low to high", label: "Low to high" },
      { value: "High to low", label: "High to low" },
    ],
  },
];

export const Sort = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleFruitChange = (event, optionValue) => {
    const newSelectedValues = [...selectedValues];
    if (event.target.checked) {
      newSelectedValues.push(optionValue);
    } else {
      newSelectedValues.splice(newSelectedValues.indexOf(optionValue), 1);
    }
    setSelectedValues(newSelectedValues);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const handleRemoveValue = (valueToRemove) => {
    setSelectedValues((prevValues) =>
      prevValues.filter((value) => value !== valueToRemove)
    );
    if (selectedPrice === valueToRemove) {
      setSelectedPrice("");
    }
  };

  const allSelectedValues = [...selectedValues, selectedPrice].filter(Boolean);

  return (
    <FormControl fullWidth>
      <StyledSelect
        multiple
        value={allSelectedValues}
        displayEmpty
        renderValue={() => (
          <StyledPlaceholder>
            {allSelectedValues.length === 0
              ? "Sort"
              : allSelectedValues.join(", ")}
          </StyledPlaceholder>
        )}
      >
        {groupedOptions.map((group) => (
          <Fragment key={group.label}>
            <ListSubheader>{group.label}</ListSubheader>
            {group.label === "All" &&
              group.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox
                    checked={selectedValues.includes(option.value)}
                    onChange={(event) => handleFruitChange(event, option.value)}
                  />
                  <ListItemText primary={option.label} />
                </MenuItem>
              ))}
            {group.label === "Price" && (
              <MenuItem key="price-options">
                <RadioGroup
                  aria-label="price"
                  value={selectedPrice}
                  onChange={handlePriceChange}
                >
                  {group.options.map((option) => (
                    <Radio
                      key={option.value}
                      value={option.value}
                      label={option.label}
                    />
                  ))}
                </RadioGroup>
              </MenuItem>
            )}
          </Fragment>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const StyledSelect = styled(Select)({
  height: "42px",
  "& .MuiSelect-select": {
    height: "40px",
    display: "flex",
    alignItems: "center",
  },
  "&:hover .MuiSelect-select": {
    backgroundColor: "transparent",
  },
});

const StyledPlaceholder = styled(Box)({
  color: "#828282",
});
