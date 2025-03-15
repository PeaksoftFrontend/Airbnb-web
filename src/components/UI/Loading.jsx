import { styled } from "@mui/material";
import LoadingSpinner from "react-loading";

export const Loading = ({ loading }) => {
  return (
    <LoadingContainer>
      {loading ? (
        <LoadingSpinner type="spin" color="#007bff" height={50} width={50} />
      ) : (
        <p>Данные загружены!</p>
      )}
    </LoadingContainer>
  );
};
const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100px",
});
