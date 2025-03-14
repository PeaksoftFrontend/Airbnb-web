import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../assets";
import {
  useGetFeedbackQuery,
  useRemoveFeedbackMutation,
} from "../../redux/api/announcementId.service";

const FeedbackCard = ({
  id,
  feedbackUserFullName,
  createdAt,
  rating,
  comment = "",
  likeCount,
  disLikeCount,
  feedbackUserImage,
  images,
  refetch,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [removeFeedback] = useRemoveFeedbackMutation(26);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async () => {
    try {
      await removeFeedback(id).unwrap(); // .unwrap() чтобы получить ошибку, если есть
      console.log("Отзыв удален");
      refetch(); // 🔥 Обновляем список отзывов
    } catch (error) {
      console.error("Ошибка при удалении отзыва", error);
    }
  };

  const displayedText = isExpanded
    ? comment
    : `${comment.substring(0, 100)}...`;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20px"
          height="20px"
          fill={i <= rating ? "#FFD700" : "#CCCCCC"}
        >
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
        </svg>
      );
    }
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {stars}
        <span style={{ fontSize: "14px", color: "#666" }}>({rating})</span>
      </div>
    );
  };

  return (
    <StyledCard>
      <StyleBox>
        <StyleUserInfo>
          <Avatar
            src={
              feedbackUserImage && feedbackUserImage !== "link"
                ? feedbackUserImage
                : undefined
            }
            alt={feedbackUserFullName}
            sx={{
              width: 36,
              height: 36,
              backgroundColor:
                !feedbackUserImage || feedbackUserImage === "link"
                  ? "#C4C4C4"
                  : "transparent",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {(!feedbackUserImage || feedbackUserImage === "link") &&
              feedbackUserFullName?.charAt(0).toUpperCase()}
          </Avatar>
          <StyleSpan>{feedbackUserFullName}</StyleSpan>
          <StyleRating>{renderStars(rating)}</StyleRating>
        </StyleUserInfo>
        <IconButton>
          <Icons.Menufeadback onClick={handleMenuClick} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </StyleBox>
      <StyledText>
        {displayedText}
        {comment.length > 100 && (
          <StyleToggleText onClick={toggleText}>
            {isExpanded ? "See Less" : " See More"}
          </StyleToggleText>
        )}
      </StyledText>

      <StyleDivImage>
        {images.map((image, index) => (
          <StyleImage key={index} src={image} alt={`feedback-image-${index}`} />
        ))}
      </StyleDivImage>

      <StyleFooter>
        <StyleDate>{createdAt}</StyleDate>
        <div>
          <StyleLikes>
            <div>
              <Icons.Like /> {likeCount}
            </div>

            <div>
              <Icons.DisLike /> {disLikeCount}
            </div>
          </StyleLikes>
        </div>
      </StyleFooter>
    </StyledCard>
  );
};

export const FeedbackList = () => {
  const { data, error, isLoading, refetch } = useGetFeedbackQuery(26);
  console.log(data);

  if (error) return <p>error</p>;
  if (isLoading) return <p>Loading...</p>;
  if (!data || data.length === 0) return <p>No feedback available</p>;
  return (
    <StyleList>
      {data.map((feedback) => (
        <FeedbackCard key={feedback.id} {...feedback} refetch={refetch} />
      ))}
    </StyleList>
  );
};

const StyleDivImage = styled("div")({
  display: "flex",
  gap: "2px",
});

const StyledCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const StyleBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.5rem",
  "& svg": {
    cursor: "pointer",
  },
});

const StyleUserInfo = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

const StyleSpan = styled("div")({
  fontSize: "18px",
  fontWeight: 500,
});

const StyleRating = styled("div")({
  fontSize: "1rem",
  color: "#FFD700",
  "&  img": {
    fill: "#FFD700",
  },
});

const StyledText = styled("div")({
  fontSize: "1rem",
  margin: "0.5rem 0",
  maxWidth: "850px",
});

const StyleToggleText = styled("span")({
  cursor: "pointer",
  color: "#007BFF",
  fontSize: "16px",
  fontWeight: "16px",
  borderBottom: "1.5px solid #266BD3",
});

const StyleImage = styled("img")({
  cursor: "pointer",
  color: "blue",
  width: "80px",
  height: "80px",
  objectFit: "cover",
});

const StyleFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1rem",
  fontSize: "0.9rem",
  color: "#666",
});

const StyleDate = styled("span")({
  fontSize: "0.9rem",
  color: "#666",
});

const StyleLikes = styled("span")({
  cursor: "pointer",
  display: "flex",
  gap: "15px",
  fontSize: "16px",
  fontWeight: 400,
});

const StyleList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
});
