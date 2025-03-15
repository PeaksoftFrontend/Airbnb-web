import { Box, styled } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useEffect, useState } from "react";
import { Button } from "../../components/UI/Button";
import { Booking } from "../../components/UI/Booking";
import { MyAnnouncement } from "../../components/UI/MyAnnouncement";
import { useParams, useSearchParams } from "react-router-dom";
import {
  useGetUsersDetailsAnnouncementsQuery,
  useGetUsersDetailsQuery,
} from "../../redux/api/users.service";
import { useBlockUserMutation } from "../../redux/api/application.service";
import { NoData } from "../../components/UI/NotData";

export const UserDetail = () => {
  const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get("value") || "bookings";
  const [tabValue, setTabValue] = useState(tab === "announcements" ? 1 : 0);
  const [showButton, setShowButton] = useState(tab === "announcements");

  useEffect(() => {
    setSearchParams({ value: tabValue === 1 ? "announcements" : "bookings" });
  }, [tabValue, setSearchParams]);

  const { data } = useGetUsersDetailsQuery({
    id: userId,
    value: tab,
  });
  const { dataCard } = useGetUsersDetailsAnnouncementsQuery();
  const [blockUser] = useBlockUserMutation();

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
    setShowButton(newValue === 1);
  };

  const path = [
    { id: 1, url: "/admin/users", title: "Users" },
    { id: 1, url: "#", title: data?.fullName },
  ];

  const tabs = [
    {
      label: "Bookings",
      content: data?.bookingUser?.length ? (
        <Booking bookingUser={data?.bookingUser} dataCard={dataCard} />
      ) : (
        <NoData message="Booking нет данных" />
      ),
    },
    {
      label: "My announcement",
      content: data?.announcementResponses?.length ? (
        <MyAnnouncement
          announcementResponses={data?.announcementResponses}
          dataCard={dataCard}
        />
      ) : (
        <NoData message="Announcements нет данных" />
      ),
    },
  ];

  return (
    <StyledBox>
      <div>
        <Breadcrumbs path={path} />
      </div>
      <StyledDivContent>
        <StyledProfileBox>
          <Profile
            name={data?.fullName || "Nooruz"}
            email={data?.email}
            avatar={data?.avatar}
            isAuth={false}
            role={"ADMIN"}
          />
          {showButton && (
            <StyledButton variant="outlined" onClick={() => blockUser(userId)}>
              block all announcement
            </StyledButton>
          )}
        </StyledProfileBox>
        <Box>
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
});

const StyledDivContent = styled("div")({ display: "flex", gap: "47px" });
const StyledProfileBox = styled(Box)({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  alignItems: "center",
});
const StyledButton = styled(Button)({ width: "292px", height: "37px" });
