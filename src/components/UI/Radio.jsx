import { FormControlLabel, Radio as MuiRadio, styled } from "@mui/material";
import { orange } from "@mui/material/colors";
import { forwardRef } from "react";

export const Radio = forwardRef(({ label, value, onChange, ...props }, ref) => {
  return (
    <StyledFormControlLabel
      control={
        <StyledRadio ref={ref} value={value} onChange={onChange} {...props} />
      }
      label={label}
    />
  );
});
const StyledRadio = styled(MuiRadio)(() => ({
  "&.MuiRadio-root": {
    "& .MuiSvgIcon-root": {
      fontSize: "24px",
    },
    "&.Mui-checked": {
      color: orange[500],
    },
  },
}));
const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  "& .MuiTypography-root": {
    color: "#363636",
    fontSize: "16px",
    fontWeight: 500,
    fontFamily: "Inter, sans-serif",
  },
}));
