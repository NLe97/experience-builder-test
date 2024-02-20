import React, { useState } from "react";
import {
  TextInput,
  Form,
  FormControl,
  Button,
  Textarea,
  Box,
} from "@contentful/f36-components";

type FormExampleProps = {
  className?: string;
};

const FormExample = ({ className }: FormExampleProps) => {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 1000);
  };

  return (
    <Form onSubmit={submitForm} className={className}>
      <FormControl>
        <FormControl.Label isRequired>Name</FormControl.Label>
        <TextInput />
        <FormControl.HelpText>
          Please enter your first name
        </FormControl.HelpText>
      </FormControl>

      <FormControl>
        <FormControl.Label>Description</FormControl.Label>
        <Box>
          <Textarea />
        </Box>
        <FormControl.HelpText>Tell me about yourself</FormControl.HelpText>
      </FormControl>
      <Button variant="primary" type="submit" isDisabled={submitted}>
        {submitted ? "Submitted" : "Click me to submit"}
      </Button>
    </Form>
  );
};

export default FormExample;
