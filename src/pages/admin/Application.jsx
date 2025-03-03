import { Box, Pagination, styled } from "@mui/material";
import { CardAdmin } from "../../components/UI/admin/CardAdmin";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetApplicationByIdQuery } from "../../redux/api/admin.application.service";

export const Application = () => {
  const { id } = useParams(); // Получаем id из URL
  const { data, error, isLoading } = useGetApplicationByIdQuery(id);

  const [page, setPages] = useState(1);
  const cardsPerPage = 15;

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки данных</p>;
  if (!data) return <p>Нет данных</p>;

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const currentCards = data.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  const handlePageChange = (_, value) => {
    setPages(value);
  };

  return (
    <StyledContainer>
      <StyleText sx={{ padding: "50px 0px 22px 0px" }}>APPLICATION</StyleText>
      <CardAdmin cards={currentCards} />
      <StylePogination>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
        />
      </StylePogination>
    </StyledContainer>
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
