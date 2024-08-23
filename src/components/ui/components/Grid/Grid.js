"use client";
import React, { useState } from "react";


const Grid = ({ children, className }) => {
  return <div className={`${className}`}>{children}</div>;
};
export default Grid;

