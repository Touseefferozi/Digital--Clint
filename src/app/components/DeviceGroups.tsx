import {
  Users2,
  Plus,
  Search,
  Monitor,
  Edit,
  Trash2,
  Copy,
} from "lucide-react";

export function DeviceGroups() {
  const groups = [
    {
      id: 1,
      name: "Floor 1 Displays",
      devices: 24,
      locations: ["Floor 1 - Section A", "Floor 1 - Section B"],
      activePlaylist: "Morning Promotions",
      status: "active",
    },
    {
      id: 2,
      name: "Lobby Screens",
      devices: 8,
      locations: ["Main Lobby", "Side Lobby"],
      activePlaylist: "Welcome Messages",
      status: "active",
    },
    {
      id: 3,
      name: "Outdoor Digital Boards",
      devices: 12,
      locations: ["Parking Lot", "Building Entrance"],
      activePlaylist: "Outdoor Ads",
      status: "active",
    },
    {
      id: 4,
      name: "Meeting Room Displays",
      devices: 16,
      locations: ["Conference A", "Conference B", "Meeting Rooms"],
      activePlaylist: "Not Assigned",
      status: "inactive",
    },
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">
            Device Groups
          </h1>
          <p className="text-muted-foreground">
            Organize and manage device groups
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <Plus className="w-5 h-5" />
          <span>Create Group</span>
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search groups..."
          className="w-full pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Users2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {group.devices} devices
                  </p>
                </div>
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
              <div>
                <p className="text-sm text-muted-foreground mb-2">Locations</p>
                <div className="flex flex-wrap gap-2">
                  {group.locations.map((location, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-xs"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Active Playlist:</span>
                </div>
                <span className="text-sm font-medium">{group.activePlaylist}</span>
              </div>
            </div>

            <button className="w-full mt-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              <span>Manage Group</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
