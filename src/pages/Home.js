import React, { Fragment } from "react";
import { Alert } from "@material-ui/lab";
import { Grid } from "@material-ui/core";
import { SearchForm } from "../components/SearchForm";
import { useGetData } from "../hooks/useGetData";
import { WeatherDetail } from "../components/WeatherDetail";
import { WeeklyWeatherList } from "../components/WeeklyWeatherList";
import { Loading } from "../components/Loading";

export const Home = () => {
  const {
    error,
    messageError,
    search,
    dataDetail,
    dataWeek,
    loading,
    setError,
    setMessageError,
    setSearch,
    setIsQuery,
  } = useGetData();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchForm
          search={search}
          setSearch={setSearch}
          setIsQuery={setIsQuery}
          setError={setError}
          setMessageError={setMessageError}
        />
      </Grid>
      {error ? (
        <Grid item xs={12}>
          <Alert variant="outlined" severity="warning">
            {messageError}
          </Alert>
        </Grid>
      ) : loading ? (
        <Grid item xs={12}>
          <Loading />
        </Grid>
      ) : (
        <Fragment>
          <Grid item xs={12}>
            <WeatherDetail dataDetail={dataDetail} />
          </Grid>
          <Grid item xs={12}>
            <WeeklyWeatherList dataWeek={dataWeek} />
          </Grid>
        </Fragment>
      )}
    </Grid>
  );
};
