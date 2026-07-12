import { motion } from "framer-motion";
import { type ReactNode } from "react";
import {
  BrainCircuit,
  Clock3,
  Package,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            PRODUCT PREVIEW
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            AI Logistics Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Everything you need to monitor shipments, predict delays,
            visualize routes and track every parcel from one dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-slate-900/50 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">
            <div className="space-y-6">
              <Card icon={<Package />} title="Shipment" value="TM-982731" />
              <Card icon={<Clock3 />} title="ETA" value="Tomorrow 2:30 PM" />
              <Card icon={<ShieldCheck />} title="Confidence" value="98.7%" />
            </div>

            <div className="relative min-h-105 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] lg:min-h-130">
              <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-black" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_42%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.08),transparent_36%)]" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                  <span>Live Route Intelligence</span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]" />
                    Live
                  </span>
                </div>

                <div className="relative my-10 flex min-h-40 items-center justify-center lg:my-14">
                  <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-slate-800" />
                  <div className="absolute left-14 right-14 top-1/2 h-0.75 -translate-y-1/2 rounded-full bg-linear-to-r from-cyan-400 via-sky-400 to-green-400 shadow-[0_0_30px_rgba(34,211,238,.8)]" />

                  <div className="absolute left-14 top-1/2 -translate-y-1/2">
                    <div className="h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
                    <p className="mt-3 text-xs text-slate-400">Mumbai</p>
                  </div>

                  <div className="absolute right-14 top-1/2 -translate-y-1/2 text-right">
                    <div className="h-4 w-4 rounded-full bg-green-400 shadow-[0_0_20px_#4ade80]" />
                    <p className="mt-3 text-xs text-slate-400">Pune</p>
                  </div>

                  <motion.div
                    initial={{ left: "18%" }}
                    animate={{ left: "82%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="rounded-xl bg-cyan-400 px-3 py-2 text-black shadow-[0_0_25px_#22d3ee]">
                      📦
                    </div>
                  </motion.div>

                  <div className="absolute top-6 rounded-full border border-cyan-400/20 bg-slate-950/80 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur">
                    ETA 2h 14m
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <MiniStat label="Current Speed" value="42 km/h" />
                  <MiniStat label="Distance Left" value="138 km" />
                  <MiniStat label="Stops Remaining" value="2" />
                  <MiniStat label="AI Confidence" value="98.7%" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card icon={<TrendingUp />} title="AI Prediction" value="On Time" />
              <Card icon={<BrainCircuit />} title="Delay Risk" value="Very Low" />
              <Card icon={<Package />} title="Courier" value="Amazon Logistics" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

function Card({ icon, title, value }: CardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/50 p-5">
      <div className="flex items-center gap-3 text-cyan-400">
        {icon}
        <span>{title}</span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{value}</h3>
    </div>
  );
}

type MiniStatProps = {
  label: string;
  value: string;
};

function MiniStat({ label, value }: MiniStatProps) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/3 p-4 backdrop-blur-sm">
      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-white">{value}</p>
    </div>
  );
}