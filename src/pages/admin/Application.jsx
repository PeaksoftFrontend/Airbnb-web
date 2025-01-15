import { Box, Pagination, styled } from "@mui/material";
import { Header } from "../../layout/admin/Header";
import { CardAdmin } from "../../components/UI/admin/CardAdmin";
import { Data } from "../../utils/constants/cardAdmin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Application = () => {
  const navigate = useNavigate();

  const [page, setPages] = useState(1);
  const cardsPerPage = 15;

  const totalPages = Math.ceil(Data.length / cardsPerPage);

  const currentCards = Data.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  const handlePageChange = (_, value) => {
    setPages(value);
  };

  return (
    <>
      <Header />
      <StyledContainer>
        <StyleText
          sx={{
            padding: "50px 0px 22px 0px",
          }}
        >
          APPLICATION
        </StyleText>
        <CardAdmin cards={currentCards} />
        <StylePogination>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </StylePogination>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled("div")({
  width: "100%",
  padding: "0px 40px",
});

const StylePogination = styled(Box)({
  display: "flex",
  justifyContent: "center",
  padding: "60px 60px",
  "& .MuiButtonBase-root": {
    background: "none",
    color: "#BDBDBD",
    fontSize: "16px",
    fontWeight: 500,
    "&:hover": {
      background: "none",
    },
  },
  "& .Mui-selected": {
    background: "none",
    color: "#DD8A08",
  },
  "& .MuiPaginationItem-icon": {
    fill: "#DD8A08",
    width: "25px",
    height: "25px",
  },
});

const StyleText = styled("p")({
  fontSize: "20px",
  fontWeight: 500,
  color: "#000000",
});
