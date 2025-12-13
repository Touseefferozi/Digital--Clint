import { useState } from "react";
import {
  Plus,
  Search,
  Calendar,
  Clock,
  Monitor,
  Play,
  Edit,
  Trash2,
  Copy,
  GripVertical,
} from "lucide-react";

export function Playlists() {
  const [selectedView, setSelectedView] = useState<"playlists" | "schedule">("playlists");

  const playlists = [
    {
      id: 1,
      name: "Morning Promotions",
      items: 12,
      duration: "15:30",
      assignedDevices: 45,
      status: "active",
      lastModified: "2024-12-10",
      schedule: "Mon-Fri 06:00-12:00",
    },
    {
      id: 2,
      name: "Afternoon Menu",
      items: 8,
      duration: "8:45",
      assignedDevices: 28,
      status: "active",
      lastModified: "2024-12-09",
      schedule: "Daily 12:00-17:00",
    },
    {
      id: 3,
      name: "Evening Entertainment",
      items: 15,
      duration: "22:15",
      assignedDevices: 32,
      status: "active",
      lastModified: "2024-12-08",
      schedule: "Mon-Sun 17:00-22:00",
    },
    {
      id: 4,
      name: "Weekend Special",
      items: 10,
      duration: "12:00",
      assignedDevices: 15,
      status: "inactive",
      lastModified: "2024-12-07",
      schedule: "Sat-Sun All Day",
    },
  ];

  const scheduleItems = [
    {
      day: "Monday",
      slots: [
        { time: "06:00 - 12:00", playlist: "Morning Promotions", devices: 45 },
        { time: "12:00 - 17:00", playlist: "Afternoon Menu", devices: 28 },
        { time: "17:00 - 22:00", playlist: "Evening Entertainment", devices: 32 },
      ],
    },
    {
      day: "Tuesday",
      slots: [
        { time: "06:00 - 12:00", playlist: "Morning Promotions", devices: 45 },
        { time: "12:00 - 17:00", playlist: "Afternoon Menu", devices: 28 },
        { time: "17:00 - 22:00", playlist: "Evening Entertainment", devices: 32 },
      ],
    },
    {
      day: "Saturday",
      slots: [
        { time: "00:00 - 23:59", playlist: "Weekend Special", devices: 15 },
      ],
    },
    {
      day: "Sunday",
      slots: [
        { time: "00:00 - 23:59", playlist: "Weekend Special", devices: 15 },
      ],
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            Playlists & Scheduling
          </h1>
          <p className="text-muted-foreground">
            Create and manage content playlists
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <Plus className="w-5 h-5" />
          <span>Create Playlist</span>
        </button>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2 bg-muted rounded-lg p-1 w-fit">
        <button
          onClick={() => setSelectedView("playlists")}
          className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
            selectedView === "playlists"
              ? "bg-background shadow-sm"
              : "hover:bg-background/50"
          }`}
        >
          <Play className="w-4 h-4" />
          Playlists
        </button>
        <button
          onClick={() => setSelectedView("schedule")}
          className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
            selectedView === "schedule"
              ? "bg-background shadow-sm"
              : "hover:bg-background/50"
          }`}
        >
          <Calendar className="w-4 h-4" />
          Schedule
        </button>
      </div>

      {selectedView === "playlists" ? (
        <>
          {/* Search & Filter */}
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search playlists..."
                className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold">{playlist.name}</h3>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          playlist.status === "active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400"
                        }`}
                      >
                        {playlist.status}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {playlist.items} items • {playlist.duration} total
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Monitor className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {playlist.assignedDevices} devices assigned
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {playlist.schedule}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      Modified {playlist.lastModified}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <button className="w-full py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
                    <Edit className="w-4 h-4" />
                    <span>Edit Playlist</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Create New Playlist Card */}
          <div className="bg-card border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Create New Playlist</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Drag and drop content to create a new playlist
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Calendar/Timeline View */}
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="p-6 border-b border-border">
              <h3 className="font-semibold">Weekly Schedule</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Manage playlist schedules by day and time
              </p>
            </div>

            <div className="divide-y divide-border">
              {scheduleItems.map((item) => (
                <div key={item.day} className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="w-24 flex-shrink-0">
                      <h4 className="font-medium">{item.day}</h4>
                    </div>
                    <div className="flex-1 space-y-3">
                      {item.slots.map((slot, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors group cursor-pointer"
                        >
                          <GripVertical className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{slot.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Play className="w-4 h-4 text-primary" />
                              <span className="text-sm font-medium">
                                {slot.playlist}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Monitor className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">
                                {slot.devices} devices
                              </span>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-background rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                      <button className="w-full py-2 border-2 border-dashed border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary">
                        <Plus className="w-4 h-4" />
                        <span>Add Time Slot</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
