import axios from "axios";

const instance = axios.create({
  // baseURL: "https://hotels-reservation-system.herokuapp.com",
  baseURL: "http://localhost:2000",
});

export default instance;
