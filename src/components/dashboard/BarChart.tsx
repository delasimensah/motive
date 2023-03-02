import { FC } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type BarChartProps = {};

const BarChart: FC<BarChartProps> = (props) => {
  return (
    <ReactApexChart
      type="bar"
      height={250}
      width="100%"
      series={[
        {
          data: [44, 55, 57, 56, 61, 58, 63],
        },
      ]}
      options={{
        colors: ["#000"],
        tooltip: {
          enabled: true,
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "45%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"],
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      }}
    />
  );
};

export default BarChart;
