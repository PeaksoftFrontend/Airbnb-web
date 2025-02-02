import {
  Box,
  Button,
  IconButton,
  ListItemText,
  ListSubheader,
  MenuItem,
  RadioGroup,
  Select,
  styled,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { Checkbox } from "../../UI/Checkbox";
import { Radio } from "../../UI/Radio";
import { Icons } from "../../../assets";

const groupedOptions = [
  {
    label: "All",
    option: [
      { value: "In wish list", label: "In wish list" },
      { value: "Apartment", label: "Apartment" },
      { value: "House", label: "House" },
    ],
  },
  {
    label: "Price",
    option: [
      { value: "Low to high", label: "Low to high" },
      { value: "High to low", label: "High to low" },
    ],
  },
];

export const SortMarker = ({
  selectedValues,
  setSelectedPrice,
  selectedPrice,
  setSelectedValues,
  onClear,
  //   groupedOptions,
}) => {
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
            <StyledPlaceholder>Sort</StyledPlaceholder>
          )
        }
      >
        {groupedOptions.map((group) => (
          <Fragment key={group.label}>
            <ListSubheader>{group.label}</ListSubheader>
            {group.label === "All" &&
              group.option.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  <Checkbox
                    checked={selectedValues.includes(item.value)}
                    onChange={(event) => handleSortChange(event, item.value)}
                  />
                  <ListItemText primary={item.label} />
                </MenuItem>
              ))}
            {group.label === "Price" && (
              <MenuItem key="price">
                <RadioGroup
                  aria-label="price"
                  value={selectedPrice}
                  onChange={handlePriceChange}
                >
                  {group.option.map((item) => (
                    <Radio
                      key={item.value}
                      value={item.value}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </MenuItem>
            )}
          </Fragment>
        ))}
      </StyledSelect>
      <StyledChipContainer>
        {allSelectedValues.map((value) => (
          <StyledChip key={value}>
            <IconButton onClick={() => handleRemoveValue(value)} size="small">
              <StyledIcons />
            </IconButton>
            <Typography>{value}</Typography>
          </StyledChip>
        ))}
        {allSelectedValues.length > 0 && (
          <StyledClearButton onClick={onClear}>Clear all</StyledClearButton>
        )}
      </StyledChipContainer>
    </StyledFromControl>
  );
};
const StyledFromControl = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const StyledClearButton = styled(Button)({
  color: "#828282",
  width: "150px",
  height: "32px",
  fontSize: "16px",
  textDecoration: "underline",
  textTransform: "capitalize",
});

const StyledIcons = styled(Icons.Remove)(({ iconSize }) => ({
  width: iconSize?.width || "14px",
  height: iconSize?.height || "14px",
  cursor: "pointer",
}));
const StyledSelect = styled(Select)({
  width: "271px",
  height: "40px",
  padding: 0,
  "& .MuiSelect-select": {
    height: "40px",
    display: "flex",
    alignItems: "center",
    padding: 0,
  },
  "&:hover .MuiSelect-select": {
    backgroundColor: "transparent",
    borderColor: "#C4C4C4",
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

const StyledPlaceholder = styled(Box)({
  padding: "8px 14px",
  color: "#828282",
});
const StyledChipContainer = styled(Box)({
  display: "none",
  flexDirection: "row",
  gap: "16px",
});
const StyledChip = styled("div")({
  display: "flex",
  alignItems: "center",
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
  height: "32px",
  flexWrap: "wrap",
  padding: "0 4px 0 0",
  backgroundColor: "#F3F3F3",
});
