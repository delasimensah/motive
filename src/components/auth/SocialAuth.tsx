import { FC } from "react";
import { Button, useMantineColorScheme } from "@mantine/core";
import Image from "next/image";

// icons
import google from "@assets/icons/auth/google.svg";
import facebook from "@assets/icons/auth/facebook.svg";

type SocialAuthProps = {};

const SocialAuth: FC<SocialAuthProps> = () => {
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row md:items-center">
      <Button
        className={` md:flex-1 border rounded-lg bg-transparent hover:bg-transparent ${
          dark ? "border-[#323745] text-white" : "border-[#E6E8EC] text-dark1"
        }`}
        size="md"
        leftIcon={<Image src={google} alt="" height={20} width={20} />}
      >
        Sign in with Google
      </Button>

      <Button
        className="md:flex-1 bg-[#4776D0] hover:bg-[#4776D0] text-white rounded-lg"
        size="md"
        leftIcon={<Image src={facebook} alt="" height={20} width={20} />}
      >
        Sign in with Facebook
      </Button>
    </div>
  );
};

export default SocialAuth;
