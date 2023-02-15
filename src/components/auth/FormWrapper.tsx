import { FC, ReactNode } from "react";
import { useMantineColorScheme } from "@mantine/core";

type FormWrapperProps = {
  children: ReactNode;
};

const FormWrapper: FC<FormWrapperProps> = ({ children }) => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div
      className={`rounded-[10px] shadow-sm border p-5 space-y-5 ${
        dark ? "bg-[#242731] border-transparent" : " bg-white border-[#F4F5F6]"
      }`}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
