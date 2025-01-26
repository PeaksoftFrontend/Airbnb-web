import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";

export const DatePickers = () => {
  const [value, setValue] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#DD8A08",
    },
  },
});

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiPickersDay-root.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
  },
  "& .MuiPickersDay-root:hover": {
    backgroundColor: "#DD8A08",
    color: "#fff",
    fontWeight: "bold",
  },
  "& .MuiPickersCalendarHeader-labelContainer": {
    fontWeight: "bold",
  },
  "& .MuiPickersYear-yearButton:hover": {
    backgroundColor: "#DD8A08",
    color: "#fff",
  },
}));
