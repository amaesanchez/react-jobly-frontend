import './App.css';
import { BrowserRouter } from 'react-router-dom';
import JoblyApi from "./api";
// cant import from outside of src?

import RoutesList from './RoutesList';
import NavBar from './NavBar';

/** Render Jobly application
 *
 * App -> NavBar
 */
function App() {
  console.log("debugAPI", JoblyApi.token)
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
          <RoutesList />
        </BrowserRouter>
    </div>
  );
}

// bug with showing navbar -- install react-router-dom & pass in <component />
export default App;
