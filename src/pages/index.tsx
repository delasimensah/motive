import { useMantineColorScheme, Grid, Stack } from "@mantine/core";
import { StatsCard, CarCard } from "@components";
import { carStats, recommended } from "@lib/dummyData";

const HomePage = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const bgColor = dark ? "bg-dark1" : "bg-white";

  return (
    <Stack spacing={30}>
      <Grid gutter={30}>
        {carStats.map(({ title, bgColor, color, percentage, icon }, idx) => {
          return (
            <Grid.Col md={6} lg={3} key={idx}>
              <StatsCard
                text={title}
                bgColor={bgColor}
                color={color}
                percentage={percentage}
                icon={icon}
              />
            </Grid.Col>
          );
        })}
      </Grid>

      <div className="grid lg:grid-cols-2 gap-[30px]">
        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>

        <div className={`h-[350px] ${bgColor} rounded-lg`}></div>
      </div>

      <Grid gutter={30}>
        {recommended.map((details, idx) => {
          return (
            <Grid.Col md={6} lg={4} key={idx}>
              <CarCard details={details} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default HomePage;
