import axios from "axios";

class MemberService {
  #API_URI = "http://localhost:3000/api/member";

  async signup(details) {
    const {
      firstName,
      lastName,
      birthdate,
      emailAddress,
      address,
      contactNumber,
      dietaryRestrictions,
      foodAllergies,
      password,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/signup`,
      {
        firstName,
        lastName,
        birthdate,
        emailAddress,
        address,
        contactNumber,
        dietaryRestrictions,
        foodAllergies,
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
      birthdate,
      emailAddress,
      address,
      contactNumber,
      dietaryRestrictions,
      foodAllergies,
      password,
    } = details;

    const response = await axios.put(
      `${this.#API_URI}/update`,
      {
        firstName,
        lastName,
        birthdate,
        emailAddress,
        address,
        contactNumber,
        dietaryRestrictions,
        foodAllergies,
        password,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}
export default new MemberService();
