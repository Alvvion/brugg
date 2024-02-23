"use client";

import Image from "next/image";
import logo from "@/assests/brugg-logo-1.png";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import UpdatePhoto from "@/components/login/UploadPhoto";
import { useSignupContext } from "@/contexts/signupContext";
import { SubmitHandler } from "react-hook-form";
import { Payload, SignupFeild } from "@/app/signup/page";
import { addUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

function SignupForm() {
  const {
    handleSubmit,
    convImage: image,
    setConvImage: setImage,
    register,
    errors,
    submitted,
    reset,
    setSubmitted,
  } = useSignupContext();

  const { push } = useRouter();

  const onSubmit: SubmitHandler<SignupFeild> = (data) => {
    const payload: Payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      role: data.role,
      password: data.password,
      image,
    };

    addUser(payload);
    push("/");
  };

  return (
    <form className="mx-14" onSubmit={handleSubmit?.(onSubmit)}>
      <div className="space-y-12">
        <Image
          src={logo}
          alt="Your Company"
          width={200}
          height={100}
          className="mt-10"
        />
        <div className="">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Profile
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <UpdatePhoto />
          </div>
        </div>
        <div>
          <div className="space-y-8 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                First name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="relative w-fit">
                  <input
                    type="text"
                    {...register?.("firstName")}
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                  {errors?.firstName?.message ? (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.firstName?.message}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Last name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="w-fit relative">
                  <input
                    type="text"
                    {...register?.("lastName")}
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                  {errors?.lastName?.message ? (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.lastName?.message}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Email address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="w-fit relative">
                  <input
                    id="email"
                    {...register?.("email")}
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-md sm:text-sm sm:leading-6"
                  />
                  {errors?.email?.message ? (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    </div>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.email?.message}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Role
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <select
                  id="role"
                  {...register?.("role")}
                  autoComplete="country-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  defaultValue=""
                >
                  <option disabled hidden value="">
                    Select
                  </option>
                  <option>Jointer</option>
                  <option>Project Manager</option>
                </select>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.role?.message}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="w-fit relative">
                  <input
                    type="password"
                    {...register?.("password")}
                    id="password"
                    autoComplete="passsword"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.password?.message}
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label
                htmlFor="cnf-password"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Confirm Password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <div className="w-fit relative">
                  <input
                    type="password"
                    {...register?.("cnfPassword")}
                    id="cnf-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-2 text-sm text-red-600" id="email-error">
                  {errors?.cnfPassword?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start gap-x-6">
        <button
          disabled={submitted}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create User
        </button>
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => reset?.()}
        >
          Reset
        </button>
      </div>
    </form>
  );
}
export default SignupForm;
