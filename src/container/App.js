import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { Alert } from "@material-ui/lab";
import { useGetData } from "../hooks/useGetData";
import { WeatherDetail } from "../components/WeatherDetail";

export const App = () => {
  const {
    error,
    messageError,
    search,
    data,
    setError,
    setMessageError,
    setSearch,
    setIsQuery,
  } = useGetData();

  return (
    <Fragment>
      <Layout>
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
          {error && (
            <Grid item xs={12}>
              <Alert variant="outlined" severity="warning">
                {messageError}
              </Alert>
            </Grid>
          )}
          <Grid item xs={12}>
            <WeatherDetail data={data} />
          </Grid>
        </Grid>
      </Layout>
    </Fragment>
  );
};
