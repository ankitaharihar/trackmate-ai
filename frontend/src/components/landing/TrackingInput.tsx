type TrackingInputProps = {
  onTrack?: () => void;
};

export default function TrackingInput({ onTrack }: TrackingInputProps) {
  return (
    <div className="max-w-2xl">
      <div className="flex overflow-hidden rounded-2xl border border-cyan-400/25 bg-slate-950/65 shadow-[0_0_40px_rgba(34,211,238,0.12)] backdrop-blur-xl transition duration-300 focus-within:border-cyan-300/50 focus-within:shadow-[0_0_55px_rgba(34,211,238,0.2)]">

        <input
          type="text"
          placeholder="Paste any tracking URL..."
          className="flex-1 bg-transparent px-6 py-4 text-white outline-none placeholder:text-slate-500"
        />

        <button
          type="button"
          onClick={onTrack}
          className="bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:bg-cyan-400"
        >
          Track
        </button>

      </div>

      <p className="mt-3 text-sm text-slate-400">
        Amazon • Flipkart • Blue Dart • DHL • DTDC • Delhivery • FedEx • UPS • India Post
      </p>
    </div>
  );
}