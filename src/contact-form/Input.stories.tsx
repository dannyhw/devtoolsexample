import { ComponentMeta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { FinalInputProps, Input } from "./Input";

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic: StoryObj<FinalInputProps> = {
  args: {
    errorMessage: "",
    type: "text",
    placeholder: "First name",
  },
  render: function RenderInput(args) {
    const { register } = useForm();
    return <Input {...args} {...register("firstName")} />;
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
