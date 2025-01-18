import { AppBar, Badge, Box, styled, Tab, Tabs } from "@mui/material";
import { TabPanel } from "./TabPanel";

export const TabsPanel = ({ tabs, value, onChange, isAuth, ...props }) => {
  return (
    <StyledBox>
      <StyledAppBar>
        <StyledTabs value={value} onChange={onChange} {...props}>
          {tabs.map((tab, index) => (
            <StyledTab
              key={index}
              label={
                <StyledSpan isActive={value === index}>
                  {tab.label}
                  {isAuth && tab.count > 0 && (
                    <Badge badgeContent={tab.count} color="secondary" />
                  )}
                </StyledSpan>
              }
            />
          ))}
        </StyledTabs>
      </StyledAppBar>
      <Box>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </StyledBox>
  );
};
const StyledBox = styled(Box)({ width: "100%" });
const StyledAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "#FFF",
  color: "grey",
  boxShadow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const StyledSpan = styled("span")((props) => ({
  color: props.isActive ? "#363636" : "#6c6c6c",
  fontWeight: props.isActive ? "bold" : "400",
  fontSize: "18px",
  textTransform: "capitalize",
  cursor: "pointer",
}));
const StyledTabs = styled(Tabs)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiTabs-indicator": {
    backgroundColor: "#000000",
    left: "0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "2px",
    backgroundColor: "#c4c4c4",
    pointerEvents: "none",
  },
}));

const StyledTab = styled(Tab)({
  minWidth: "auto",
  marginRight: "70px",
  "&:last-child": {
    marginRight: "0px",
  },
});
