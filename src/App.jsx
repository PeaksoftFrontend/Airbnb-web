import { Profile } from "./components/admin/Profile";

const Users = [
  { name: "Медер Медербеков", email: "mederbekov@gmail.com" },
  { name: "Алексей Иванов", email: "alexey.ivanov@example.com" },
];

export const App = () => {
  return (
    <div>
      {Users.map((user, index) => (
        <Profile key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
};
