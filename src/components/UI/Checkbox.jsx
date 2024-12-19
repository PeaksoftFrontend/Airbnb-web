import { useState } from "react";
import { orange } from "@mui/material/colors";
import { FormControlLabel, Checkbox, styled } from "@mui/material";

export function Checkbox() {
  const [checkbox, setCheckbox] = useState(false);

  const handleChangeCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checkbox}
          onChange={handleChangeCheckbox}
          name="checkbox"
          sx={{
            "&.Mui-checked": {
              color: orange[500],
            },
          }}
        />
      }
    />
  );
}
