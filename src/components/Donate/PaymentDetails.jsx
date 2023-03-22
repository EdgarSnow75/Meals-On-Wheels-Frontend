import { useLocation, useNavigate } from "react-router-dom";
import ToastProps from "../generic/ToastProps";
import DonationService from "../services/DonationService";

const PaymentDetails = (props) => {
  const { setToasts } = props;
  const { state } = useLocation();
  const navigate = useNavigate();

  const handleMaxLength = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  const handlePaymentDetails = (paymentDetails) => {
    // Mock checking if payment details are valid with delay
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const submitButton = e.target.submitButton;

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const cardNumber = e.target.cardNumber.value;
    const expiryMonth = e.target.expiryMonth.value;
    const expiryYear = e.target.expiryYear.value;
    const CVV = e.target.CVV.value;

    const paymentDetails = {
      firstName,
      lastName,
      cardNumber,
      expiryMonth,
      expiryYear,
      CVV,
    };

    submitButton.classList.add("loading");
    submitButton.disabled = true;
    const validate = await handlePaymentDetails(paymentDetails);

    if (!validate) {
      setToasts((prev) => [
        ...prev,
        new ToastProps({
          type: "error",
          message: "Invalid payment details! Please try again.",
        }),
      ]);

      submitButton.classList.remove("loading");
      submitButton.disabled = false;
      return;
    }

    const details = state;

    try {
      const response = await DonationService.newDonation(details);
      const receipt = response.receipt;

      const title = "Thank you for your donation!";

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          type: "success",
          message: response.msg,
        }),
      ]);

      submitButton.classList.remove("loading");
      submitButton.disabled = false;

      navigate("/thankyou", {
        state: { title, data: { receipt, paymentDetails }, type: "donation" },
      });
    } catch (error) {
      const err = error.response.data.msg;

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          type: "error",
          message: err,
        }),
      ]);

      submitButton.classList.remove("loading");
      submitButton.disabled = false;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full m-10 gap-2">
        <h1 className="text-4xl font-bold">Payment Details</h1>
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 rounded-md shadow-2xl p-10 w-1/3"
        >
          <div className="flex flex-col gap-1">
            <label className="font-bold">First name</label>
            <input
              type="text"
              name="firstName"
              className="input input-bordered"
              placeholder="Cardholder's first name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Last name</label>
            <input
              type="text"
              name="lastName"
              className="input input-bordered"
              placeholder="Cardholder's last name"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-bold">Card number</label>
            <input
              type="number"
              name="cardNumber"
              className="input input-bordered"
              placeholder="Card number"
              required
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-bold">Expiry date</label>
              <div className="flex gap-2 items-center">
                <input
                  type="number"
                  name="expiryMonth"
                  placeholder="MM"
                  className="input input-bordered w-[4rem]"
                  maxLength="2"
                  onChange={handleMaxLength}
                />
                <span className="text-2xl">/</span>
                <input
                  type="number"
                  name="expiryYear"
                  placeholder="YY"
                  className="input input-bordered w-[4rem]"
                  maxLength="2"
                  onChange={handleMaxLength}
                />
              </div>
            </div>
            <div className="divider divider-horizontal"></div>
            <div className="flex flex-col gap-1">
              <label className="font-bold">CVV</label>
              <input
                type="password"
                name="CVV"
                className="input input-bordered w-[6rem]"
                placeholder="CVV"
                maxLength="3"
                onChange={handleMaxLength}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            name="submitButton"
            className="btn btn-block mt-2"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentDetails;
