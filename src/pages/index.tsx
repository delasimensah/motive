import { useMantineColorScheme, Grid, Stack } from "@mantine/core";
import { StatsCard } from "@components";
import { carStats } from "@lib/dummyData";

const HomePage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const bgColor = dark ? "bg-dark1" : "bg-white";

  return (
    <Stack spacing={30}>
      <Grid gutter={30}>
        {carStats.map(({ title, bgColor, color, percentage }, idx) => {
          return (
            <Grid.Col md={6} lg={3} key={idx}>
              <StatsCard
                text={title}
                bgColor={bgColor}
                color={color}
                percentage={percentage}
              />
            </Grid.Col>
          );
        })}
      </Grid>

      <div className="grid lg:grid-cols-2 gap-[30px]">
        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>

        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>
      </div>

      <div className="grid md:grid-cols-3 gap-[30px]">
        <div className="h-[240px] bg-[#e1dfa4] rounded-lg"></div>

        <div className="h-[240px] bg-[#e3ecf1] rounded-lg"></div>

        <div className="h-[240px] bg-[#f4e3e5] rounded-lg"></div>
      </div>
    </Stack>
  );
};

export default HomePage;
