import axios from "axios";

class CaregiverService {
  #API_URI = "http://localhost:3000/api/caregiver";

  async signup(details) {
    const {
      firstName,
      lastName,
      emailAddress,
      address,
      contactNumber,
      relationshipToMember,
      password,
      memberDetails,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/signup`,
      {
        firstName,
        lastName,
        emailAddress,
        address,
        contactNumber,
        relationshipToMember,
        password,
        memberDetails,
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
      relationshipToMember,
      password,
      memberDetails,
    } = details;

    const response = await axios.put(
      `${this.#API_URI}/update`,
      {
        firstName,
        lastName,
        emailAddress,
        address,
        contactNumber,
        relationshipToMember,
        password,
        memberDetails,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}

export default new CaregiverService();
