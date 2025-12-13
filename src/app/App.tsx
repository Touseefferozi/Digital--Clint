import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./components/Dashboard";
import { ContentManagement } from "./components/ContentManagement";
import { Playlists } from "./components/Playlists";
import { DeviceManagement } from "./components/DeviceManagement";
import { DeviceGroups } from "./components/DeviceGroups";
import { UserManagement } from "./components/UserManagement";
import { Reports } from "./components/Reports";
import { MobileNav } from "./components/MobileNav";

export type NavItem = 
  | "dashboard" 
  | "content" 
  | "playlists" 
  | "devices" 
  | "groups" 
  | "users" 
  | "reports";

export default function App() {
  const [currentView, setCurrentView] = useState<NavItem>("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "content":
        return <ContentManagement />;
      case "playlists":
        return <Playlists />;
      case "devices":
        return <DeviceManagement />;
      case "groups":
        return <DeviceGroups />;
      case "users":
        return <UserManagement />;
      case "reports":
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar
          currentView={currentView}
          onNavigate={setCurrentView}
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className="lg:hidden border-b border-border bg-card p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DS</span>
            </div>
            <h1 className="text-lg font-semibold">Digital Signage</h1>
          </div>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <MobileNav currentView={currentView} onNavigate={setCurrentView} />
        </div>
      </div>
    </div>
  );
}
