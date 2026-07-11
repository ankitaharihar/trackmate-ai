import { ClipboardPaste, Link2, Sparkles } from "lucide-react";

type TrackingInputProps = {
  onTrack?: () => void;
};

export default function TrackingInput({ onTrack }: TrackingInputProps) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200">
        <Sparkles size={12} />
        AI Courier Detection
      </div>

      <div className="overflow-hidden rounded-[28px] border border-cyan-300/20 bg-linear-to-br from-slate-950/92 via-slate-950/82 to-cyan-950/32 shadow-[0_0_50px_rgba(34,211,238,0.16)] backdrop-blur-xl transition duration-300 focus-within:border-cyan-300/55 focus-within:shadow-[0_0_72px_rgba(34,211,238,0.26)]">
        <div className="flex flex-col gap-3 p-3 md:flex-row md:items-center md:gap-2 md:p-4">
          <div className="flex min-h-16 flex-1 items-center gap-3 rounded-2xl border border-white/5 bg-white/4 px-4 shadow-inner shadow-black/10 transition focus-within:border-cyan-300/30 focus-within:bg-cyan-400/5">
            <Link2 className="shrink-0 text-cyan-300/80" size={18} />

            <input
              type="text"
              placeholder="Paste Tracking URL..."
              className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-slate-500"
            />

            <button
              type="button"
              aria-label="Paste tracking URL"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/8 bg-slate-900/70 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-200"
            >
              <ClipboardPaste size={16} />
            </button>
          </div>

          <button
            type="button"
            onClick={onTrack}
            className="inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-400 via-cyan-300 to-blue-400 px-6 font-semibold text-slate-950 shadow-[0_10px_35px_rgba(34,211,238,0.22)] transition hover:brightness-110"
          >
            <Sparkles size={16} />
            AI Detect → Track
          </button>
        </div>
      </div>

      <p className="mt-3 text-sm text-slate-400">
        Amazon • Flipkart • Blue Dart • DHL • DTDC • Delhivery • FedEx • UPS • India Post
      </p>
    </div>
  );
}