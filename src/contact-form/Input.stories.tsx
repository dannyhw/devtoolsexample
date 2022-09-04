import { ComponentMeta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FinalInputProps, Input } from "./Input";

export default {
  component: Input,
  args: {
    placeholder: "First name",
    type: "text",
    errorMessage: "",
  },
  render: function RenderInput(args) {
    const { register } = useForm();
    return <Input {...args} {...register("firstName")} />;
  },
} as ComponentMeta<typeof Input>;

export const Basic: StoryObj<FinalInputProps> = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QlTdSqq6LBwvl5ctqNDYgH/Example-Design?node-id=2%3A19",
    },
  },
};

export const Filled: StoryObj<FinalInputProps> = {
  args: {
    value: "John",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QlTdSqq6LBwvl5ctqNDYgH/Example-Design?node-id=2%3A21",
    },
  },
};

export const Focused: StoryObj<FinalInputProps> = {
  args: {
    value: "John",
    autoFocus: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QlTdSqq6LBwvl5ctqNDYgH/Example-Design?node-id=2%3A23",
    },
  },
};

export const Erorr: StoryObj<FinalInputProps> = {
  args: {
    errorMessage: "Error!!",
    type: "text",
    placeholder: "Last name",
  },
  render: function RenderInput(args) {
    const { register } = useForm();
    return <Input {...args} {...register("lastName")} />;
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/QlTdSqq6LBwvl5ctqNDYgH/Example-Design?node-id=6%3A46",
    },
  },
};
