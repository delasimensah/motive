import { Checkbox } from "@mantine/core";
import Link from "next/link";
import {
  AuthTitle,
  SocialAuth,
  AuthDivider,
  AuthInput,
  FormWrapper,
  AuthButton,
} from "@components";

const SignInPage = () => {
  return (
    <div className="auth-wrapper">
      <AuthTitle
        title="welcome back"
        text={`Dont't have an account?`}
        link={{ text: "Sign up", path: "/sign-up" }}
      />

      <SocialAuth />

      <AuthDivider />

      <FormWrapper>
        <AuthInput label="Email" placeholder="" />
        <AuthInput label="Password" placeholder="" password />
      </FormWrapper>

      <div className="flex justify-between item-center">
        <Checkbox
          size="xs"
          label="Remember me"
          classNames={{
            label: "text-[#B1B5C4] text-sm",
            input: "bg-transparent checked:bg-purple checked:border-purple",
          }}
        />

        <Link href="/sign-in" className="text-sm text-purple">
          Forgot your password?
        </Link>
      </div>

      <AuthButton text="Sign In" onClick={() => {}} />
    </div>
  );
};
export default SignInPage;
