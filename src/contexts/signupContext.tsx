"use client";

import useSignupState, { SignupContextType } from "@/hooks/useSignupState";
import contextFactory from "./contextFactory";

const { Provider, useContext } = contextFactory<SignupContextType>(
  {
    selectedImage: null,
    setSelectedImage: () => undefined,
    register: undefined,
    handleSubmit: undefined,
    reset: undefined,
    errors: undefined,
  },
  useSignupState
);

export { Provider as SignupProvider, useContext as useSignupContext };
