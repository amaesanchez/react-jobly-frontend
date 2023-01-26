import { v4 as uuid } from "uuid"

/** Renders alert box with errors
 *
 * Props
 * - err - array of error messages
 *
 * LoginForm/SignupForm/Profile -> Errors
 */
function Errors({ err }) {
  console.log("errors", err)
  return (
    <div className="alert alert-danger">
      {err.map(e => <p key={uuid()}>{e}</p>)}
    </div>
  )
}

export default Errors;
