import { IconButton, Box, styled } from "@mui/material";
import { Icons } from "../../../assets";
import { Select as MySelect } from "../../UI/Select";

export const Sort = ({
  selected,
  setSelected,
  homeType,
  setHomeType,
  options,
}) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find((item) => item.value === selectedValue);
    if (selectedOption) {
      setSelected(selectedOption.label);
      setHomeType("");
    }
  };

  return (
    <StyledFromControl>
      <SelectBox>
        <StyleSelect
          options={options}
          label="Home Type"
          value={homeType}
          onChange={handleChange}
          size="small"
          placeholder="Sort by ratings"
        />
      </SelectBox>
      <BoxValue>
        <StyledBox>
          {selected && (
            <SelectedValue>
              <IconButton onClick={() => setSelected("")} size="small">
                <StyledIcons />
              </IconButton>
              {selected}
            </SelectedValue>
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
const BoxValue = styled(Box)({ gap: "16px", display: "none" });
const StyledFromControl = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const SelectBox = styled(Box)({ display: "flex", gap: "10px" });
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "16px",
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
  "& .MuiInputBase-root": { padding: 0 },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "#C4C4C4" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#C4C4C4" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#C4C4C4",
    borderWidth: "2px",
  },
  "&:active .MuiOutlinedInput-notchedOutline": { borderColor: "#C4C4C4" },
});
