"use client";

import Listbox from "./Combobox";
import { useRef } from "react";
import { useProjectContext } from "@/contexts/projectContext";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { useState } from "react";

export type FormFeild = {
  projectName: string;
  projectCode: string;
  startDate: string;
  deadline: string;
  location: string;
  jointer: {
    id: string;
  }[];
};

export type StateType = {
  id: number;
  name: string;
  imageUrl: string;
};

function NewProjectForm() {
  const cancelButtonRef = useRef(null);
  const [selectedPerson, setSelectedPerson] = useState<StateType[]>([]);
  const { setNewProjectOpen: setOpen } = useProjectContext();

  const { register, handleSubmit } = useForm<FormFeild>();

  const onSubmit: SubmitHandler<FormFeild> = (data) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Listbox
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
      />
      <div>
        <label
          htmlFor="projectName"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Project Name
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="projectName"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("projectName")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="projectCode"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Project Code
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="projectCode"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("projectCode")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="startDate"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Start Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            id="startDate"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("startDate")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="deadline"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Deadline
        </label>
        <div className="mt-2">
          <input
            type="date"
            id="deadline"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("deadline")}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Location
        </label>
        <div className="mt-2">
          <input
            type="text"
            id="location"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("location")}
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
        >
          Add Project
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
          onClick={() => setOpen(false)}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
export default NewProjectForm;
