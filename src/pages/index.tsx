import { useMantineColorScheme } from "@mantine/core";
import ReactApexChart from "react-apexcharts";

const HomePage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const bgColor = dark ? "bg-dark1" : "bg-white";

  return (
    <div className="space-y-[30px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <div className="h-[270px] bg-purple rounded-lg flex flex-col items-center">
          <p>Energy</p>

          <ReactApexChart
            type="radialBar"
            height={200}
            width={200}
            series={[45]}
            options={{
              colors: ["#ffffff"],
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  track: {
                    background: "#B37EFC",
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
                      color: "#ffffff",
                      fontWeight: 700,
                    },
                  },
                },
              },

              stroke: {
                lineCap: "round",
              },
            }}
          />
        </div>

        <div
          className={`h-[270px] ${bgColor} rounded-lg flex flex-col items-center`}
        >
          <p>Range</p>

          <ReactApexChart
            type="radialBar"
            height={200}
            width={200}
            series={[50]}
            options={{
              colors: ["#FF7E86"],
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  track: {
                    background: dark ? "#1F2128" : "#F4F5F9",
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
                      color: dark ? "#ffffff" : "#242731",
                      fontWeight: 700,
                    },
                  },
                },
              },

              stroke: {
                lineCap: "round",
              },
            }}
          />
        </div>

        <div
          className={`h-[270px] ${bgColor} rounded-lg flex flex-col items-center`}
        >
          <p>Break Fluid</p>

          <ReactApexChart
            type="radialBar"
            height={200}
            width={200}
            series={[9]}
            options={{
              colors: ["#A162F7"],
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  track: {
                    background: dark ? "#1F2128" : "#F4F5F9",
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
                      color: dark ? "#ffffff" : "#242731",
                      fontWeight: 700,
                    },
                  },
                },
              },

              stroke: {
                lineCap: "round",
              },
            }}
          />
        </div>

        <div
          className={`h-[270px] ${bgColor} rounded-lg flex flex-col items-center`}
        >
          <p>Tire Wear</p>

          <ReactApexChart
            type="radialBar"
            height={200}
            width={200}
            series={[25]}
            options={{
              colors: ["#F6CC0D"],
              plotOptions: {
                radialBar: {
                  startAngle: -135,
                  endAngle: 135,
                  track: {
                    background: dark ? "#1F2128" : "#F4F5F9",
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
                      color: dark ? "#ffffff" : "#242731",
                      fontWeight: 700,
                    },
                  },
                },
              },

              stroke: {
                lineCap: "round",
              },
            }}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-[30px]">
        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>

        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-[30px]">
        <div className="h-[240px] bg-[#e1dfa4] rounded-lg"></div>

        <div className="h-[240px] bg-[#e3ecf1] rounded-lg"></div>

        <div className="h-[240px] bg-[#f4e3e5] rounded-lg"></div>
      </div>
    </div>
  );
};

export default HomePage;

// fill: {
//   type: "gradient",
//   gradient: {
//     shade: "dark",
//     type: "horizontal",
//     gradientToColors: ["#87D4F9"],
//     stops: [0, 100],
//   },
// },
