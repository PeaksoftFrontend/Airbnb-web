import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showToast = (
  message,
  type = "info",
  duration = 3000,
  options = {}
) => {
  const colors = {
    info: "#007bff",
    success: " #F0FFF1",
    error: "rgb(226, 185, 185)",
    warning: "#ffc107",
  };

  Toastify({
    text: message,
    duration,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: colors[type] || "#000",
    stopOnFocus: true,
    style: {
      color: "black",
    },

    ...options,
  }).showToast();
};
