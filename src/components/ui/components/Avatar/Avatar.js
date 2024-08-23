"use client"

import { Avatar as AvatarUser } from "@nextui-org/react";
import React from "react";

const Avatar = ({ avatarUrl }) => {
  return <AvatarUser isBordered color="success" src={avatarUrl} />;
};

export default Avatar;
