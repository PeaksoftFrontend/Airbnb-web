import { useState } from "react";
import { Select } from "../../UI/Select";
import { Icons } from "../../../assets";
import { Box, styled, Chip, Button } from "@mui/material";

export const SortRaiting = ({
  selectedRaiting,
  setSelectedRaiting,
  onClear,
}) => {
  const [homeType, setHomeType] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setSelectedRaiting(selectedOption.label);
      setHomeType("");
    }
  };

  const handleRemove = () => {
    setHomeType("");
    setSelectedRaiting("");
  };

  const options = [
    { value: "", label: "Sort by ratings", key: "all" },
    { value: "1", label: <StyledIconOne />, key: "1" },
    { value: "2", label: <Icons.TwoCStars />, key: "2" },
    { value: "3", label: <Icons.ThreeCStars />, key: "3" },
    { value: "4", label: <Icons.FourCStars />, key: "4" },
    { value: "5", label: <Icons.FiveCStars />, key: "5" },
  ];

  return (
    <StyledFromControl>
      <Select
        options={options}
        label="Home Type"
        value={homeType}
        onChange={handleChange}
        size="small"
        placeholder="Sort by ratings"
      />
      <StyleBox>
        <StyledChipContainer>
          {selectedRaiting && (
            <StyledChip label={selectedRaiting} onDelete={handleRemove} />
          )}
        </StyledChipContainer>

        {selectedRaiting && (
          <StyledClearButton onClick={onClear}>Clear all</StyledClearButton>
        )}
      </StyleBox>
    </StyledFromControl>
  );
};

const StyledChipContainer = styled(Box)({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  marginTop: "16px",
  backgroundColor: "#F3F3F3",
});

const StyleBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledClearButton = styled(Button)({
  color: "#828282",
  width: "150px",
  height: "32px",
  fontSize: "16px",
  textDecoration: "underline",
  textTransform: "capitalize",
  marginTop: "16px",
});

const StyledIconOne = styled(Icons.StarColor)(({ iconSize }) => ({
  width: iconSize?.width || "14px",
  height: iconSize?.height || "14px",
  cursor: "pointer",
}));

const StyledFromControl = styled(Box)({ width: "271px" });

const StyledChip = styled(Chip)({
  backgroundColor: "#F3F3F3",
  padding: "0",
  height: "32px",
  display: "flex",
  "& .MuiChip-deleteIcon": {
    backgroundColor: "transparent",
    marginRight: "4px",
  },
});
