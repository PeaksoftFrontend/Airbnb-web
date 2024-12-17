import { useState } from "react";
import { orange } from "@mui/material/colors";
import { FormControlLabel, Checkbox, Box, styled } from "@mui/material";

export const CheckboxComponents = () => {
  const [checkbox, setCheckbox] = useState(false);

  const handleChangeCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <Box>
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
    </Box>
  );
};
