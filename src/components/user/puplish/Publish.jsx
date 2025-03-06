import {
  Box,
  Container,
  IconButton,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import { Input } from "../../UI/Input";
import { Select } from "../../UI/Select";
import { Button } from "../../UI/Button";
import { useRef, useState } from "react";
import { Radio } from "../../UI/Radio";
import { orange } from "@mui/material/colors";
import { Modal } from "../../UI/Modal";
import { Icons } from "../../../assets";
import { useDropzone } from "react-dropzone";
import { Textarea } from "@mui/joy";
import { useSubmitAnAdMutation } from "../../../redux/api/submitAdd.service";
import { usePosts3File } from "../../../hooks/usePosts3File";
import { OPTIONS_REGIONS } from "../../../utils/constants";

export const Publish = () => {
  const [radioValue, setRadioValue] = useState("");
  const radioRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [submitStatus, setSubmitStatus] = useState("");
  const { posts3File } = usePosts3File();

  const [formData, setFormData] = useState({
    houseType: "",
    maxGuests: "",
    price: "",
    title: "",
    description: "",
    region: "",
    province: "",
    address: "",
  });
  const [submitAnAd] = useSubmitAnAdMutation();

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setRadioValue(value);
    setFormData((prevData) => ({
      ...prevData,
      houseType: value,
    }));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await submitAnAd({
        ...formData,
        image: [
          "https://www.isradon.com/image/cache/data/new/img_1184490-500x500.sa.webp",
        ],
      }).unwrap();
    } catch (err) {
      console.log(err);

      setSubmitStatus("Ошибка при отправке.");
    }
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file && ["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
      posts3File(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/jpeg": [], "image/png": [], "image/gif": [] },
    onDrop,
    multiple: false,
    maxFiles: 1,
  });

  const removeFile = (fileToRemove) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file !== fileToRemove));
  };

  return (
    <StyledContainer>
      <StyledBoxContainer>
        <StyledStartText>
          HI! LET'S GET STARTED LISTING YOUR PLACE.
        </StyledStartText>
        <StyledCreateDiv>
          <StyledInfoText>
            In this form, we'll collect some basic and additional information
            about your listing.
          </StyledInfoText>
          <StyledFotoDiv>
            <input {...getInputProps()} />
            <StyledBoxSpan>
              <StyledSpan>Image</StyledSpan>
              <StyledMaxSpan>Max 4 photo</StyledMaxSpan>
            </StyledBoxSpan>
            <StyledFotoBox>
              <StyledIconsDiv>
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
              </StyledIconsDiv>
              <StyledTextBox>
                <StyledAddTypography>
                  Add photos to the review
                </StyledAddTypography>
                <StyledFotoText>
                  it will become more noticeable and even more useful. You can
                  upload up to 4 photos.
                </StyledFotoText>
              </StyledTextBox>
            </StyledFotoBox>
            <StyledImagesContainer>
              {files.map(({ file, preview }) => (
                <StyledImagesContainer key={file.name}>
                  <StyledImage
                    src={preview}
                    alt={`Uploaded file ${file.name}`}
                  />
                  <Icons.Cancellation onClick={() => removeFile(file.name)} />
                </StyledImagesContainer>
              ))}
            </StyledImagesContainer>
          </StyledFotoDiv>
        </StyledCreateDiv>
        <StyledBox>
          <StyledSection>
            <StyledTypography>Home type</StyledTypography>
            <StyledRadiosDiv>
              <StyledRadios>
                <Radio
                  label="Apartment"
                  value="APARTMENT"
                  ref={radioRef}
                  variant="APARTMENT"
                  checked={radioValue === "APARTMENT"}
                  onChange={handleRadioChange}
                  sx={{
                    "&.Mui-checked": {
                      color: orange[500],
                    },
                  }}
                />
              </StyledRadios>
              <StyledRadios>
                <Radio
                  label="House"
                  ref={radioRef}
                  value="HOUSE"
                  variant="house"
                  checked={radioValue === "HOUSE"}
                  onChange={handleRadioChange}
                  sx={{
                    "&.Mui-checked": {
                      color: orange[500],
                    },
                  }}
                />
              </StyledRadios>
            </StyledRadiosDiv>
          </StyledSection>
          <StyledSectionTwo>
            <StyledPriceDiv>
              <StyledTypography>Max of Guests</StyledTypography>
              <StyledInputMini
                type="number"
                name="maxGuests"
                placeholder="0"
                value={formData.maxGuests}
                onChange={handleChange}
                size="small"
              />
            </StyledPriceDiv>

            <StyledPriceDiv>
              <StyledTypography>Price</StyledTypography>
              <StyledInputMini
                type="number"
                name="price"
                placeholder="$ 0"
                size="small"
                value={formData.price}
                onChange={handleChange}
              />
            </StyledPriceDiv>
          </StyledSectionTwo>
          <StyledSection>
            <StyledTypography>Title</StyledTypography>
            <StyleInputTitle
              type="text"
              name="title"
              placeholder="Enter title"
              value={formData.title}
              onChange={handleChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Description of listing</StyledTypography>
            <StyledTextarea
              minRows={3}
              name="description"
              placeholder="Describe your listing"
              value={formData.description}
              onChange={handleChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Region</StyledTypography>
            <STyleSelectRegion
              name="region"
              placeholder="Please, select the region"
              options={OPTIONS_REGIONS}
              value={formData.region}
              onChange={handleChange}
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Town / Province</StyledTypography>
            <StyleInputTitle
              name="province"
              type="text"
              placeholder="Enter town"
              value={formData.town}
              onChange={handleChange}
              size="small"
            />
          </StyledSection>
          <StyledSection>
            <StyledTypography>Address</StyledTypography>
            <StyleInputTitle
              type="text"
              name="address"
              placeholder="Enter address"
              value={formData.address}
              onChange={handleChange}
            />
            <StyledButtonDiv>
              {submitStatus && <p>{submitStatus}</p>}
              <StyledButton
                type="submit"
                onClick={handleSubmit}
                variant="outlined"
              >
                Submit
              </StyledButton>
            </StyledButtonDiv>
          </StyledSection>
        </StyledBox>
      </StyledBoxContainer>
    </StyledContainer>
  );
};
const STyleSelectRegion = styled(Select)({
  width: "610px",
  height: "39px",
  borderRadius: "2px",
});
const StyleInputTitle = styled("input")({
  display: "flex",
  width: "610px",
  height: "39px",
  paddingLeft: "10px",
});

const StyledTextarea = styled(Textarea)(() => ({
  width: "610px",
  height: "104px",
  borderRadius: "2px",
  border: `1px solid #C4C4C4`,
  "&:focus": {
    border: `1px solid #C4C4C4`,
    outline: "none",
  },
}));
const StyledImagesContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  position: "relative",
  gap: "10px",
  flexWrap: "wrap",
});

