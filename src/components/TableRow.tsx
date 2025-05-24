
import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

const TableRow = ({ children, className = "" }: TableRowProps) => {
  return (
    <tr className={`border-b border-gray-200 hover:bg-gray-50 ${className}`}>
      {children}
    </tr>
  );
};

export default TableRow;
