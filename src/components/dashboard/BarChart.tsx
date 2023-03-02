import { FC } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

import {
  useMantineColorScheme,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

type BarChartProps = {};

const BarChart: FC<BarChartProps> = ({}) => {
  const { fontFamily } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const dark = colorScheme === "dark";

  return (
    <ReactApexChart
      type="bar"
      height={250}
      width="100%"
      series={[
        {
          data: [80, 55, 85, 50, 75, 45, 59],
        },
      ]}
      options={{
        states: {
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "none",
              value: 0,
            },
          },
        },
        colors: dark
          ? [
              "#1F2128",
              "#1F2128",
              "#2884FF",
              "#1F2128",
              "#1F2128",
              "#1F2128",
              "#1F2128",
            ]
          : [
              "#F4F5F9",
              "#F4F5F9",
              "#2884FF",
              "#F4F5F9",
              "#F4F5F9",
              "#F4F5F9",
              "#F4F5F9",
            ],
        tooltip: {
          custom: function (options) {
            const { series, seriesIndex, dataPointIndex, w } = options;

            return `<div class='bg-[#282B32] text-white w-16 px-1 before:content-['']>
              <p class='my-0 font-bold text-xs'>${w.globals.labels[dataPointIndex]}</p>

              <div class='flex items-center font-bold text-xs'>
                <span class='h-2 w-2 rounded-full bg-[#2884FF] mr-1'></span>
                ${series[seriesIndex][dataPointIndex]}
              </div>
            </div>`;
          },
        },
        legend: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "55%",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM"],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: [
                "#808191",
                "#808191",
                "#808191",
                "#808191",
                "#808191",
                "#808191",
                "#808191",
              ],
              fontFamily,
              fontSize: "14px",
            },
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        grid: {
          borderColor: dark ? "#282C2F" : "#F2F2F2",
          yaxis: {
            lines: {
              show: false,
            },
          },
          padding: {
            left: 0,
          },
        },
      }}
    />
  );
};

export default BarChart;
