import { useEffect, useState } from "react";
import LocationService from "../services/LocationService";
import PublicService from "../services/PublicService";
import PartnerCard from "./PartnerCard";

export default function NearbyPartners() {
  const [partners, setPartners] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const successhandler = async (pos) => {
          const { latitude, longitude } = pos.coords;

          const address = await LocationService.toAddress({
            lat: latitude,
            long: longitude,
          });

          setAddress(address[0].formatted);
          const response = await PublicService.nearbyPartners({
            lat: latitude,
            long: longitude,
          });

          setPartners(response);
          setLoading(false);
        };

        await LocationService.getCoordinates(successhandler);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="m-10">
      <h2 className="text-3xl font-bold">Nearby Partners</h2>
      <h3>
        <span className="mr-2 font-bold">Location:</span>
        <span className="italic">{address}</span>
      </h3>
      <div className="nearby-partners my-4 flex flex-row flex-wrap">
        {partners?.length ? (
          partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))
        ) : (
          <div>No partners found!</div>
        )}
      </div>
    </div>
  );
}
