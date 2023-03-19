import axios from "axios";

class UserService {
  #API_URI = "http://localhost:3000/api/user";
  #LOCAL_STORAGE_KEY = "refreshToken";

  async login(credentials) {
    const { emailAddress, password } = credentials;

    const response = await axios.post(
      `${this.#API_URI}/login`,
      {
        emailAddress,
        password,
      },
      {
        withCredentials: true,
      }
    );

    // Save the refresh token in local storage
    localStorage.setItem(this.#LOCAL_STORAGE_KEY, response.data.refreshToken);

    return response.data;
  }

  async logout() {
    const response = await axios.post(
      `${this.#API_URI}/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    // Remove the refresh token from local storage
    localStorage.removeItem(this.#LOCAL_STORAGE_KEY);

    return response.data;
  }

  async refresh(refreshToken) {
    const response = await axios.post(
      `${this.#API_URI}/refresh`,
      {
        refreshToken,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async getUserDetails() {
    const response = await axios.get(`${this.#API_URI}/details`, {
      withCredentials: true,
    });

    return response.data;
  }
}

export default new UserService();

    //     }
    // }
}