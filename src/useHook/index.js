import { useState, useEffect } from "react";
import * as api from "../api/index";
export const useGetAllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    api.getAllCars()
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((error) => setError(error.response));
  }, []);
  return [cars, loading, error];
};
