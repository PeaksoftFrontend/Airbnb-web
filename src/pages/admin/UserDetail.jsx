import { Box, styled } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Booking } from "../../components/UI/Booking";
import { MyAnnouncement } from "../../components/UI/MyAnnouncement";
import { useParams, useSearchParams } from "react-router-dom";
import { useGetUsersDetailsQuery } from "../../redux/api/users.service";
import { useBlockUserMutation } from "../../redux/api/application.service";

export const UserDetail = () => {
  const { userId } = useParams();
  const [searchParams] = useSearchParams();
  const { data = null } = useGetUsersDetailsQuery({
    id: userId,
    value: searchParams.get("name"),
  });
  const [blockUser] = useBlockUserMutation();

  const [tabValue, setTabValue] = useState(0);
  const [showButton, setShowButton] = useState(false);

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
    { label: "Bookings", content: <Booking bookingUser={data?.bookingUser} /> },
    {
      label: "My announcement",
      content: (
        <MyAnnouncement announcementResponses={data?.announcementResponses} />
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
