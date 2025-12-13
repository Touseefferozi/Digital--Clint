import { useState } from "react";
import {
  Monitor,
  Search,
  Filter,
  RefreshCw,
  Power,
  Download,
  AlertTriangle,
  Activity,
  HardDrive,
  Thermometer,
  Wifi,
  MoreVertical,
} from "lucide-react";

export function DeviceManagement() {
  const [selectedDevice, setSelectedDevice] = useState<number | null>(null);

  const devices = [
    {
      id: 1,
      name: "Display-Floor-1-A",
      location: "Floor 1, Section A",
      status: "online",
      ipAddress: "192.168.1.101",
      model: "Samsung QM55R",
      resolution: "1920x1080",
      uptime: "15d 8h",
      storage: { used: 45, total: 128 },
      temperature: 42,
      lastSync: "2 mins ago",
      playlist: "Morning Promotions",
    },
    {
      id: 2,
      name: "Display-Lobby-Main",
      location: "Main Lobby",
      status: "offline",
      ipAddress: "192.168.1.102",
      model: "LG 55UH5F-H",
      resolution: "3840x2160",
      uptime: "0h",
      storage: { used: 62, total: 128 },
      temperature: null,
      lastSync: "2 hours ago",
      playlist: "Afternoon Menu",
    },
    {
      id: 3,
      name: "Kiosk-Entrance-B",
      location: "Entrance B",
      status: "online",
      ipAddress: "192.168.1.103",
      model: "Elo 2294L",
      resolution: "1920x1080",
      uptime: "8d 3h",
      storage: { used: 28, total: 64 },
      temperature: 38,
      lastSync: "5 mins ago",
      playlist: "Evening Entertainment",
    },
    {
      id: 4,
      name: "Display-Floor-3-C",
      location: "Floor 3, Section C",
      status: "warning",
      ipAddress: "192.168.1.104",
      model: "Samsung QM43R",
      resolution: "1920x1080",
      uptime: "22d 14h",
      storage: { used: 98, total: 128 },
      temperature: 58,
      lastSync: "8 mins ago",
      playlist: "Morning Promotions",
    },
    {
      id: 5,
      name: "VideoWall-Conference",
      location: "Conference Room A",
      status: "online",
      ipAddress: "192.168.1.105",
      model: "Samsung UD55E-A (4x4)",
      resolution: "3840x2160",
      uptime: "45d 12h",
      storage: { used: 112, total: 256 },
      temperature: 46,
      lastSync: "1 min ago",
      playlist: "Corporate Intro",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400";
      case "offline":
        return "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400";
      case "warning":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getStorageColor = (percentage: number) => {
    if (percentage >= 90) return "text-red-600 dark:text-red-400";
    if (percentage >= 75) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  const getTempColor = (temp: number | null) => {
    if (!temp) return "text-muted-foreground";
    if (temp >= 55) return "text-red-600 dark:text-red-400";
    if (temp >= 45) return "text-yellow-600 dark:text-yellow-400";
    return "text-green-600 dark:text-green-400";
  };

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            Device Management
          </h1>
          <p className="text-muted-foreground">
            Monitor and control your display devices
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Sync All</span>
          </button>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Add Device</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">157</p>
              <p className="text-sm text-muted-foreground">Online</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
              <Power className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">3</p>
              <p className="text-sm text-muted-foreground">Offline</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">2</p>
              <p className="text-sm text-muted-foreground">Warnings</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
              <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-semibold">78%</p>
              <p className="text-sm text-muted-foreground">Avg Storage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search devices..."
            className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="p-2 hover:bg-muted rounded-lg transition-colors">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      {/* Devices List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedDevice(device.id)}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{device.name}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs flex items-center gap-1 ${getStatusColor(
                      device.status
                    )}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        device.status === "online"
                          ? "bg-green-600 dark:bg-green-400"
                          : device.status === "offline"
                          ? "bg-red-600 dark:bg-red-400"
                          : "bg-yellow-600 dark:bg-yellow-400"
                      }`}
                    />
                    {device.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{device.location}</p>
              </div>
              <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-muted-foreground">Model</p>
                <p className="text-sm font-medium">{device.model}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">IP Address</p>
                <p className="text-sm font-medium font-mono">{device.ipAddress}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Resolution</p>
                <p className="text-sm font-medium">{device.resolution}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Uptime</p>
                <p className="text-sm font-medium">{device.uptime}</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Storage</span>
                </div>
                <span
                  className={`text-sm font-medium ${getStorageColor(
                    (device.storage.used / device.storage.total) * 100
                  )}`}
                >
                  {device.storage.used}GB / {device.storage.total}GB
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    (device.storage.used / device.storage.total) * 100 >= 90
                      ? "bg-red-600"
                      : (device.storage.used / device.storage.total) * 100 >= 75
                      ? "bg-yellow-600"
                      : "bg-green-600"
                  }`}
                  style={{
                    width: `${(device.storage.used / device.storage.total) * 100}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Thermometer className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Temperature</span>
                </div>
                <span className={`text-sm font-medium ${getTempColor(device.temperature)}`}>
                  {device.temperature ? `${device.temperature}°C` : "N/A"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wifi className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Last Sync</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {device.lastSync}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex gap-2">
              <button className="flex-1 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Sync</span>
              </button>
              <button className="flex-1 py-2 border border-border rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Power className="w-4 h-4" />
                <span>Reboot</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
