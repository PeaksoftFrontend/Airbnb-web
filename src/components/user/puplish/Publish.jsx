import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Box, IconButton, styled, Tooltip, Typography } from "@mui/material";
import { Textarea } from "@mui/joy";
import { useDropzone } from "react-dropzone";
import { Icons } from "../../../assets";
import { Input } from "../../UI/Input";
import { Select } from "../../UI/Select";
import { Button } from "../../UI/Button";
import { Radio } from "../../UI/Radio";
import { orange } from "@mui/material/colors";
import {
  useDeleteFileMutation,
  useSubmitAnAdMutation,
} from "../../../redux/api/submitAdd.service";
import { usePosts3File } from "../../../hooks/usePosts3File";
import { OPTIONS_REGIONS } from "../../../utils/constants";

const schema = yup.object().shape({
  houseType: yup.string().required("House type is required"),
  maxGuests: yup
    .number()
    .positive("Must be a positive number")
    .integer("Must be an integer")
    .required("Max guests is required"),
  price: yup
    .number()
    .positive("Must be a positive number")
    .required("Price is required"),
  title: yup.string().required("Title is required"),
  description: yup
    .string()
    .required("Description is required")
    .min(30, "Description must be at least 30 characters"),
  region: yup.string().required("Region is required"),
  province: yup.string().required("Province is required"),
  address: yup.string().required("Address is required"),
  image: yup
    .array()
    .min(1, "At least one image is required")
    .max(4, "Maximum 4 images allowed"),
});

