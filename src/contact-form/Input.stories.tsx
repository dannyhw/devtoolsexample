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

export const Basic: StoryObj<FinalInputProps> = {};

export const Filled: StoryObj<FinalInputProps> = {
  args: {
    value: "John",
  },
};

export const Focused: StoryObj<FinalInputProps> = {
  args: {
    value: "John",
    autoFocus: true,
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
};
