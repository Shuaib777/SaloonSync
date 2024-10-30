import axios from "axios";

export const fetchSaloons = async (endpoint = "", params) => {
  try {
    const url = `/api/saloons/${endpoint}`;
    const saloons = await axios.get(url, { params });
    console.log(saloons);
    return saloons;
  } catch (err) {
    return err;
  }
};
