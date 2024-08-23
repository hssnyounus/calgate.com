"use client";
import React from "react";
// import classNames from "@/lib/classNames";

const Flex = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};
export default Flex;
