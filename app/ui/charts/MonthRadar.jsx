"use client";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function MonthRadar({ data1, data2, title }) {
  const series = [
    {
      name: data2[0]?.year,
      data: data2.map((d) =>
        title == "Export"
          ? parseFloat(d["exp_%"]).toFixed(2)
          : parseFloat(d["imp_%"]).toFixed(2)
      ),
    },
    {
      name: data1[0]?.year,
      data: data1.map((d) =>
        title == "Export"
          ? parseFloat(d["exp_%"].toFixed(2))
          : parseFloat(d["imp_%"]).toFixed(2)
      ),
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "radar",
      toolbar: {
        show: false,
      },
    },

    title: {
      text: `Comparision Of Monthly ${title}`,
      align: "center",
      margin: 10,
    },
    subtitle: {
      text: "(2022 vs 2023)",
      align: "center",
      style: {
        fontWeight: 400,
      },
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: ["#e9e9e9"],
          fill: {
            colors: ["#f8f8f8", "#fff"],
            opacity: 0.1,
          },
        },
      },
    },

    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.3,
    },
    // colors: ["#FF4560", "#222"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: data1.map((d) => d.month),
      // categories: [
      //   "January",
      //   "February",
      //   "March",
      //   "April",
      //   "May",
      //   "June",
      //   "July",
      //   "August",
      //   "September",
      //   "October",
      //   "November",
      // ],
    },
  };

  return (
    <div className="radar chart">
      <ReactApexChart
        options={options}
        type="radar"
        series={series}
        height="400px"
      />
    </div>
  );
}
