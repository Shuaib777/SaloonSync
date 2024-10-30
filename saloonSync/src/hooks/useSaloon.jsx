import { useEffect, useState } from "react";
import { fetchSaloons } from "../api/saloonsApi.js";

const useSaloon = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState();

  const fetch = (endpoint) => {
    fetchSaloons(endpoint)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErr(err);
      });
  };

  useEffect(() => {
    fetch(endpoint);
  }, [endpoint]);

  return { data, loading, err };
};

export default useSaloon;