export const Publish = () => {
  const [submitStatus, setSubmitStatus] = useState("");
  const { posts3File } = usePosts3File();
  const [deleteFile] = useDeleteFileMutation();
  const [submitAnAd] = useSubmitAnAdMutation();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      houseType: "",
      maxGuests: "",
      price: "",
      title: "",
      description: "",
      region: "",
      province: "",
      image: [],
      address: "",
    },
  });

  const watchedValues = watch();

  const onSubmit = async (data) => {
    try {
      await submitAnAd(data).unwrap();
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (
      file &&
      ["image/jpeg", "image/png", "image/gif", "image/webp"].includes(file.type)
    ) {
      try {
        const uploadedImageUrl = await posts3File(file);
        const currentImages = watch("image") || [];

        if (currentImages.length >= 4) {
          setSubmitStatus("Maximum 4 images allowed");
          return;
        }

        setValue("image", [...currentImages, uploadedImageUrl], {
          shouldValidate: true,
        });
      } catch (error) {
        console.error("Error uploading file:", error);
        setSubmitStatus("Error uploading file");
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/webp": [],
    },
    onDrop,
    multiple: false,
    maxFiles: 1,
  });

  const removeFile = async (fileToRemove) => {
    try {
      const currentImages = watch("image") || [];
      const filteredImages = currentImages.filter(
        (item) => item !== fileToRemove
      );

      setValue("image", filteredImages, { shouldValidate: true });
      await deleteFile(fileToRemove);
    } catch (error) {
      console.error("Error deleting file:", error);
      setSubmitStatus("Error removing file");
    }
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
              <StyledMaxSpan>Max 4 photos</StyledMaxSpan>
            </StyledBoxSpan>
            <StyledFotoBox>
              <StyledIconsDiv>
                <Tooltip title="Upload file">
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
                  It will become more noticeable and even more useful. You can
                  upload up to 4 photos.
                </StyledFotoText>
              </StyledTextBox>
            </StyledFotoBox>
            {errors.image && (
              <ErrorMessage>{errors.image.message}</ErrorMessage>
            )}
            <StyledImagesContainer>
              {watchedValues.image?.map((item, i) => (
                <StyledImageWrapper key={i}>
                  <StyledImage src={item} alt={`Uploaded file ${i + 1}`} />
                  <StyledRemoveIcon>
                    <Icons.Cancellation onClick={() => removeFile(item)} />
                  </StyledRemoveIcon>
                </StyledImageWrapper>
              ))}
            </StyledImagesContainer>
          </StyledFotoDiv>
        </StyledCreateDiv>
        <StyledBox>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StyledSection>
              <StyledTypography>Home type</StyledTypography>
              <StyledRadiosDiv>
                <Controller
                  name="houseType"
                  control={control}
                  render={({ field }) => (
                    <>
                      <StyledRadios>
                        <Radio
                          label="Apartment"
                          value="APARTMENT"
                          checked={field.value === "APARTMENT"}
                          onChange={(e) => field.onChange(e.target.value)}
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
                          value="HOUSE"
                          checked={field.value === "HOUSE"}
                          onChange={(e) => field.onChange(e.target.value)}
                          sx={{
                            "&.Mui-checked": {
                              color: orange[500],
                            },
                          }}
                        />
                      </StyledRadios>
                    </>
                  )}
                />
              </StyledRadiosDiv>
              {errors.houseType && (
                <ErrorMessage>{errors.houseType.message}</ErrorMessage>
              )}
            </StyledSection>

            <StyledSectionTwo>
              <StyledPriceDiv>
                <StyledTypography>Max of Guests</StyledTypography>
                <Controller
                  name="maxGuests"
                  control={control}
                  render={({ field }) => (
                    <StyledInputMini
                      type="number"
                      placeholder="0"
                      {...field}
                      size="small"
                    />
                  )}
                />
                {errors.maxGuests && (
                  <ErrorMessage>{errors.maxGuests.message}</ErrorMessage>
                )}
              </StyledPriceDiv>

              <StyledPriceDiv>
                <StyledTypography>Price</StyledTypography>
                <Controller
                  name="price"
                  control={control}
                  render={({ field }) => (
                    <StyledInputMini
                      type="number"
                      placeholder="$ 0"
                      size="small"
                      {...field}
                    />
                  )}
                />
                {errors.price && (
                  <ErrorMessage>{errors.price.message}</ErrorMessage>
                )}
              </StyledPriceDiv>
            </StyledSectionTwo>

            <StyledSection>
              <StyledTypography>Title</StyledTypography>
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <StyleInputTitle
                    type="text"
                    placeholder="Enter title"
                    {...field}
                  />
                )}
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </StyledSection>

            <StyledSection>
              <StyledTypography>Description of listing</StyledTypography>
              <Controller
                name="description"
                control={control}
                render={({ field }) => (
                  <StyledTextarea
                    minRows={3}
                    placeholder="Describe your listing"
                    {...field}
                  />
                )}
              />
              {errors.description && (
                <ErrorMessage>{errors.description.message}</ErrorMessage>
              )}
            </StyledSection>

            <StyledSection>
              <StyledTypography>Region</StyledTypography>
              <Controller
                name="region"
                control={control}
                render={({ field }) => (
                  <STyleSelectRegion
                    placeholder="Please, select the region"
                    options={OPTIONS_REGIONS}
                    {...field}
                  />
                )}
              />
              {errors.region && (
                <ErrorMessage>{errors.region.message}</ErrorMessage>
              )}
            </StyledSection>

            <StyledSection>
              <StyledTypography>Town / Province</StyledTypography>
              <Controller
                name="province"
                control={control}
                render={({ field }) => (
                  <StyleInputTitle
                    type="text"
                    placeholder="Enter town"
                    size="small"
                    {...field}
                  />
                )}
              />
              {errors.province && (
                <ErrorMessage>{errors.province.message}</ErrorMessage>
              )}
            </StyledSection>

            <StyledSection>
              <StyledTypography>Address</StyledTypography>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <StyleInputTitle
                    type="text"
                    placeholder="Enter address"
                    {...field}
                  />
                )}
              />
              {errors.address && (
                <ErrorMessage>{errors.address.message}</ErrorMessage>
              )}
              <StyledButtonDiv>
                {submitStatus && <StatusMessage>{submitStatus}</StatusMessage>}
                <StyledButton type="submit" variant="outlined">
                  Submit
                </StyledButton>
              </StyledButtonDiv>
            </StyledSection>
          </form>
        </StyledBox>
      </StyledBoxContainer>
    </StyledContainer>
  );
};

const ErrorMessage = styled(Typography)({
  color: "red",
  fontSize: "14px",
  marginTop: "4px",
});

const StatusMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "14px",
}));

const StyledImageWrapper = styled(Box)({
  position: "relative",
  margin: "5px",
});

const StyledRemoveIcon = styled(Box)({
  position: "absolute",
  top: "5px",
  right: "5px",
  cursor: "pointer",
  background: "rgba(255, 255, 255, 0.7)",
  borderRadius: "50%",
  padding: "2px",
});

// Existing styled components
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

const StyledContainer = styled("div")({
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
  marginBottom: "28px",
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
  marginBottom: "28px",
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
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "20px",
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
