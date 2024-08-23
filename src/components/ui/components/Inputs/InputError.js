import { Info, AlertTriangle, CircleAlert } from "lucide-react";
import React from "react";
const InputError = ({ children }) => {
  return (
    <div className="text-danger flex text-sm items-center p-1 gap-x-1">
      <AlertTriangle className="h-4 w-4" />
      <span>{children}</span>
    </div>
  );
};

export default InputError;
