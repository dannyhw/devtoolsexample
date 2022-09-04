import { ComponentMeta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { ContactForm } from "./ContactForm";

export default {
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

export const Basic: StoryObj = {};

export const FilledInForm: StoryObj = {
  play: async ({ canvasElement }) => {},
};

export const ErrorsInForm: StoryObj = {
  play: async ({ canvasElement }) => {},
};
