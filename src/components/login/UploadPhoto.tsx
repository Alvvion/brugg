"use client";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef } from "react";
import Image from "next/image";
import { useSignupContext } from "@/contexts/signupContext";

type UploadPhotoProps = {
  image?: string | ArrayBuffer;
  setImage: React.Dispatch<
    React.SetStateAction<string | undefined | ArrayBuffer>
  >;
};

const convertToBase64 = (file: File) =>
  new Promise<string | null | ArrayBuffer>((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });

function UpdatePhoto() {
  const { setConvImage: setImage } = useSignupContext();
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploading(true);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      const convertedImage = await convertToBase64(file);
      setImage(convertedImage!);
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
          ref={imageInputRef}
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
