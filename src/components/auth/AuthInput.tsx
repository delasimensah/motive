import { FC } from "react";
import { TextInput, PasswordInput, useMantineColorScheme } from "@mantine/core";

type Props = {
  password?: boolean;
  placeholder: string;
  label: string;
};

const AuthInput: FC<Props> = ({ password, placeholder, label }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  const inputStyles = `border py-[19px] rounded-[8px] bg-transparent ${
    dark
      ? "border-[#323745]focus:border-[#323745] focus-within:border-[#323745] text-white1"
      : "border-[#B1B5C3]focus:border-[#B1B5C3] focus-within:border-[#B1B5C3] text-[#777E90]"
  }`;

  const labelStyles = `pb-1 ${dark ? "text-white" : "text-dark"}`;

  return (
    <>
      {password ? (
        <PasswordInput
          label={label}
          placeholder={placeholder}
          classNames={{
            label: labelStyles,
            input: inputStyles,
            innerInput: `${dark ? "text-white1" : "text-[#777E90]"}`,
          }}
        />
      ) : (
        <TextInput
          label={label}
          placeholder={placeholder}
          classNames={{
            label: labelStyles,
            input: inputStyles,
          }}
        />
      )}
    </>
  );
};

export default AuthInput;
