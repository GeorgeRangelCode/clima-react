import { useState, useEffect } from "react";
import {
  APP_ID,
  UNITS,
  LANG,
  BASE_URL,
  NOT_DATA,
  INTERNAL_ERROR,
} from "../constants";

export const useGetData = () => {
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [search, setSearch] = useState("");
  const [isQuery, setIsQuery] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const searhApi = async () => {
      if (isQuery) {
        try {
          const url = `${BASE_URL}?q=${search}&units=${UNITS}&appid=${APP_ID}&lang=${LANG}`;
          const response = await fetch(url);
          const result = await response.json();

          setData(result);
          setIsQuery(false);

          if (result.cod === "404") {
            setError(true);
            setMessageError(NOT_DATA);
          }
        } catch (error) {
          setIsQuery(false);
          setError(true);
          setMessageError(INTERNAL_ERROR);
        }
      }
    };
    searhApi();
  }, [isQuery]);

  return {
    error,
    messageError,
    search,
    isQuery,
    data,
    setError,
    setMessageError,
    setSearch,
    setIsQuery,
  };
};
