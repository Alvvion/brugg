"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import { UseFormRegister } from "react-hook-form";
import type { SignupFeild } from "@/app/signup/page";
import Image from "next/image";

function UpdatePhoto({
  register,
  selectedImage,
  setSelectedImage,
}: {
  register: UseFormRegister<SignupFeild>;
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [uploading, setUploading] = useState(false);

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const { ref: registerRef, ...rest } = register("image");

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
    setUploading(false);
  };
  return (
    <div className="col-span-full">
      <label
        htmlFor="photo"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Photo
        <input
          type="file"
          hidden
          {...rest}
          ref={(e) => {
            registerRef(e);
            imageInputRef.current = e;
          }}
          onChange={handleOnChange}
        />
      </label>
      <div className="mt-2 flex items-center gap-x-3">
        {selectedImage ? (
          <div className="w-28 h-28 relative">
            <Image
              src={selectedImage}
              alt="Image"
              fill
              className="rounded-full border-4"
            />
          </div>
        ) : (
          <UserCircleIcon
            className="h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
        )}
        <button
          disabled={uploading}
          type="button"
          className={`rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
            uploading ? "opacity-30" : "opacity-100"
          }`}
          onClick={() => imageInputRef.current?.click()}
        >
          {uploading ? "Uploding..." : "Change"}
        </button>
      </div>
    </div>
  );
}
export default UpdatePhoto;
