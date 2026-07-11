import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Scene from "../../three/Scene";
import TrackingInput from "./TrackingInput";
import TrackingDemo from "./TrackingDemo";

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showDemo, setShowDemo] = useState(false);

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
      className="relative min-h-screen overflow-hidden bg-[#020817]"
      onPointerMove={(event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - left) / width) * 2 - 1;
        const y = ((event.clientY - top) / height) * 2 - 1;

        setTilt({ x, y });
      }}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Scene tilt={tilt} />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#020817]/72" />

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
      <div className="relative z-10 flex min-h-screen items-start justify-center pt-24 md:pt-28">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 text-center">

          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-6 uppercase tracking-[0.45em] text-cyan-400"
          >
            AI POWERED LOGISTICS
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: "easeOut", delay: 0.08 }}
            className="text-5xl font-extrabold leading-[0.96] tracking-[-0.04em] text-white sm:text-6xl md:text-8xl"
          >
            Track Every Parcel.
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              One AI.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: "easeOut", delay: 0.16 }}
            className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl"
          >
            Track shipments from any courier with one AI-powered platform.
            Paste a tracking URL and get courier detection, ETA prediction and
            live route intelligence instantly.
          </motion.p>

          {/* Tracking Input */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.24 }}
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

          {/* Supported Couriers */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.32 }}
            className="mt-4 flex max-w-5xl flex-wrap justify-center gap-4"
          >

            {[
              "Amazon",
              "Flipkart",
              "Blue Dart",
              "Delhivery",
              "DTDC",
              "DHL",
              "FedEx",
              "UPS",
              "India Post",
            ].map((item) => (
              <div
                key={item}
                className="rounded-full border border-cyan-500/20 bg-slate-900/40 px-4 py-1.5 text-xs text-slate-300 backdrop-blur"
              >
                {item}
              </div>
            ))}

          </motion.div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span>✓ No signup required</span>
            <span>✓ Supports 20+ courier services</span>
            <span>✓ AI ETA Prediction</span>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce text-sm tracking-[0.28em] text-cyan-400/80">
            ↓ Scroll to Explore
          </div>

        </div>
      </div>
    </section>
  );
}