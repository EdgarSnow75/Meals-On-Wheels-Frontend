import { useState } from "react";

import donateimg from "images/Donate/donateimg.jpg";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const [anonymous, setAnonymous] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const donorName = e.target.donorName.value || null;
    const donationType = e.target.donationType.selectedOptions[0].value;
    const emailAddress = e.target.emailAddress.value;
    const amount = parseFloat(e.target.amount.value).toFixed(2);
    const paymentMethod = e.target.paymentMethod.selectedOptions[0].value;
    const comment = e.target.comment.value;

    const details = {
      donorName,
      donationType,
      emailAddress,
      amount,
      paymentMethod,
      comment,
    };

    navigate("/paymentDetails", { state: details });
  };

  const handleAnonymous = (e) => {
    setAnonymous(e.target.id === "yes");
  };

  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: `url(${donateimg})`,
        }}
      >
        <div className="hero-overlay min-h-[20rem] bg-opacity-60"></div>
        <div className="hero-content text-start text-neutral-content flex items-center justify-center">
          <div className="max-w-md">
            <h2 className="text-7xl font-bold text-center">Donate Now</h2>
          </div>
        </div>
      </div>
      <div className="max-w-screen flex justify-center items-center">
        <form
          onSubmit={submitHandler}
          className="flex flex-col rounded-md w-[35rem] shadow-md bg-accent my-10 gap-6 p-10"
        >
          <div className="flex flex-col w-full gap-2">
            <label className="">Would you like to donate anonymously?</label>
            <div className="flex gap-2">
              <input
                type="radio"
                id="yes"
                name="anonymously"
                checked={anonymous}
                onChange={handleAnonymous}
              />
              <label htmlFor="yes">Yes</label>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="no"
                name="anonymously"
                checked={!anonymous}
                onChange={handleAnonymous}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className={`${anonymous ? "hidden" : "flex"} flex-col`}>
            <label className="mr-4">Full name</label>
            <input
              type="text"
              name="donorName"
              className="w-full input"
              placeholder="Full name"
            />
          </div>
          <div className="flex flex-col">
            <label className="">Email address</label>
            <input
              type="email"
              name="emailAddress"
              className="w-full input"
              placeholder="Email address"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="">Donation amount</label>
            <input
              type="number"
              name="amount"
              className="w-full input"
              placeholder="Donation amount"
              step={0.01}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="">Donation type</label>
            <select
              name="donationType"
              className="select select-bordered w-full"
              defaultValue={""}
            >
              <option value="" disabled>
                Select donation type
              </option>
              <option value="one-time">One-time</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annually">Annually</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="">Payment method</label>
            <select
              name="paymentMethod"
              className="select select-bordered w-full"
              defaultValue={""}
            >
              <option value="" disabled>
                Select payment method
              </option>
              <option value="cash">Cash</option>
              <option value="check">Check</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="">Additional comment</label>
            <input
              type="text"
              name="comment"
              className="w-full input"
              placeholder="Additional comment"
            />
          </div>
          <div className="flex justify-center items-center">
            <button type="submit" className="btn btn-block btn-primary">
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
