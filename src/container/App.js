import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { Layout } from "../components/Layout";
import { SearchForm } from "../components/SearchForm";
import { Alert } from "@material-ui/lab";
import { useGetData } from "../hooks/useGetData";

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

  console.log("App -> data", data);

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
          <Grid item xs={12}>
            {error && (
              <Alert variant="outlined" severity="warning">
                {messageError}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12}>
            <h1>Componente detalle del clima</h1>
          </Grid>
        </Grid>
      </Layout>
    </Fragment>
  );
};
