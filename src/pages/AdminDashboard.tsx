
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { TABLES } from "../types/admin";
import { Eye, Trash2, BarChart3 } from "lucide-react";

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <BarChart3 className="w-8 h-8 mr-3 text-blue-600" />
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Manage your database tables and records</p>
        </div>

        {/* Enhanced Tables Grid */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="font-semibold text-lg">Table Name</div>
              <div className="font-semibold text-lg">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {TABLES.map((tableName) => (
              <div key={tableName} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                <div className="grid grid-cols-2 gap-6 items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-900 font-medium text-lg capitalize">{tableName}</span>
                  </div>
                  <div className="flex space-x-3">
                    <Link to={`/admin/table/${tableName}`}>
                      <button className="flex items-center space-x-2 px-6 py-3 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-all duration-200 font-medium">
                        <Eye className="w-4 h-4" />
                        <span>View</span>
                      </button>
                    </Link>
                    <button 
                      onClick={() => console.log(`Delete ${tableName}`)}
                      className="flex items-center space-x-2 px-6 py-3 bg-red-50 text-red-700 rounded-xl hover:bg-red-100 transition-all duration-200 font-medium"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
