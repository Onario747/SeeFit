interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

const Button = ({ variant = "primary", children, className, ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-[12px] transition-all duration-300";
  
  const variants = {
    primary: "bg-transparent dark:bg-[#2323239E] border-2 border-[#333333B2] text-black dark:text-white hover:bg-black/5 dark:hover:bg-[#2323239E]/80",
    secondary: "bg-transparent dark:bg-[#2323239E] border-2 border-[#333333B2] text-black dark:text-white min-w-[55px] hover:bg-black/5 dark:hover:bg-[#2323239E]/80",
    outline: "bg-transparent border-2 border-[#333333B2] text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 