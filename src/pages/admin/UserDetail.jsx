import { Box, styled } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Booking } from "../../components/UI/Booking";
import { useEffect } from "react";

import { MyAnnouncement } from "../../components/UI/MyAnnouncement";
import {
  useBlockAnnouncementMutation,
  useGetUserByIdQuery,
} from "../../redux/api/users.service";
import { useParams } from "react-router-dom";
export const UserDetail = () => {
  const [tabValue, setTabValue] = useState("booking");
  const [showButton, setShowButton] = useState(false);
  const [blockAnnouncement, { isLoading: isBlocking }] =
    useBlockAnnouncementMutation();
  const { userId } = useParams();
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserByIdQuery({ id: userId, value: tabValue });

  const handleChange = (_, newIndex) => {
    const selectedTab = tabs[newIndex];
    if (selectedTab) {
      setTabValue(selectedTab.value);
    }
  };

  useEffect(() => {
    setShowButton(tabValue === "announcements");
  }, [tabValue]);

  const handleBlockAnnouncements = async () => {
    try {
      await blockAnnouncement(userId).unwrap();
      alert("All announcements blocked successfully!");
    } catch (error) {
      console.error("Failed to block announcements:", error);
      alert("Error blocking announcements");
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error</p>;

  const path = [
    { id: 1, url: "/user", title: "Users" },
    { id: 1, url: "/user", title: "Медер Медеров" },
  ];

  const tabs = [
    { label: "Bookings", value: "booking", content: <Booking /> },
    {
      label: "My announcement",
      value: "announcements",
      content: <MyAnnouncement />,
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
            name={user?.name}
            fullName={user?.fullName}
            email={user?.email}
            isAuth={false}
            role={user?.role}
          />
          {showButton && (
            <StyledButton
              variant="outlined"
              onClick={handleBlockAnnouncements}
              disabled={isBlocking}
            >
              block all announcement
            </StyledButton>
          )}
        </StyledProfileBox>
        <Box>
          <TabsPanel
            tabs={tabs}
            onChange={handleChange}
            value={tabs.findIndex((tab) => tab.value === tabValue)}
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
});

const StyledDivContent = styled("div")({ display: "flex", gap: "47px" });
const StyledProfileBox = styled(Box)({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  alignItems: "center",
});
const StyledButton = styled(Button)({ width: "292px", height: "37px" });
