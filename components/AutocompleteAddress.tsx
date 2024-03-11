"use client";

import { StoreContext } from "@/context/ResultsContext";
import type { Suggestion } from "@/types/mapboxFetch";
import { useContext, useRef, useState } from "react";

export default function AutocompleteAddress({setResults}:{setResults: (results: Suggestion[]) => void}) {
  // const [store, setStore] = useContext(StoreContext)!;
  const [searchText, setSearchText] = useState("");
  const controllerRef = useRef<AbortController | null>(null);

  const fetchData = (searchText: string): Promise<Suggestion[] | string> => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // Cancel the previous request
    }

    controllerRef.current = new AbortController();
    const signal = controllerRef.current.signal;

    return new Promise((resolve, reject) => {
      fetch(`/api/search-address?q=${searchText}`, { signal })
        .then((data) => resolve(data.json()))
        .catch((error) => reject(error));
    });
  };

  const inputChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("value: ", value);

    setSearchText(value);
    if (value.length > 3) {
      const response = await fetchData(searchText);

      if (typeof response === "string") {
        return console.error(response);
      }

      // console.log("response: ", response);
      setResults(response);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="my-4 text-black w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out z-50"
        placeholder="Colonia, municipio o estado"
        onChange={(e) => inputChangeHandler(e)}
        value={searchText}
      />
    </div>
  );
}
