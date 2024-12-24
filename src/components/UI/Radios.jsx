import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useState } from "react";

export const Radios = () => {
  const [selectedRadio, setSelectedRadio] = useState();

  const handleChangeRadio = (event) => {
    setSelectedRadio(event.target.value);
  };
  return (
    <Box>
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
};
