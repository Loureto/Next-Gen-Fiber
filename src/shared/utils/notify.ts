import { toast } from "react-toastify";

type Theme = "error" | "success" | "warning" | "info";

export const notify = (message?: string, theme: Theme = "error") => {
  toast[theme](message ?? "", {
    toastId: 1,
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};