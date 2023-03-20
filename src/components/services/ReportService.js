import axios from "axios";

class ReportService {
  #API_URI = "http://localhost:3000/api/report";

  async donationReport() {
    const response = await axios.get(`${this.#API_URI}/donation`, {
      withCredentials: true,
    });

    return response.data;
  }

  async volunteerReport() {
    const response = await axios.get(`${this.#API_URI}/volunteer`, {
      withCredentials: true,
    });

    return response.data;
  }

  async beneficiaryReport() {
    const response = await axios.get(`${this.#API_URI}/beneficiary`, {
      withCredentials: true,
    });

    return response.data;
  }
}
export default new ReportService();
