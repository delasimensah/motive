import { useMantineColorScheme } from "@mantine/core";

const HomePage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const bgColor = dark ? "bg-dark1" : "bg-white";

  return (
    <div className="space-y-[30px]">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
        <div className="h-[270px] bg-purple rounded-lg"></div>
        <div className={`h-[270px] ${bgColor} rounded-lg`}></div>
        <div className={`h-[270px] ${bgColor} rounded-lg`}></div>
        <div className={`h-[270px] ${bgColor} rounded-lg`}></div>
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
