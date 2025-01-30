import { useState } from "react";
import { Box, styled } from "@mui/material";
import { SortComponent } from "./SortComponent";

export const CombinedSort = () => {
  const [sortValues, setSortValues] = useState([]);
  const [sortRaitingValues, setSortRaitingValues] = useState("");

  const handleClearAll = () => {
    setSortValues([]);
    setSortRaitingValues("");
  };

  return (
    <StyledBox>
      <StyleBox>
        <SortComponent
          selectedValues={sortValues}
          setSelectedValues={setSortValues}
          selectedRaiting={sortRaitingValues}
          setSelectedRaiting={setSortRaitingValues}
          onClear={handleClearAll}
        />
      </StyleBox>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({ display: "flex", flexDirection: "column" });
const StyleBox = styled(Box)({ display: "flex", gap: "10px" });
