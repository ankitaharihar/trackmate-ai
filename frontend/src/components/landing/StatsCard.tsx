import { motion } from "framer-motion";

export default function StatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="absolute bottom-8 left-8
      w-72 rounded-3xl
      border border-cyan-500/20
      bg-slate-900/50
      backdrop-blur-xl
      p-6"
    >
      <h3 className="text-white text-xl font-semibold">
        Live Tracking
      </h3>

      <div className="mt-6 space-y-5">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Shipment
          </span>

          <span className="text-cyan-400">
            TM-92731
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Status
          </span>

          <span className="text-green-400">
            In Transit
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            ETA
          </span>

          <span className="text-white">
            2h 31m
          </span>
        </div>

      </div>

      <div className="mt-6 h-2 rounded-full bg-slate-700 overflow-hidden">

        <motion.div
          animate={{
            width: ["20%", "78%", "20%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="h-full bg-cyan-400"
        />

      </div>

    </motion.div>
  );
}