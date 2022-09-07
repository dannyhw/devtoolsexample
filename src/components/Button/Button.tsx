import { ButtonHTMLAttributes } from "react";
import "./button.css";

interface Props {
  text: string;
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, className, ...props }: ButtonProps) => {
  return (
    <button className={`btn ${className}`} {...props}>
      {text}
    </button>
  );
};
