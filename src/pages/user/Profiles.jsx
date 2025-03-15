import { Box, styled, Typography } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { CombinedSort } from "../../components/user/sort/CombinedSort";
import { useGetProfileQuery } from "../../redux/api/profile.service";
import { TestProfileData } from "./TestProfileData";
import { useSelector } from "react-redux";

export const Profiles = () => {
  const [tabValue, setTabValue] = useState(0);
  const id = useSelector((state) => state.auth);

  const { data, error, isLoading } = useGetProfileQuery(id);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }
  if (error) return <p>error</p>;

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
  };

  const path = [
    { id: 1, url: "/", title: "Main" },
    { id: 2, url: "#", title: "Profile" },
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
