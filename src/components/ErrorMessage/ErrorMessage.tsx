import React, { useEffect } from "react";
import toast from "react-hot-toast";

const ErrorMessage: React.FC = () => {
  useEffect(() => {
    toast.error("Oops! There was an error! Try reloading!");
  }, []);
  return null;
};
export default ErrorMessage;
