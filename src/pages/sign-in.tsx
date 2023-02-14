import {
  Text,
  Button,
  Title,
  Group,
  Divider,
  TextInput,
  PasswordInput,
  Checkbox,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// icons
import google from "@assets/icons/auth/google.svg";
import facebook from "@assets/icons/auth/facebook.svg";

const SignInPage = () => {
  const { push } = useRouter();
  return (
    <div className="space-y-5 auth-wrapper">
      <div>
        <Title size="h1" className="text-dark1">
          Welcome Back
        </Title>

        <Group spacing={4} className="text-lg">
          <Text className="text-dark4">Don&apos;t have an account? </Text>

          <Link href="/sign-up" className="text-purple">
            Sign Up
          </Link>
        </Group>
      </div>

      <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-3 md:flex-row md:items-center">
        <Button
          className="bg-[#F5F5F5] md:flex-1 hover:bg-[#F5F5F5] text-dark1 border border-[#E6E8EC] rounded-lg"
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

      <Divider
        my="xs"
        label="or"
        labelPosition="center"
        className="border border-[#E6E8]"
        classNames={{
          label: "text-lg text-[#777E91] font-medium",
        }}
        color="gray.3"
      />

      <div className="rounded-[10px] shadow-sm bg-white border border-[#F4F5F6] p-5 space-y-5">
        <TextInput
          label="Email"
          placeholder="example@email.com"
          classNames={{
            label: "auth-input-label",
            input: "auth-input",
          }}
        />

        <PasswordInput
          label="Password"
          placeholder="***************"
          classNames={{
            label: "auth-input-label",
            input: "auth-input",
            innerInput: "text-[#777E90]",
          }}
        />
      </div>

      <div className="flex justify-between item-center">
        <Checkbox
          size="xs"
          label="Remember me"
          classNames={{
            label: "text-[#B1B5C4]",
            input: "bg-[#F5F5F5] checked:bg-purple checked:border-purple",
          }}
        />

        <Link href="/sign-in" className="text-purple">
          Forgot your password?
        </Link>
      </div>

      <Button
        fullWidth
        className="text-base font-medium rounded-lg bg-purple hover:bg-purple"
        size="md"
        onClick={() => push("/")}
      >
        Sign In
      </Button>
    </div>
  );
};
export default SignInPage;
