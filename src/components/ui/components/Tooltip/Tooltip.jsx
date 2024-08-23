"use client"

import React from "react";
import { Tooltip as TooltipComponent } from "@nextui-org/react";
const Tooltip = (props) => {
  const {
    className,
    children,
    content,
    open,
    defaultOpen,
    onOpenChange,
    delayDuration,
    side = "top",
  } = props;
  return (
    <TooltipComponent
      classNames={className}
      content={content}
      isOpen={open}
      defaultOpen={defaultOpen}
      delay={delayDuration}
      onOpenChange={onOpenChange}
      placement={side}
    >
      {children}
    </TooltipComponent>
  );
};

export default Tooltip;
