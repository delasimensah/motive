import { FC } from "react";
import dynamic from "next/dynamic";
import {
  useMantineColorScheme,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
import Image from "next/image";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type StatsCardProps = {
  text: string;
  bgColor?: string;
  color: string;
  percentage: number;
  icon: string;
};

const StatsCard: FC<StatsCardProps> = ({
  text,
  bgColor,
  color,
  percentage,
  icon,
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
      <Image src={icon} alt="" height={40} width={40} />

      <Text
        className={`${
          bgColor ? "text-white" : dark ? "#ffffff" : "#242731"
        } font-bold text-xl mt-5`}
      >
        {text}
      </Text>

      <ReactApexChart
        type="radialBar"
        height={180}
        width={180}
        series={[percentage]}
        options={{
          colors: [color],
          plotOptions: {
            radialBar: {
              hollow: {
                // margin: 15,
                size: "55%",
              },
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
