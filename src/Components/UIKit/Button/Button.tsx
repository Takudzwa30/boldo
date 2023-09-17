import React, { ButtonHTMLAttributes, ReactNode } from "react";

// Styles
import Style from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  version?: "green" | "white";
}

const Button: React.FC<ButtonProps> = ({ children, version, ...rest }) => {
  const buttonClass =
    version === "green"
      ? Style.greenBtn
      : version === "white"
      ? Style.whiteBtn
      : Style.btnDefault;
  return (
    <button className={buttonClass} {...rest}>
      {children}
    </button>
  );
};

export default Button;
