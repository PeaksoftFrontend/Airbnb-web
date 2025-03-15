import { useState } from "react";
import {
  Box,
  styled,
  FormControl,
  OutlinedInput,
  List,
  ListItem,
  ListItemText,
  Typography,
  Menu,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import { Icons } from "../../assets";
import {
  useAcceptedAnnouncementMutation,
  useBlockingAnnouncementMutation,
  useGetAllHousingQuery,
} from "../../redux/api/application.service";
import { FILTER_OPTIONS } from "../../utils/constants/filter";

const Filter = ({ label, options, type, state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option) => {
    setState((prevState) => ({
      ...prevState,
      [type]: option === "All" ? undefined : option,
    }));

    setIsOpen(false);
  };

  const handleInputClick = () => {
    setIsOpen(!isOpen);
  };

  const displayValue = state[type] || "All";

  return (
    <FilterGroup>
      <FormControl>
        <StyledOutlinedInput
          onClick={handleInputClick}
          readOnly
          startAdornment={
            <LabelValueWrapper>
              <Typography
                sx={{ marginRight: "10px", color: "#888", fontSize: "14px" }}
              >
                {label}
              </Typography>
            </LabelValueWrapper>
          }
          endAdornment={
            <ValueWrapper sx={{ display: "flex" }}>
              <Typography sx={{ marginRight: "35px" }}>
                {displayValue}
              </Typography>
              <CustomArrow />
            </ValueWrapper>
          }
        />
      </FormControl>
      {isOpen && (
        <StyledList>
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

const HousingCardItem = ({ housing }) => {
  const [acceptedAnnouncement] = useAcceptedAnnouncementMutation();
  const [blockingAnnouncement] = useBlockingAnnouncementMutation();

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };
  return (
    <HousingCard>
      <HousingImage
        style={{ backgroundImage: `url(${housing?.images?.images[0]})` }}
      />
      <HousingContent>
        <StyledTogetherday>
          <StyledHousingPriceTogether>
            <HousingPrice>{housing.price} </HousingPrice>
            <HousingPriceTwo>/day</HousingPriceTwo>
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
          <StyledHouse>{housing.address}</StyledHouse>
        </HousingLocation>
        <HousingGuests>
          {housing.maxGuests} guests
          <StyleMenuItem>
            <ActionMenu
              aria-controls={menuOpen ? "housing-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
              onClick={handleMenuClick}
            />
          </StyleMenuItem>
        </HousingGuests>
      </HousingContent>
      <Menu
        id="housing-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        sx={{
          "& .MuiMenu-paper": {
            backgroundColor: "#fff",
            boxShadow: "none",
            border: "1px solid #C4C4C4",
            width: "180px",
            height: "125px",
            borderRadius: "2px",
            transformOrigin: "center bottom",
          },
          "& .MuiButtonBase-root": {
            fontSize: "16px",
            color: "#5D5D5D",
            padding: "5px 20px",
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={(event) => {
            blockingAnnouncement(housing.id);
            handleMenuClose(event);
          }}
        >
          Accept
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            acceptedAnnouncement({
              id: housing?.id,
              value: "reject",
              message: "admin rejected your announcement",
            });
            handleMenuClose(event);
          }}
        >
          Reject
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            acceptedAnnouncement({
              id: housing?.id,
              value: "delete",
              message: "admin deleted your announcement",
            });
            handleMenuClose(event);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </HousingCard>
  );
};

export const AllHousingPage = () => {
  const [state, setState] = useState({
    status: undefined,
    houseType: "APARTMENT",
    rating: undefined,
    price: undefined,
  });

  const params = {};

  if (state.status !== undefined) params.status = state.status;
  if (state.houseType !== undefined) params.houseType = state.houseType;
  if (state.rating !== undefined) params.rating = state.rating;
  if (state.price !== undefined) params.price = state.price;

  const { data = [], error, isLoading } = useGetAllHousingQuery(params);
  if (isLoading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );

  if (error) return <p>Error loading data.</p>;
  return (
    <div>
      <FilterContainer>
        <StyledAllHousingH1>All Housing</StyledAllHousingH1>
        {FILTER_OPTIONS.map((filter, index) => (
          <StyledInputs key={index}>
            <Filter
              label={filter.label}
              options={filter.options}
              state={state}
              type={filter.name}
              setState={setState}
            />
          </StyledInputs>
        ))}
      </FilterContainer>

      <HousingCardContainer>
        {data?.map((housing, index) => (
          <HousingCardItem key={index} housing={housing} />
        ))}
      </HousingCardContainer>
    </div>
  );
};
const FilterContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(271px, auto))",
  alignItems: "center",
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
  marginLeft: "11px",
});

const StyledOutlinedInput = styled(OutlinedInput)({
  width: "291px",
  height: "42px",
  fontSize: "1rem",
  paddingTop: "5px",
  paddingBottom: "5px",
});

const FilterGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginRight: theme.spacing(2),
  position: "relative",
}));

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

const ValueWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  right: theme.spacing(1),
  top: "50%",
  transform: "translateY(-50%)",
}));

const LabelValueWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  whiteSpace: "nowrap",
});

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
  backgroundColor: "white",
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

const StyledTogetherday = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const StyledHousingPriceTogether = styled("div")({
  display: "flex",
  alignItems: "center",
});

const HousingPrice = styled(Typography)({
  fontSize: "18px",
  color: "#363636",
});

const HousingPriceTwo = styled("div")({
  color: "#6C6C6C",
  fontSize: "16px",
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

const StyledStarIcon = styled("span")({
  paddingTop: "0.5px",
  paddingLeft: "5px",
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
  display: "flex",
  alignItems: "center",
});

const StyledLocation = styled(Icons.Location)({
  cursor: "pointer",
});

const StyledHouse = styled("span")({
  marginLeft: "4px",
});

const HousingGuests = styled(Typography)({
  fontSize: "0.9rem",
  color: "#939393",
  marginBottom: "5px",
  display: "flex",
  "& svg": {
    width: "19px",
    height: "27px",
  },
});

const StyleMenuItem = styled("div")({
  "& svg": {
    cursor: "pointer",
  },
});

const ActionMenu = styled(Icons.ActionMenu)({
  marginLeft: "115px",
  cursor: "pointer",
});
