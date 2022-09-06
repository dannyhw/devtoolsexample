import React from "react";
import "./input.css";

interface Props {
  errorMessage?: string;
}

export type InputProps = Props &
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
