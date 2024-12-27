import { Box, Container, styled } from "@mui/material";
import { useState } from "react";
import { Icons } from "../../assets";

export const feedbacks = [
  {
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    date: "28.04.22",
    rating: 5,
    text: `Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks.`,
    likes: 4,
    dislikes: 2,
    comments: 2,
    images: [
      "https://shorturl.at/6fOE9",
      "https://shorturl.at/D4L3j",
      "https://shorturl.at/6fOE9",
    ],
  },
  {
    avatar: "https://shorturl.at/1jDff",
    userName: "Anna Annova",
    date: "28.04.22",
    rating: 5,
    text: `Great location, really pleasant and clean rooms, but the thing that makes this such a good place to stay are the staff. All of the people are incredibly helpful and generous with their time and advice. We travelled with two six year olds and lots of luggage and despite the stairs up to the elevator this was one of the nicest places we stayed in the four weeks.`,
    likes: 4,
    dislikes: 2,
    images: [
      "https://shorturl.at/6fOE9",
      "https://shorturl.at/D4L3j",
      "https://shorturl.at/6fOE9",
    ],
  },
];

const FeedbackCard = ({
  userName,
  date,
  rating,
  text,
  likes,
  dislikes,
  avatar,
  images,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prev) => !prev);
  };

  const displayedText = isExpanded ? text : `${text.substring(0, 100)}...`;

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
          {" "}
          <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.62 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <StyledCard>
      <StyleBox>
        <StyleUserInfo>
          <StyleAvatar src={avatar} alt={`${userName}'s avatar`} />
          <StyleSpan>{userName}</StyleSpan>
        </StyleUserInfo>
        <StyleRating>{renderStars(rating)}</StyleRating>
      </StyleBox>
      <StyledText>
        {displayedText}
        {text.length > 100 && (
          <StyleToggleText onClick={toggleText}>
            {isExpanded ? " See Less" : " See More"}
          </StyleToggleText>
        )}
      </StyledText>

      <StyleDivImage>
        {images.map((image, index) => (
          <StyleImage key={index} src={image} alt={`feedback-image-${index}`} />
        ))}
      </StyleDivImage>

      <StyleFooter>
        <StyleDate>{date}</StyleDate>
        <div>
          <StyleLikes>
            <div>
              <Icons.Like /> {likes}
            </div>

            <div>
              <Icons.DisLike /> {dislikes}
            </div>
          </StyleLikes>
        </div>
      </StyleFooter>
    </StyledCard>
  );
};

export const FeedbackList = () => {
  return (
    <StyleList>
      {feedbacks.map((feedback, id) => (
        <FeedbackCard key={id} {...feedback} />
      ))}
    </StyleList>
  );
};

const StyleDivImage = styled("div")({
  display: "flex",
  gap: "2px",
});

const StyledCard = styled(Container)({
  display: "flex",
  flexDirection: "column",
});

const StyleBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.5rem",
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

const StyleAvatar = styled("img")({
  width: "28px",
  height: "28px",
});
