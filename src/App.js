import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";
import JoblyApi from "./api";

import RoutesList from "./RoutesList";
import NavBar from "./NavBar";

/** Render Jobly application
 *
 * App -> NavBar
 */
function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(null);

  // TODO: add the login and signup here instead?

  async function handleLogin(data) {
    const token = await JoblyApi.loginUser(data);
    // maybe setCurrToken here and then useEffect for handleToken
    await handleToken(token)
  }

  async function handleRegister(data) {
    const token = await JoblyApi.registerUser(data);
    handleToken(token)
  }
  // bug here "invalid token specified" -- some issue with decoding
  // lag between currToken and token
  async function handleToken(token) {
    await setCurrToken(token)
    console.log("currToken", currToken)
    console.log("token", token)

    localStorage.setItem("token", token);
    try {
      const { username } = jwt_decode(token);
      console.log("username", username)

      // const user = await JoblyApi.getUser(username);
      // setCurrUser(user);
    } catch (err) {
      console.log("tokenerr", err)
    }
  }

  return (
    <div className="App">
      <userContext.Provider value={currUser}>
        <BrowserRouter>
          <NavBar />
          <RoutesList handleLogin={handleLogin} handleRegister={handleRegister} />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

// bug with showing navbar -- install react-router-dom & pass in <component />
export default App;
