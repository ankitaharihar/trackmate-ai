import { Package, Clock3 } from "lucide-react";

export default function ShipmentCard() {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-950/60 p-6 backdrop-blur-xl">

      <div className="flex items-center gap-3">
        <Package className="text-cyan-400" />
        <h3 className="text-xl font-semibold text-white">
          Shipment
        </h3>
      </div>

      <div className="mt-8">

        <p className="text-sm text-slate-400">
          Courier
        </p>

        <h2 className="mt-1 text-2xl font-bold text-white">
          Amazon Logistics
        </h2>

      </div>

      <div className="mt-8 flex items-center gap-2">

        <div className="h-3 w-3 rounded-full bg-green-400" />

        <span className="text-green-400">
          In Transit
        </span>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm text-slate-400">

          <span>Progress</span>

          <span>72%</span>

        </div>

        <div className="mt-2 h-3 rounded-full bg-slate-800">

          <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-cyan-400 to-green-400" />

        </div>

      </div>

      <div className="mt-8 flex items-center gap-3">

        <Clock3 className="text-cyan-400" />

        <div>

          <p className="text-sm text-slate-400">
            ETA
          </p>

          <h4 className="text-white">
            Tomorrow • 2:30 PM
          </h4>

        </div>

      </div>

    </div>
  );
}