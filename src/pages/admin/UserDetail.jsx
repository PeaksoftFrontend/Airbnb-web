import { Box, styled } from "@mui/material";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { Profile } from "../../components/admin/Profile";
import { TabsPanel } from "../../components/UI/tabs/TabsPanel";
import { useState } from "react";
import { Button } from "../../components/UI/Button";
import { Booking } from "../../components/UI/Booking";
import { MyAnnouncement } from "../../components/UI/MyAnnouncement";
export const UserDetail = () => {
  const [tabValue, setTabValue] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setTabValue(newValue);
    setShowButton(newValue === 1);
  };

  const path = [
    { id: 1, url: "/user", title: "Users" },
    { id: 1, url: "/user", title: "Медер Медеров" },
  ];

  const tabs = [
    { label: "Bookings", content: <Booking /> },
    { label: "My announcement", content: <MyAnnouncement /> },
  ];
  return (
    <StyledBox>
      <div>
        <Breadcrumbs path={path} />
      </div>
      <StyledDivContent>
        <StyledProfileBox>
          <Profile
            name={"Медер"}
            fullName={"Медербеков"}
            email={"mederbekov@gmail.com"}
            isAuth={false}
            role={"ADMIN"}
          />
          {showButton && (
            <StyledButton variant="outlined">
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
