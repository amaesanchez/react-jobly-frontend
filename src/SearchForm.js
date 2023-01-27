import { useState } from "react";

/** Render search form
 *
 * Props
 * - searchFor - function to handle formData after submission
 *
 * State
 * - formData - {search: ...}
 *
 * JobList/CompanyList -> SearchForm
 */

function SearchForm({ searchFor }) {
  const initialState = "";
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
    searchFor(formData.search.trim());
    setFormData(initialState);
  }

  return (
    <form className="SearchForm d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className="d-flex justify-content-center col-5">
        <input
          name="search"
          className="form-control"
          onChange={handleChange}
          value={formData.search}
          placeholder="Enter search term..."
        ></input>
        <button type="submit" className="SearchFormBtn btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
