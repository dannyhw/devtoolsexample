import { ComponentMeta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "./Input";

export default {
  title: "components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic: StoryObj<InputProps> = {
  args: {},
};
