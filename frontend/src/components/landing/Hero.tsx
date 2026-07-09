import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e955,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center"
      >

        <p className="mb-4 text-cyan-400 tracking-[0.3em] uppercase">
          AI Powered Logistics Intelligence
        </p>

        <h1 className="text-7xl font-black text-white">
          Mission Control
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400 leading-8">
          Track shipments across the globe using artificial intelligence,
          predictive analytics and immersive real-time visualization.
        </p>

        <div className="mt-12 flex justify-center gap-6">

          <button className="rounded-full bg-cyan-500 px-8 py-4 font-semibold text-black hover:scale-105 transition">
            Launch Dashboard
          </button>

          <button className="rounded-full border border-cyan-500 px-8 py-4 text-cyan-400 hover:bg-cyan-500/10 transition">
            Explore Technology
          </button>

        </div>

      </motion.div>

    </section>
  );
}