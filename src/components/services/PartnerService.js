import axios from "axios";

class PartnerService {
  #API_URI = "http://localhost:3000/api/partner";

  async signup(details) {
    const {
      businessName,
      emailAddress,
      address,
      contactNumber,
      daysAvailable,
      serviceType,
      password,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/signup`,
      {
        businessName,
        emailAddress,
        address,
        contactNumber,
        daysAvailable,
        serviceType,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async update(details) {
    const {
      businessName,
      emailAddress,
      address,
      contactNumber,
      daysAvailable,
      serviceType,
      password,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/update`,
      {
        businessName,
        emailAddress,
        address,
        contactNumber,
        daysAvailable,
        serviceType,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}
