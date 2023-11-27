"use client";
import { numFormater } from "@/app/lib/utils";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const CustomzedXticks = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={11}
        textAnchor="end"
        fill="#666"
        fontSize={15}
        transform="rotate(-35)"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function LineReport({ data }) {
  return (
    <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 50,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="month"
        padding={{ left: 30, right: 30 }}
        tick={<CustomzedXticks />}
        domain={["auto", "auto"]}
        interval={0}
      />
      <YAxis type="number" tickFormatter={numFormater} />
      <Tooltip
        formatter={(value) =>
          new Intl.NumberFormat("en", {
            style: "currency",
            currency: "USD",
          }).format(value)
        }
      />
      <Legend verticalAlign="top" height={36} />
      <Line
        type="monotone"
        dataKey="export"
        stroke="#F24B51"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="import" stroke="#334293" />
    </LineChart>
  );
}
