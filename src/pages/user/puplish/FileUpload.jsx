import { useDropzone } from "react-dropzone";
import { Alert, Box, IconButton, styled, Tooltip } from "@mui/material";
import { Icons } from "../../../assets";
import { useState } from "react";

export const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      if (files.length + acceptedFiles.length <= 4) {
        setError(null);
        setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
      } else {
        setError("Максимальное количество файлов 4");
      }
    },
    noClick: true,
    noKeyboard: true,
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

  return (
    <Box>
      {error && <Alert severity="error">{error}</Alert>}
      <input {...getInputProps()} style={{ display: "none" }} />
      <Tooltip title="Загрузить файл">
        <IconButton
          {...getRootProps()}
          onClick={(e) => {
            e.stopPropagation();
            document.querySelector('input[type="file"]').click();
          }}
        >
          <StyledIcons />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
const StyledIcons = styled(Icons.Photo)(({ iconSize }) => ({
  width: iconSize?.width || "43px",
  height: iconSize?.height || "32px",
  cursor: "pointer",
}));
