import { Box, Pagination, styled } from "@mui/material";
import { CardAdmin } from "../../components/UI/admin/CardAdmin";
import { useState } from "react";
import { useGetApplicationQuery } from "../../redux/api/application.service";

export const Application = () => {
  const [page, setPages] = useState({
    page: 1,
    size: 12,
  });
  const { data } = useGetApplicationQuery(page);

  const handlePageChange = (_, value) => {
    setPages({ ...page, page: Number(value) });
  };

  return (
    <StyledContainer>
      <StyleText
        sx={{
          padding: "50px 0px 22px 0px",
        }}
      >
        APPLICATION
      </StyleText>
      <CardAdmin cards={data?.announcementResponses} />
      {data?.announcementResponses?.length > 0 && (
        <StylePogination>
          <Pagination
            count={data?.pageSize}
            page={data?.currentPage}
            onChange={handlePageChange}
          />
        </StylePogination>
      )}
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
