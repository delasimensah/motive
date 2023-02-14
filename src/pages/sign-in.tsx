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

// icons
import google from "@assets/icons/auth/google.svg";
import facebook from "@assets/icons/auth/facebook.svg";

const SignInPage = () => {
  return (
    <div className="space-y-5 auth-wrapper">
      <div>
        <Title size="h1" className="text-dark1">
          Welcome Back
        </Title>

        <Group spacing={4}>
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
      />

      <div className="rounded-[10px] bg-white border border-[#F4F5F6] p-5 space-y-5">
        <TextInput
          placeholder="Email"
          label="Email"
          classNames={{
            label: "auth-input-label",
            input: "auth-input",
          }}
        />

        <PasswordInput
          placeholder="Password"
          label="Password"
          classNames={{
            label: "auth-input-label",
            input: "auth-input",
          }}
        />
      </div>

      <div className="flex justify-between item-center">
        <Checkbox label="Remember me" />

        <Link href="/sign-up" className="text-purple">
          Forgot your password?
        </Link>
      </div>

      <Button
        fullWidth
        className="rounded-lg bg-purple hover:bg-purple"
        size="md"
      >
        Sign In
      </Button>
    </div>
  );
};
export default SignInPage;
