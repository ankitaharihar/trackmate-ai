import { motion } from "framer-motion";
import {
  CheckCircle2,
  BrainCircuit,
} from "lucide-react";

const items = [
  "URL Verified",
  "Courier Detected",
  "Tracking ID Extracted",
  "Origin: Mumbai",
  "Destination: Pune",
  "Shipment In Transit",
  "ETA: Tomorrow 2:30 PM",
];

export default function AIAnalysis() {
  return (
    <section id="analysis" className="relative bg-[#020817] py-32">
      <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto max-w-3xl rounded-3xl border border-cyan-500/20 bg-slate-900/80 p-8 shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl"
      >
        <div className="mb-8 flex items-center gap-3">
          <BrainCircuit className="text-cyan-400" size={28} />
          <h2 className="text-3xl font-bold text-white">
            AI Shipment Analysis
          </h2>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.3,
                duration: 0.35,
              }}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/3 px-4 py-3"
            >
              <CheckCircle2 className="text-green-400" size={22} />

              <p className="text-lg text-slate-200">
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-2 flex justify-between text-sm text-slate-400">
            <span>AI Confidence</span>
            <span>98.7%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "98.7%" }}
              viewport={{ once: true }}
              transition={{
                delay: 2,
                duration: 1,
              }}
              className="h-full bg-cyan-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}