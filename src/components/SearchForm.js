import React from "react";
import Search from "@material-ui/icons/Search";
import { useStylesSearchForm } from "../styles/StylesSearchForm";
import { useSearchForm } from "../hooks/useSearchForm";

export const SearchForm = ({
  search,
  setSearch,
  setIsQuery,
  setError,
  setMessageError,
}) => {
  const classes = useStylesSearchForm();

  const { handleChange, handleSubmit } = useSearchForm({
    search,
    setSearch,
    setError,
    setMessageError,
    setIsQuery,
  });

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
      <label className={classes.searchLabel} htmlFor="search">
        Búsqueda por ciudad:
      </label>
      <input
        className={classes.searchInput}
        type="text"
        placeholder="Buscar.."
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
      />
      <button className={classes.searchButton} type="submit">
        <Search />
      </button>
    </form>
  );
};
