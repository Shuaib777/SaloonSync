import axios from "axios";

export const fetchSaloons = async (endpoint = "", params) => {
  try {
    const url = `https://saloonsync.onrender.com/saloons/${endpoint}`;
    const saloons = await axios.get(url, { params });
    return saloons;
  } catch (err) {
    return err;
  }
};
