import axios from "axios";

class LocationService {
  #API_URI = "http://localhost:3000/api/location";

  async toCoordinates(address) {
    const response = await axios.get(
      `${this.#API_URI}/coordinates?address=${address}`
    );

    return response.data;
  }

  async toAddress(coordinates) {
    const { lat, long } = coordinates;

    const response = await axios.get(
      `${this.#API_URI}/address?lat=${lat}&long=${long}`
    );

    return response.data;
  }

  async getCoordinates(successHandler) {
    const options = {
      enableHighAccuracy: true,
    };

    navigator.geolocation.getCurrentPosition(
      successHandler,
      this.#errorHandler,
      options
    );
  }

  #errorHandler = (err) => {
    console.log(err);
  };
}

export default new LocationService();
