"use client";

import { useEffect, useState } from "react";

// Static target — Partyz 2026, July 18 at 12:00pm local.
const TARGET_MS = new Date("2026-07-18T12:00:00").getTime();

function format(diffMs: number): string {
  if (diffMs <= 0) return "0D 00H 00M 00S";
  const d = Math.floor(diffMs / 86_400_000);
  const h = Math.floor((diffMs % 86_400_000) / 3_600_000);
  const m = Math.floor((diffMs % 3_600_000) / 60_000);
  const s = Math.floor((diffMs % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d}D ${pad(h)}H ${pad(m)}M ${pad(s)}S`;
}

export function Countdown() {
  // null on server / pre-hydration — avoids text mismatch between SSR and client.
  // We render a non-breaking space at the same line height to avoid layout shift.
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setText(format(TARGET_MS - Date.now()));
    tick(); // immediate
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden lg:block font-sans font-semibold text-purple text-[18px] leading-snug">
      <div>Countdown</div>
      <div
        className="uppercase mt-0.5 tabular-nums"
        // Reserve space with a non-breaking placeholder during SSR/hydration.
        suppressHydrationWarning
      >
        {text ?? " "}
      </div>
    </div>
  );
}
