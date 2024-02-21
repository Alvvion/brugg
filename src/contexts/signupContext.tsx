"use client";

import useSignupState, { SignupContextType } from "@/hooks/useSignupState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory<SignupContextType>(
  {
    selectedImage: undefined,
    setSelectedImage: () => undefined,
    register: undefined,
    handleSubmit: undefined,
    reset: undefined,
    errors: undefined,
    submitted: false,
    setSubmitted: () => undefined,
    convImage: undefined,
    setConvImage: () => undefined,
  },
  useSignupState
);

export { Provider as SignupProvider, useContext as useSignupContext };
