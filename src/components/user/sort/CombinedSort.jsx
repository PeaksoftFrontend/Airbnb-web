import { useState } from "react";
import { SortRaiting } from "./SortRaiting";
import { Sort } from "./Sort";
import { Box, Button, styled } from "@mui/material";

export const CombinedSort = () => {
  const [sortValues, setSortValues] = useState([]);
  const [sortRaitingValues, setSortRaitingValues] = useState("");

  const handleClearAll = () => {
    setSortValues([]); // Очищаем значения сортировки
    setSortRaitingValues(""); // Очищаем значения рейтинга
  };

  const hasSelectedValues = sortValues.length > 0 || sortRaitingValues !== "";

  return (
    <StyledBox>
      <StyleBox>
        <Sort
          selectedValues={sortValues}
          setSelectedValues={setSortValues}
          onClear={handleClearAll}
        />
        <SortRaiting
          selectedRaiting={sortRaitingValues}
          setSelectedRaiting={setSortRaitingValues}
          onClear={handleClearAll}
        />
      </StyleBox>

      {hasSelectedValues && (
        <StyledClearButton onClick={handleClearAll}>
          Clear all
        </StyledClearButton>
      )}
    </StyledBox>
  );
};

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

const StyledBox = styled(Box)({ display: "flex", flexDirection: "column" });
const StyleBox = styled(Box)({ display: "flex", gap: "10px" });
