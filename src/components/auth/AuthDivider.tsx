import { FC } from "react";
import { Divider, useMantineColorScheme } from "@mantine/core";

type AuthDividerProps = {};

const AuthDivider: FC<AuthDividerProps> = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Divider
      my="xs"
      label="or"
      labelPosition="center"
      classNames={{
        label: "text-lg text-[#777E91] font-medium",
      }}
      color={`${dark ? "gray.8" : "gray.3"}`}
    />
  );
};

export default AuthDivider;
