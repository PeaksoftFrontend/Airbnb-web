import styled from "@emotion/styled";

export const Button = ({
  children,
  onClick,
  variant = "contained",
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button(({ variant }) => ({
  with: "100%",
  padding: "10px 16px",

  color: "#F7F7F7",
  border: "none",
  cursor: "pointer",
  ...(variant === "outlined" && {
    background: "#DD8A08",
    fontSize: "14px",
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#BB7200",
      color: "#F7F7F7",
      border: "none",
    },
    "&:active": {
      backgroundColor: " #F2B75B",
      color: "#F7F7F7",
    },
    ":disabled": {
      border: "none",
      color: "#F7F7F7",
      background: "#C4C4C4",
    },
  }),

  ...(variant === "contained" && {
    borderRadius: "8px",
    background: "none",
    color: " #000000",
    fontSize: "18px",
    fontWeight: 500,
    border: "1px solid #C4C4C4",

    "&:hover": {
      border: "1px solid #828282",
    },
    "&:active": {
      backgroundColor: " #C4C4C433",
      border: "1px solid #828282",
    },
  }),

  ...(variant === "warning" && {
    color: " #828282",
    background: "none",
    border: " 1px solid #7D7D7D",
    fontSize: "16px",

    ":hover": {
      border: "1.5px solid #363636",
      color: "#828282",
    },
    ":active": {
      background: "#DD8A08",
      border: "none",
      color: " #FFFFFF",
    },
  }),
}));
