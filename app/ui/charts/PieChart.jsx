"use client";
import { numFormater } from "@/app/lib/utils";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart({ data }) {
  let options = {
    chart: {
      width: "100%",
      // type: "polarArea",
      type: "donut",
    },
    labels: data.map((d) => d.name || d.category),
    tooltip: {
      y: {
        formatter: function (value) {
          return "$ " + numFormater(value, true);
        },
      },
      style: {
        fontSize: "14px",
        color: "#fff",
      },
    },

    yaxis: {
      show: false,
    },
    fill: {
      opacity: 0.8,
    },
    stroke: {
      width: 1,
      colors: undefined,
    },

    legend: {
      position: "right",
      color: "#222",
    },

    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
    theme: {
      mode: "light",
      palette: "palette1",
      monochrome: {
        enabled: false,
      },
    },
    // responsive: [
    //   {
    //     breakpoint: 750,
    //     options: {
    //       chart: {
    //         width: "100%",
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  };
  let series = data.map((d) => d.total_share);

  return (
    <div className="chart">
      <ReactApexChart options={options} series={series} type="donut" />
    </div>
  );
}
