import { AppBar, Box, Container, styled, Tab, Tabs } from "@mui/material";
import { TabPanel } from "./TabPanel";

export const TabsPanel = ({ tabs, value, onChange }) => {
  return (
    <StyledBox>
      <StyledAppBar>
        <StyledContainer>
          <StyledTabs value={value} onChange={onChange}>
            {tabs.map((tab, index) => (
              <StyledTab
                key={index}
                label={
                  <StyledSpan isActive={value === index}>
                    {tab.label}
                    {`(${tab.count})`}
                  </StyledSpan>
                }
              />
            ))}
          </StyledTabs>
        </StyledContainer>
      </StyledAppBar>
      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </StyledBox>
  );
};
const StyledBox = styled(Box)({ width: "100%" });
const StyledAppBar = styled(AppBar)({
  position: "static",
  backgroundColor: "#FFF",
  color: "grey",
  boxShadow: "none",
});

const StyledSpan = styled("span")((props) => ({
  color: props.isActive ? "#363636" : "#6c6c6c",
  fontWeight: props.isActive ? "bold" : "400",
  fontSize: "18px",
  textTransform: "capitalize",
  textAlign: "center",
  cursor: "pointer",
}));
const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    borderBottom: "2px solid #363636 ",
    left: "0",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  position: "relative",
}));

const StyledContainer = styled(Container)({
  borderBottom: "1px solid #c4c4c4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledTab = styled(Tab)({
  minWidth: "auto",
  marginRight: "70px",
  "&:last-child": {
    marginRight: "0px",
  },
});
