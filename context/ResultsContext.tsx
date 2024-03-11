"use client";
import { Suggestion } from "@/types/mapboxFetch";
import { createContext, useState, type ReactNode } from "react";

export type UserState = {
  results: Suggestion[];
};

export const initialState: UserState = {
  results: [],
};

// isolated comp so it's easier to declare context type
function useStoreData() {
  const store = useState(initialState);

  return store;
}

type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

export const StoreContext = createContext<UseStoreDataReturnType | null>(null);

export const ResultsProvider = ({ children }: { children: ReactNode }) => {
  const store = useStoreData();
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

// export default function userContext() {
//   const [store, setStore] = useContext(StoreContext)!;
//
//   return (
//     <div>userContext</div>
//   )
// }
