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
  Button,
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

export const Sort = ({ selectedValues, setSelectedValues, onClear }) => {
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleSortChange = (event, optionValue) => {
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
    <StyledFromControl>
      <StyledSelect
        placeholder="Sort"
        multiple
        value={allSelectedValues}
        displayEmpty
        renderValue={() =>
          allSelectedValues.length === 0 ? (
            <StyledPlaceholder>Sort</StyledPlaceholder>
          ) : (
            ""
          )
        }
      >
        {groupedOptions.map((group) => (
          <Fragment key={group.label}>
            <ListSubheader>{group.label}</ListSubheader>
            {group.label === "All" &&
              group.options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Checkbox
                    checked={selectedValues.includes(option.value)}
                    onChange={(event) => handleSortChange(event, option.value)}
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
      <StyledBoxDel>
        <StyledChipContainer>
          {selectedValues.map((value) => (
            <StyledChip
              key={value}
              label={value}
              onDelete={() => handleRemoveValue(value)}
            />
          ))}
        </StyledChipContainer>
        <StyledClearButton onClick={onClear}>
          Clear all selections
        </StyledClearButton>
      </StyledBoxDel>
    </StyledFromControl>
  );
};
const StyledBoxDel = styled(Box)({
  display: "flex",
  gap: "16px",
});
const StyledClearButton = styled(Button)({
  color: "#828282",
  width: "150px",
  height: "32px",
  fontSize: "16px",
  textDecoration: "underline",
  textTransform: "capitalize",
  marginTop: "16px",
  display: "none",
});

export const StyledFromControl = styled(FormControl)({ width: "271px" });
const StyledChipContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  marginTop: "16px",
  backgroundColor: "#F3F3F3",
});

const StyledPlaceholder = styled(Box)({
  padding: "8px 14px",
  color: "#828282",
});

const StyledChip = styled(Chip)({
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
  height: "32px",
  backgroundColor: "#F3F3F3",
  "& .MuiChip-deleteIcon": {
    backgroundColor: "transparent",
  },
});
const StyledSelect = styled(Select)({
  height: "42px",
  padding: 0,
  "& .MuiSelect-select": {
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  "&:hover .MuiSelect-select": {
    backgroundColor: "transparent",
  },
  "& .MuiInputBase-root": {
    padding: 0,
  },
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
});
