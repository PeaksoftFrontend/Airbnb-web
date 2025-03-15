import {
  Box,
  Container,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";
import { Icons } from "../../assets";
import { useGetRatingQuery } from "../../redux/api/announcementId.service";

export const Reviews = () => {
  const { data, error, isLoading } = useGetRatingQuery(26);
  console.log(data);

  if (error) return <p>Ошибка</p>;
  if (isLoading) return <p>Загрузка...</p>;

  const ratingData = [
    { star: 5, percentage: data?.five || 0 },
    { star: 4, percentage: data?.four || 0 },
    { star: 3, percentage: data?.three || 0 },
    { star: 2, percentage: data?.two || 0 },
    { star: 1, percentage: data?.one || 0 },
  ];

  return (
    <StyleConteiner>
      <StyleStar>
        {data?.averageRating || "N/A"}
        <Icons.Star />
      </StyleStar>
      <StyleLiner>
        {ratingData.map((item) => (
          <StyleCardStar key={item.star}>
            <StyleStarNum>{item.star}</StyleStarNum>
            <StyledLinerProgresParent>
              <StyleLinearProgress
                variant="determinate"
                value={item.percentage}
              />
            </StyledLinerProgresParent>
            <Stylepers>
              <StylePersenges variant="p">{item.percentage}%</StylePersenges>
            </Stylepers>
          </StyleCardStar>
        ))}
      </StyleLiner>
    </StyleConteiner>
  );
};

const Stylepers = styled("div")({
  minWidth: "35px",
  textAlign: "center",
  justifyContent: "center",
});

const StyleLinearProgress = styled(LinearProgress)({
  flex: 1,
  backgroundColor: "#C4C4C4",

  "& .MuiLinearProgress-bar": {
    height: "8px",
    backgroundColor: "#4F7755",
  },
});

const StyledLinerProgresParent = styled("div")({
  width: "274px",
});

const StyleStar = styled("p")({
  padding: "21px 16px 0px 16px",
  fontSize: "24px",
  fontWeight: "500",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  "& svg path": {
    fill: "#F7D212",
  },

  "& svg": {
    width: "31px",
    height: "31px",
  },
});

const StyleConteiner = styled(Container)({
  border: "1px solid #C4C4C4",
  borderRadius: "16px",
  width: "424px",
  display: "flex",
  flexDirection: "column",
  gap: "19px",
  paddingBottom: "20px",
});

const StyleCardStar = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  width: "100%",
});

const StyleLiner = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "0px 16px 0 16px",
});

const StyleStarNum = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
});

const StylePersenges = styled(Typography)({
  fontSize: "16px",
  fontWeight: 500,
  textAlign: "center",
  justifyContent: "center",
});
