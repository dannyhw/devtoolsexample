import { ButtonHTMLAttributes } from "react";
import "./button.css";

interface Props {
  text: string;
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button className="btn" {...props}>
      {text}
    </button>
  );
};
