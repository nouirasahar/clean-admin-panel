
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";
import ActionButton from "../components/ActionButton";
import TableRow from "../components/TableRow";

const tables = [
  "support",
  "tickets", 
  "subscriptions",
  "loyalty",
  "discounts",
  "products",
  "coupons",
  "promotions",
  "groups"
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            ⚡ Admin Dashboard
          </h1>
        </div>

        {/* Tables Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="font-semibold text-lg">Table Name</div>
              <div className="font-semibold text-lg">Actions</div>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {tables.map((tableName) => (
              <TableRow key={tableName}>
                <td className="px-4 py-4 text-gray-800 font-medium">{tableName}</td>
                <td className="px-4 py-4">
                  <div className="flex space-x-3">
                    <Link to={`/admin/table/${tableName}`}>
                      <ActionButton variant="view">
                        👁️ View
                      </ActionButton>
                    </Link>
                    <ActionButton 
                      variant="delete"
                      onClick={() => console.log(`Delete ${tableName}`)}
                    >
                      🗑️ Delete
                    </ActionButton>
                  </div>
                </td>
              </TableRow>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
