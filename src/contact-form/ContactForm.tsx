import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Input } from "./Input";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        errorMessage={errors.firstName?.message}
        type="text"
        placeholder="First name"
        {...register("firstName", {
          required: { value: true, message: "You must provide a name" },
          maxLength: { value: 80, message: "The name provided is too long" },
        })}
      />

      <Input
        errorMessage={errors.lastName?.message}
        type="text"
        placeholder="Last name"
        {...register("lastName", {
          required: { value: true, message: "You must provide a last name" },
          maxLength: {
            value: 100,
            message: "The last name provided is too long",
          },
        })}
      />

      <Input
        errorMessage={errors.email?.message}
        type="text"
        placeholder="Email"
        {...register("email", {
          required: { value: true, message: "You must provide an email" },
          pattern: {
            value: /^\S+@\S+$/i,
            message: "The email provided is not valid",
          },
        })}
      />

      <Input
        errorMessage={errors.phone?.message}
        type="tel"
        placeholder="Mobile number"
        {...register("phone", {
          required: {
            value: true,
            message: "You must provide a mobile number",
          },
          minLength: {
            value: 6,
            message: "The mobile number provided is too short",
          },
          maxLength: {
            value: 12,
            message: "The mobile number provided is too long",
          },
        })}
      />

      <Button
        type="submit"
        disabled={Object.values(errors).some((e) => !!e.message)}
        text="Submit"
      />
    </form>
  );
}
