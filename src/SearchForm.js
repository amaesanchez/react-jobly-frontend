import { useState } from "react";

/** Render search form
 *
 * Props
 * - getData - function to handle formData after submission
 *
 * State
 * - formData - {search: ...}
 *
 * JobList/CompanyList -> SearchForm
 */
function SearchForm({ getData }) {
  const initialState = {
    search: "",
  };
  const [formData, setFormData] = useState(initialState);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    getData(formData.search);
    setFormData(initialState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        onChange={handleChange}
        value={formData.search}
        placeholder="Enter search term..."
      ></input>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
