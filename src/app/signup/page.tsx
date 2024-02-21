"use client";

import SignupForm from "@/components/login/SignupForm";
import { InfoErrorProvider } from "@/contexts/infoErrorContext";
import InfoBox from "@/components/InfoBox";
import ErrorBox from "@/components/ErrorBox";
import { SignupProvider } from "@/contexts/signupContext";

export type Payload = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password: string;
};

export type SignupFeild = Payload & { cnfPassword: string };

export default function Signup() {
  return (
    <SignupProvider>
      <InfoErrorProvider>
        <InfoBox />
        <ErrorBox />
        <SignupForm />
      </InfoErrorProvider>
    </SignupProvider>
  );
}
