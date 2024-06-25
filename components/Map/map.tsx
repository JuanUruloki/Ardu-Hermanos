'use client'
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          version: "weekly",
        });
        const { Map } = await loader.importLibrary('maps');
        const position = {
          lat: -31.39913714614905,
          lng: -64.08427278684896
        };

        // Map options
        const mapOptions: google.maps.MapOptions = {
          center: position,
          zoom: 18,
          mapId: 'ARDU_HNOS'
        };

        // Setup the map
        new Map(mapRef.current as HTMLDivElement, mapOptions);
      } catch (error) {
        console.error("Error loading Google Maps:", error);
      }
    };
    initMap();
  }, []); 

  return (
    <div className="h-96 w-full rounded-lg" ref={mapRef} />
  );
};

export default Map;