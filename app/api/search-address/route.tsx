import { NextResponse, NextRequest } from "next/server";

const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const searchText = searchParams.get("q");
  const responseLimit = searchParams.get("limit")||6;

  const res = await fetch(
    `https://api.mapbox.com/search/searchbox/v1/suggest?q=${searchText}&language=es&limit=${responseLimit}&country=MX&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363&access_token=${process.env.MAPBOX_ACCESS_TOKEN}`
  );

  const searchResult = await res.json();
  return NextResponse.json(searchResult.suggestions);
}
