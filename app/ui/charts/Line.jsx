"use client";
import { numFormater } from "@/app/lib/utils";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Line({ data }) {
  let options = {
    chart: {
      id: "line",
      type: "line",

      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      },
    },
    grid: {
      show: false,
    },
    markers: {
      size: 3,
      strokeWidth: 0,
      hover: {
        size: 7,
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    title: {
      text: "Export - Import in January - November 2023 ",
      align: "center",
      style: {
        fontSize: "16px",
        color: "#666",
      },
    },
    xaxis: {
      name: "month",
      categories: data.map((d) => d.month),
      tooltip: {
        enabled: false,
      },
      tickPlacement: "between",
    },
    yaxis: {
      show: false,
      // labels: {
      //   formatter: function (value) {
      //     return "$" + numFormater(value, true);
      //   },
      // },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return "$" + numFormater(value, true);
        },
      },
      x: {
        show: false,
      },
    },
  };
  let series = [
    {
      name: "Export",
      data: data.map((d) => Number(d.export)),
      color: "#F24B51",
    },
    {
      name: "Import",
      data: data.map((d) => Number(d.import)),
      color: "#334293",
    },
  ];

  return (
    <div className="line chart">
      <ReactApexChart
        options={options}
        series={series}
        maxwidth="600px"
        height="300px"
      />
    </div>
  );
}
