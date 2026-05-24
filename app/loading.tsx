export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="fixed inset-0 z-[60] grid place-items-center bg-[#0a0a0a]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border border-[#e5c158]/20" />
          <span className="absolute inset-0 rounded-full border-t border-[#e5c158] animate-spin" />
        </div>
        <span className="text-[0.65rem] tracking-[0.3em] uppercase text-[#888]">Loading</span>
      </div>
    </div>
  );
}
