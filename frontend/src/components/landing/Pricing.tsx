import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    subtitle: "Perfect for individuals",
    popular: false,
    features: [
      "5 Trackings / Day",
      "AI Courier Detection",
      "ETA Prediction",
      "Basic Dashboard",
      "Community Support",
    ],
  },
  {
    name: "Pro",
    price: "₹299",
    subtitle: "Most Popular",
    popular: true,
    features: [
      "Unlimited Tracking",
      "Live Dashboard",
      "Advanced Analytics",
      "AI Predictions",
      "Priority Support",
      "Future API Access",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[170px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            PRICING
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Simple Pricing
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Start free. Upgrade only when your logistics grow.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className={`
                relative rounded-3xl border p-10 backdrop-blur-xl transition
                ${
                  plan.popular
                    ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_50px_rgba(34,211,238,.18)]"
                    : "border-cyan-500/20 bg-slate-900/60"
                }
              `}
            >

              {plan.popular && (
                <div className="absolute right-8 top-8 rounded-full bg-cyan-400 px-4 py-1 text-sm font-semibold text-black">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold text-white">
                {plan.name}
              </h3>

              <p className="mt-3 text-slate-400">
                {plan.subtitle}
              </p>

              <div className="mt-10 flex items-end gap-2">
                <span className="text-6xl font-extrabold text-white">
                  {plan.price}
                </span>

                {plan.price !== "₹0" && (
                  <span className="pb-2 text-slate-400">
                    /month
                  </span>
                )}
              </div>

              <div className="mt-10 space-y-4">

                {plan.features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <span className="text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <button
                className={`
                  mt-10 w-full rounded-xl py-4 font-semibold transition
                  ${
                    plan.popular
                      ? "bg-cyan-400 text-black hover:bg-cyan-300"
                      : "border border-cyan-400 text-cyan-400 hover:bg-cyan-500/10"
                  }
                `}
              >
                {plan.popular
                  ? "Start Pro"
                  : "Get Started"}
              </button>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}