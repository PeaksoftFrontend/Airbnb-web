import { Profile } from "./components/admin/Profile";

const Date = [
  {
    fullName: "МЕДЕР МЕДЕРБЕКОВ",
    name: "Медер Медербеков",
    email: "mederbekov@gmail.com",
    image: "https://shorturl.at/D2luU",
  },
];

export const App = () => {
  return (
    <div>
      <Profile Date={Date} />
    </div>
  );
};
