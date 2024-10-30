import axios from "axios";
import API_URL from "../config/apiConfig.js";

export const fetchSaloons = async (endpoint = "", params) => {
  try {
    const domain = process.env.NODE_ENV === "production" ? API_URL : "/api";
    const url = `${domain}/saloons/${endpoint}`;
    const saloons = await axios.get(url, { params });
    console.log(saloons);
    return saloons;
  } catch (err) {
    return err;
  }
};
