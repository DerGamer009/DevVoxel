import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // zwei Varianten
}

export default function Button({ children, variant = "primary", ...props }: ButtonProps) {
  let baseClasses =
    "px-5 py-3 rounded-full font-medium transition-colors flex items-center justify-center";

  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-gray-900 dark:hover:bg-blue-400";
      break;
    case "secondary":
      variantClasses =
        "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600";
      break;
  }

  return (
    <button {...props} className={`${baseClasses} ${variantClasses} ${props.className}`}>
      {children}
    </button>
  );
}
