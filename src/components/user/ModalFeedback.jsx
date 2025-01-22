import {
  Box,
  IconButton,
  Rating,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { Modal } from "../UI/Modal";
import { Icons } from "../../assets";
import { useDropzone } from "react-dropzone";
import { Textarea } from "@mui/joy";

export const ModalFeedback = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState([]);
  const onDrop = (acceptedFiles) => {
    if (files.length + acceptedFiles.length <= 4) {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } else {
      Error;
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
  const removeFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  const handleOpenClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <StyledButton variant="outlined" onClick={handleOpenClick}>
        request to book
      </StyledButton>
      <Modal open={open} onClose={handleOpenClick}>
        <StyledModal>
          <StyledTitle>Leave feedback</StyledTitle>
          <StyledContainer>
            <Box>
              <input {...getInputProps()} />
              <StyledTextPhoto>
                <StyledDivIcons>
                  <Tooltip title="Загрузить файл">
                    <IconButton
                      {...getRootProps()}
                      onClick={(e) => {
                        e.stopPropagation();
                        document.querySelector('input[type="file"]').click();
                      }}
                    >
                      <StyledIcon />
                    </IconButton>
                  </Tooltip>
                </StyledDivIcons>
                <StyledDivText>
                  <StyledFirst variant="h7">
                    Add photos to the review
                  </StyledFirst>
                  <StyledSecond>
                    it will become more noticeable and even more useful. You can
                    upload up to 4 photos.
                  </StyledSecond>
                  <StyledBoxImg>
                    {files.map((file) => (
                      <Box key={file.name}>
                        <StyledImage
                          src={URL.createObjectURL(file)}
                          alt={`Uploaded file ${file.name}`}
                        />
                        <Cancellation onClick={() => removeFile(file)} />
                      </Box>
                    ))}
                  </StyledBoxImg>
                </StyledDivText>
              </StyledTextPhoto>
            </Box>
            <SecondBox>
              <Styledtext variant="h7">Rate</Styledtext>
              <StyledRating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                precision={0.5}
                emptyIcon={<StyledStarIcon />}
              />
            </SecondBox>
            <SecondBox>
              <Styledtext variant="h7">Feedback</Styledtext>
              <StyledTextarea
                maxRows={3}
                placeholder="Share your impressions about this place"
              />
            </SecondBox>
            <BoxButton>
              <WhiteButton variant="white">cancel</WhiteButton>
              <StyledButto variant="outlined">Public</StyledButto>
            </BoxButton>
          </StyledContainer>
        </StyledModal>
      </Modal>
    </Box>
  );
};
const StyledTextarea = styled(Textarea)({
  width: "100%",
  height: "76px",
  border: "1px solid #828282",
  "&:hover": {
    border: "1px solid #828282",
  },
  "&:active": {
    border: "1px solid #828282",
  },
  "&:focus": {
    outline: "none",
    border: "1px solid #828282",
  },
});
const WhiteButton = styled(Button)({
  borderRadius: "none",
  width: "150px",
  height: "33px",
  boxShadow: "none",
});
const BoxButton = styled(Box)({
  display: "flex",
  gap: "8px",
  justifyContent: "end",
});
const StyledButto = styled(Button)({ width: "196px", height: "37px" });
const SecondBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const StyledStarIcon = styled(Icons.Star)`
  font-size: 30px;
`;
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
const StyledButton = styled(Button)({ width: "423px", height: "37px" });
const StyledModal = styled(Box)({
  width: "720px",
  height: "463px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
});
const StyledContainer = styled(Box)({
  display: "flex",
  gap: "22px",
  flexDirection: "column",
});
const StyledTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  color: "#363636",
  textTransform: "uppercase",
  margin: "25px",
});

const StyledTextPhoto = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "20px",
});

const StyledDivIcons = styled("div")({
  width: "100px",
  height: "100px",
  backgroundColor: "#F3F3F3",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledIcon = styled(Icons.Photo)(({ size }) => ({
  fontSize: size || "32px",
}));

const StyledDivText = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

const StyledFirst = styled(Typography)({ color: "#266BD3", fontWeight: "500" });
const StyledSecond = styled(Typography)({
  color: "#828282",
  fontSize: "14px",
  fontWeight: "400",
});

const StyledImage = styled("img")({
  width: "70px",
  height: "40px",
  objectFit: "cover",
});
const Cancellation = styled(Icons.Cancellation)({ cursor: "pointer" });
const StyledBoxImg = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
});
const Styledtext = styled(Typography)({ fontWeight: "500", color: "#828282" });
