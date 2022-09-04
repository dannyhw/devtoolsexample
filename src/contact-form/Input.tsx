interface InputProps {
  errorMessage?: string;
}

import React from "react";
import "./contact-form.css";

type FinalInputProps = InputProps &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const Input = React.forwardRef<HTMLInputElement, FinalInputProps>(
  ({ errorMessage, ...props }, ref) => {
    return (
      <div className="formRow">
        <input
          ref={ref}
          className={`input ${!!errorMessage ? "error" : ""}`}
          {...props}
        />
        {errorMessage && (
          <span role="alert" className="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);
