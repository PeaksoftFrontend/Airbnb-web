import { Box, styled, Typography } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { CombinedSort } from "../../components/user/sort/CombinedSort";
export const Profiles = () => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
  };
  const path = [
    { id: 1, url: "/user", title: "Main" },
    { id: 1, url: "/advertising_page", title: "Naryn" },
    { id: 1, url: "/advertising_page", title: "Hotel" },
    { id: 2, url: "/advertising_page", title: "Profile" },
  ];

  const tabs = [
    { label: "Bookings", content: "Booking", count: "" },
    { label: "My announcement", content: <CombinedSort />, count: "" },
    { label: "On moderation", content: "Moderation", count: "" },
  ];
  return (
    <StyledBox>
      <div>
        <Breadcrumbs path={path} />
      </div>
      <StyledDivContent>
        <Wrapper>
          <Typography variant="h1" fontSize="20px" fontWeight="500">
            Profile
          </Typography>
          <StyledProfileBox>
            <Profile
              name={"Медер"}
              fullName={"Медербеков"}
              email={"mederbekov@gmail.com"}
              isAuth={true}
              role={"USER"}
            />
          </StyledProfileBox>
        </Wrapper>
        <Box
          sx={{
            "&.MuiBox-root": {
              width: "100%",
            },
          }}
        >
          <TabsPanel tabs={tabs} onChange={handleChange} value={tabValue} />
        </Box>
      </StyledDivContent>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  margin: "46px 40px",
  height: "51vh",
});

const StyledDivContent = styled("div")({ display: "flex", gap: "47px" });
const StyledProfileBox = styled(Box)({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  alignItems: "center",
});

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "22px",
});
