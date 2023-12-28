"use client";
import { numFormater } from "@/app/lib/utils";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TradeBar({ data }) {
  let totalPct = data.reduce((acc, val) => acc + val.total_share, 0);
  let series = [
    {
      name: totalPct > 0 ? "Share(%)" : "Cost($)",
      data: data.map((d) => (totalPct > 0 ? d.total_share : d.total_cost)),
    },
  ];
  let options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },

    plotOptions: {
      bar: {
        horizontal: true,
      },
      dataLabels: {
        style: {
          fontSize: "15px",
          // fontWeight: 900,
        },
      },
    },
    grid: {
      show: false,
    },
    title: {
      text: `Top ${data.length} Product categories by ${data[0]?.type}`,
      style: {
        align: "center",
      },
    },
    colors: data[0]?.type == "Export" ? ["#3D89F9"] : ["#F24D5B"],
    dataLabels: {
      enabled: true,
      // formatter: (val) => {
      //   return val + (totalPct > 0 ? "%" : "$");
      // },

      position: "top", // top, center, bottom
      offsetX: -15,
    },

    xaxis: {
      categories: data.map((d) => d?.name || d.category),
    },
    yaxis: {
      // reversed: true,
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          fontSize: "15px",
        },
      },
    },
  };

  return (
    <div className="chart">
      <ReactApexChart
        options={options}
        type="bar"
        series={series}
        height="400px"
      />
    </div>
  );
}
