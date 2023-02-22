import { FC } from "react";
import dynamic from "next/dynamic";
import {
  useMantineColorScheme,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type StatsCardProps = {
  text: string;
  bgColor?: string;
  color: string;
  percentage: number;
};

const StatsCard: FC<StatsCardProps> = ({
  text,
  bgColor,
  color,
  percentage,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const { fontFamily } = useMantineTheme();

  return (
    <Stack
      align="center"
      justify="center"
      spacing={0}
      className={`h-[270px] ${
        bgColor ? "bg-purple" : dark ? "bg-dark1" : "bg-white"
      } rounded-lg`}
    >
      <Text
        className={`${bgColor ? "text-white" : dark ? "#ffffff" : "#242731"}`}
      >
        {text}
      </Text>

      <ReactApexChart
        type="radialBar"
        height={200}
        width={200}
        series={[percentage]}
        options={{
          colors: [color],
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              track: {
                background: bgColor ? bgColor : dark ? "#1F2128" : "#F4F5F9",
                startAngle: -135,
                endAngle: 135,
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  fontSize: "18px",
                  show: true,
                  offsetY: 5,
                  color: bgColor ? "#ffffff" : dark ? "#ffffff" : "#242731",
                  fontWeight: 700,
                  fontFamily,
                },
              },
            },
          },

          stroke: {
            lineCap: "round",
          },
        }}
      />
    </Stack>
  );
};

export default StatsCard;
