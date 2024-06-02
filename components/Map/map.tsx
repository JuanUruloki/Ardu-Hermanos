'use client'
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect } from "react";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const initMap = async () =>{
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      })
      const {Map} = await loader.importLibrary('maps')
      const position = {
        lat: -31.39913714614905,
        lng: -64.08427278684896
      }

      //map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 18,
        mapId: 'ARDU_HNOS'
      }

      //setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions)
    }
    initMap()
  })
  return (
    
      <div className="h-96 w-full " ref={mapRef}/>
  );
};

export default Map;
