import {
  Box,
  Container,
  LinearProgress,
  styled,
  Typography,
} from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";

import {
  useGetAnnouncementIdQuery,
  useRatingQuery,
} from "../../redux/api/adminId.sevice";

import { Icons } from "../../assets";
import { AdminFeedbackList } from "../../components/UI/admin/AdminFeedbackList";
import { InnerHotel } from "../InnerHotel";

export const AdminInnerHotel = () => {
  const { data } = useGetAnnouncementIdQuery(26);
  const { dataRating } = useRatingQuery(26);
  console.log(data);

  const path = [
    { id: 1, url: "/admin/users", title: "Users" },
    { id: 1, url: "/admin/user", title: data?.fullName },
    { id: 2, url: "#", title: data?.title },
  ];

  const ratingData = [
    { star: 5, percentage: dataRating?.five || 0 },
    { star: 4, percentage: dataRating?.four || 0 },
    { star: 3, percentage: dataRating?.three || 0 },
    { star: 2, percentage: dataRating?.two || 0 },
    { star: 1, percentage: dataRating?.one || 0 },
  ];

  return (
    <StyledContainer>
      <Box>
        <Breadcrumbs path={path} />
      </Box>

      <Box>
        <InnerHotel data={data} outlined="DELETE" contained="BLOCK" />
      </Box>

      <div>
        <Typography variant="h5">FEEDBACK</Typography>
      </div>
      <StyledBox>
        <StyledDiv>
          <AdminFeedbackList />
          <Typography variant="h6">Show More</Typography>
        </StyledDiv>
        <div>
          <StyleConteiner>
            <StyleStar>
              {dataRating?.averageRating || "N/A"}
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
                    <StylePersenges variant="p">
                      {item.percentage}%
                    </StylePersenges>
                  </Stylepers>
                </StyleCardStar>
              ))}
            </StyleLiner>
          </StyleConteiner>
        </div>
      </StyledBox>
    </StyledContainer>
  );
};

const StyledContainer = styled("div")({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  paddingLeft: "40px",
  marginTop: "46px",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "127px",
});

const StyledDiv = styled("div")({
  display: "flex",
  gap: "28px",
  flexDirection: "column",
  alignItems: "center",
});
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
