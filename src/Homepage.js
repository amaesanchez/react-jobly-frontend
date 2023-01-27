/** Render Jobly homepage
 *
 * Context
 * - currUser
 *
 * Routes -> Homepage
 */

import { useContext } from "react";
import userContext from "./userContext";

function Homepage() {
  const { currUser } = useContext(userContext);

  return (
    <div className="Homepage mt-5 me-5">
      {currUser ? (
        <h1 className="display-5">
          Welcome back to Jobly, {`${currUser.firstName} ${currUser.lastName}`}!
        </h1>
      ) : (
        <h1 className="display-5">Welcome to Jobly</h1>
      )}
      <b className="lead">we have all the jobs.</b>
    </div>
  );
}
export default Homepage;
