import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
}) => {
  const baseStyles =
    "w-[157px] h-[52px] rounded-[12px] font-medium transition-all duration-300 cursor-pointer font-mada";

  const variantStyles = {
    primary: "bg-[#FAFAFB] text-black",
    secondary:
      "bg-[#2F2F2F99]/60 text-white hover:bg-gray-700 border border-[#99999966] rounded-[50px]",
    outline: "bg-transperent text-white border border-[#FAFAFB]",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
