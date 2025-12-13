import {
  LayoutDashboard,
  FolderOpen,
  ListVideo,
  Monitor,
  MoreHorizontal,
} from "lucide-react";
import { NavItem } from "../App";

interface MobileNavProps {
  currentView: NavItem;
  onNavigate: (view: NavItem) => void;
}

export function MobileNav({ currentView, onNavigate }: MobileNavProps) {
  const mainItems = [
    { id: "dashboard" as NavItem, label: "Dashboard", icon: LayoutDashboard },
    { id: "content" as NavItem, label: "Content", icon: FolderOpen },
    { id: "playlists" as NavItem, label: "Playlists", icon: ListVideo },
    { id: "devices" as NavItem, label: "Devices", icon: Monitor },
  ];

  return (
    <nav className="border-t border-border bg-card">
      <div className="flex items-center justify-around p-2">
        {mainItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
        <button
          onClick={() => onNavigate("users")}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            currentView === "users" ||
            currentView === "groups" ||
            currentView === "reports"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <MoreHorizontal className="w-5 h-5" />
          <span className="text-xs">More</span>
        </button>
      </div>
    </nav>
  );
}
