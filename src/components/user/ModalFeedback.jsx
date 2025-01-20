import { Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { Button } from "../../components/UI/Button";
import { useState } from "react";
import { Modal } from "../UI/Modal";
import { Icons } from "../../assets";

export const ModalFeedback = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const onDrop = (acceptedFiles) => {
    if (files.length + acceptedFiles.length <= 4) {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } else {
      Error;
    }
  };

  // const { getRootProps, getInputProps } = useDropzone({
  //   onDrop,
  //   maxFiles: 4,
  //   accept: {
  //     "image/*": [],
  //     "application/pdf": [],
  //     "text/*": [],
  //     "application/msword": [],
  //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
  //       [],
  //     "application/vnd.ms-excel": [],
  //     "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
  //     "application/vnd.ms-powerpoint": [],
  //     "application/vnd.openxmlformats-officedocument.presentationml.presentation":
  //       [],
  //     "audio/*": [],
  //     "video/*": [],
  //   },
  // });
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
          <div>
            <Box>
              <div>
                <Tooltip title="Загрузить файл">
                  <IconButton
                    {...getRootProps()}
                    onClick={(e) => {
                      e.stopPropagation();
                      document.querySelector('input[type="file"]').click();
                    }}
                  >
                    <Icons.Photo />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Typography>Add photos to the review</Typography>
                <Typography>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 photos.
                </Typography>
              </div>
              <div>
                {files.map((file) => (
                  <Box key={file.name}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Uploaded file ${file.name}`}
                    />
                    <Icons.Cancellation onClick={() => removeFile(file)} />
                  </Box>
                ))}
              </div>
            </Box>
            <Box></Box>
            <Box></Box>
          </div>
        </StyledModal>
      </Modal>
    </Box>
  );
};

const StyledButton = styled(Button)({ width: "423px", height: "37px" });
const StyledModal = styled(Box)({
  width: "720px",
  height: "463px",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
});
const StyledTitle = styled(Typography)({
  fontSize: "18px",
  fontWeight: "500",
  color: "#363636",
  textTransform: "uppercase",
  margin: "25px",
});