const StyledImage = styled("img")({
  width: "100px",
  height: "auto",
  borderRadius: "4px",
  objectFit: "cover",
});

const StyledIcons = styled(Icons.Photo)(({ iconSize }) => ({
  width: iconSize?.width || "43px",
  height: iconSize?.height || "32px",
  cursor: "pointer",
}));
export const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "36px",
  backgroundColor: theme.palette.primary.main,
}));

const StyledContainer = styled(Container)({
  width: "100%",
  backgroundColor: "#F5F5F5",
  display: "flex",
  justifyContent: "center",
  padding: "40px 0 150px 0",
});

const StyledStartText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "550",
  color: "#363636",
});

const StyledInfoText = styled(Typography)({
  fontSize: "16px",
  fontWeight: "400",
  color: "#646464",
});
const StyledCreateDiv = styled("div")({
  display: "flex",
  gap: "30px",
  flexDirection: "column",
});

const StyledBoxContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});
const StyledSection = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});
const StyledRadiosDiv = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "40px",
});
const StyledRadios = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});
const StyledSpan = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#363636",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
});
const StyledTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "550",
  color: "#363636",
});
const StyledSectionTwo = styled("section")({
  display: "flex",
  flexDirection: "row",
  gap: "18px",
});
const StyledPriceDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});
const StyledInputMini = styled(Input)({
  width: "245px",
});
const StyledButtonDiv = styled("div")({
  display: "flex",
  justifyContent: "end",
});
const StyledButton = styled(Button)({
  width: "196px",
  height: "37px",
});
const StyledFotoDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
});
const StyledBoxSpan = styled(Box)({ display: "flex", gap: "8px" });
const StyledMaxSpan = styled("span")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#A9A9A9",
});
const StyledFotoBox = styled(Box)({ display: "flex", gap: "16px" });
const StyledIconsDiv = styled("div")({
  width: "135px",
  height: "135px",
  backgroundColor: "#F3F3F3",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});
const StyledTextBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
const StyledAddTypography = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
  color: "#266BD3",
});
const StyledFotoText = styled(Typography)({
  width: "420px",
  fontSize: "16px",
  fontWeight: "500",
  color: "#828282",
});
