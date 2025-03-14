import { Box, styled, Typography } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { CombinedSort } from "../../components/user/sort/CombinedSort";
import { useGetProfileQuery } from "../../redux/api/profile.service";

export const Profiles = () => {
  const [tabValue, setTabValue] = useState(0);
  const [data, error] = useGetProfileQuery(26);
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
          <TabsPanel tabs={tabs} onChange={handleChange} value={tabValue} />
        </Box>
      </StyledDivContent>
      <h2>Bookings</h2>
      {data?.bookings?.length ? (
        data.bookings.map((booking) => (
          <BookingCard key={booking.announcementId}>
            <h3>{booking.title}</h3>
            <p>{booking.description}</p>
            <p>Price: {booking.price}</p>
            <p>Region: {booking.region}</p>
          </BookingCard>
        ))
      ) : (
        <p>No bookings</p>
      )}
      <h2>My Announcements</h2>
      {data?.announcements?.length ? (
        data.announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id}>
            <h3>{announcement.title}</h3>
            <p>{announcement.description}</p>
            <p>Price: {announcement.price}</p>
            <p>Status: {announcement.status}</p>
          </AnnouncementCard>
        ))
      ) : (
        <p>No announcements</p>
      )}
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

const BookingCard = styled("div")({
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: "8px",
});

const AnnouncementCard = styled("div")({
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #aaa",
  borderRadius: "8px",
});
