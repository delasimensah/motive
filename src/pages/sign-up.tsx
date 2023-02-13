import { Text } from "@mantine/core";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="auth-wrapper">
      <Text>Let&apos;s Get Started</Text>
      <Link href="/sign-in">Sign In</Link>
    </div>
  );
};
export default SignUpPage;
