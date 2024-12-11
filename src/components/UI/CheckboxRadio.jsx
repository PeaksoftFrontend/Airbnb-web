import React, { useState } from "react";
import { orange } from "@mui/material/colors";
import {
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormGroup,
  Box,
} from "@mui/material";

function CheckboxRadio() {
  const [checkbox, setCheckbox] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState();

  const handleChangeCheckbox = (event) => {
    setCheckbox(event.target.checked);
  };

  const handleChangeRadio = (event) => {
    setSelectedRadio(event.target.value);
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

      <FormControl component="fieldset">
        <RadioGroup value={selectedRadio} onChange={handleChangeRadio}>
          <FormControlLabel
            value="radio"
            control={<Radio sx={{ "&.Mui-checked": { color: orange[500] } }} />}
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default CheckboxRadio;
