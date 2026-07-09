import {
  LayoutDashboard,
  Package,
  MapPinned,
  BarChart3,
  Bot,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Orders",
    icon: Package,
  },
  {
    title: "Tracking",
    icon: MapPinned,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "AI Assistant",
    icon: Bot,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-[#0B1220] border-r border-white/10">
      <div className="p-8">

        <h1 className="text-3xl font-bold text-white">
          🚀 TrackMate AI
        </h1>

        <div className="mt-14 space-y-3">

          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                w-full
                flex
                items-center
                gap-4
                rounded-xl
                px-5
                py-4
                text-gray-300
                hover:bg-cyan-500/10
                hover:text-cyan-400
                transition-all
                "
              >
                <Icon size={22} />

                {item.title}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}