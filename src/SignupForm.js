
import { useContext, useState, Navigate } from "react";
import JoblyApi from "./api";
import Errors from "./Errors";
import userContext from "./userContext";


function SignupForm({ handleToken }) {
  const user = useContext(userContext);

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
    let resp;
    try {
      resp = await JoblyApi.registerUser(formData)
    } catch (err) {
      setErr(err)
    }
    handleToken(resp.token);
    setFormData(initialState);
  }

  if (user) return <Navigate to={"/"}/>

  return (
    <div className="SignupForm justify-content-center">
      <h1>Sign Up</h1>
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
