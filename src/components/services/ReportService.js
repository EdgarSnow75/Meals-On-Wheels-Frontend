import axios from "axios";

class ReportService {
  #API_URI = "http://localhost:3000/api/report";

  async donationReport(startDate, endDate) {
    const query =
      startDate && endDate
        ? `?start=${startDate}&end=${endDate}`
        : startDate
        ? `?start=${startDate}`
        : endDate
        ? `?end=${endDate}`
        : "";
    const response = await axios.get(`${this.#API_URI}/donation${query}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async volunteerReport(startDate, endDate) {
    const query =
      startDate && endDate
        ? `?start=${startDate}&end=${endDate}`
        : startDate
        ? `?start=${startDate}`
        : endDate
        ? `?end=${endDate}`
        : "";
    const response = await axios.get(`${this.#API_URI}/volunteer${query}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async beneficiaryReport(startDate, endDate) {
    const query =
      startDate && endDate
        ? `?start=${startDate}&end=${endDate}`
        : startDate
        ? `?start=${startDate}`
        : endDate
        ? `?end=${endDate}`
        : "";
    const response = await axios.get(`${this.#API_URI}/beneficiary${query}`, {
      withCredentials: true,
    });

    return response.data;
  }
}
export default new ReportService();
