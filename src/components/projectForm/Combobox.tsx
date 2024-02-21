"use client";

import { useEffect, useState } from "react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import { StateType } from "./NewProjectForm";
import { UserSessionType } from "@/app/dashboard/layout";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Listbox({
  selectedPerson,
  setSelectedPerson,
  users,
}: {
  selectedPerson: UserSessionType[];
  setSelectedPerson: React.Dispatch<React.SetStateAction<UserSessionType[]>>;
  users: UserSessionType[];
}) {
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? users
      : users.filter((person) => {
          return person.email.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox
      as="div"
      value={selectedPerson}
      onChange={(v) => setSelectedPerson(v)}
      multiple
    >
      <Combobox.Label className="block text-sm font-medium leading-6 text-gray-900">
        Assigned to
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person._id}
                value={person}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex items-center">
                      <img
                        src={person?.image}
                        alt=""
                        className="h-6 w-6 flex-shrink-0 rounded-full"
                      />
                      <span
                        className={classNames(
                          "ml-3 truncate",
                          selected ? "font-semibold" : ""
                        )}
                      >
                        {person.firstName} {person.lastName}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 right-0 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
      {selectedPerson && selectedPerson?.length > 0 && (
        <ul className="grid grid-cols-2">
          {selectedPerson?.map((person) => (
            <li key={person?._id} className="">
              {" "}
              <button
                type="button"
                className="group flex items-center justify-between rounded-md border border-gray-300 text-left shadow-sm mt-2"
                onClick={() =>
                  setSelectedPerson((prev) =>
                    prev.filter((prevPerson) => prevPerson._id !== person?._id)
                  )
                }
              >
                <span className="flex min-w-0 flex-1 items-center ml-2">
                  <span className="block min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-gray-900">
                      {person.firstName} {person.lastName}
                    </span>
                  </span>
                </span>
                <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
                  <XMarkIcon
                    className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </Combobox>
  );
}
