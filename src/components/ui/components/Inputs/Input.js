"use client"
import classNames from "@/lib/classNames";
import React, { useState } from "react";

const Input = React.forwardRef(
  (
    {
      id,
      className,
      name,
      type,
      value,
      onChange,
      defaultValue,
      aria_describedby,
      error,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <input
          id={id}
          className={classNames(
            "w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
            className,
            error &&
              "border-danger active:border-danger focus:border-danger dark:border-danger dark:focus:border-danger border-2"
          )}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
          aria-describedby={aria_describedby}
          {...props}
        />
      </div>
    );
  }
);
export default Input;
