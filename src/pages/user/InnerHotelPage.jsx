import { Sliders } from "../../components/admin/Sliders";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  Rating,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Payment } from "../../components/UI/Payment";
import { Reviews } from "../../components/user/Reviews";
import { FeedbackList } from "../../components/UI/FeedbackList";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import {
  useCreateFeedbackMutation,
  useGetAnnouncementIdQuery,
} from "../../redux/api/announcementId.service";
import { Button } from "../../components/UI/Button";
import { Modal } from "../../components/UI/Modal";
import { useState } from "react";
import { Icons } from "../../assets";
import { useDropzone } from "react-dropzone";
import { useParams } from "react-router-dom";

export const InnerHotelPage = () => {
  const { regionId } = useParams();
  const [openModal, setOpenModal] = useState(false);
  const [files, setFiles] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const { data, error, isLoading } = useGetAnnouncementIdQuery(26);

  const [createFeedback] = useCreateFeedbackMutation();

  const handleOpenModal = () => {
    console.log("Modal Opened:", openModal);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const main = [
    { id: 1, url: "/", title: "Main" },
    { id: 2, url: "/", title: regionId },
    { id: 3, url: "#", title: "Hotel" },
  ];

  const onDrop = (acceptedFiles) => {
    if (files.length + acceptedFiles.length <= 4) {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } else {
      console.log("You can upload a maximum of 4 files");
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 4,
    accept: {
      "image/*": [],
      "application/pdf": [],
      "text/*": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.ms-excel": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
      "audio/*": [],
      "video/*": [],
    },
  });

  const handleSubmitFeedback = async () => {
    try {
      const feedbackData = {
        rating,
        comment,
        images: [],
      };

      await createFeedback(feedbackData).unwrap();
      console.log("Отзыв успешно отправлен!");
      setOpenModal(false);
    } catch (err) {
      console.error("Ошибка при отправке отзыва:", err);
    }
  };
  const removeFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  if (error) return <p>Ошибка в запросе</p>;
  if (isLoading) return <p>Загрузка...</p>;

  return (
    <Container
      sx={{
        padding: "50px 0px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <StyleNamecrums>
        <Breadcrumbs path={main} />
        <p>NAME</p>
      </StyleNamecrums>
      <div>
        <StyleHomeAndPayment>
          <Sliders images={data?.images || []} />

          <div>
            <StyleGlobal>
              <StyleApartaments>{data?.houseType}</StyleApartaments>
              <StyleGuests>{data?.maxGuests}</StyleGuests>
            </StyleGlobal>
            <StyleGPS>
              <p>{data?.title}</p>
              <span>{data?.address}</span>
            </StyleGPS>
            <StyleDiscription>
              <StyledDescription>{data?.description}</StyledDescription>
              <StyleProfile>
                <Avatar
                  sx={{ backgroundColor: "#C4C4C4" }}
                  alt={data?.fullName}
                />
                <StyleEmail>
                  <StyleName>{data?.fullName}</StyleName>
                  <StyleNik>{data?.email}</StyleNik>
                </StyleEmail>
              </StyleProfile>
            </StyleDiscription>
            <Payment />
          </div>
        </StyleHomeAndPayment>
      </div>
      <Typography variant="h5" sx={{ marginTop: "50px" }}>
        FEEDBACK
      </Typography>
      <StyledBox>
        <StyledDiv>
          <FeedbackList />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#000000",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              borderBottom: "1.5px solid #000000",
              width: "max-content",
              margin: "0 auto",
            }}
          >
            Show more
          </Typography>
        </StyledDiv>
        <StyledReviews>
          <Reviews />
          <Button variant="contained" onClick={handleOpenModal}>
            LEAVE FEEDBACK
          </Button>
        </StyledReviews>
      </StyledBox>

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            width: "720px",
            height: "auto",
            padding: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#363636",
              fontSize: "18px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "center",
            }}
          >
            LEAVE FEEDBACK
          </Typography>
          <Box sx={{ display: "flex", gap: "25px", marginTop: "20px" }}>
            <div>
              <Tooltip title="Загрузить файл">
                <IconButton
                  {...getRootProps()}
                  sx={{
                    background: "#F3F3F3",
                    width: "100px",
                    height: "100px",
                    borderRadius: "2px",
                  }}
                >
                  <input {...getInputProps()} />
                  <Icons.Photo />
                </IconButton>
              </Tooltip>
            </div>
            <div>
              <Typography
                sx={{ color: "#266BD3", fontSize: "16px", fontWeight: 500 }}
              >
                Add photos to the review
              </Typography>
              <Typography
                sx={{
                  color: " #828282",
                  fontSize: "14px",
                  fontWeight: 400,
                  width: "360px",
                  marginTop: "8px",
                }}
              >
                it will become more noticeable and even more useful. You can
                upload up to 4 photos.
              </Typography>
            </div>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {files.map((file, index) => (
              <Box
                key={index}
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "2px",
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid #ccc",
                  marginTop: "5px",
                }}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`uploaded-${index}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  onClick={() => removeFile(file)}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: "rgba(255,255,255,0.8)",
                    padding: "2px",
                  }}
                >
                  <Cancellation />
                </IconButton>
              </Box>
            ))}
          </Box>
          <StyledStar>
            <Typography
              sx={{
                color: "#828282",
                fontSize: "16px",
                fontWeight: 400,
                marginLeft: "9px",
              }}
            >
              Rate
            </Typography>
            <StyledRating
              name="simple-controlled"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={0.5}
              emptyIcon={<StyledStarIcon />}
            />
          </StyledStar>
          <div>
            <Typography
              sx={{
                color: "#828282",
                fontSize: "16px",
                fontWeight: 400,
                marginBottom: "3px",
              }}
            >
              Feedback
            </Typography>
            <TextField
              placeholder="Share your impressions about this place"
              multiline
              rows={2.3}
              fullWidth
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <Box
            sx={{ display: "flex", justifyContent: "end", marginTop: "20px" }}
          >
            <Button
              onClick={handleCloseModal}
              variant="white"
              sx={{ width: "150px" }}
            >
              CANCEL
            </Button>
            <Button
              onClick={handleSubmitFeedback}
              variant="outlined"
              sx={{ width: "200px" }}
            >
              PUBLIC
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};

const Cancellation = styled(Icons.Cancellation)({
  cursor: "pointer",
  color: "red",
  fontSize: "24px",
});

const StyledRating = styled(Rating)(() => ({
  "& .MuiRating-icon": {
    fontSize: "30px",
  },
  "& .MuiRating-iconFilled": {
    color: "#F7D212",
  },
  "& .MuiRating-iconEmpty": {
    color: "gray",
  },
  "& .MuiRating-iconButton:hover .MuiRating-iconFilled, & .MuiRating-iconButton:focus .MuiRating-iconFilled":
    {
      color: "#F7D212",
    },
}));

const StyledStarIcon = styled(Icons.Star)`
  font-size: 30px;
`;
const StyleNamecrums = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "40px",

  "& p": {
    color: "#000000",
    fontSize: "20px",
    fontWeight: 500,
  },
});

const StyleHomeAndPayment = styled("div")({
  display: "flex",
  gap: "50px",
});

const StyledStar = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
});

const StyledReviews = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

const StyledDescription = styled(Typography)({
  fontSize: "14px",
  fontWeight: 400,
  color: "#363636",
});

const StyleGlobal = styled("div")({
  display: "flex",
  gap: "14px",
});
const StyleApartaments = styled("div")({
  width: "95px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGuests = styled("div")({
  width: "75px",
  height: "29px",
  background: "#f8e7ee",
  border: "1px solid #eb98b6",
  fontSize: "14px",
  fontWeight: 400,
  color: "#000000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyleGPS = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "8px",
  "& p": {
    fontSize: "20px",
    fontWeight: 500,
    color: " #000000",
  },
  "& span": {
    fontSize: "14px",
    fontWeight: 400,
    color: "#828282",
  },
});

const StyleDiscription = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingTop: "20px",
  gap: "30px",
});

const StyleProfile = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

const StyleEmail = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

const StyleName = styled("p")({
  fontSize: "16px",
  fontWeight: 500,
  color: "#000000",
});

const StyleNik = styled("p")({
  fontSize: "16px",
  fontWeight: 400,
  color: "#afaeae",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "120px",
});

const StyledDiv = styled("div")({
  width: "630px",
});
