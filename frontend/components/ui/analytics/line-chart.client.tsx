"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SimpleLineChart({ data, dataKey }: any) {
  return (
    <div className="h-72 rounded-xl border border-neutral-800 bg-neutral-950 p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#e5e5e5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
