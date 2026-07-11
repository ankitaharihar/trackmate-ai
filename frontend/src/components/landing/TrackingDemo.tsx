import { AnimatePresence, motion } from "framer-motion";

type TrackingDemoProps = {
  visible: boolean;
};

const scanSteps = [
  "URL analyzed",
  "Courier detected",
  "Origin identified",
  "Destination identified",
  "ETA predicted",
];

export default function TrackingDemo({ visible }: TrackingDemoProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-[28px] border border-cyan-500/20 bg-slate-950/80 p-5 text-left shadow-[0_0_60px_rgba(34,211,238,0.14)] backdrop-blur-xl md:p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-400/80">
                AI Analysis
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Detecting Courier...
              </h3>
            </div>

            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              Live Scan
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3 rounded-3xl border border-white/5 bg-white/3 p-4">
              {scanSteps.map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.12 + index * 0.12 }}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
                    ✓
                  </span>
                  <span>{step}</span>
                </motion.div>
              ))}
            </div>

            <div className="rounded-3xl border border-cyan-500/15 bg-linear-to-br from-cyan-500/10 to-blue-500/5 p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Courier
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Amazon Logistics
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 text-sm text-slate-300">
                  <div className="rounded-2xl bg-slate-950/60 p-3">
                    <span className="block text-slate-500">Origin</span>
                    <span className="mt-1 block text-base text-white">Mumbai</span>
                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-3">
                    <span className="block text-slate-500">Destination</span>
                    <span className="mt-1 block text-base text-white">Pune</span>
                  </div>

                  <div className="rounded-2xl bg-slate-950/60 p-3">
                    <span className="block text-slate-500">ETA</span>
                    <span className="mt-1 block text-base text-white">Tomorrow 3:20 PM</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 p-3">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Confidence</span>
                    <span className="font-semibold text-emerald-300">98.7%</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-900/70">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "98.7%" }}
                      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                      className="h-full rounded-full bg-emerald-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}