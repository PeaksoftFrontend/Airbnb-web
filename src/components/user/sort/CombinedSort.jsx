import { useState } from "react";
import { Box, Button, IconButton, styled, Typography } from "@mui/material";
import { Sort } from "./Sort";
import { SortMarker } from "./SortMarker";
import { Icons } from "../../../assets";

const options = [
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
export const CombinedSort = () => {
  const [sortValues, setSortValues] = useState([]);
  const [sortRaitingValues, setSortRaitingValues] = useState("");
  const [homeType, setHomeType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const handleClearAll = () => {
    setSortValues([]);
    setSortRaitingValues("");
    setSelectedPrice("");
  };
  const handleRemoveValue = (valueToRemove) => {
    setSortValues((prevValues) =>
      prevValues.filter((value) => value !== valueToRemove)
    );
    if (selectedPrice === valueToRemove) {
      setSelectedPrice("");
    }
  };

  const allSelectedValue = [...sortValues, selectedPrice].filter(Boolean);
  const allSelectedValues = [
    ...sortValues,
    selectedPrice,
    sortRaitingValues,
  ].filter(Boolean);
  return (
    <StyleBox>
      <StyledBox>
        <Box>
          <SortMarker
            groupedOptions={groupedOptions}
            selectedValues={sortValues}
            setSelectedValues={setSortValues}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            onClear={handleClearAll}
          />
        </Box>
        <Sort
          options={options}
          selected={sortRaitingValues}
          setSelected={setSortRaitingValues}
          homeType={homeType}
          onClear={handleClearAll}
          setHomeType={setHomeType}
        />
      </StyledBox>
      <BoxStyled>
        {allSelectedValue.map((value) => (
          <StyledChip key={value}>
            <IconButton onClick={() => handleRemoveValue(value)} size="small">
              <StyledIcons />
            </IconButton>
            <Typography>{value}</Typography>
          </StyledChip>
        ))}
        {sortRaitingValues && (
          <SelectedValue>
            <IconButton onClick={() => setSortRaitingValues("")} size="small">
              <StyledIcons />
            </IconButton>
            {sortRaitingValues}
          </SelectedValue>
        )}
        {allSelectedValues.length > 0 && (
          <StyledClearButton onClick={handleClearAll}>
            Clear all
          </StyledClearButton>
        )}
      </BoxStyled>
    </StyleBox>
  );
};
const BoxStyled = styled(Box)({ display: "flex", gap: "15px" });
const StyledIcons = styled(Icons.Remove)(({ iconSize }) => ({
  width: iconSize?.width || "14px",
  height: iconSize?.height || "14px",
  cursor: "pointer",
}));
const StyledClearButton = styled(Button)({
  color: "#828282",
  width: "150px",
  height: "32px",
  fontSize: "16px",
  textDecoration: "underline",
  textTransform: "capitalize",
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

const StyleBox = styled(Box)({
  display: "flex",
  gap: "16px",
  flexDirection: "column",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
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
