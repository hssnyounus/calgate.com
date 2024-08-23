"use client"

import React from "react";
import PropTypes from "prop-types";

const FormHeader = ({ children }) => {
  return (
    <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
      <h3 className="font-medium text-black dark:text-white">{children}</h3>
    </div>
  );
};

FormHeader.propTypes = {};

export default FormHeader;
