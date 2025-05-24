
import { useParams, Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import ActionButton from "../components/ActionButton";
import TableRow from "../components/TableRow";

// Mock data for demonstration
const mockData: Record<string, any[]> = {
  support: [
    { id: "636771c1736c0b13bc6e1", title: "Not character", description: "dental dentist", created_at: "2023-05", updated_at: "2023-05", is_active: true, tags: "mile beyond", views: 180 },
    { id: "636771c1736c0b13bc6e2", title: "Medical", description: "Job medical", created_at: "2023-05", updated_at: "2023-05", is_active: false, tags: "speech elections high those", views: 679 },
    { id: "636771c1736c0b13bc6e3", title: "Read prevent", description: "Hi bye test truth", created_at: "2023-05", updated_at: "2023-05", is_active: true, tags: "help watching", views: 519 }
  ],
  tickets: [
    { id: "1", title: "Bug Report", status: "Open", priority: "High", created_at: "2023-05-15", assignee: "John Doe" },
    { id: "2", title: "Feature Request", status: "In Progress", priority: "Medium", created_at: "2023-05-14", assignee: "Jane Smith" }
  ]
};

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
        <div className="mb-6 flex items-center justify-between">
          <div>
            <Link to="/admin" className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-2 inline-block">
              ← Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {tableName} Table
            </h1>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="grid grid-cols-8 gap-4 p-4 text-sm font-semibold">
              <div>ID</div>
              <div>TITLE</div>
              <div>DESCRIPTION</div>
              <div>CREATED AT</div>
              <div>UPDATED AT</div>
              <div>IS ACTIVE</div>
              <div>TAGS</div>
              <div>ACTIONS</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((item, index) => (
                <TableRow key={item.id || index}>
                  <td className="px-4 py-4 text-sm text-gray-600">{item.id}</td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-800">{item.title}</td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs truncate">{item.description}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{item.created_at}</td>
                  <td className="px-4 py-4 text-sm text-gray-600">{item.updated_at}</td>
                  <td className="px-4 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.is_active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {item.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs truncate">{item.tags}</td>
                  <td className="px-4 py-4">
                    <div className="flex space-x-2">
                      <ActionButton 
                        variant="view"
                        onClick={() => console.log(`View ${item.id}`)}
                      >
                        👁️
                      </ActionButton>
                      <ActionButton 
                        variant="update"
                        onClick={() => console.log(`Update ${item.id}`)}
                      >
                        ✏️
                      </ActionButton>
                      <ActionButton 
                        variant="delete"
                        onClick={() => console.log(`Delete ${item.id}`)}
                      >
                        🗑️
                      </ActionButton>
                    </div>
                  </td>
                </TableRow>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                  No data available for {tableName}
                </td>
              </tr>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TableView;
