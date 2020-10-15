import { EMPTY_FIELD } from "../constants";

export const useSearchForm = ({
  search,
  setSearch,
  setError,
  setMessageError,
  setIsQuery,
}) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      setError(true);
      setMessageError(EMPTY_FIELD);
      return;
    }

    setError(false);
    setIsQuery(true);
  };

  return {
    handleChange,
    handleSubmit,
  };
};
