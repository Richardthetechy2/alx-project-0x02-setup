import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = {
  small: "px-3 py-1 text-sm",
  medium: "px-5 py-2 text-base",
  large: "px-7 py-3 text-lg",
};

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  size,
  shape,
  children,
  className = "",
  ...rest
}) => {
  return (
    <button
      className={`bg-blue-600 text-white font-semibold ${sizeClasses[size]} ${shape} shadow hover:bg-blue-700 transition ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;