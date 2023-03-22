import { useLocation, useNavigate } from "react-router-dom";

export default function Thankyou() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const type = state.type;
  const title = state.title;
  let bodyElement;

  if (type === "donation") {
    const receipt = state.data.receipt;
    const { firstName, lastName, cardNumber, expiryMonth, expiryYear } =
      state.data.paymentDetails;

    bodyElement = (
      <div className="flex flex-col gap-2">
        <div>
          <p className="text-center text-2xl">
            Your donation of{" "}
            <span className="font-bold">${receipt.amount}</span> has been
            received!
          </p>
          <p className="text-center italic">
            Your receipt number is {receipt._id}.
          </p>
        </div>

        <div className="flex flex-col self-start border border-black p-4 rounded-2xl w-full  shadow-2xl gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-bold ">Donation details</p>
            <p className="flex">
              <span className="flex-1">Donation type:</span>{" "}
              <span className="font-bold italic">{receipt.donationType}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Donation amount:</span>{" "}
              <span className="font-bold italic">${receipt.amount}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Donation date:</span>{" "}
              <span className="font-bold italic">
                {receipt.createdAt?.slice(0, 10)}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Donor details</p>
            <p className="flex">
              <span className="flex-1">Donor name:</span>{" "}
              <span className="font-bold italic">
                {receipt.donorName || "anonymous"}
              </span>
            </p>
            <p className="flex">
              <span className="flex-1">Donor email:</span>{" "}
              <span className="font-bold italic">{receipt.emailAddress}</span>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Payment details</p>
            <p className="flex">
              <span className="flex-1">Cardholder name:</span>{" "}
              <span className="font-bold italic">
                {firstName} {lastName}
              </span>
            </p>
            <p className="flex">
              <span className="flex-1">Card number:</span>{" "}
              <span className="font-bold italic">{cardNumber}</span>
            </p>
            <p className="flex">
              <span className="flex-1">Expiry date:</span>{" "}
              <span className="font-bold italic">
                {expiryMonth}/{expiryYear}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  } else if (type === "signup") {
    const data = state.data;
    const name = data.firstName
      ? `${data.firstName} ${data.lastName}`
      : `${data.businessName}`;
    const email = data.emailAddress;

    bodyElement = (
      <div className="flex flex-col gap-2">
        <p className="text-center text-4xl">
          Thank you for signing up, {name}!
        </p>
        <p className="text-center text-2xl italic">
          Your account an email of {email} has been created and you can now log
          in.
        </p>
        <button onClick={() => navigate("/userLogin")}></button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <div className="flex flex-col items-center">{bodyElement}</div>
      </div>
    </div>
  );
}
