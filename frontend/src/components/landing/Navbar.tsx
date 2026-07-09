import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-md bg-black/20 border-b border-cyan-500/10"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
          TRACKMATE AI
        </h1>

        <div className="hidden md:flex items-center gap-10 text-gray-300">

          <button className="hover:text-cyan-400 transition">
            Features
          </button>

          <button className="hover:text-cyan-400 transition">
            Technology
          </button>

          <button className="hover:text-cyan-400 transition">
            Pricing
          </button>

          <button className="hover:text-cyan-400 transition">
            Contact
          </button>

        </div>

        <button
          className="
          rounded-full
          border
          border-cyan-400
          px-6
          py-2
          text-cyan-400
          hover:bg-cyan-400
          hover:text-black
          transition
          "
        >
          Launch Dashboard
        </button>

      </div>
    </motion.nav>
  );
}