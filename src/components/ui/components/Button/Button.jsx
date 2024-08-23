import React, { forwardRef } from "react";
import { Button as ButtonComponent } from "@nextui-org/react";
import { Plus } from "lucide-react";
import { Tooltip } from "../Tooltip";
import classNames from "@/lib/classNames";
import { cva } from "class-variance-authority";
import { Loading } from "../Loading";

export const buttonClasses = cva(
  "whitespace-nowrap inline-flex items-center text-sm font-medium relative rounded-md transition disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        button: "",
        icon: "flex justify-center",
        fab: "rounded-full justify-center md:rounded-md radix-state-open:rotate-45 md:radix-state-open:rotate-0 radix-state-open:shadown-none radix-state-open:ring-0 !shadow-none",
      },
      color: {
        primary:
          "bg-brand-default hover:bg-brand-emphasis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-brand-default text-brand disabled:bg-brand-subtle disabled:text-brand-subtle disabled:opacity-40 disabled:hover:bg-brand-subtle disabled:hover:text-brand-default disabled:hover:opacity-40",
        secondary:
          "text-emphasis border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-opacity-30 disabled:hover:text-muted disabled:hover:border-subtle disabled:hover:bg-default",
        minimal:
          "text-emphasis hover:bg-subtle focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-empthasis disabled:border-subtle disabled:bg-opacity-30 disabled:text-muted disabled:hover:bg-transparent disabled:hover:text-muted disabled:hover:border-subtle",
        destructive:
          "border border-default text-emphasis hover:text-red-700 dark:hover:text-red-100 focus-visible:text-red-700  hover:border-red-100 focus-visible:border-red-100 hover:bg-error  focus-visible:bg-error focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset focus-visible:ring-red-700 disabled:bg-red-100 disabled:border-red-200 disabled:text-red-700 disabled:hover:border-red-200 disabled:opacity-40",
      },
      size: {
        sm: "px-3 py-2 leading-4 rounded-sm" /** For backwards compatibility */,
        base: "h-9 px-4 py-2.5 ",
        lg: "h-[36px] px-4 py-2.5 ",
      },
      loading: {
        true: "cursor-wait",
      },
    },
    compoundVariants: [
      // Primary variants
      {
        loading: true,
        color: "primary",
        className: "bg-brand-subtle text-brand-subtle",
      },
      // Secondary variants
      {
        loading: true,
        color: "secondary",
        className: "bg-subtle text-emphasis/80",
      },
      // Minimal variants
      {
        loading: true,
        color: "minimal",
        className: "bg-subtle text-emphasis/30",
      },
      // Destructive variants
      {
        loading: true,
        color: "destructive",
        className:
          "text-red-700/30 dark:text-red-700/30 hover:text-red-700/30 border border-default text-emphasis",
      },
      {
        variant: "icon",
        size: "base",
        className: "min-h-[36px] min-w-[36px] !p-2 hover:border-default",
      },
      {
        variant: "icon",
        size: "sm",
        className: "h-6 w-6 !p-1",
      },
      {
        variant: "fab",
        size: "base",
        className: "h-14 md:h-9 md:w-auto md:px-4 md:py-2.5",
      },
    ],
    defaultVariants: {
      variant: "button",
      color: "primary",
      size: "base",
    },
  }
);
const Button = forwardRef((props, ref) => {
  const {
    children,
    radius,
    isLoading = false,
    color = "primary",
    size,
    variant = "solid",
    type = "button",
    tooltip,
    tooltipSide = "top",
    tooltipOffset = 4,
    StartIcon,
    EndIcon,
    fullWidth,
    isIconOnly,
    disableAnimation,
    className,
    onClick,
    ...passThroughProps
  } = props;

  const disabled = props.isDisabled || isLoading;
  const isLink = typeof props.href !== "undefined";
  const elementType = isLink ? "a" : "button";

  return (
    <>
      <ButtonComponent
        ref={ref}
        radius={radius}
        isLoading={isLoading}
        isDisabled={disabled}
        variant={variant}
        type={type}
        color={color}
        size={size}
        startContent={StartIcon ? <StartIcon /> : ""}
        endContent={EndIcon ? <EndIcon /> : ""}
        fullWidth={fullWidth}
        isIconOnly={isIconOnly}
        disableAnimation={disableAnimation}
        onClick={onClick}
        spinner={
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            <svg
              className={classNames(
                "mx-4 h-5 w-5 animate-spin",
                color === "primary" ? "text-inverted" : "text-emphasis"
              )}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
        }
        {...props}
      >
        <span className=" text-white">{children}</span>
      </ButtonComponent>
    </>
  );
});

export default Button;
