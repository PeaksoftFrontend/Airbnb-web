import { orange } from "@mui/material/colors";
import { Checkbox as MuiCheckbox, FormControlLabel } from "@mui/material";
import { useState } from "react";

export const Checkbox = ({ name, value, ...props }) => {
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
          name={name}
          value={value}
          {...props}
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
