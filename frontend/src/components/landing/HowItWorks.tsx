import { motion } from "framer-motion";
import {
  Link2,
  BrainCircuit,
  Search,
  Route,
  LayoutDashboard,
} from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste Tracking URL",
    description:
      "Paste any tracking link from Amazon, Flipkart, DHL, DTDC, Delhivery or any supported courier.",
  },
  {
    icon: BrainCircuit,
    title: "AI Detects Courier",
    description:
      "TrackMate AI automatically identifies the courier and extracts the tracking information.",
  },
  {
    icon: Search,
    title: "Shipment Analysis",
    description:
      "Real-time shipment data is collected, cleaned and normalized into one standard format.",
  },
  {
    icon: Route,
    title: "Predict ETA",
    description:
      "Our AI predicts delivery time, delays and shipment route using multiple signals.",
  },
  {
    icon: LayoutDashboard,
    title: "Open Dashboard",
    description:
      "Monitor your shipment with AI insights, analytics and live tracking in one place.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">

      <div className="mx-auto max-w-7xl px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-bold text-white"
        >
          How TrackMate AI Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mx-auto mt-6 max-w-3xl text-center text-slate-400"
        >
          One platform. Every courier. AI handles everything automatically.
        </motion.p>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .12,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="group relative rounded-3xl border border-cyan-500/20 bg-slate-900/40 p-8 backdrop-blur-xl transition"
            >
              <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-black font-bold">
                {index + 1}
              </div>

              <div className="mt-8">

                <step.icon
                  size={42}
                  className="text-cyan-400"
                />

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {step.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}