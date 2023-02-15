import { FC } from "react";

import { Text, Title, Group, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

type AuthTitleProps = {
  title: string;
  text: string;
  link: {
    text: string;
    path: string;
  };
};

const AuthTitle: FC<AuthTitleProps> = ({ title, text, link }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div>
      <Title
        size="h1"
        className={`capitalize ${dark ? "text-white" : "text-dark1"}`}
      >
        {title}
      </Title>

      <Group spacing={4} className="text-lg">
        <Text className="text-dark4">{text}</Text>

        <Link href={link.path} className="capitalize text-purple">
          {link.text}
        </Link>
      </Group>
    </div>
  );
};
export default AuthTitle;
