import { motion } from "framer-motion";
import { Activity, BarChart3, MapPinned, Route, ShieldCheck, Timer } from "lucide-react";

const metrics = [
  { label: "AI ETA", value: "2h 14m", icon: Timer },
  { label: "Courier", value: "Amazon", icon: ShieldCheck },
  { label: "Confidence", value: "98.7%", icon: Activity },
  { label: "Delay Risk", value: "Low", icon: BarChart3 },
];

const timeline = [
  "Pickup scanned",
  "Sorting hub",
  "In transit",
  "Out for delivery",
];

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="mx-auto w-full max-w-7xl px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-cyan-400/80">Live Dashboard Preview</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          AI Command Center for every parcel.
        </h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          One view for ETA, route intelligence, courier detection, and shipment risk.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-slate-950/90 p-5 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Dashboard</p>
              <h3 className="mt-2 text-2xl font-semibold">TrackMate AI</h3>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Live monitoring
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="rounded-3xl border border-white/5 bg-white/3 p-4"
              >
                <metric.icon className="text-cyan-300" size={18} />
                <p className="mt-5 text-sm text-slate-400">{metric.label}</p>
                <p className="mt-1 text-2xl font-semibold text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
            <div className="rounded-[28px] border border-white/5 bg-white/3 p-4">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <Route size={16} />
                Parcel timeline
              </div>
              <div className="mt-5 space-y-4">
                {timeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/5 bg-linear-to-br from-cyan-500/10 via-slate-950/60 to-blue-500/10 p-4">
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <MapPinned size={16} />
                Route intelligence
              </div>
              <div className="mt-4 h-56 rounded-[24px] border border-white/5 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.24),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.24),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.96),rgba(15,23,42,0.92))] p-4">
                <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/5 bg-white/3 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-500">AI ETA Layer</p>
                    <p className="mt-2 text-xl font-semibold">Tomorrow, 2:30 PM</p>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs text-slate-300">
                    <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-3">Weather<br /><span className="mt-1 block text-white">Clear</span></div>
                    <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-3">Traffic<br /><span className="mt-1 block text-white">Normal</span></div>
                    <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-3">Risk<br /><span className="mt-1 block text-white">Low</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
          className="rounded-[32px] border border-cyan-500/15 bg-slate-950/80 p-6 shadow-[0_0_50px_rgba(34,211,238,0.08)] backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-400/80">What users see</p>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li>AI ETA prediction updated live</li>
            <li>Courier and shipment metadata extracted automatically</li>
            <li>Route, delay risk, and confidence in one view</li>
            <li>Built for fast scanning on mobile and desktop</li>
          </ul>

          <div className="mt-8 rounded-[28px] border border-white/5 bg-white/3 p-5">
            <p className="text-sm text-slate-400">Next action</p>
            <p className="mt-2 text-2xl font-semibold text-white">Open Dashboard</p>
            <p className="mt-2 text-sm text-slate-400">Users move from analysis to live parcel monitoring instantly.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}