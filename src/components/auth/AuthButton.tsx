import { FC } from "react";
import { Button } from "@mantine/core";

type Props = {
  onClick: () => void;
  text: string;
};

const AuthButton: FC<Props> = ({ onClick, text }) => {
  return (
    <Button
      fullWidth
      className="text-base font-medium capitalize rounded-lg bg-purple hover:bg-purple"
      size="md"
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default AuthButton;
