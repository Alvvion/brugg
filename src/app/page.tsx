import Image from "next/image";
import logo from "@/assests/brugg-logo-1.png";
import sideImage from "@/assests/background.jpg";
import Link from "next/link";
import LoginForm from "@/components/login/LoginForm";
import { LoginProvider } from "@/contexts/loginContext";

export default function Home() {
  return (
    <LoginProvider>
      <div className="flex min-h-full flex-1 w-full h-screen">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Image src={logo} alt="Your Company" width={200} height={100} />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Signup
                </Link>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <LoginForm />
              </div>

              <div className="mt-10">
                <div className="relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm font-medium leading-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={sideImage}
            alt="Background"
          />
        </div>
      </div>
    </LoginProvider>
  );
}
