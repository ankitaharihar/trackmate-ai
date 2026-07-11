import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Scene from "../../three/Scene";
import TrackingInput from "./TrackingInput";
import TrackingDemo from "./TrackingDemo";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showDemo, setShowDemo] = useState(false);
  const courierList = useMemo(
    () => [
      "Amazon",
      "Flipkart",
      "Blue Dart",
      "Delhivery",
      "DTDC",
      "DHL",
      "FedEx",
      "UPS",
      "India Post",
    ],
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => ({
        id: index,
        left: `${(index * 13) % 100}%`,
        top: `${(index * 17) % 100}%`,
        size: 2 + (index % 3),
        delay: index * 0.18,
      })),
    []
  );

  return (
    <section
      className="relative h-screen overflow-hidden bg-[#020817]"
      onPointerMove={(event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 2 - 1;
        const y = ((event.clientY - top) / height) * 2 - 1;

        setTilt({ x, y });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 h-full w-full">
        <Scene tilt={tilt} />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020817]/58" />

      {/* Aurora + Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 32, -18, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-24 top-8 h-80 w-80 rounded-full bg-cyan-500/12 blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -24, 18, 0], y: [0, 14, -10, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-24 top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        />

        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            animate={{
              opacity: [0.15, 0.45, 0.15],
              y: [0, -14, 0],
            }}
            transition={{
              duration: 5 + (particle.id % 4),
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-cyan-200/80 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-start justify-center pt-24 md:pt-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.11,
                  delayChildren: 0.12,
                },
              },
            }}
            className="flex w-full flex-col items-center"
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-6 uppercase tracking-[0.45em] text-cyan-400"
            >
              AI POWERED LOGISTICS
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 28 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="text-5xl font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl"
            >
              Track Every Parcel.
              <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                One AI.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl"
            >
              Track shipments from any courier with one AI-powered platform.
              Paste a tracking URL and get courier detection, ETA prediction and
              live route intelligence instantly.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mt-12 w-full max-w-2xl"
            >
              <TrackingInput onTrack={() => setShowDemo(true)} />
            </motion.div>

            <TrackingDemo visible={showDemo} />

            <div className="mt-6 text-sm text-slate-400">
              <span className="block text-xs uppercase tracking-[0.35em] text-slate-500">
                Supported Couriers
              </span>
            </div>

            <div className="mt-4 flex max-w-5xl flex-wrap justify-center gap-4">
              {courierList.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.48 + index * 0.05, ease: "easeOut" }}
                  className="rounded-full border border-cyan-500/20 bg-slate-900/40 px-4 py-1.5 text-xs text-slate-300 backdrop-blur"
                >
                  {item}
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400"
            >
              <span>✓ No signup required</span>
              <span>✓ Supports 20+ courier services</span>
              <span>✓ AI ETA Prediction</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-16 text-sm tracking-[0.28em] text-cyan-400/80"
            >
              <a href="#analysis" className="inline-flex items-center gap-2 transition hover:text-cyan-300">
                ↓ Scroll to Explore
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}