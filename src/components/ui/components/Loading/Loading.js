import React from "react";
import { Spinner } from "@nextui-org/react";
const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
