"use client";
import React from "react";
import { currency, numFormater } from "@/app/lib/utils";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
// let colors = [
//   "#65A30D",
//   "#DC2626",
//   "#F97316",
//   "#CA8A04",
//   "#0891B2",
//   "#2563EB",
//   "#7C3AED",
//   "#DB2777",
//   "#E11D48",
//   "#57534E",
//   "#78350F",
// ];
let colors = [
  "#7F1D1D",
  "#991B1B",
  "#B91C1C",
  "#DC2626",
  "#EF4444",
  "#F87171",
  "#FCA5A5",
  "#FECACA",
  "#FEE2E2",
  "#FEF2F2",
];
let colorsg = [
  "#064E3B",
  "#065F46",
  "#047857",
  "#059669",
  "#10B981",
  "#34D399",
  "#6EE7B7",
  "#A7F3D0",
  "#CCFBF1",
  "#F0FDF4",
];
export default function BarComponent({ data, type, ...rest }) {
  return (
    <ResponsiveContainer width="100%" aspect={1.5}>
      <BarChart
        width={700}
        height={540}
        data={data}
        layout="vertical"
        margin={{ right: 0, left: 50, bottom: 5 }}
      >
        <YAxis
          type="category"
          dataKey="country"
          interval={0}
          tick={{ fontSize: 14, width: 250 }}
        />
        <XAxis
          type="number"
          tick={{ fontSize: 14, fontWeight: "bold" }}
          tickFormatter={numFormater}
          {...rest}
        />

        <Tooltip formatter={(value) => currency(value)} />

        <Bar dataKey="cost" fill="#8884d8">
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={type == "import" ? colors[index % 20] : colorsg[index % 20]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
