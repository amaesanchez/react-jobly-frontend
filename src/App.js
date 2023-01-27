import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import userContext from "./userContext";
import jwt_decode from "jwt-decode";
import JoblyApi from "./api";

import RoutesList from "./RoutesList";
import NavBar from "./NavBar";
import Loading from "./Loading";

const LOCAL_STORAGE_TOKEN_KEY = "token";

/** Render Jobly application
 *
 * State
 * - currUser - {username, firstName, lastName, email, isAdmin, applications: []}
 * - currToken - string
 * - isLoading - boolean
 * - toggleApply - boolean
 *
 * App -> NavBar/RoutesList
 */

function App() {
  const [currUser, setCurrUser] = useState(null);
  const [currToken, setCurrToken] = useState(
    localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)
  );
  const [isLoading, setIsLoading] = useState(true);
  const [toggleApply, setToggleApply] = useState(false);

  async function handleLogin(data) {
    const token = await JoblyApi.loginUser(data);
    handleToken(token);
    setCurrToken(token);
  }

  async function handleRegister(data) {
    const token = await JoblyApi.registerUser(data);
    handleToken(token);
    setCurrToken(token);
  }

  function handleLogout() {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setCurrToken(null);
    setCurrUser(null);
  }

  async function handleUpdate(data) {
    const newUserInfo = await JoblyApi.updateUser(currUser.username, data);
    setCurrUser(prevInfo => ({...prevInfo, ...newUserInfo}))
  }

  async function handleApply(id) {
    await JoblyApi.applyToJob(currUser.username, id);
    setToggleApply(prev => !prev)
    console.log("currUser", currUser.applications)
  }

  function handleToken(token) {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    setIsLoading(true);
  }

  useEffect(
    function handleUser() {
      async function getUser() {
        JoblyApi.token = currToken;
        const { username } = jwt_decode(currToken);
        const user = await JoblyApi.getUser(username);
        setCurrUser(user);
        setIsLoading(false);
      }
      if (currToken !== null) {
        getUser();
      } else {
        setIsLoading(false);
      }
    },
    [currToken, toggleApply]
  );

  if (isLoading) return <Loading />;

  return (
    <div className="App">
      <userContext.Provider value={{ currUser, handleApply }}>
        <BrowserRouter>
          <NavBar handleLogout={handleLogout} />
          <RoutesList
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            handleUpdate={handleUpdate}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
