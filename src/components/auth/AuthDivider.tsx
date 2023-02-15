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
        label: `text-lg  font-medium ${
          dark ? "text-white1" : "text-[#777E91]"
        }`,
      }}
      color={`${dark ? "gray.8" : "gray.3"}`}
    />
  );
};

export default AuthDivider;
