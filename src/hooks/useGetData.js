import { useState, useEffect } from "react";
import {
  APP_ID,
  UNITS,
  LANG,
  BASE_URL,
  NOT_DATA,
  INTERNAL_ERROR,
  WEATHER_ENDPOINT,
  ONECALL_ENDPOINT,
} from "../constants";

export const useGetData = () => {
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [search, setSearch] = useState("");
  const [isQuery, setIsQuery] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  const [dataWeek, setDataWeek] = useState(null);

  useEffect(() => {
    const searhApi = async () => {
      if (isQuery) {
        try {
          const urlDetail = `${BASE_URL}${WEATHER_ENDPOINT}?q=${search}&units=${UNITS}&appid=${APP_ID}&lang=${LANG}`;
          const responseDetail = await fetch(urlDetail);
          const resultDetail = await responseDetail.json();

          const { coord } = resultDetail;

          const urlWeek = `${BASE_URL}${ONECALL_ENDPOINT}?lat=${coord.lat}&lon=${coord.lon}&units=${UNITS}&exclude=current,minutely,hourly&appid=${APP_ID}&lang=${LANG}`;
          const responseWeek = await fetch(urlWeek);
          const resultWeek = await responseWeek.json();

          setDataDetail(resultDetail);
          resultWeek.daily.shift();
          setDataWeek(resultWeek.daily);
          setIsQuery(false);

          if (resultDetail.cod === "404") {
            setError(true);
            setMessageError(NOT_DATA);
            setDataDetail(null);
            setDataWeek(null);
          }
        } catch (error) {
          setIsQuery(false);
          setError(true);
          setMessageError(INTERNAL_ERROR);
          setDataDetail(null);
          setDataWeek(null);
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
    dataDetail,
    dataWeek,
    setError,
    setMessageError,
    setSearch,
    setIsQuery,
  };
};
