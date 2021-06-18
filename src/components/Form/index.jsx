import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormControl,
  Input,
  FormErrorMessage,
  Button,
  Stack,
} from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";

import { jungleServices } from "../../services/jungleServices";
import "./index.scss";

export default function Form() {
  const schema = Yup.object().shape({
    name: Yup.string().required("Name is required!!!"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required!!!"),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const notify = (text) => toast.success(text);
  const notifyError = (text) => toast.error(text);

  async function handlerSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await jungleServices
      .postForm(data)
      .then(() => {
        notify("Form sent successfully!!!");
      })
      .catch((error) => {
        notifyError(`An error occurred while trying to send the form ${error}`);
      });
  }

  return (
    <form className="share-form" onSubmit={handleSubmit(handlerSubmit)}>
      <div className="input-block">
        <Stack
          spacing="1px"
          direction="row"
          flexWrap="wrap"
          align="center"
          justify="center"
        >
          <FormControl
            marginRight="0.5rem"
            width="fit-content"
            isInvalid={!!errors.name}
          >
            <Input
              id="name"
              placeholder="Your name"
              type="text"
              {...register("name")}
            />
            {!!errors.name && (
              <FormErrorMessage>{errors.email.name}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl
            marginRight="0.5rem"
            width="fit-content"
            isInvalid={!!errors.email}
          >
            <Input
              id="email"
              placeholder="Your email"
              type="email"
              {...register("email")}
            />
            {!!errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>

          <Button
            type="submit"
            colorScheme="green"
            isLoading={formState.isSubmitting}
          >
            Send
          </Button>
        </Stack>
      </div>
      <ToastContainer />
    </form>
  );
}
