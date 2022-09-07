import { ComponentMeta, StoryObj } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

export const Basic: StoryObj<ButtonProps> = {
  args: {
    text: "Submit",
  },
};
