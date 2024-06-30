import React, { useEffect } from "react";
import toast from "react-hot-toast";

const EmptyMessage: React.FC = () => {
  useEffect(() => {
    toast.error("No images found for your query.");
  }, []);
  return null;
};
export default EmptyMessage;
