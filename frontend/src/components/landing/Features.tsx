import { motion } from "framer-motion";
import {
  BrainCircuit,
  Truck,
  Clock3,
  MapPinned,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "AI Courier Detection",
    description:
      "Automatically identifies courier providers from any tracking URL.",
  },
  {
    icon: Clock3,
    title: "ETA Prediction",
    description:
      "Machine learning estimates delivery time with high accuracy.",
  },
  {
    icon: MapPinned,
    title: "Live Route Tracking",
    description:
      "Visualize shipment movement on an interactive route map.",
  },
  {
    icon: BrainCircuit,
    title: "Smart AI Analysis",
    description:
      "AI analyzes shipment status, delays and delivery confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Tracking",
    description:
      "Your shipment information stays encrypted and protected.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor every parcel from one intelligent dashboard.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            FEATURES
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Why TrackMate AI?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Everything you need to intelligently monitor, predict and
            optimize your shipments.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-cyan-500/20
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
                "
              >

                <div className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-400
                    transition
                    group-hover:scale-110
                ">
                  <Icon size={32} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}