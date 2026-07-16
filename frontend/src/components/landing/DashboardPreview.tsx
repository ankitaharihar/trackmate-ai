import { motion } from "framer-motion";
import { type ReactNode } from "react";
import RouteMap from "./RouteMap";
import {
  Clock3,
  Package,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";


type TrackingData = {
  courier: string;
  trackingId: string;
  origin: string;
  destination: string;
  status: string;
  eta: string;
  confidence: number;
};

type DashboardPreviewProps = {
  trackingData: TrackingData | null;
};

export default function DashboardPreview({
  trackingData,
}: DashboardPreviewProps) {
  return (
    <section className="relative overflow-hidden bg-[#020817] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            PRODUCT PREVIEW
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            AI Logistics Dashboard
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Everything you need to monitor shipments, predict delays,
            visualize routes and track every parcel from one dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 rounded-3xl border border-cyan-500/20 bg-slate-900/50 p-6 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl lg:p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_1.35fr_1fr]">
            <div className="space-y-6">
              <Card
  icon={<Package />}
  title="Shipment"
  value={trackingData?.trackingId ?? "TM-982731"}
/>
             <Card
  icon={<Clock3 />}
  title="ETA"
  value={trackingData?.eta ?? "Tomorrow 2:30 PM"}
/>
              <Card
  icon={<ShieldCheck />}
  title="Confidence"
  value={
    trackingData
      ? `${trackingData.confidence}%`
      : "98.7%"
  }
/>
            </div>

            <RouteMap />

            <div className="space-y-6">
              <Card
  icon={<TrendingUp />}
  title="Status"
  value={trackingData?.status ?? "On Time"}
/>
              <Card
  icon={<Package />}
  title="Courier"
  value={trackingData?.courier ?? "Amazon Logistics"}
/>
              <Card icon={<Package />} title="Courier" value="Amazon Logistics" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type CardProps = {
  icon: ReactNode;
  title: string;
  value: string;
};

function Card({ icon, title, value }: CardProps) {
  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/50 p-5">
      <div className="flex items-center gap-3 text-cyan-400">
        {icon}
        <span>{title}</span>
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">{value}</h3>
    </div>
  );
}