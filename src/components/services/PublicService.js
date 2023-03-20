import axios from "axios";

class PublicService {
  #API_URI = "http://localhost:3000/api/public";

  async getSchedules() {
    const response = await axios.get(`${this.#API_URI}/schedule`, {
      withCredentials: true,
    });

    return response.data;
  }

  async getSchedule(id) {
    const response = await axios.get(`${this.#API_URI}/schedule/${id}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async nearbyPartners(coordinates) {
    const { lat, long } = coordinates;

    const response = await axios.get(
      `${this.#API_URI}/nearby?lat=${lat}&long=${long}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}

export default new PublicService();
