import  { useState, useRef, useEffect } from "react";
import {
  Box,
  styled,
  FormControl,
  OutlinedInput,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Icons } from "../../assets";
import { Header } from "../../layout/admin/Header";
export const AllHousingPage = () => {
  const Filter = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("All");
    const inputRef = useRef(null);
    const listRef = useRef(null);

    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (
          listRef.current &&
          !listRef.current.contains(event.target) &&
          inputRef.current &&
          !inputRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleOutsideClick);
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [listRef, inputRef]);

    const handleChange = (option) => {
      setValue(option);
      setIsOpen(false);
    };

    const handleInputClick = () => {
      setIsOpen(!isOpen);
    };

    return (
      <FilterGroup>
        <FormControl>
          <StyledOutlinedInput
            id={`filter-input-${label}`}
            onClick={handleInputClick}
            inputRef={inputRef}
            readOnly
            startAdornment={
              <LabelValueWrapper>
                <Typography sx={{ marginRight: "5px", color: "#888" }}>
                  {label}
                </Typography>
              </LabelValueWrapper>
            }
            endAdornment={
              <ValueWrapper>
                <Typography sx={{ marginRight: "28px" }}>{value}</Typography>
                <CustomArrow />
              </ValueWrapper>
            }
          />
        </FormControl>
        {isOpen && (
          <StyledList ref={listRef}>
            {options.map((option) => (
              <StyledListItem key={option} onClick={() => handleChange(option)}>
                <ListItemText primary={option} />
              </StyledListItem>
            ))}
          </StyledList>
        )}
      </FilterGroup>
    );
  };
  const allHousing = [
    {
      label: "Filter by:",
      options: ["All", "Booked", "Not booked"],
    },
    {
      label: "Sort by:",
      options: ["All", "Popular", "The latest"],
    },
    {
      label: "Filter by home type:",
      options: ["All", "Apartment", "House"],
    },
    {
      label: "Filter by price:",
      options: ["All", "Low to high", "High to low"],
    },
  ];
  const housingData = [
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
    {
      imageUrl:
        "https://s3-alpha-sig.figma.com/img/97df/7521/04b03f4d29327afda7d780c1e6389996?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iN~GyCBNir5szPSyP6-WV8y-xtHMeEV8LlazRdX4hPZacei0PtlBqzAbO1hUcoyEVWa99uJhGt4Y8bTda5fym0FJE2sFP5I~Y4nZVMQWsq7INtiL7NAKcrR2v8DE9E5QE89rm5Gj6Wcw7Y5lSHJnmmZqnHUa4yJmT~nsKqoSF5jq85p78QFHkElrRImTJ2XL6YSiKg0a0auKRhf7-piEMzW-Ab30mo9kZaB6L5bYjoOCHFu9mb76cGndephZdJBwFAl8HQVXek~6YwuSlI-tbJIOh~6IGVJSB9FtX8nWIs2HqySRkrcdEpBueTJ5L0~sdEAvowF8WPbZbpNGmJ5N3g__",
      price: "$26 ",
      rating: "3.4",
      description:
        "Beautiful and picturesque apartment in the center of the city...",
      location: "12 Morris Ave, Toronto,...",
      guests: "2",
    },
  ];
  return (
    <div>
      <Header />
      <FilterContainer>
        <StyledAllHousingH1>All Housing</StyledAllHousingH1>
        {allHousing.map((filter, index) => (
          <StyledInputs>
            <Filter key={index} label={filter.label} options={filter.options} />
          </StyledInputs>
        ))}
      </FilterContainer>
      <HousingCardContainer>
        {housingData.map((housing, index) => (
          <HousingCard key={index}>
            <HousingImage
              style={{ backgroundImage: `url(${housing.imageUrl})` }}
            />
            <HousingContent>
              <StyledTogetherday>
                <StyledHousingPriceTogether>
                  <HousingPrice>{housing.price} </HousingPrice>
                  <HousingPriceTwo> / day</HousingPriceTwo>
                </StyledHousingPriceTogether>
                <HousingRating>
                  <StyledStarIcon>
                    <StarIcon />
                  </StyledStarIcon>
                  <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
                    {housing.rating}
                  </Typography>
                </HousingRating>
              </StyledTogetherday>
              <HousingDescription>{housing.description}</HousingDescription>
              <HousingLocation>
                <StyledLocation />
                <StyledHouse>{housing.location}</StyledHouse>
              </HousingLocation>
              <HousingGuests>
                {housing.guests} guests
                <ActionMenu />
              </HousingGuests>
            </HousingContent>
          </HousingCard>
        ))}
      </HousingCardContainer>
    </div>
  );
};
const FilterContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(271px, auto))",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  margin: "40px",
}));
const StyledAllHousingH1 = styled("h1")({
  fontSize: "20px",
  color: "#000000",
  width: "136px",
  height: "24px",
});
const StyledInputs = styled("span")({
  marginLeft: "21px",
});
const StyledOutlinedInput = styled(OutlinedInput)({
  width: "271px",
  height: "42px",
  fontSize: "1rem",
  paddingTop: "5px",
  paddingBottom: "5px",
});
const StyledHousingPriceTogether = styled("div")({
  display: "flex",
  gap: "5px",
});
const FilterGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: theme.spacing(2),
  position: "relative",
}));
const HousingPriceTwo = styled("span")({
  color: "#6C6C6C",
  fontSize: "16px",
  paddingTop: "4px",
});
const StyledTogetherday = styled("div")({
  display: "flex",
  gap: "60px",
});
const StyledLocation = styled(Icons.Location)({
  cursor: "pointer",
});
const StyledStarIcon = styled("span")({
  paddingTop: "0.5px",
  paddingLeft: "5px",
});
const StyledList = styled(List)(({ theme }) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  zIndex: 1,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.grey[400]}`,
  width: "100%",
  maxHeight: "200px",
  overflowY: "auto",
}));
const StyledHouse = styled("span")({
  marginLeft: "4px",
});
const StyledListItem = styled(ListItem)(({ theme }) => ({
  fontSize: "1rem",
  paddingTop: theme.spacing(0.625),
  paddingBottom: theme.spacing(0.625),
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const CustomArrow = styled(Icons.ArrowDown)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(0.625),
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: theme.palette.grey[600],
}));
const ActionMenu = styled(Icons.ActionMenu)({
  marginLeft: "115px",
  cursor: "pointer",
});
const ValueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  right: theme.spacing(1),
  top: "50%",
  transform: "translateY(-50%)",
}));

const LabelValueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
}));

const HousingCardContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
  gap: "20px",
  paddingLeft: "40px",
});
const HousingCard = styled(Box)({
  width: "210px",
  borderRadius: "8px",
  overflow: "hidden",
  backgroundColor: " white",
});

const HousingImage = styled(Box)({
  width: "100%",
  height: "136px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const HousingContent = styled(Box)({
  height: "135px",
  padding: "7px",
});

const HousingPrice = styled(Typography)({
  fontSize: "18px",
  marginBottom: "5px",
  color: "#363636",
});

const HousingRating = styled(Box)({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#828282",
  width: "62px",
  height: "25px",
  borderRadius: "2px",
  gap: "5px",
});
const StarIcon = styled(Icons.StarColor)({
  marginLeft: "5px",
  cursor: "pointer",
});

const HousingDescription = styled(Typography)({
  fontSize: "18px",
  marginBottom: "5px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: "#2B2B2B",
  whiteSpace: "nowrap",
});

const HousingLocation = styled(Typography)({
  fontSize: "0.9rem",
  marginBottom: "5px",
  color: "#828282",
  overflow: "hidden",
  paddingRight: "5px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const HousingGuests = styled(Typography)({
  fontSize: "0.9rem",
  color: " #C4C4C4",
  marginBottom: "5px",
  display: "flex",
  "& svg": {
    width: "19px",
    height: "27px",
  },
});
