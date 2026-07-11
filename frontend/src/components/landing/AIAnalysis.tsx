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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mt-20 max-w-3xl rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-xl p-8 shadow-2xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <BrainCircuit className="text-cyan-400" size={28} />
        <h2 className="text-3xl font-bold text-white">
          AI Shipment Analysis
        </h2>
      </div>

      <div className="space-y-5">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.25,
              duration: 0.4,
            }}
            className="flex items-center gap-4"
          >
            <CheckCircle2
              className="text-green-400"
              size={22}
            />

            <p className="text-slate-200 text-lg">
              {item}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex justify-between text-sm text-slate-400 mb-2">
          <span>AI Confidence</span>
          <span>98.7%</span>
        </div>

        <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
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
  );
}