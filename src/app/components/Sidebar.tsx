import {
  LayoutDashboard,
  FolderOpen,
  ListVideo,
  Monitor,
  Users as UsersIcon,
  Users2,
  BarChart3,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { NavItem } from "../App";

interface SidebarProps {
  currentView: NavItem;
  onNavigate: (view: NavItem) => void;
  isOpen: boolean;
  onToggle: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Sidebar({
  currentView,
  onNavigate,
  isOpen,
  onToggle,
  darkMode,
  onToggleDarkMode,
}: SidebarProps) {
  const navItems = [
    { id: "dashboard" as NavItem, label: "Dashboard", icon: LayoutDashboard },
    { id: "content" as NavItem, label: "Content", icon: FolderOpen },
    { id: "playlists" as NavItem, label: "Playlists", icon: ListVideo },
    { id: "devices" as NavItem, label: "Devices", icon: Monitor },
    { id: "groups" as NavItem, label: "Device Groups", icon: Users2 },
    { id: "users" as NavItem, label: "Users & Roles", icon: UsersIcon },
    { id: "reports" as NavItem, label: "Reports", icon: BarChart3 },
  ];

  return (
    <aside
      className={`h-full bg-card border-r border-border transition-all duration-300 flex flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b border-border flex items-center justify-between">
        <div className={`flex items-center gap-3 ${!isOpen && "justify-center w-full"}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold">DS</span>
          </div>
          {isOpen && (
            <div>
              <h1 className="font-semibold">Digital Signage</h1>
              <p className="text-xs text-muted-foreground">Management</p>
            </div>
          )}
        </div>
        {isOpen && (
          <button
            onClick={onToggle}
            className="p-1.5 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Collapse button when closed */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="mx-auto mt-4 p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              } ${!isOpen && "justify-center"}`}
              title={!isOpen ? item.label : undefined}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {isOpen && <span className="text-sm font-medium">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-border space-y-2">
        <button
          onClick={onToggleDarkMode}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-muted ${
            !isOpen && "justify-center"
          }`}
          title={!isOpen ? (darkMode ? "Dark Mode" : "Light Mode") : undefined}
        >
          {darkMode ? (
            <Moon className="w-5 h-5 flex-shrink-0" />
          ) : (
            <Sun className="w-5 h-5 flex-shrink-0" />
          )}
          {isOpen && (
            <span className="text-sm font-medium">
              {darkMode ? "Dark" : "Light"} Mode
            </span>
          )}
        </button>

        {isOpen && (
          <div className="px-3 py-2">
            <p className="text-xs text-muted-foreground">Logged in as</p>
            <p className="text-sm font-medium mt-0.5">admin@company.com</p>
          </div>
        )}
      </div>
    </aside>
  );
}
