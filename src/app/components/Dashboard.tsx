import {
  Monitor,
  Activity,
  ListVideo,
  HardDrive,
  TrendingUp,
  AlertCircle,
  Clock,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Dashboard() {
  // Mock data for charts
  const deviceStatusData = [
    { name: "Mon", online: 145, offline: 12 },
    { name: "Tue", online: 152, offline: 8 },
    { name: "Wed", online: 148, offline: 14 },
    { name: "Thu", online: 155, offline: 5 },
    { name: "Fri", online: 157, offline: 3 },
    { name: "Sat", online: 142, offline: 18 },
    { name: "Sun", online: 138, offline: 22 },
  ];

  const deviceTypesData = [
    { name: "Indoor Displays", value: 85, color: "#6366f1" },
    { name: "Outdoor Displays", value: 42, color: "#8b5cf6" },
    { name: "Kiosks", value: 25, color: "#a855f7" },
    { name: "Video Walls", value: 8, color: "#c084fc" },
  ];

  const storageData = [
    { name: "Jan", used: 65 },
    { name: "Feb", used: 72 },
    { name: "Mar", used: 68 },
    { name: "Apr", used: 75 },
    { name: "May", used: 82 },
    { name: "Jun", used: 78 },
  ];

  const recentActivity = [
    {
      type: "sync",
      device: "Display-Floor-1-A",
      action: "Content synced successfully",
      time: "2 mins ago",
      status: "success",
    },
    {
      type: "alert",
      device: "Display-Lobby-Main",
      action: "Device went offline",
      time: "15 mins ago",
      status: "error",
    },
    {
      type: "update",
      device: "Kiosk-Entrance-B",
      action: "Software update completed",
      time: "1 hour ago",
      status: "success",
    },
    {
      type: "warning",
      device: "Display-Floor-3-C",
      action: "High temperature detected",
      time: "2 hours ago",
      status: "warning",
    },
    {
      type: "sync",
      device: "VideoWall-Conference",
      action: "Playlist updated",
      time: "3 hours ago",
      status: "success",
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your digital signage network
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={Monitor}
          label="Total Devices"
          value="160"
          trend="+5.2%"
          trendUp={true}
          color="indigo"
        />
        <StatCard
          icon={Activity}
          label="Online Devices"
          value="157"
          subtitle="98.1% uptime"
          color="green"
        />
        <StatCard
          icon={ListVideo}
          label="Active Playlists"
          value="24"
          trend="+3"
          trendUp={true}
          color="purple"
        />
        <StatCard
          icon={HardDrive}
          label="Storage Usage"
          value="78%"
          subtitle="2.4 TB used"
          color="blue"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Status Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Device Status (7 Days)</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Online vs Offline devices
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={deviceStatusData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="name"
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="online"
                stroke="#10b981"
                strokeWidth={2}
                name="Online"
              />
              <Line
                type="monotone"
                dataKey="offline"
                stroke="#ef4444"
                strokeWidth={2}
                name="Offline"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Types Chart */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Device Distribution</h3>
              <p className="text-sm text-muted-foreground mt-1">
                By device type
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={deviceTypesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {deviceTypesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Storage Trend */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Storage Trend</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Last 6 months usage
              </p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={storageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="name"
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="used" fill="#6366f1" name="% Used" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold">Recent Activity</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Latest system events
              </p>
            </div>
          </div>
          <div className="space-y-4 max-h-[280px] overflow-y-auto">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activity.status === "success"
                      ? "bg-green-100 dark:bg-green-900/20"
                      : activity.status === "error"
                      ? "bg-red-100 dark:bg-red-900/20"
                      : "bg-yellow-100 dark:bg-yellow-900/20"
                  }`}
                >
                  {activity.status === "success" ? (
                    <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : activity.status === "error" ? (
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">
                    {activity.device}
                  </p>
                  <p className="text-sm text-muted-foreground truncate">
                    {activity.action}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
  color: "indigo" | "green" | "purple" | "blue";
}

function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  trendUp,
  subtitle,
  color,
}: StatCardProps) {
  const colorClasses = {
    indigo: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    green: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400",
    purple: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400",
    blue: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <div
            className={`flex items-center gap-1 text-sm ${
              trendUp ? "text-green-600" : "text-red-600"
            }`}
          >
            <TrendingUp className={`w-4 h-4 ${!trendUp && "rotate-180"}`} />
            <span>{trend}</span>
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="text-3xl font-semibold mt-1">{value}</p>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
