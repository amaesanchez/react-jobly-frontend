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
    const { value } = evt.target;
    setFormData(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (formData.length === 0) {
      return;
    }
    searchFor(formData.trim());
    setFormData(initialState);
  }
  return (
    <form className="SearchForm d-flex justify-content-center" onSubmit={handleSubmit}>
      <div className="col-5 d-flex">
        <input
          name="search"
          className="form-control me-2"
          onChange={handleChange}
          value={formData}
          placeholder="Enter search term..."
        ></input>
        <button type="submit" className="SearchFormBtn btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
