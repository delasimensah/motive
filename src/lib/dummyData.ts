import energy from "@assets/dashboard/energy.svg";
import range from "@assets/dashboard/range.svg";
import fluid from "@assets/dashboard/break-fluid.svg";
import tire from "@assets/dashboard/tire-wear.svg";
import mini from "@assets/dashboard/mini.svg";
import bmw from "@assets/dashboard/bmw.svg";
import suzuki from "@assets/dashboard/suzuki.svg";

export const carStats = [
  {
    title: "Energy",
    percentage: 45,
    bgColor: "#B37EFC",
    color: "#ffffff",
    icon: energy,
  },
  {
    title: "Range",
    percentage: 50,
    color: "#FF7E86",
    icon: range,
  },
  {
    title: "Break Fluid",
    percentage: 9,
    color: "#A162F7",
    icon: fluid,
  },
  {
    title: "Tire Wear",
    percentage: 25,
    color: "#F6CC0D",
    icon: tire,
  },
];

export const recommended = [
  {
    recommeded: "64%",
    name: "Mini Cooper",
    hourly: 32,
    image: mini,
    width: 257,
    bgColor: "#e1dfa4",
  },
  {
    recommeded: "74%",
    name: "Porsche 911 Carrera",
    hourly: 28,
    image: suzuki,
    width: 247,
    bgColor: "#e3ecf1",
  },
  {
    recommeded: "74%",
    name: "Porsche 911 Carrera",
    hourly: 28,
    image: bmw,
    width: 216,
    bgColor: "#f4e3e5",
  },
];
