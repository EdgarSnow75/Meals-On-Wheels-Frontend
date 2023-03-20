import axios from "axios";

class AdminService {
  #API_URI = "http://localhost:3000/api/admin";

  async getUsers() {
    const response = await axios.get(`${this.#API_URI}/users`, {
      withCredentials: true,
    });

    return response.data;
  }

  async getUser(id) {
    const response = await axios.get(`${this.#API_URI}/user/${id}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async newUser(details, userType) {
    const response = await axios.post(
      `${this.#API_URI}/user?type=${userType}`,
      details,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async updateUser(details, userId) {
    const response = await axios.put(
      `${this.#API_URI}/user/${userId}`,
      details,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async deleteUser(userId) {
    const response = await axios.delete(`${this.#API_URI}/user/${userId}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async validate(userId) {
    const response = await axios.post(
      `${this.#API_URI}/user/validate/${userId}`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async invalidate(userId) {
    const response = await axios.post(
      `${this.#API_URI}/user/invalidate/${userId}`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async createSchedule(details) {
    const { weekNumber, days, dietaryRestrictions, partner } = details;

    const response = await axios.post(
      `${this.#API_URI}/schedule`,
      {
        weekNumber,
        days,
        dietaryRestrictions,
        partner,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async updateSchedule(details, scheduleId) {
    const { weekNumber, days, dietaryRestrictions, partner } = details;

    const response = await axios.put(
      `${this.#API_URI}/schedule/${scheduleId}`,
      {
        weekNumber,
        days,
        dietaryRestrictions,
        partner,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async deleteSchedule(scheduleId) {
    const response = await axios.delete(
      `${this.#API_URI}/schedule/${scheduleId}`,
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async getDeliveries() {
    const response = await axios.get(`${this.#API_URI}/deliveries`, {
      withCredentials: true,
    });

    return response.data;
  }

  async getDelivery(id) {
    const response = await axios.get(`${this.#API_URI}/delivery/${id}`, {
      withCredentials: true,
    });

    return response.data;
  }

  async newDelivery(details) {
    const {
      deliveryDate,
      dietaryRestrictions,
      deliveredFor,
      caregiver,
      deliveredBy,
      partner,
      comment,
    } = details;

    const response = await axios.post(
      `${this.#API_URI}/delivery`,
      {
        deliveryDate,
        dietaryRestrictions,
        deliveredFor,
        caregiver,
        deliveredBy,
        partner,
        comment,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async updateDelivery(details, deliveryId) {
    const {
      deliveryDate,
      dietaryRestrictions,
      deliveredFor,
      caregiver,
      deliveredBy,
      partner,
      comment,
    } = details;

    const response = await axios.put(
      `${this.#API_URI}/delivery/${deliveryId}`,
      {
        deliveryDate,
        dietaryRestrictions,
        deliveredFor,
        caregiver,
        deliveredBy,
        partner,
        comment,
      },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }

  async updateDeliveryStatus(deliveryId, status) {
    const response = await axios.put(
      `${this.#API_URI}/delivery/${deliveryId}/status`,
      { status },
      {
        withCredentials: true,
      }
    );

    return response.data;
  }
}
export default new AdminService();
