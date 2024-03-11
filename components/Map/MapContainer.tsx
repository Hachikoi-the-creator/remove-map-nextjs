import { Map } from "react-map-gl";

export default function MapContainer() {
  return (
    <div >
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        initialViewState={{
          longitude: -99.177254,
          latitude: 19.432241,
          zoom: 14,
        }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}
