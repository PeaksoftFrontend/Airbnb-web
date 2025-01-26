import { useState } from "react";
import { Select } from "../../UI/Select";
import { Icons } from "../../../assets";
import { styled } from "@mui/material";

export const SortRaiting = () => {
  const [homeType, setHomeType] = useState("all");

  const handleChange = (event) => {
    setHomeType(event.target.value);
  };

  const options = [
    { value: "all", label: "All" },
    { value: "1", label: <StyledIconOne /> },
    { value: "2", label: <Icons.TwoCStars /> },
    { value: "3", label: <Icons.ThreeCStars /> },
    { value: "4", label: <Icons.FourCStars /> },
    { value: "5", label: <Icons.FiveCStars /> },
  ];

  return (
    <div>
      {" "}
      <Select
        options={options}
        label="Home Type"
        value={homeType}
        onChange={handleChange}
      />
    </div>
  );
};
const StyledIconOne = styled(Icons.StarColor)(({ iconSize }) => ({
  width: iconSize?.width || "14px",
  height: iconSize?.height || "14px",
  cursor: "pointer",
}));
