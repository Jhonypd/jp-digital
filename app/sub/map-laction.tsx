/** @format */
'use client'
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";


const MapLocation = () => {
  const [locationLatitude, setLocationLatitude] = useState(0);
  const [locationLongitude, setLocationLongitude] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationLatitude(position.coords.latitude);
          setLocationLongitude(position.coords.longitude);
          setLoading(false);
        },
        (error) => {
          setError(error.message);
          setLoading(false);
        }
      );
    };
    if (navigator.geolocation) {
      getLocation();
    } else {
      setError("Geolocalização não suportada.");
      setLoading(false);
    }
  }, []);
  return (
    <>
      {error ? (
        <>{error}</>
      ) : (
        <>
          {loading ? (
            <Loader2 className="animate-spin m-auto" />
          ) : (
            <iframe
              id="gmap_canvas"
              frameBorder={0}
              style={{ width: "100%", height: "100%" }}
              src={`https://maps.google.com/maps?width=523&height=403&hl=en&q=${locationLatitude},${locationLongitude}&t=&z=11&ie=UTF8&iwloc=B&output=embed`}></iframe>
          )}
        </>
      )}
    </>
  );
};

export default MapLocation;
