"use client"

import React from "react";
import PropTypes from "prop-types";

const FormContainer = ({ children }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      {children}
    </div>
  );
};

FormContainer.propTypes = {};

export default FormContainer;
