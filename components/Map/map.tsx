import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <div className="h-96 w-full ">
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          zoom={17}
          center={{ lat: -31.39913714614905, lng: -64.08427278684896 }}
        >
          <Marker
            position={{ lat: -31.39913714614905, lng: -64.08427278684896 }}
            options={{
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              },
            }}
          />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default Map;
