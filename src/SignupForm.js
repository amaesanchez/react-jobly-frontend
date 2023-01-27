import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import Alerts from "./Alerts";
import userContext from "./userContext";

/** Render signup form and navigate to homepage on successful sign up
 * else show errors
 *
 * Context
 * - currUser - obj with user info
 *
 * Props
 * - handleRegister() - from app
 *
 * State
 * - formData - {username, password, firstName, lastName, email}
 * - err - null or array of msgs
 *
 * RoutesList -> SignupForm -> Errors
 */
function SignupForm({ handleRegister }) {
  const { currUser } = useContext(userContext);

  // default inputs to remove late
  const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialState);
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
      await handleRegister(formData);
    } catch (err) {
      setErr(err);
    }
    setFormData(initialState);
  }

  if (currUser) return <Navigate to={"/"} />;

  return (
    <div className="SignupForm d-flex justify-content-center p-3">
      <div className="col-lg-4 col-12">
        <h1 className="form-header">Sign Up</h1>
        <form onSubmit={handleSubmit} className="bg-light rounded p-3">
          <div className="form-group">
            {err && <Alerts err={err} />}
            <label className="d-flex float-left m-2" htmlFor="username">
              <b>Username</b>
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
            />
            <label className="d-flex float-left m-2" htmlFor="password">
              <b>Password</b>
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
            />
            <label className="d-flex float-left m-2" htmlFor="firstName">
              <b>First name</b>
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={formData.firstName}
            />
            <label className="d-flex float-left m-2" htmlFor="lastName">
              <b>Last name</b>
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={formData.lastName}
            />
            <label className="d-flex float-left m-2" htmlFor="email">
              <b>Email</b>
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
