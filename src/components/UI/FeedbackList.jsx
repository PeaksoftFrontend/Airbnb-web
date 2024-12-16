import { Box, Container, styled } from "@mui/material";
import { useState } from "react";

const feedbacks = [
  {
    userName: "Anna Annova",
    date: "28.04.22",
    rating: 5,
    text: `Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks.`,
    likes: 4,
    dislikes: 2,
    comments: 2,
  },
  {
    userName: "Anna Annova",
    date: "28.04.22",
    rating: 5,
    text: `Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks.`,
    likes: 4,
    dislikes: 2,
  },
];

const FeedbackCard = ({
  userName,
  date,
  rating,
  text,
  likes,
  dislikes,

  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedText = isExpanded ? text : `${text.substring(0, 100)}...`;

  return (
    <StyledCard>
      <StyleBox>
        <StyleUserInfo>
          <StyleSpan>{userName}</StyleSpan>
        </StyleUserInfo>
        <StyleRating>{"⭐".repeat(rating)}</StyleRating>
      </StyleBox>
      <StyledText>
        {displayedText}
        {text.length > 100 && (
          <StyleToggleText onClick={toggleText}>
            {isExpanded ? " See Less" : " See More"}
          </StyleToggleText>
        )}
      </StyledText>

      {image && (
        <StyledImageContainer>
          <StyleImage src={image} alt="Uploaded" />
        </StyledImageContainer>
      )}

      <StyleFooter>
        <StyleDate>{date}</StyleDate>
        <div>
          <StyleLikes>👍 {likes}</StyleLikes>
          <StyleDislike>👎 {dislikes}</StyleDislike>
        </div>
      </StyleFooter>
    </StyledCard>
  );
};

const FeedbackList = () => {
  return (
    <StyleList>
      {feedbacks.map((feedback, id) => (
        <FeedbackCard key={id} {...feedback} />
      ))}
    </StyleList>
  );
};

const StyledCard = styled(Container)({
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  backgroundColor: "#fff",
});

const StyleBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.5rem",
});

const StyleUserInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const StyleSpan = styled("div")({
  fontWeight: "bold",
});

const StyleRating = styled("div")({
  fontSize: "1rem",
  color: "#FFD700",
});

const StyledText = styled("div")({
  fontSize: "1rem",
  margin: "0.5rem 0",
});

const StyleToggleText = styled("span")({
  color: "#007BFF",
  cursor: "pointer",
  fontWeight: "bold",
});

const StyledImageContainer = styled("div")({
  marginTop: "1rem",
  textAlign: "center",
});

const StyleImage = styled("div")({
  maxWidth: "100%",
  maxHeight: "300px",
  borderRadius: "8px",
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
});

const StyleDislike = styled("span")({
  cursor: "pointer",
});

const StyleList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
});

export default FeedbackList;
