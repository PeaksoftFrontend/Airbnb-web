import { useState } from "react";
import { orange } from "@mui/material/colors";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";

export const Checkbox = () => {
  const [checkbox, setCheckbox] = useState(false);

  const handleChangeCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
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
};
