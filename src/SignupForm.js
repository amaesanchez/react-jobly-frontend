
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
    email: ""
  };
  const [formData, setFormData] = useState(initialState)
  const [err, setErr] = useState(null)


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
      setErr(err)
    }
    setFormData(initialState);
  }

  if (currUser) return <Navigate to={"/"}/>

  return (
    <div className="SignupForm userforms justify-content-center">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {err && <Alerts err={err} />}
          <label htmlFor="username">Username</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}/>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}/>
          <label htmlFor="firstName">First name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}/>
          <label htmlFor="lastName">Last name</label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}/>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignupForm;
