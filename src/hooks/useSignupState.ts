import { SignupFeild } from "@/app/signup/page";
import { SignupSchema } from "@/lib/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  useForm,
} from "react-hook-form";

export type SignupContextType = {
  selectedImage?: string | ArrayBuffer;
  setSelectedImage: React.Dispatch<
    React.SetStateAction<string | undefined | ArrayBuffer>
  >;
  submitted: boolean;
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  register: UseFormRegister<SignupFeild> | undefined;
  handleSubmit: UseFormHandleSubmit<SignupFeild, SignupFeild> | undefined;
  reset: UseFormReset<SignupFeild> | undefined;
  errors: FieldErrors<SignupFeild> | undefined;
  convImage?: string | ArrayBuffer;
  setConvImage: React.Dispatch<
    React.SetStateAction<string | undefined | ArrayBuffer>
  >;
};

const useSignupState = (): SignupContextType => {
  const [selectedImage, setSelectedImage] = useState<
    string | undefined | ArrayBuffer
  >();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [convImage, setConvImage] = useState<
    string | undefined | ArrayBuffer
  >();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignupFeild>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      password: "",
      cnfPassword: "",
    },
    resolver: yupResolver(SignupSchema),
  });
  return {
    selectedImage,
    setSelectedImage,
    register,
    handleSubmit,
    reset,
    errors,
    submitted,
    setSubmitted,
    convImage,
    setConvImage,
  };
};

export default useSignupState;
