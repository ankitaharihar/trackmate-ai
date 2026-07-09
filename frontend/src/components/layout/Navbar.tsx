import { Bell, Moon, Search, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 border-b border-white/10 bg-[#0F172A] flex items-center justify-between px-8">
      <div className="relative w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search tracking ID..."
          className="w-full rounded-xl bg-[#111827] border border-white/10 py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-500"
        />
      </div>

      <div className="flex items-center gap-6">
        <Bell
          size={22}
          className="cursor-pointer text-gray-300 hover:text-cyan-400"
        />

        <Moon
          size={22}
          className="cursor-pointer text-gray-300 hover:text-cyan-400"
        />

        <UserCircle
          size={34}
          className="text-cyan-400"
        />
      </div>
    </header>
  );
}