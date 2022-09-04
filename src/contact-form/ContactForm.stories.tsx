import { ComponentMeta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import { ContactForm } from "./ContactForm";

export default {
  component: ContactForm,
} as ComponentMeta<typeof ContactForm>;

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

    userEvent.type(firstName, "John");
    userEvent.type(lastName, "Doe");
    userEvent.type(email, "asb@asd.com");
    userEvent.type(phone, "1234567890");
    expect(button).toBeEnabled();
  },
};

export const ErrorsInForm: StoryObj = {
  play: async ({ canvasElement, ...rest }) => {
    const { button, email, firstName, lastName, phone, canvas } =
      getFormElements(canvasElement);

    userEvent.type(firstName, " ");
    userEvent.clear(firstName);
    userEvent.type(lastName, " ");
    userEvent.clear(lastName);

    await userEvent.type(email, "tom", { delay: 50 });
    await userEvent.type(phone, "123", { delay: 50 });

    expect(button).toBeDisabled();

    await canvas.findByText("You must provide a name");
    await canvas.findByText("You must provide a last name");
    await canvas.findByText("The email provided is not valid");
    await canvas.findByText("The mobile number provided is too short");
  },
};
