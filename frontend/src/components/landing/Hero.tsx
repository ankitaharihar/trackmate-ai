import Scene from "../../three/Scene";
import { motion } from "framer-motion";
import AICard from "./AICard";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e922,transparent_70%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between px-8">

        {/* Left Side */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <p className="mb-4 text-cyan-400 uppercase tracking-[0.3em]">
            AI Powered Logistics
          </p>

          <h1 className="text-7xl font-black text-white leading-tight">
            Mission
            <br />
            Control
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Track every shipment with AI-powered analytics,
            real-time monitoring and immersive visualization.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black hover:scale-105 transition">
              Launch Dashboard
            </button>

            <button className="rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 hover:bg-cyan-500/10 transition">
              Live Demo
            </button>

          </div>
        </motion.div>

        {/* Right Side */}
        <div className="h-[650px] w-[650px]">
    <Scene />
     <AICard />
</div>

      </div>

    </section>
  );
}