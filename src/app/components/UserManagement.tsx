import {
  UserPlus,
  Search,
  Shield,
  Mail,
  Calendar,
  Edit,
  Trash2,
  MoreVertical,
} from "lucide-react";

export function UserManagement() {
  const users = [
    {
      id: 1,
      name: "John Anderson",
      email: "john.anderson@company.com",
      role: "Admin",
      status: "active",
      lastLogin: "2 hours ago",
      joinDate: "2023-01-15",
      permissions: ["Full Access"],
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      email: "sarah.mitchell@company.com",
      role: "Manager",
      status: "active",
      lastLogin: "1 day ago",
      joinDate: "2023-03-22",
      permissions: ["Manage Content", "Manage Devices"],
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@company.com",
      role: "Editor",
      status: "active",
      lastLogin: "3 hours ago",
      joinDate: "2023-06-10",
      permissions: ["Manage Content", "View Reports"],
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@company.com",
      role: "Viewer",
      status: "inactive",
      lastLogin: "2 weeks ago",
      joinDate: "2023-09-05",
      permissions: ["View Only"],
    },
  ];

  const roles = [
    {
      name: "Admin",
      count: 2,
      color: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
      permissions: [
        "Full system access",
        "User management",
        "System settings",
        "All content operations",
      ],
    },
    {
      name: "Manager",
      count: 5,
      color: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
      permissions: [
        "Manage content",
        "Manage devices",
        "Manage playlists",
        "View reports",
      ],
    },
    {
      name: "Editor",
      count: 12,
      color: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
      permissions: [
        "Upload content",
        "Edit playlists",
        "View devices",
        "View reports",
      ],
    },
    {
      name: "Viewer",
      count: 8,
      color: "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400",
      permissions: ["View content", "View devices", "View reports"],
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            User & Role Management
          </h1>
          <p className="text-muted-foreground">
            Manage users and access permissions
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <UserPlus className="w-5 h-5" />
          <span>Add User</span>
        </button>
      </div>

      {/* Roles Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {roles.map((role) => (
          <div
            key={role.name}
            className="bg-card border border-border rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{role.name}</h3>
              <span className={`px-3 py-1 rounded-full text-sm ${role.color}`}>
                {role.count}
              </span>
            </div>
            <ul className="space-y-2">
              {role.permissions.map((permission, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5">•</span>
                  {permission}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Users Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4">User</th>
                <th className="text-left p-4 hidden md:table-cell">Role</th>
                <th className="text-left p-4 hidden lg:table-cell">Status</th>
                <th className="text-left p-4 hidden lg:table-cell">Last Login</th>
                <th className="text-left p-4 hidden xl:table-cell">Join Date</th>
                <th className="text-right p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-t border-border hover:bg-muted/30 transition-colors ${
                    index % 2 === 0 ? "bg-muted/10" : ""
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {user.name.split(" ").map((n) => n[0]).join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          <span className="hidden sm:inline">{user.email}</span>
                          <span className="sm:hidden">
                            {user.email.split("@")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="p-4 hidden lg:table-cell">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 hidden lg:table-cell text-sm text-muted-foreground">
                    {user.lastLogin}
                  </td>
                  <td className="p-4 hidden xl:table-cell">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{user.joinDate}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors lg:hidden">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
