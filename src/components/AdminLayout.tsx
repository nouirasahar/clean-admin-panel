
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="p-6">
          <h1 className="text-xl font-bold">ADMIN PANEL</h1>
        </div>
        
        <nav className="mt-8">
          <Link
            to="/admin"
            className={`block px-6 py-3 text-sm font-medium transition-colors ${
              isActive("/admin")
                ? "bg-white bg-opacity-20 border-r-4 border-white"
                : "hover:bg-white hover:bg-opacity-10"
            }`}
          >
            📊 Dashboard
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
