import axios from "axios";

class DonationService {
  #API_URI = "http://localhost:3000/api/donation";

  async newDonation(details) {
    const {
      donorName,
      donationType,
      emailAddress,
      amount,
      paymentMethod,
      comment,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/donate`,
      {
        donorName,
        donationType,
        emailAddress,
        amount,
        paymentMethod,
        comment,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}
