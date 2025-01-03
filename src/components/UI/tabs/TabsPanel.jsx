import { AppBar, Box, Container, styled, Tab, Tabs } from "@mui/material";
import { TabPanel } from "./TabPanel";
import { useState } from "react";

export const TabsPanel = ({ tabs }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFF", color: "grey", boxShadow: "none" }}
      >
        <StyledContainer>
          <StyledTabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#363636",
              },
            }}
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={
                  <StyledSpan>
                    {tab.label}
                    {`(${tab.count})`}
                  </StyledSpan>
                }
              />
            ))}
          </StyledTabs>
        </StyledContainer>
      </AppBar>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

const StyledSpan = styled("span")(() => ({
  fontSize: "18px",
  fontWeight: "400",
  color: "#6C6C6C",
  textTransform: "capitalize",
  textAlign: "center",
  "&:hover": {
    fontWeight: "600",
    color: "#363636",
  },
}));
const StyledTabs = styled(Tabs)(({ theme }) => ({
  position: "relative",
  "& .MuiTabs-indicator": {
    height: 2,
    left: 0,
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: -2,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: "#B0B0B0",
  },
}));

const StyledContainer = styled(Container)({
  borderBottom: "1px solid #c4c4c4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
