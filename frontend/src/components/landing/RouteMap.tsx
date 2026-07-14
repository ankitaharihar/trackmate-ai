import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function RouteMap() {
  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-3xl bg-[#08111d]">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.10),transparent_70%)]" />

      {/* Live Badge */}
      <div className="absolute right-6 top-6 rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
        ● Live
      </div>

      {/* Route Line */}
      <div
        className="
          absolute
          left-[120px]
          top-[168px]
          h-[4px]
          w-[560px]
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-green-400
          shadow-[0_0_20px_rgba(34,211,238,.7)]
        "
      />

      {/* Mumbai */}
      <div className="absolute left-[112px] top-[160px]">
        <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_18px_#22d3ee]" />
      </div>

      <p className="absolute left-[102px] top-[190px] text-sm text-slate-300">
        📍 Mumbai
      </p>

      {/* Pune */}
      <div className="absolute right-[112px] top-[160px]">
        <div className="h-4 w-4 rounded-full bg-green-400 shadow-[0_0_18px_#4ade80]" />
      </div>

      <p className="absolute right-[96px] top-[190px] text-sm text-slate-300">
        📍 Pune
      </p>

      {/* ETA */}
      <div className="absolute left-1/2 top-[90px] -translate-x-1/2 rounded-full border border-cyan-500/20 bg-slate-900/80 px-5 py-2 text-cyan-100 backdrop-blur">
        ETA 2h 14m
      </div>

      {/* Truck */}
      <motion.div
        className="absolute top-[146px]"
        initial={{ x: 96 }}
        animate={{ x: [96, 608] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className="rounded-xl bg-cyan-400 p-3 shadow-[0_0_35px_#22d3ee]">
          <Truck
            size={22}
            strokeWidth={2.5}
            className="text-black"
          />
        </div>
      </motion.div>

      {/* Moving Glow */}
      <motion.div
        className="absolute top-[167px] h-3 w-20 rounded-full bg-cyan-400/40 blur-xl"
        initial={{ x: 96 }}
        animate={{ x: [96, 608] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Bottom Stats */}
      <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">

        <div className="rounded-xl border border-cyan-500/10 bg-slate-900/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Status
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            In Transit
          </p>
        </div>

        <div className="rounded-xl border border-cyan-500/10 bg-slate-900/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Progress
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            46%
          </p>
        </div>

        <div className="rounded-xl border border-cyan-500/10 bg-slate-900/70 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
            Distance Left
          </p>

          <p className="mt-2 text-xl font-semibold text-white">
            138 km
          </p>
        </div>

      </div>

    </div>
  );
}