
import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "view" | "delete" | "update";
  className?: string;
}

const ActionButton = ({ children, onClick, variant = "view", className = "" }: ActionButtonProps) => {
  const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-colors";
  
  const variantClasses = {
    view: "bg-blue-100 text-blue-700 hover:bg-blue-200",
    delete: "bg-red-100 text-red-700 hover:bg-red-200",
    update: "bg-green-100 text-green-700 hover:bg-green-200"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ActionButton;
