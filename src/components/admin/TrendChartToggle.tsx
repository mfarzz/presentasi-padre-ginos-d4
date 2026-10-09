"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { TrendPoint } from "@/lib/types"; 

const TrendChart = dynamic(() => import("./TrendChart"), {
  loading: () => <p className="mt-4 text-sm text-ink/60">Memuat grafik…</p>,
  ssr: false,
});

export default function TrendChartToggle({ trend }: { trend: TrendPoint[] }) {
  const [showChart, setShowChart] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowChart((value) => !value)}
        className="mt-4 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white"
      >
        {showChart ? "Sembunyikan grafik" : "Tampilkan grafik"}
      </button>

      {showChart && <TrendChart trend={trend} />}
    </>
  );
}