import React from "react";

const TextArea = React.forwardRef(
  (
    { id, className, name, row, col, value, onChange, defaultValue, ...props },
    ref
  ) => {
    return (
      <div>
        <textarea
          id={id}
          className={className}
          name={name}
          rows={row}
          cols={col}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
export default TextArea;
