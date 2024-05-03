import { useEffect, useState } from "react";
import { fetchSaloons } from "../api/saloonsApi.js";

const useSaloon = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  useEffect(() => {
    fetchSaloons(endpoint)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err);
      });
  }, []);

  return { data, loading, err };
};

export default useSaloon;
