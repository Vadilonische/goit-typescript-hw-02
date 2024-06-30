import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ErrorMessage() {
  useEffect(() => {
    toast.error("Oops! There was an error! Try reloading!");
  }, []);
  return null;
}
