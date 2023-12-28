"use client";
import { numFormater } from "@/app/lib/utils";
import React from "react";
import ReactApexChart from "react-apexcharts";

export default function Bar({ data, title, ...rest }) {
  let options = {
    chart: {
      type: "bar",
      height: 400,
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        fontSize: "14px",
        padding: 10,
        dataLabels: {
          // position: "top",
          horizontal: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
      textAnchor: "start",
      style: {
        colors: ["#222"],
        fontSize: "16px",
        fontWeight: "300",
      },
      formatter: function (val, opt) {
        return (
          opt.w.globals.labels[opt.dataPointIndex] +
          ":  " +
          numFormater(val, true)
        );
      },
    },
    stroke: {
      width: 3,
      colors: ["#fff"],
    },
    xaxis: {
      categories: data.map((d) => d.country),
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
      },
      formatter: function (value) {
        return "$ " + numFormater(value, true);
      },
    },
    grid: {
      show: false,
    },
    title: {
      text: title && `Main Partners By ${title}`,
      align: "center",
      floating: true,
    },
    theme: {
      mode: "light",
      monochrome: {
        enabled: true,
        color: title == "Export" ? "#334293" : "#F24B51",
      },
    },
    tooltip: {
      theme: "dark",

      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },

        formatter: function (value) {
          return "$ " + numFormater(value, true);
        },
      },
    },
  };
  let series = [
    {
      data: data.map((d) => d.total_cost),
    },
  ];

  return (
    <div className="bar chart" {...rest}>
      <ReactApexChart
        options={options}
        type="bar"
        series={series}
        height="400px"
      />
    </div>
  );
}
