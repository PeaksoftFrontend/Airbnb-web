import { Profile } from "../../components/admin/Profile";
import { Breadcrumbs } from "../../components/UI/Breadcrumbs";
import { TabPanel } from "../../components/UI/tabs/TabPanel";

export const Profiles = () => {
  const path = [
    { id: 1, url: "/user", title: "Main" },
    { id: 1, url: "/advertising_page", title: "Naryn" },
    { id: 1, url: "/advertising_page", title: "Hotel" },
    { id: 2, url: "/advertising_page", title: "Profile" },
  ];

  return (
    <div>
      <Breadcrumbs path={path} />
      <div>
        <Profile name="Медер Медербеков" email="mederbekov@gmail.com" />
      </div>
      <div>
        <TabPanel />
      </div>
    </div>
  );
};
