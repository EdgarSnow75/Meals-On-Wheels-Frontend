export default function PartnerCard(props) {
  const { partner } = props;

  return (
    <div className="card w-96 drop-shadow-2xl bg-secondary text-white">
      <div className="card-body pb-2">
        <h2 className="card-title">{partner.businessName}</h2>
        <div className="badge badge-primary-content">
          {partner.serviceType[0].toUpperCase() + partner.serviceType.slice(1)}
        </div>
        <p>
          <span className="font-bold">Location:</span>{" "}
          {partner.address.fullAddress}
        </p>
        <p>
          <span className="font-bold">Contact number:</span>{" "}
          {partner.contactNumber}
        </p>
        <p>
          <span className="font-bold">Email address:</span>{" "}
          {partner.emailAddress}
        </p>
        <p>
          <span className="font-bold">Days available:</span>{" "}
          {partner.daysAvailable
            .map((day) => day[0].toUpperCase() + day.slice(1))
            .join(", ")}
        </p>
        <p className="self-end text-lg italic mt-2">
          {partner.distanceInKilometer}
          <span className="text-sm ml-1">km away</span>
        </p>
      </div>
    </div>
  );
}
