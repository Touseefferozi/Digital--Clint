import { useState } from "react";
import {
  Upload,
  Image,
  Video,
  FileText,
  Search,
  Filter,
  Grid3x3,
  List,
  Play,
  Trash2,
  Eye,
  Download,
  MoreVertical,
} from "lucide-react";

export function ContentManagement() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedTab, setSelectedTab] = useState<"all" | "images" | "videos" | "html">("all");

  const contentItems = [
    {
      id: 1,
      name: "summer_promo_video.mp4",
      type: "video",
      size: "45.2 MB",
      resolution: "1920x1080",
      duration: "0:45",
      uploadDate: "2024-12-10",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400&h=300&fit=crop",
      tags: ["promo", "summer", "featured"],
    },
    {
      id: 2,
      name: "product_showcase_01.jpg",
      type: "image",
      size: "2.8 MB",
      resolution: "3840x2160",
      uploadDate: "2024-12-09",
      thumbnail: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
      tags: ["product", "showcase"],
    },
    {
      id: 3,
      name: "menu_board_template.html",
      type: "html",
      size: "125 KB",
      resolution: "1080x1920",
      uploadDate: "2024-12-08",
      thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      tags: ["menu", "template"],
    },
    {
      id: 4,
      name: "corporate_intro.mp4",
      type: "video",
      size: "87.5 MB",
      resolution: "1920x1080",
      duration: "1:30",
      uploadDate: "2024-12-07",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      tags: ["corporate", "intro"],
    },
    {
      id: 5,
      name: "seasonal_banner.jpg",
      type: "image",
      size: "3.2 MB",
      resolution: "1920x1080",
      uploadDate: "2024-12-06",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      tags: ["seasonal", "banner"],
    },
    {
      id: 6,
      name: "weather_widget.html",
      type: "html",
      size: "89 KB",
      resolution: "400x600",
      uploadDate: "2024-12-05",
      thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      tags: ["widget", "weather"],
    },
  ];

  const filteredContent = contentItems.filter((item) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "images") return item.type === "image";
    if (selectedTab === "videos") return item.type === "video";
    if (selectedTab === "html") return item.type === "html";
    return true;
  });

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-semibold mb-2">Content Management</h1>
          <p className="text-muted-foreground">
            Upload and manage your media content
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 justify-center">
          <Upload className="w-5 h-5" />
          <span>Upload Content</span>
        </button>
      </div>

      {/* Upload Area */}
      <div className="border-2 border-dashed border-border rounded-xl p-8 lg:p-12 text-center bg-muted/20 hover:bg-muted/30 transition-colors cursor-pointer">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <div>
            <p className="font-medium">Drag and drop files here</p>
            <p className="text-sm text-muted-foreground mt-1">
              or click to browse (Max 100MB per file)
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Image className="w-4 h-4" /> Images
            </span>
            <span className="flex items-center gap-1">
              <Video className="w-4 h-4" /> Videos
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" /> HTML
            </span>
          </div>
        </div>
      </div>

      {/* Tabs & Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          <button
            onClick={() => setSelectedTab("all")}
            className={`px-4 py-2 rounded-md transition-colors ${
              selectedTab === "all"
                ? "bg-background shadow-sm"
                : "hover:bg-background/50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedTab("images")}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              selectedTab === "images"
                ? "bg-background shadow-sm"
                : "hover:bg-background/50"
            }`}
          >
            <Image className="w-4 h-4" />
            Images
          </button>
          <button
            onClick={() => setSelectedTab("videos")}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              selectedTab === "videos"
                ? "bg-background shadow-sm"
                : "hover:bg-background/50"
            }`}
          >
            <Video className="w-4 h-4" />
            Videos
          </button>
          <button
            onClick={() => setSelectedTab("html")}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 ${
              selectedTab === "html"
                ? "bg-background shadow-sm"
                : "hover:bg-background/50"
            }`}
          >
            <FileText className="w-4 h-4" />
            HTML
          </button>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex-1 sm:flex-initial relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search content..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <div className="flex gap-1 border border-border rounded-lg p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded transition-colors ${
                viewMode === "grid" ? "bg-muted" : "hover:bg-muted/50"
              }`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded transition-colors ${
                viewMode === "list" ? "bg-muted" : "hover:bg-muted/50"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={item.thumbnail}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-black ml-1" />
                    </button>
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="p-1.5 bg-black/50 hover:bg-black/70 rounded-lg transition-colors">
                    <Eye className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-1.5 bg-black/50 hover:bg-black/70 rounded-lg transition-colors">
                    <MoreVertical className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="font-medium truncate">{item.name}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <span>{item.size}</span>
                  <span>•</span>
                  <span>{item.resolution}</span>
                  {item.duration && (
                    <>
                      <span>•</span>
                      <span>{item.duration}</span>
                    </>
                  )}
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4 hidden sm:table-cell">Type</th>
                <th className="text-left p-4 hidden md:table-cell">Size</th>
                <th className="text-left p-4 hidden lg:table-cell">Resolution</th>
                <th className="text-left p-4 hidden lg:table-cell">Upload Date</th>
                <th className="text-right p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map((item, index) => (
                <tr
                  key={item.id}
                  className={`border-t border-border hover:bg-muted/30 transition-colors ${
                    index % 2 === 0 ? "bg-muted/10" : ""
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <span className="font-medium truncate max-w-[200px]">
                        {item.name}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className="capitalize">{item.type}</span>
                  </td>
                  <td className="p-4 hidden md:table-cell">{item.size}</td>
                  <td className="p-4 hidden lg:table-cell">{item.resolution}</td>
                  <td className="p-4 hidden lg:table-cell">{item.uploadDate}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 hover:bg-destructive/10 text-destructive rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
