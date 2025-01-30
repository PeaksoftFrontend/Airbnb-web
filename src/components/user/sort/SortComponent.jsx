import { useState, Fragment } from "react";
import {
  Select,
  MenuItem,
  ListItemText,
  ListSubheader,
  RadioGroup,
  Button,
  IconButton,
  Box,
  styled,
  Typography,
} from "@mui/material";
import { Checkbox } from "../../UI/Checkbox";
import { Radio } from "../../UI/Radio";
import { Icons } from "../../../assets";
import { Select as MySelect } from "../../UI/Select";

const optionStar = [
  { value: "", label: "Sort by ratings", key: "all" },
  { value: "1", label: <Icons.StarColor />, key: "1" },
  { value: "2", label: <Icons.TwoCStars />, key: "2" },
  { value: "3", label: <Icons.ThreeCStars />, key: "3" },
  { value: "4", label: <Icons.FourCStars />, key: "4" },
  { value: "5", label: <Icons.FiveCStars />, key: "5" },
];

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

export const SortComponent = ({
  selectedRaiting,
  setSelectedRaiting,
  selectedValues,
  setSelectedValues,
  onClear,
}) => {
  const [homeType, setHomeType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const handleRaitingChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = optionStar.find(
      (item) => item.value === selectedValue
    );
    if (selectedOption) {
      setSelectedRaiting(selectedOption.label);
      setHomeType("");
    }
  };

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
      <SelectBox>
        <Box>
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
                        onChange={(event) =>
                          handleSortChange(event, item.value)
                        }
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
        </Box>
        <StyleSelect
          options={optionStar}
          label="Home Type"
          value={homeType}
          onChange={handleRaitingChange}
          size="small"
          placeholder="Sort by ratings"
        />
      </SelectBox>
      <BoxValue>
        <StyledChipContainer>
          {allSelectedValues.map((value) => (
            <StyledChip key={value}>
              <IconButton onClick={() => handleRemoveValue(value)} size="small">
                <StyledIcons />
              </IconButton>
              <Typography>{value}</Typography>
            </StyledChip>
          ))}
        </StyledChipContainer>
        <StyledBox>
          {selectedRaiting && (
            <SelectedValue>
              <IconButton onClick={() => setSelectedRaiting("")} size="small">
                <StyledIcons />
              </IconButton>
              {selectedRaiting}
            </SelectedValue>
          )}

          {(selectedRaiting || allSelectedValues.length > 0) && (
            <StyledClearButton onClick={onClear}>Clear all</StyledClearButton>
          )}
        </StyledBox>
      </BoxValue>
    </StyledFromControl>
  );
};
const StyledIcons = styled(Icons.Remove)(({ iconSize }) => ({
  width: iconSize?.width || "14px",
  height: iconSize?.height || "14px",
  cursor: "pointer",
}));
const BoxValue = styled(Box)({ display: "flex", gap: "16px" });
const StyledFromControl = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  marginLeft: "50px",
});
const SelectBox = styled(Box)({
  display: "flex",
  gap: "10px",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "",
  justifyContent: "center",
  alignItems: "flex-start",
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
const SelectedValue = styled(Box)({
  display: "flex",
  alignItems: "center",
  color: "#828282",
  fontSize: "16px",
  fontWeight: "400",
  height: "32px",
  flexWrap: "wrap",
  padding: "4px",
  backgroundColor: "#F3F3F3",
});
const StyledChipContainer = styled(Box)({
  display: "flex",
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
const StyledPlaceholder = styled(Box)({
  padding: "8px 14px",
  color: "#828282",
});
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

const StyleSelect = styled(MySelect)({
  width: "271px",
  height: "40px",
  padding: "20px",
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
