import { useDropzone } from "react-dropzone";
import { Alert, Box, IconButton, styled, Tooltip } from "@mui/material";
import { useState } from "react";

import { Icons } from "../../../assets";

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

  const removeFile = (fileToRemove) => {
    setFiles(files.filter((file) => file !== fileToRemove));
  };

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
      <StyledBox mt={2}>
        {files.map((file, index) => (
          <BoxFile key={index} mt={1}>
            <Cancellation onClick={() => removeFile(file)}>
              <Icons.Cancellation />
            </Cancellation>

            <Format>
              {file.type.startsWith("image/") && (
                <StyledFile src={URL.createObjectURL(file)} alt={file.name} />
              )}
              {file.type.startsWith("audio/") && (
                <StyledFile controls>
                  <source src={URL.createObjectURL(file)} type={file.type} />
                </StyledFile>
              )}
              {file.type.startsWith("video/") && (
                <StyledFile controls>
                  <source src={URL.createObjectURL(file)} type={file.type} />{" "}
                </StyledFile>
              )}
              {file.type === "application/pdf" && (
                <StyledFile src={URL.createObjectURL(file)} />
              )}
            </Format>
          </BoxFile>
        ))}
      </StyledBox>
    </Box>
  );
};
const StyledIcons = styled(Icons.Photo)(({ iconSize }) => ({
  width: iconSize?.width || "43px",
  height: iconSize?.height || "32px",
  cursor: "pointer",
}));

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});
const BoxFile = styled(Box)({
  display: "flex",
  alignItems: "center",

  position: "relative",
});

const Cancellation = styled(IconButton)({
  position: "absolute",
  top: "10px",
  right: "92%",
});
const Format = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const StyledFile = styled("img")({
  width: "100px",
  height: "auto",
});
