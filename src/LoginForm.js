import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import JoblyApi from "./api";
import Errors from "./Errors";
import userContext from "./userContext";


/** Render login form and navigate to homepage on successful login
 * else show errors
 *
 * Props
 * - handleLogin() - from app
 *
 * State
 * - formData - {username, password}
 * - err - null or array of msgs
 *
 * RoutesList -> LoginForm -> Errors
 */
function LoginForm({ handleLogin }) {
  const user = useContext(userContext);

  const initialState = {
    username: "",
    password: ""
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
      await handleLogin(formData);
      console.log("Loginform", formData)
    } catch (err) {
      setErr(err)
    }
    setFormData(initialState);
  }

  if (user) return <Navigate to={"/"}/>

  return (
    <div className="LoginForm justify-content-center">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {err ? <Errors err={err} /> : <></>}
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
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default LoginForm;
