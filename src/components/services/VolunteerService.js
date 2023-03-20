import axios from "axios";

class VolunteerService {
  #API_URI = "http://localhost:3000/api/volunteer";

  async signup(details) {
    const {
      firstName,
      lastName,
      emailAddress,
      address,
      contactNumber,
      daysAvailable,
      serviceProvided,
      password,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/signup`,
      {
        firstName,
        lastName,
        emailAddress,
        address,
        contactNumber,
        daysAvailable,
        serviceProvided,
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
      firstName,
      lastName,
      emailAddress,
      address,
      contactNumber,
      daysAvailable,
      serviceProvided,
      password,
    } = details;

    const response = await axios.put(
      `${this.#API_URI}/update`,
      {
        firstName,
        lastName,
        emailAddress,
        address,
        contactNumber,
        daysAvailable,
        serviceProvided,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}
export default new VolunteerService();
