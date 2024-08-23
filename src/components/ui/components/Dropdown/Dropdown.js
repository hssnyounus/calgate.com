"use client"

import classNames from "@/lib/classNames";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

export const Dropdown = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = forwardRef(
  ({ className = "", ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Trigger
      {...props}
      className={classNames(
        !props.asChild &&
          `focus:bg-subtle hover:bg-muted text-default group-hover:text-emphasis inline-flex items-center rounded-md bg-transparent px-3 py-2 text-sm font-medium ring-0 ${className}`
      )}
      ref={forwardedRef}
    />
  )
);
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";

export const DropdownMenuTriggerItem = DropdownMenuPrimitive.Trigger;

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuContent = forwardRef(
  ({ children, sideOffset = 2, align = "end", ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Content
        align={align}
        {...props}
        sideOffset={sideOffset}
        className={classNames(
          "shadow-dropdown w-50 bg-default border-subtle relative z-10 ml-1.5 origin-top-right rounded-md border text-sm",
          "[&>*:first-child]:mt-1 [&>*:last-child]:mb-1",
          props.className
        )}
        ref={forwardedRef}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    );
  }
);
DropdownMenuContent.displayName = "DropdownMenuContent";

export const DropdownMenuLabel = (props) => (
  <DropdownMenuPrimitive.Label {...props} className="text-subtle px-3 py-2" />
);

export const DropdownMenuItem = forwardRef(
  ({ className = "", ...props }, forwardedRef) => (
    <DropdownMenuPrimitive.Item
      className={`focus:ring-brand-800 hover:bg-subtle hover:text-emphasis text-default text-sm ring-inset first-of-type:rounded-t-[inherit] last-of-type:rounded-b-[inherit] focus:outline-none focus:ring-1 ${className}`}
      {...props}
      ref={forwardedRef}
    />
  )
);
DropdownMenuItem.displayName = "DropdownMenuItem";

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuCheckboxItem = forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.CheckboxItem
        {...props}
        ref={forwardedRef}
        className=""
      >
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckCircle />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    );
  }
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuRadioItem = forwardRef(
  ({ children, ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.RadioItem {...props} ref={forwardedRef}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckCircle />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.RadioItem>
    );
  }
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";

export function ButtonOrLink({ href, ...props }) {
  const isLink = typeof href !== "undefined";
  const ButtonOrLink = isLink ? "a" : "button";

  const content = <ButtonOrLink {...props} />;

  if (isLink) {
    return (
      <Link href={href} legacyBehavior>
        {content}
      </Link>
    );
  }

  return content;
}

export const DropdownItem = (props) => {
  const { StartIcon, EndIcon, children, color, childrenClassName, ...rest } =
    props;

  return (
    <ButtonOrLink
      {...rest}
      className={classNames(
        "hover:text-emphasis text-default inline-flex w-full items-center space-x-2 px-3 py-2  disabled:cursor-not-allowed",
        color === "destructive"
          ? "hover:bg-error hover:text-red-700 dark:hover:text-red-100"
          : "hover:bg-subtle",
        props.className
      )}
    >
      <>
        {StartIcon && <StartIcon className="h-4 w-4" />}
        <div
          className={classNames(
            "text-sm font-medium leading-5",
            childrenClassName
          )}
        >
          {children}
        </div>
        {EndIcon && <EndIcon className="h-4 w-4" />}
      </>
    </ButtonOrLink>
  );
};

export const DropdownMenuSeparator = forwardRef(
  ({ className = "", ...props }, forwardedRef) => {
    return (
      <DropdownMenuPrimitive.Separator
        className={classNames("bg-emphasis my-1 h-px", className)}
        {...props}
        ref={forwardedRef}
      />
    );
  }
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";

export default Dropdown;
