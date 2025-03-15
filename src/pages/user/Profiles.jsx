import { Box, styled, Typography } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { CombinedSort } from "../../components/user/sort/CombinedSort";
import {
  // useGetFilteredDataQuery,
  useGetProfileQuery,
} from "../../redux/api/profile.service";
import { TestProfileData } from "./TestProfileData";

export const Profiles = () => {
  // const [filter, setFilter] = useState({
  //   houseType: "",
  //   priceRange: [0, 10000],
  //   status: "",
  //   rating: [0, 5],
  // });
  const [tabValue, setTabValue] = useState(0);
  const { data, error, isLoading } = useGetProfileQuery(26);
  // const {
  //   data: filteredData,
  //   error: filteredError,
  //   isLoading: filteredLoading,
  // } = useGetFilteredDataQuery(filter);
  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) return <p>error</p>;

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
    {
      label: "Bookings",
      content: <TestProfileData bookings={data.bookings} />,
      count: data.moderations.length,
    },
    {
      label: "My announcement",
      content: (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CombinedSort />
          <TestProfileData announcements={data.announcements} />
        </div>
      ),
      count: data.announcements.length,
    },
    {
      label: "On moderation",
      content: <TestProfileData moderations={data.moderations} />,
      count: data.moderations.length,
    },
  ];

  return (
    <StyledBox>
      <div>
        <Breadcrumbs path={path} />
      </div>
      <StyledDivContent>
        <Wrapper>
          <Typography variant="h1" fontSize="20px" fontWeight="500">
            PROFILE
          </Typography>
          <StyledProfileBox>
            <Profile
              name={data?.name || "Unknown"}
              fullName={data?.name || "Unknown"}
              email={data?.contact || "No contact"}
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
          <TabsPanel
            tabs={tabs}
            onChange={handleChange}
            value={tabValue}
            data={data}
            isAuth={true}
          />
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
  height: "100%",
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
