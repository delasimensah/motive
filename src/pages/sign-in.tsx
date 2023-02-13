import { Text, Button } from "@mantine/core";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="auth-wrapper">
      <Text>Welcome Back</Text>
      <Link href="/sign-up">Sign Up</Link>
      <Button fullWidth className="bg-purple hover:bg-purple">
        Sign In
      </Button>
    </div>
  );
};
export default SignInPage;
