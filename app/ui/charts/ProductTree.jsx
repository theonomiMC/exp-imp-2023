"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function ProductTree({ data, title }) {
  const chartOptions = {
    legend: {
      show: false,
      toolbar: {
        show: false,
      },
    },
    chart: {
      height: 450,
      type: "treemap",
    },
    title: {
      text: `Top ${title} Product Categries`,
      align: "center",
    },
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (text, op) {
        return [text, op.value];
      },
      offsetY: -4,
    },
  };

  const series = [
    {
      data: data.map((d) => ({
        x: d.name,
        y: d.cost_share,
      })),
    },
  ];

  return (
    <div className="tree chart">
      <ReactApexChart
        options={chartOptions}
        series={series}
        type="treemap"
        height={450}
      />
    </div>
  );
}
