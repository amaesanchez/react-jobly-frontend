import { useContext, useState } from "react";
import Alerts from "./Alerts";
import userContext from "./userContext";

/** Renders profile page with pre-filled edit form
 *
 * Context
 * - currUser - obj
 *
 * State
 * - formData - {firstName, lastName, email}
 * - isUpdated - boolean
 * - err - array of error messages
 *
 * Props
 * - handleUpdate()
 *
 * RoutesList -> Profile
 */
function Profile({ handleUpdate }) {
  const { currUser } = useContext(userContext);

  const { firstName, lastName, email } = currUser;

  // why cant i access currUser.firstName when setting the state?
  const [formData, setFormData] = useState({ firstName, lastName, email });
  const [isUpdated, setIsUpdated] = useState(false);
  const [err, setErr] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await handleUpdate(formData);
      setIsUpdated(true);
    } catch (err) {
      setErr(err);
    }
  }

  return (
    <div className="ProfileForm userforms justify-content-center">
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {err && <Alerts err={err} />}
          {isUpdated && (
            <Alerts success={["Profile has been successfully updated."]} />
          )}
          <label htmlFor="username">Username</label>
          <input
            disabled
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={currUser.username}
          />
          <label htmlFor="firstName">First name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
          />
          <label htmlFor="lastName">Last name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
