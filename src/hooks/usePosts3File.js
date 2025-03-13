import { useState } from "react";
import { useSelector } from "react-redux";

export const usePosts3File = () => {
  const { token } = useSelector((state) => state.auth);
  const [state, setState] = useState("");

  const posts3File = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://18.185.84.235/api/file", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setState(result.Link);
      return result.Link;
    } catch (error) {
      console.error("File upload error:", error);
      throw error;
    }
  };

  return {
    posts3File,
    image: state,
  };
};
