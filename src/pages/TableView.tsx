
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import { mockData } from "../data/mockData";
import { ArrowLeft, Eye, Edit3, Trash2 } from "lucide-react";

const TableView = () => {
  const { tableName } = useParams<{ tableName: string }>();
  const data = mockData[tableName || ""] || [];

  if (!tableName) {
    return <div>Table not found</div>;
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link to="/admin" className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 capitalize">
              {tableName} Table
            </h1>
            <p className="text-gray-600 mt-2">Manage {tableName} records and data</p>
          </div>
        </div>

        {/* Enhanced Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="grid grid-cols-8 gap-4 p-6 text-sm font-semibold">
              <div>ID</div>
              <div>TITLE</div>
              <div>DESCRIPTION</div>
              <div>CREATED</div>
              <div>UPDATED</div>
              <div>STATUS</div>
              <div>TAGS</div>
              <div>ACTIONS</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-100">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div key={item.id || index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                  <div className="grid grid-cols-8 gap-4 items-center text-sm">
                    <div className="text-gray-600 font-mono">{item.id}</div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-gray-600 max-w-xs truncate">{item.description}</div>
                    <div className="text-gray-600">{item.created_at}</div>
                    <div className="text-gray-600">{item.updated_at}</div>
                    <div>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        item.is_active 
                          ? "bg-green-100 text-green-800" 
                          : "bg-red-100 text-red-800"
                      }`}>
                        {item.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <div className="text-gray-600 max-w-xs truncate">{item.tags}</div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => console.log(`View ${item.id}`)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => console.log(`Update ${item.id}`)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Update"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => console.log(`Delete ${item.id}`)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No data available</h3>
                <p>No records found for {tableName} table</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TableView;
