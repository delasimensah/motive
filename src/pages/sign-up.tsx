import {
  AuthTitle,
  SocialAuth,
  AuthDivider,
  FormWrapper,
  AuthInput,
  AuthButton,
} from "@components";

const SignUpPage = () => {
  return (
    <div className="auth-wrapper">
      <AuthTitle
        title="let's get started"
        text={`Already have an account?`}
        link={{ text: "Sign in", path: "/sign-in" }}
      />

      <SocialAuth />

      <AuthDivider />

      <FormWrapper>
        <AuthInput label="First Name" placeholder="" />
        <AuthInput label="Last Name" placeholder="" />
        <AuthInput label="Email" placeholder="" />
        <AuthInput label="Password" placeholder="" password />
      </FormWrapper>

      <AuthButton text="Sign Up" onClick={() => {}} />
    </div>
  );
};
export default SignUpPage;
