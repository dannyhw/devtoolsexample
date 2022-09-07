import { ComponentMeta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { ContactForm } from "./ContactForm";

export default {
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

const typingOptions = { delay: 50 };

export const Basic: StoryObj = {};

const getFormElements = (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  return {
    firstName: canvas.getByPlaceholderText("First name"),
    lastName: canvas.getByPlaceholderText("Last name"),
    email: canvas.getByPlaceholderText("Email"),
    phone: canvas.getByPlaceholderText("Mobile number"),
    button: canvas.getByRole("button", { name: "Submit" }),
    canvas: canvas,
  };
};

export const FilledInForm: StoryObj = {
  play: async ({ canvasElement }) => {
    const { button, email, firstName, lastName, phone } =
      getFormElements(canvasElement);

    await userEvent.type(firstName, "John", typingOptions);
    await userEvent.type(lastName, "Doe", typingOptions);
    await userEvent.type(email, "asb@asd.com", typingOptions);
    await userEvent.type(phone, "1234567890", typingOptions);
    expect(button).toBeEnabled();
  },
};

export const ErrorsInForm: StoryObj = {
  play: async ({ canvasElement, ...rest }) => {
    const { button, email, firstName, lastName, phone, canvas } =
      getFormElements(canvasElement);

    await userEvent.type(firstName, " ", typingOptions);
    await userEvent.clear(firstName);
    await userEvent.type(lastName, " ", typingOptions);
    await userEvent.clear(lastName);

    await userEvent.type(email, "tom", typingOptions);
    await userEvent.type(phone, "123", typingOptions);

    expect(button).toBeDisabled();

    await canvas.findByText("You must provide a name");
    await canvas.findByText("You must provide a last name");
    await canvas.findByText("The email provided is not valid");
    await canvas.findByText("The mobile number provided is too short");
  },
};
