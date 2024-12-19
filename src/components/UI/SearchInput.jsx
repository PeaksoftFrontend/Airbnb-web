import { InputAdornment, styled, TextField } from "@mui/material";
import { Icons } from "../../assets";

export const SearchInput = ({
  type,
  value,
  placeholder,
  variant,
  ...props
}) => {
  return (
    <SearchTextField
      type={type}
      placeholder={placeholder}
      value={value}
      variant={variant}
      fullWidth
      {...props}
      InputProps={{
        startAdornment: (
          <StyledDiv position="start">
            <Icons.Search />
          </StyledDiv>
        ),
      }}
    />
  );
};

const SearchTextField = styled(TextField)(() => ({
  border: "1px solid #C4C4C4",
  borderRadius: "2px",
  color: "#C4C4C4",
  fontSize: "16px",
  fontWeight: "400",
  backgroundColor: "#FFFFF",
  "& .MuiOutlinedInput-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "& .MuiInputBase-input": {
    padding: "10px 0",
  },
  "& .MuiInputAdornment-root": {
    display: "flex",
    alignItems: "center",
  },
}));

const StyledDiv = styled(InputAdornment)({
  width: "22px",
  height: "22px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "5px",
});
