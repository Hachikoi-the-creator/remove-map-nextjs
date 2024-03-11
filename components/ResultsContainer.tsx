"use client";

import { Suggestion } from "@/types/mapboxFetch";

export default function ResultsContainer({results}:{results: Suggestion[]}) {
    console.log("results: @child", results);
    
  return (
    <div>
      {results.map((res, index) => (
        <div key={index} className="border-blue-300 border m-1">
          <p>{res.place_formatted}</p>
          <p>{res.name}</p>
          {/* <p>{res.context.postcode.name}</p> */}
        </div>
      ))}
    </div>
  );
}
