import { toast } from "react-hot-toast";

export function useAppToast() {
  // TODO: WRITE A RE-USABLE TOAST FUNCTION

  function toaster(
    msg: string,
    type: "error" | "success",
    duration: number = 2000,
    position: "top-center" | "top-left" | "top-right" = "top-center"
  ) {
    // const time = 2000;
    if (type === "error") {
      toast.error(`${msg}`, {
        duration,
        position
      });
    } else if (type === "success") {
      toast.success(`${msg}`, {
        duration,
        position
      });
    }
  }

  return toaster;
}
