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
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
  register: UseFormRegister<SignupFeild> | undefined;
  handleSubmit: UseFormHandleSubmit<SignupFeild, SignupFeild> | undefined;
  reset: UseFormReset<SignupFeild> | undefined;
  errors: FieldErrors<SignupFeild> | undefined;
};

const useSignupState = (): SignupContextType => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
  };
};

export default useSignupState;
