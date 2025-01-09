import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlie";

export const TestAuth = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TestAuth</h1>
      <button onClick={() => dispatch(login({ role: "USER" }))}>User</button>
      <button onClick={() => dispatch(login({ role: "ADMIN" }))}>ADMIN</button>
    </div>
  );
};
