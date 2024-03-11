"use client"

import AutocompleteAddress from "@/components/AutocompleteAddress";
import MapContainer from "@/components/Map/MapContainer";
import ResultsContainer from "@/components/ResultsContainer";
import { Suggestion } from "@/types/mapboxFetch";
import { useState } from "react";

export default function Page() {
  const [results, setResults] = useState<Suggestion[]>([])
  

  return (
    <div >
      <AutocompleteAddress setResults={setResults} />
      <ResultsContainer results={results} />
      <MapContainer />
    </div>
  )
}