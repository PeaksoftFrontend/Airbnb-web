import { useDropzone } from "react-dropzone";
import { Box, Typography, Alert, styled, Container } from "@mui/material";
import { useState } from "react";
import { Button } from "../../../components/UI/Button";

export const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (files.length + acceptedFiles.length <= 4) {
      setError(null);
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    } else {
      setError("Максимальное количество файлов 4");
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
    setFiles(files.filter((file) => file !== fileToRemove));
  };

  return (
    <Container>
      {error && <Alert severity="error">{error}</Alert>}
      <StyledBox {...getRootProps({ className: "dropzone" })}>
        <StyledInput
          type="file"
          {...getInputProps()}
          style={{ display: "none" }}
        />
        <StyledTypography variant="h6">
          Перетащите файлы сюда или нажмите для выбора файлов (максимум 4)
        </StyledTypography>
      </StyledBox>
      <Box mt={2}>
        {files.map((file, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt={1}
          >
            <StyledTypography variant="body1">{file.name}</StyledTypography>
            <StyledButton
              type="submit"
              variant="outlined"
              color="error"
              onClick={() => removeFile(file)}
            >
              Удалить
            </StyledButton>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
const StyledBox = styled(Box)({
  cursor: "pointer",
  width: "100%",
});
const StyledTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#828282",
  textAlign: "center",
  cursor: "pointer",
});
const StyledInput = styled("input")({ width: "100%" });
const StyledButton = styled(Button)({
  width: "196px",
  height: "37px",
});
