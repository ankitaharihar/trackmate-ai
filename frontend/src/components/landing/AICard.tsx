import { Cpu } from "lucide-react";

export default function AICard() {
  return (
    <div className="absolute right-10 bottom-12 w-72 rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-5 backdrop-blur-xl">

      <div className="flex items-center gap-2">
        <Cpu className="text-cyan-400" />
        <span className="font-semibold text-white">
          AI Prediction
        </span>
      </div>

      <div className="mt-6 space-y-4">

        <div className="flex justify-between">
          <span className="text-gray-400">Parcel</span>
          <span className="text-white">TM-78291</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">ETA</span>
          <span className="text-emerald-400">2h 14m</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">Confidence</span>
          <span className="text-cyan-400">98.7%</span>
        </div>

      </div>

    </div>
  );
}