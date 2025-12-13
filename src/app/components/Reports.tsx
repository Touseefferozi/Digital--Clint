import {
  Download,
  Calendar,
  TrendingUp,
  Activity,
  AlertCircle,
  Clock,
  BarChart3,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function Reports() {
  const playbackData = [
    { date: "Dec 1", views: 4200, errors: 12 },
    { date: "Dec 2", views: 4500, errors: 8 },
    { date: "Dec 3", views: 4100, errors: 15 },
    { date: "Dec 4", views: 4800, errors: 6 },
    { date: "Dec 5", views: 5200, errors: 4 },
    { date: "Dec 6", views: 4900, errors: 9 },
    { date: "Dec 7", views: 5100, errors: 7 },
  ];

  const uptimeData = [
    { device: "Floor 1", uptime: 98.5 },
    { device: "Floor 2", uptime: 97.2 },
    { device: "Floor 3", uptime: 99.1 },
    { device: "Lobby", uptime: 96.8 },
    { device: "Kiosks", uptime: 98.9 },
  ];

  const errorLogs = [
    {
      time: "10:45 AM",
      device: "Display-Floor-1-A",
      error: "Network connection timeout",
      severity: "warning",
    },
    {
      time: "11:20 AM",
      device: "Display-Lobby-Main",
      error: "Device offline - no response",
      severity: "critical",
    },
    {
      time: "01:15 PM",
      device: "Kiosk-Entrance-B",
      error: "Storage capacity exceeded 95%",
      severity: "warning",
    },
    {
      time: "02:30 PM",
      device: "Display-Floor-3-C",
      error: "High temperature detected (58°C)",
      severity: "warning",
    },
    {
      time: "03:45 PM",
      device: "VideoWall-Conference",
      error: "Content sync failed - retry needed",
      severity: "error",
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            Reports & Monitoring
          </h1>
          <p className="text-muted-foreground">
            Analytics and system health reports
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <Download className="w-5 h-5" />
          <span>Export Report</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">32.5K</p>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+12.5% vs last week</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">98.3%</p>
              <p className="text-sm text-muted-foreground">Avg Uptime</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span>+1.2% improvement</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">61</p>
              <p className="text-sm text-muted-foreground">Total Errors</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-red-600">
            <TrendingUp className="w-4 h-4 rotate-180" />
            <span>-8% vs last week</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">4.2h</p>
              <p className="text-sm text-muted-foreground">Avg Play Time</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Per device/day</span>
          </div>
        </div>
      </div>

      {/* Date Range Selector */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          {["7 Days", "30 Days", "90 Days", "Custom"].map((period) => (
            <button
              key={period}
              className={`px-4 py-2 rounded-md transition-colors ${
                period === "7 Days"
                  ? "bg-background shadow-sm"
                  : "hover:bg-background/50"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
          <Calendar className="w-4 h-4" />
          <span className="hidden sm:inline">Select Date Range</span>
        </button>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Playback Report */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-semibold">Playback Statistics</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Content views and playback errors
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={playbackData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="date"
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
                dataKey="views"
                stroke="#6366f1"
                strokeWidth={2}
                name="Views"
              />
              <Line
                type="monotone"
                dataKey="errors"
                stroke="#ef4444"
                strokeWidth={2}
                name="Errors"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Device Uptime */}
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="mb-6">
            <h3 className="font-semibold">Device Uptime</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Uptime percentage by location
            </p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={uptimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="device"
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis
                stroke="var(--color-muted-foreground)"
                fontSize={12}
                domain={[90, 100]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--color-card)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="uptime" fill="#10b981" name="Uptime %" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Error Logs */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="font-semibold">Recent Error Logs</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Latest system errors and warnings
          </p>
        </div>
        <div className="divide-y divide-border">
          {errorLogs.map((log, index) => (
            <div
              key={index}
              className="p-4 hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    log.severity === "critical"
                      ? "bg-red-100 dark:bg-red-900/20"
                      : log.severity === "error"
                      ? "bg-orange-100 dark:bg-orange-900/20"
                      : "bg-yellow-100 dark:bg-yellow-900/20"
                  }`}
                >
                  <AlertCircle
                    className={`w-5 h-5 ${
                      log.severity === "critical"
                        ? "text-red-600 dark:text-red-400"
                        : log.severity === "error"
                        ? "text-orange-600 dark:text-orange-400"
                        : "text-yellow-600 dark:text-yellow-400"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-medium">{log.device}</p>
                    <span className="text-sm text-muted-foreground flex-shrink-0">
                      {log.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{log.error}</p>
                  <div className="mt-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        log.severity === "critical"
                          ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
                          : log.severity === "error"
                          ? "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {log.severity}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
